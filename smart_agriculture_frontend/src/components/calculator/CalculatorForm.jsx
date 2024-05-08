import { useState } from "react";
import FertilizerTable from "./FertilizerTable";
import CropZillaFertilizerGateway from "../../gateway/CropZillaFertilizerGateway";
import ZillaGateway from "../../gateway/ZillaGateway";
import CropGateway from "../../gateway/CropGateway";

const CalculatorForm = () => {

    const [division, setDivision] = useState("")
    const [zilla, setZilla] = useState(0)
    const [cropCategory, setCropCategory] = useState("")
    const [crop, setCrop] = useState(0)
    const [measure, setMeasure] = useState("")

    const [divisionError, setDivisionError] = useState("")
    const [zillaError, setZillaError] = useState("")
    const [cropCategoryError, setCropCategoryError] = useState("")
    const [cropError, setCropError] = useState("")
    const [measureError, setMeasureError] = useState("")

    const [divisions, setDivisions] = useState([])
    const [zillas, setZillas] = useState([])
    const [cropCategories, setCropCategories] = useState([])
    const [crops, setCrops] = useState([])
    const [fertilizers, setFertilizers] = useState([]);
    const [zillaCropFertilizers, setZillaCropFertilizers] = useState([])

    //Gateway
    const { 
        fetchPost 
    } = CropZillaFertilizerGateway({ setZillaCropFertilizers });
    CropGateway({ setCrops })
    ZillaGateway({ setZillas })

    const onButtonClick = () => {
        // Set initial error values to empty
        // setNameError("")
        // setMobileError("")
        // setEmailError("")

        // // Check if the user has entered both fields correctly
        // if ("" === name) {
        //     setNameError("Please enter your name")
        //     return
        // }

        // if ("" === mobile) {
        //     setMobileError("Please enter your mobile")
        //     return
        // }

        // if ("" === email) {
        //     setEmailError("Please enter your email")
        //     return
        // }
        fetchPost({ zilla, crop, setFertilizers });
    }

    return (
        <>
            <div className={"mainContainer"}>
                <div className={"titleContainer"}>
                    <div>Calculator</div>
                </div>
                <br />

                <div className={"inputContainer"}>
                    <h5>Select zilla</h5>
                    <select
                        className={"inputBox"}
                        value={zilla}
                        onChange={ev => setZilla(ev.target.value)}>

                        <option value="">Select district</option>
                        {zillas.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{zillaError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <h5>Select crop</h5>
                    <select
                        className={"inputBox"}
                        value={crop}
                        onChange={ev => setCrop(ev.target.value)}>
                        
                        <option value="">Select crop</option>
                        {crops.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label className="errorLabel">{cropError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        value={measure}
                        placeholder="Enter measure here"
                        onChange={ev => setMeasure(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{measureError}</label>
                </div>
                <br />
                <div className={"inputContainer"}>
                    <input
                        className={"inputButton"}
                        type="button"
                        onClick={onButtonClick}
                        value={"Calculate"} />
                </div>
                <FertilizerTable fertilizers={fertilizers} measure={measure} />
            </div>
        </>
    );
}

export default CalculatorForm;

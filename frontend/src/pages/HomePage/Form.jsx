import React from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"

const Form = ()  => {
    const navigate = useNavigate()

    const scanningOptions = ["Gantry", "Crawler", "Auto", "Manual", "Arm"]

    const [name, setName] = useState("")
    const [scanningMode, setScanningMode] = useState(scanningOptions[0])
    const [xDimension, setXDimension] = useState(0)
    const [yDimension, setYDimension] = useState(0)
    const [scannerFrequency, setScannerFrequency] = useState(0)

    const updateInputName = (e) => setName(e.target.value)
    const updateScanningMode = (e) => setScanningMode(e.target.value)
    const updateInputXDimension = (e) => setXDimension(e.target.value)
    const updateInputYDimension = (e) => setYDimension(e.target.value)
    const updateInputScannerFrequency = (e) => {
        if (isNaN(e.target.value) == true) {
            setScannerFrequency(e.target.value)
        } else {
            setScannerFrequency(parseFloat(e.target.value).toFixed(1))
        }
    }
    
    // Submit form when user clicks on submit button 
    const submitForm = async (e) => {
        e.preventDefault()
        try {
            await axios.post("https://wavescan-backend.herokuapp.com/new", 
            {
                "project_name": name,
                "scanning_mode": scanningMode,
                "scan_dimensions_x": xDimension,
                "scan_dimensions_y": yDimension,
                "scanner_frequency":  scannerFrequency
            })
            .then(res => {navigate('/photo')})
        } catch (err) {
            navigate("/error", { state: err.response.data.error})
        }
    }
    return (
        <div id="landing-page">
          <form id="input-container">
            <label class="input-description" id="project-name-label">Project name</label>
            <input class="input-box" id="project-name" onChange={updateInputName}></input>
            <label class="input-description">Scanning mode</label>
            <select class="input-box" id="scanning-options" onChange={updateScanningMode}>
                {scanningOptions.map((option) => <option>{option}</option>)}
            </select>
            <label class="input-description">Scan dimensions (cm)</label>
            <div id="dimensions-container">
              <label class="input-description" id="x-dimension-input">x</label>
              <input class="input-box" id="x-dimension-input-box" onChange={updateInputXDimension}></input>
              <label class="input-description" id="y-dimension-input">y</label>
              <input class="input-box" id="y-dimension-input-box" onChange={updateInputYDimension}></input>
            </div>
            <label class="input-description">Scanner Frequency (GHz)</label>
            <input class="input-box" onChange={updateInputScannerFrequency}></input>
            <button id="submit-form-button" onClick={submitForm}>SCAN</button>
          </form>
        </div>
    )
}

export default Form
import React from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Photo.css"
import Header from "../../components/Header/Header"

const Photo = () => {
    const [image, setImage] = useState("")

    useEffect(() => {
        fetchData()
    }, [])
    
    // Get link of image 
    const fetchData = async () => {
    await axios.get("https://wavescan-backend.herokuapp.com/image")
        .then((res) => {
            console.log(res.data.image)
            setImage(() => res.data.image)
        })
        .catch((err) => {
            console.log(err)
        })
    };
    return (
        <div>
            <Header/>
            <div id="photo-page">
                <h1 className="photo-page-title">Scanned image</h1>
                <img id="img" alt="scanned photo" src={image}></img>
                <NavLink to="/" className="nav-link">Back</NavLink>
            </div>
        </div>
    )
}

export default Photo
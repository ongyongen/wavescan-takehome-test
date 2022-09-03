import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"

function Photo() {
    useEffect(() => {
        fetchData()
    }, [])

  const fetchData = async () => {
    await axios.get("https://wavescan-backend.herokuapp.com/image")

        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
      };
    return (
        <div>
            <h1>This is the photo page</h1>
        </div>
    )
}

export default Photo
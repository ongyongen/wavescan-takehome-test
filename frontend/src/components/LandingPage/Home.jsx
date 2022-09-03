import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom"

import Header from '../Common/Header';
import Form from './Form.jsx'
import './Home.css'

const Home = ()  => {
    return (
        <div id="landing-page">
          <Header />
          <Form />
        </div>
    )
}

export default Home
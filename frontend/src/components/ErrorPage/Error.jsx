import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import './Error.css'

const Error = () => {
    const { state } = useLocation();
    return (
        <div>
            <Header />
            <div id="error-container">
            <h1 id="error-title">Error!</h1>
            <p className="error-description">Your form has not been submitted due to some errors. Please correct these errors below and submit your form again:</p>
            {state.map((error) => <p className="error-description">{error}</p>)}
            <NavLink to='/' className="nav-link">Back</NavLink>
            </div>
        </div>
    )
}

export default Error
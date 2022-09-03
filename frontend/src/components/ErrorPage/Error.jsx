import React from 'react'
import { useLocation } from 'react-router-dom';


function Error() {
    const { state } = useLocation();
    console.log(state)
    return (
        <div>
            <h1>This is the error page</h1>
        </div>
    )
}

export default Error
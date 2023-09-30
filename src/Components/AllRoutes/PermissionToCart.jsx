
import React from 'react'
import { Navigate } from 'react-router-dom'

const PermissionToCart = ({ children }) => {

    const token = JSON.parse(sessionStorage.getItem("token"))

    return token ? children : <Navigate to={`/login`} />
}

export default PermissionToCart
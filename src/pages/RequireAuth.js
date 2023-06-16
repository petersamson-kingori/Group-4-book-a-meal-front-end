import React, {useEffect, useState} from 'react'
// import { useAuth } from './auth'
import {Navigate, useLocation} from 'react-router-dom'

export default function RequireAuth({children}){

    const location = useLocation()
    // const auth = useAuth()
    const [currentUser, setCurrentUser] = useState('');

    useEffect(()=>{
        fetch("https://food-api-ivzo.onrender.com/auth")
        .then(res =>{
          if(res.ok){
            res.json().then(user => setCurrentUser(user))
          }
        })
    },[])

    if(!currentUser){
        return <Navigate to='/login' state={{path: location.pathname}}/>
    }

    return children
}
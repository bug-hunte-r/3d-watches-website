import React from 'react'
import style from '../../style/AuthForms/AuthForms.css'
import media from '../../style/AuthForms/mediaAuthForms.css'
import { IoIosArrowBack } from "react-icons/io";

function Login() {
    return (
        <div className='container'>
            <div className='container-form'>
                <div className='container-title-and-back-icon-form'>
                    <IoIosArrowBack className='icon-back-form' />
                    <h1 className='title-form'>Login</h1>
                </div>
                <input type='text' placeholder='Username or Email' className='inputs-form' />
                <input type='password' placeholder='Password' className='inputs-form' />
                <button className='btn-form'>Login</button>
            </div>
        </div>
    )
}

export default Login
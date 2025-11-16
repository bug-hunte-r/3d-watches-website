import React from 'react'
import style from '../../style/AuthForms/AuthForms.css'
import media from '../../style/AuthForms/mediaAuthForms.css'

function Signup() {
    return (
        <div className='container'>
            <div className='container-form'>
                <h1 className='title-form'>Sign up</h1>
                <input type='text' placeholder='Username' className='inputs-form' />
                <input type='email' placeholder='Email' className='inputs-form' />
                <input type='pass' placeholder='Password' className='inputs-form' />
                <button className='btn-form'>Sign up</button>
            </div>
        </div>
    )
}

export default Signup
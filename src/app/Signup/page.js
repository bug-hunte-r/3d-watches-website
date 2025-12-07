"use client"
import React, { useState } from 'react'
import style from '../../style/AuthForms/AuthForms.css'
import media from '../../style/AuthForms/mediaAuthForms.css'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUpHandler = async () => {

        const userMap = {
            username,
            email,
            password
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userMap)
        })
        const data = await res.json()

        if (data.statusCode === 201) {
            const successSignup = () => toast.success(data.message);
            successSignup()
            setUsername('')
            setEmail('')
            setPassword('')
        }

        if (data.statusCode === 409) {
            const conflictSignup = () => toast.error(data.message);
            conflictSignup()
        }

        if (data.statusCode === 400) {
            const invalidSignup = () => toast.error(data.message);
            invalidSignup()
        }
    }

    return (
        <div className='container'>
            <div className='container-form'>
                <div className='container-title-and-back-icon-form'>
                    <Link href={'/'}><IoIosArrowBack className='icon-back-form' /></Link>
                    <h1 className='title-form'>Sign up</h1>
                </div>
                <input type='text' placeholder='Username' className='inputs-form' value={username} onChange={event => setUsername(event.target.value)} />
                <input type='email' placeholder='Email' className='inputs-form' value={email} onChange={event => setEmail(event.target.value)} />
                <input type='password' placeholder='Password' className='inputs-form' value={password} onChange={event => setPassword(event.target.value)} />
                <button className='btn-form' onClick={SignUpHandler}>Sign up</button>
                <p className='text-under-form'>Do you have an account? <Link className='link-under-form' href={'/Login'}>Login</Link></p>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Signup
"use client"
import React, { useState } from 'react'
import style from '../../style/AuthForms/AuthForms.css'
import media from '../../style/AuthForms/mediaAuthForms.css'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import DarkVeil from '@/anim/DarkVeil';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';

function Login() {

    const router = useRouter()

    const [identifire, setIdentifire] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async () => {

        const userLoginMap = {
            identifire,
            password
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: JSON.stringify(userLoginMap)
        })

        const data = await res.json()

        if (data?.loginnedUser?.message === 'User Logged in Successfully') {
            const successLogin = () => toast.success('You are logged in successfully');
            successLogin()
            setIdentifire('')
            setPassword('')
            // router.push('/')
        }

        if (!identifire || !identifire.trim() || !password || !password.trim()) {
            const notValidLogin = () => toast.error('Datas are not valid');
            notValidLogin()  
        }

        if (data.message === 'The username or emial is invalid') {
            const notFoundIdentiLogin = () => toast.error('The username or email is invalid');
            notFoundIdentiLogin()  
        }

        if (data.message === 'The password is invalid') {
            const notValidPassLogin = () => toast.error('The password is invalid');
            notValidPassLogin()  
        }
    }

    return (
        <>
            <div className="container-background">
                <DarkVeil />
            </div>
            <div className='container'>
                <div className='container-form login-from'>
                    <div className='container-title-and-back-icon-form'>
                        <Link href={'/'}><IoIosArrowBack className='icon-back-form' /></Link>
                        <h1 className='title-form'>Login</h1>
                    </div>
                    <input type='text' placeholder='Username or Email' className='inputs-form' value={identifire} onChange={event => setIdentifire(event.target.value)} />
                    <input type='password' placeholder='Password' className='inputs-form' value={password} onChange={event => setPassword(event.target.value)} />
                    <button className='btn-form' onClick={loginHandler}>Login</button>
                    <p className='text-under-form'>Dont have an account? <Link className='link-under-form' href={'/Signup'}>Signup</Link></p>
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
        </>

    )
}

export default Login
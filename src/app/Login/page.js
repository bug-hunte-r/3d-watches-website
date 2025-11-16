import React from 'react'
import style from '../../style/AuthForms/AuthForms.css'
import media from '../../style/AuthForms/mediaAuthForms.css'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import Silk from '@/anim/Silk';

function Login() {
    return (
        <>
            <div className='container-silk'>
                <Silk
                    speed={5}
                    scale={1}
                    color="#3300ff"
                    noiseIntensity={0}
                    rotation={0}
                />
            </div>
            <div className='container'>
                <div className='container-form login-from'>
                    <div className='container-title-and-back-icon-form'>
                        <Link href={'/'}><IoIosArrowBack className='icon-back-form' /></Link>
                        <h1 className='title-form'>Login</h1>
                    </div>
                    <input type='text' placeholder='Username or Email' className='inputs-form' />
                    <input type='password' placeholder='Password' className='inputs-form' />
                    <button className='btn-form'>Login</button>
                    <p className='text-under-form'>Dont have an account? <Link className='link-under-form' href={'/Signup'}>Signup</Link></p>
                </div>
            </div>
        </>
    )
}

export default Login
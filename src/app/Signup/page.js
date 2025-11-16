import React from 'react'
import style from '../../style/AuthForms/AuthForms.css'
import media from '../../style/AuthForms/mediaAuthForms.css'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import Silk from '@/anim/Silk';

function Signup() {
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
                <div className='container-form'>
                    <div className='container-title-and-back-icon-form'>
                        <Link href={'/'}><IoIosArrowBack className='icon-back-form' /></Link>
                        <h1 className='title-form'>Sign up</h1>
                    </div>
                    <input type='text' placeholder='Username' className='inputs-form' />
                    <input type='email' placeholder='Email' className='inputs-form' />
                    <input type='password' placeholder='Password' className='inputs-form' />
                    <button className='btn-form'>Sign up</button>
                    <p className='text-under-form'>Do you have an account? <Link className='link-under-form' href={'/Login'}>Login</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup
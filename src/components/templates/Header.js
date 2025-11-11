"use client"
import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { gsap } from "gsap"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import style from '../../../style/Header/header.css'
import media from '../../../style/Header/mediaHeader.css'
import Sound from '../modules/Sound'
import { ToastContainer, toast } from 'react-toastify';

function Header() {

  const notif = () => toast("Click on lines 5 times in a row and hold the left click at the end. Trust me");

  useEffect(() => {
    notif()

    gsap.from('.container-texts-header', {
      opacity: 0,
      duration: 1,
      y: -200,
    })
    
  }, [])

  return (
    <div className='container'>
      <Sound />
      <header className='header'>
        <div className='container-texts-header'>
          <h1 className='title-header'>The Perfect Moment Between Past And Future</h1>
          <button className='btn-header'>Buy Now</button>
        </div>
        {/* <div className='container-model' ref={watchDiv}></div> */}
      </header>
      <ToastContainer
        position="top-center"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        closeButton={false}
      />
    </div>
  )
}

export default Header
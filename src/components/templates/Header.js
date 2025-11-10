import React from 'react'
import * as THREE from "three"
import { gsap } from "gsap"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import style from '../../../style/Header/header.css'
import media from '../../../style/Header/mediaHeader.css'

function Header() {

  return (
    <div className='container'>
      <header className='header'>
        <div className='container-texts-header'>
          <h1 className='title-header'>The Perfect Moment Between Past And Future</h1>
          <button className='btn-header'>Buy Now</button>
        </div>
        <div className='container-model'></div>
      </header>
    </div>
  )
}

export default Header
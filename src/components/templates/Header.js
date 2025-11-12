"use client"
import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { gsap } from "gsap"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import style from '../../style/Header/header.css'
import media from '../../style/Header/mediaHeader.css'
import Nav from './Nav'

function Header() {

  const mountRef = useRef(null)
  const watchDiv = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {

    const container = watchDiv.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    camera.position.z = 4

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableDamping = true

    const light = new THREE.AmbientLight(0xffffff, 5)
    scene.add(light)

    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);
    loader.load('./models/watch-draco.glb', (gltf) => {
      const model = gltf.scene
      model.scale.set(55, 55, 55)
      model.rotation.x = 0.6

      model.traverse((child) => {

        if (child.name === 'wmnqxNpNCdRfDfA') {
          child.parent.remove(child)

        } else if (child.name === 'KZLnjqsQgoygPoi') {
          child.material.color.set('#8CE4FF')

        } else if (child.name === 'ARsYRDtRfaqRvjc') {
          child.material.color.set('#8CE4FF')

        } else if (child.name === 'slfmzSCVEebgEnx') {
          child.material.color.set('#8CE4FF')

        } else if (child.name === 'cUdLcKThVrgrQtG') {
          child.material.color.set('#8CE4FF')

        } else if (child.isMesh && child.name === "yFPJxjHCZaMTTSP" || child.isMesh && child.name === "hFurRdLJljkLFkB") {
          const mat = child.material;

          if (mat.map) {
            mat.map = null;
          }

          mat.color.set("#8CE4FF");
          mat.needsUpdate = true;
        }

      })

      scene.add(model)

      gsap.from('.container-model', {
        y: -100,
        duration: 1.5,
        opacity: 0,
      })

      gsap.from('.container-texts-header', {
        y: -100,
        duration: 1.5,
      })

      gsap.to('.container-texts-header', {
        duration: 1.5,
        opacity: 1
      })

    })

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <div className='container'>
      {/* <Nav /> */}
      <header className='header' ref={headerRef}>
        <div className='container-texts-header'>
          <h1 className='title-header'>The Perfect Moment Between Past And Future</h1>
          <button className='btn-header'>Buy Now</button>
        </div>
        <div className='container-model' ref={watchDiv}></div>
      </header>
    </div>
  )
}

export default Header
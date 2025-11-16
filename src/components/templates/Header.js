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
import ScrollTrigger from 'gsap/ScrollTrigger'

function Header() {

  const mountRef = useRef(null)
  const watchDiv = useRef(null)

  useEffect(() => {

    const container = watchDiv.current
    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    camera.position.z = 4
    camera.position.x = 0.1

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableDamping = true;

    const light = new THREE.AmbientLight(0xffffff, 5)
    scene.add(light)

    const loader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('./draco/');
    loader.setDRACOLoader(dracoLoader);
    loader.load('./models/watch-draco.glb', (gltf) => {
      const model = gltf.scene

      if (window.innerWidth > 900) {
        model.scale.set(55, 55, 55)
      }

      if (window.innerWidth < 900) {
        model.scale.set(52, 52, 52)
      }

      if (window.innerWidth < 850) {
        model.scale.set(50, 50, 50)
      }

      if (window.innerWidth < 790) {
        model.scale.set(47, 47, 47)
      }

      if (window.innerWidth < 740) {
        model.scale.set(46, 46, 46)
      }

      if (window.innerWidth <= 720) {
        model.scale.set(55, 55, 55)
      }

      model.rotation.x = 0.6

      model.traverse((child) => {

        if (child.name === 'wmnqxNpNCdRfDfA') {
          child.parent.remove(child)

        } else if (child.name === 'KZLnjqsQgoygPoi' || child.name === 'ARsYRDtRfaqRvjc' || child.name === 'slfmzSCVEebgEnx' || child.name === 'cUdLcKThVrgrQtG') {
          child.material.color.set('#ffffff')

        } else if (child.isMesh && child.name === "yFPJxjHCZaMTTSP" || child.isMesh && child.name === "hFurRdLJljkLFkB") {
          const mat = child.material;

          if (mat.map) {
            mat.map = null;
          }

          mat.color.set("#ffffff");
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

      gsap.registerPlugin(ScrollTrigger)

      const isMobile = window.innerWidth > 720
      const isMoreThan620 = window.innerHeight > 620
      const isMoreThan1299 = window.innerWidth > 1299
      const isMoreThan708 = window.innerHeight > 708
      const isMoreThan759 = window.innerHeight > 759
      const isMoreThan814 = window.innerHeight > 814
      const isMoreThan871 = window.innerHeight > 871
      const isMoreThan930 = window.innerHeight > 930

      let end;

      if (isMoreThan620) {
        end = "+=1250"
      }

      if (isMoreThan1299) {
        end = "+=1300"
      }

      if (isMoreThan708) {
        end = "+=1350"
      }

      if (isMoreThan759) {
        end = "+=1400"
      }

      if (isMoreThan814) {
        end = "+=1450"
      }

      if (isMoreThan871) {
        end = "+=1500"
      }

      if (isMoreThan930) {
        end = "+=1650"
      }

      if (isMobile) {
        controls.enableRotate = false
        ScrollTrigger.create({
          trigger: "#scroll-section",
          start: "top top",
          end,
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            let p = self.progress

            model.position.y = -1 * p * 0.4
            model.rotation.y = p * Math.PI * -0.2
          }
        })
      }
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
      <Nav />
      <header className='header' ref={mountRef}>
        <div className='container-texts-header'>
          <h1 className='title-header'>The Perfect Moment Between Past And Future</h1>
          <button className='btn-header'>Buy Now</button>
        </div>
        <div className='container-model' ref={watchDiv} id="scroll-section"></div>
      </header>
    </div>
  )
}

export default Header
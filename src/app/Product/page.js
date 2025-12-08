"use client"
import React, { useEffect, useRef } from 'react'
import style from '../../style/Product/Product.css'
import media from '../../style/Product/mediaProduct.css'
import Nav from '@/components/templates/Nav'
import Link from 'next/link'
import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import DarkVeil from '@/anim/DarkVeil'

function Product() {

  const mountRef = useRef(null)
  const watchDiv = useRef(null)

  useEffect(() => {

    if (!localStorage.getItem("pageReloaded")) {
      localStorage.setItem("pageReloaded", "true");
      window.location.reload();
    } else {
      localStorage.removeItem("pageReloaded");
    }

    const container = watchDiv.current
    const width = container?.clientWidth
    const height = container?.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    container?.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enableDamping = true;

    const light = new THREE.AmbientLight(0xffffff, 10)
    scene.add(light)

    const loader = new GLTFLoader();
    loader.load('./models/watch1.glb', gltf => {
      const model = gltf.scene;
      model.rotation.x = 0.6
      model.scale.set(63, 63, 63)

      scene.add(model);

      gsap.from('.container-model-product-detail', {
        y: -100,
        duration: 1.5,
        opacity: 0,
      })

      gsap.from('.container-product-details-texts', {
        y: -100,
        duration: 1.5,
      })

      gsap.to('.container-product-details-texts', {
        duration: 1.5,
        opacity: 1
      })

    });

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
  }, [])

  return (
    <>
      <div className="container-background">
        <DarkVeil />
      </div>
      <div className='container'>
        <Nav />
        <div className='container-product-detail' ref={mountRef}>
          <div className='container-product-details-texts'>
            <h1 className='title-product-detail'>Apple Watch</h1>
            <p className='desc-product-detail'>The strongest and biggest watch</p>
            <Link href={'/Cart'} className='btn-product-detail'>Add to cart</Link>
          </div>
          <div className='container-model-product-detail' ref={watchDiv}></div>
        </div>
      </div>
    </>
  )
}

export default Product
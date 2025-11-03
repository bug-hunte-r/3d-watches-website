"use client"
import Link from "next/link"
import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import media from '../../style/media.css'

export default function Home() {

  const mountRef = useRef(null)
  const watchDiv = useRef(null)

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

    const light = new THREE.AmbientLight(0xffffff, 2)
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
        }
      })

      scene.add(model)
    })

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

  }, [])

  return (
    <div className="container" ref={mountRef}>

      <div className="container-nav-links">
        <Link href="/" className="nav-links active-link">Home</Link>
        <Link href="/" className="nav-links">About</Link>
        <Link href="/" className="nav-links">Shop</Link>
        <Link href="/" className="nav-links">Contact</Link>
      </div>

      <header className="header">
        <div className="container-title-and-btn-header">
          <h1 className="title-header">The Perfect Moment Between Past And Future</h1>
          <button className="btn-header-buy-now">Buy Now</button>
        </div>

        <div className="container-model" ref={watchDiv}></div>
      </header>
    </div>
  )
}

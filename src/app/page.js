"use client"
import BestSeller from "@/components/templates/BestSeller";
import './globals.css'
import Counter from "@/components/templates/Counter";
import FloatingLines from "@/anim/FloatingLines";
import { useRef } from "react";
import Header from "@/components/templates/Header";

export default function Home() {
  const targetRef = useRef(null)

  return (
    <>
      <div className="background">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <FloatingLines
            enabledWaves={['middle']}
            lineCount={[20, 20, 20]}
            lineDistance={[80, 80, 80]}
            bendRadius={10}
            bendStrength={-0.5}
            interactive={false}
            parallax={false}
          />
        </div>
      </div>
      <Header targetRef={targetRef} />
      <BestSeller />
      <Counter ref={targetRef} />
    </>
  )
}
"use client"
import Header from "../components/templates/Header"
import BestSeller from "@/components/templates/BestSeller";
import './globals.css'
import Counter from "@/components/templates/Counter";
import FloatingLines from "@/anim/FloatingLines";

export default function Home() {

  return (
    <>
      <div className="background">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <FloatingLines
            enabledWaves={[ 'middle']}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[20, 20, 20]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[80, 80, 80]}
            bendRadius={10}
            bendStrength={-0.5}
            interactive={false}
            parallax={false}
          />
        </div>

      </div>
      <Header />
      <BestSeller />
      <Counter />
    </>
  )
}
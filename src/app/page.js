"use client"
import LiquidChrome from "@/anim/LiquidChrome ";
import Header from "../components/templates/Header"
import BestSeller from "@/components/templates/BestSeller";

export default function Home() {

  return (
    <>
      <div className="hyperSpeed">
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <LiquidChrome
            baseColor={[0, 0.6, 0.7]}
            speed={0.8}
            amplitude={0.1}
            interactive={false}
          />
        </div>
      </div>
      <Header />
      <BestSeller />
    </>
  )
}
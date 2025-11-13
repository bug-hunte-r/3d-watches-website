"use client"
import DarkVeil from "@/anim/DarkVeil";
import Header from "../components/templates/Header"
import BestSeller from "@/components/templates/BestSeller";

export default function Home() {

  return (
    <>

      <div className="hyperSpeed">
        <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
          <DarkVeil />
        </div>
      </div>

      <Header />
      <BestSeller />
    </>
  )
}
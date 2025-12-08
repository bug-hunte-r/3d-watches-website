"use client"
import BestSeller from "@/components/templates/BestSeller";
import './globals.css'
import Counter from "@/components/templates/Counter";
import { useRef } from "react";
import Header from "@/components/templates/Header";
import DarkVeil from "@/anim/DarkVeil";

export default function Home() {
  const targetRef = useRef(null)

  return (
    <>
      <div className="container-background">
        <DarkVeil />
      </div>
      <Header targetRef={targetRef} />
      <BestSeller />
      <Counter ref={targetRef} />
    </>
  )
}
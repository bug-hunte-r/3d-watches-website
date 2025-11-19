"use client"
import BestSeller from "@/components/templates/BestSeller";
import './globals.css'
import Counter from "@/components/templates/Counter";
import { useRef } from "react";
import Header from "@/components/templates/Header";

export default function Home() {
  const targetRef = useRef(null)

  return (
    <>
      <Header targetRef={targetRef} />
      <BestSeller />
      <Counter ref={targetRef} />
    </>
  )
}
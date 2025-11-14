"use client"
import Header from "../components/templates/Header"
import BestSeller from "@/components/templates/BestSeller";
import './globals.css'
import Counter from "@/components/templates/Counter";

export default function Home() {

  return (
    <>
      <Header />
      <BestSeller />
      <Counter />
    </>
  )
}
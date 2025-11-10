"use client"
import { useEffect } from "react";
import { error } from "three";

export default function Sound() {
    useEffect(() => {
        const play = () => {
            const audio = new Audio("./ef.mp3");
            // audio.loop = true
            audio.play()
        }

        window.addEventListener('click', play)
    }, []);

    return null;
}

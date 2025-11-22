"use client"
import React from 'react'
import style from '../../style/Admin/Admin.css'
import media from '../../style/Admin/mediaAdmin.css'
import Nav from '@/components/templates/Nav'
import { LuUsers } from "react-icons/lu";
import { LiaUserEditSolid } from "react-icons/lia";
import { PiWatchThin } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";

function Admin() {
  return (
    <div className='container'>
        <Nav />
        <div className='container-admin'>
            <div className='container-right-bar-admin'>
                <div className='items-right-bar-admin'>
                    <p className='title-right-bar-items'>Users</p>
                    <LuUsers className='icons-right-bar-items'/> 
                </div>
                <div className='items-right-bar-admin'>
                    <p className='title-right-bar-items'>Products</p>
                    <PiWatchThin className='icons-right-bar-items'/> 
                </div>
                <div className='items-right-bar-admin'>
                    <p className='title-right-bar-items'>Profile</p>
                    <LiaUserEditSolid className='icons-right-bar-items'/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin
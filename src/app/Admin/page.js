"use client"
import React from 'react'
import style from '../../style/Admin/Admin.css'
import media from '../../style/Admin/mediaAdmin.css'
import Nav from '@/components/templates/Nav'
import { FiUsers } from "react-icons/fi";
import { LiaUserEditSolid } from "react-icons/lia";
import { IoWatchOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LiaTicketAltSolid } from "react-icons/lia";
import { BiCommentDetail } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";

function Admin() {
    return (
        <div className='container'>
            <Nav />
            <div className='container-admin'>
                <div className='container-left-bar-admin'>
                    <h2 className='username-in-side-bar'>Welcome Shayan!</h2>
                    <div className='items-left-bar-admin items-left-bar-admin-active'>
                        <FiUsers className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Users</p>
                    </div>
                    <div className='items-left-bar-admin'>
                        <IoWatchOutline className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Products</p>
                    </div>
                    <div className='items-left-bar-admin'>
                        <LiaUserEditSolid className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Profile</p>
                    </div>
                    <div className='items-left-bar-admin'>
                        <MdOutlineShoppingBag className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Orders</p>
                    </div>
                    <div className='items-left-bar-admin'>
                        <LiaTicketAltSolid className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Tickets</p>
                    </div>
                    <div className='items-left-bar-admin'>
                        <BiCommentDetail className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Comments</p>
                    </div>
                    <div className='items-left-bar-admin bottom'>
                        <GoSignOut className='icons-left-bar-items' />
                        <p className='title-left-bar-items'>Sign out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
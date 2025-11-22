"use client"
import React, { useEffect, useState } from 'react'
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
import { CgMenuGridO } from "react-icons/cg";

function Admin() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)

    return (
        <div className='container'>
            <Nav />
            <CgMenuGridO className='icon-menu-side-bar' onClick={() => setIsSideBarOpen(true)} />
            <div className='container-admin'>
                <div className={`container-left-bar-admin ${isSideBarOpen ? 'opened-side-bar' : 'closed-side-bar'}`}>
                    <p className='close-btn-side-bar' onClick={() => setIsSideBarOpen(false)}>X</p>
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
                <div className="user-list-container">
                    <h1 className='title-user-list'>Users List</h1>
                    <div className='container-titles-user-info'>
                        <p className='titles-user-infos'>Name</p>
                        <p className='titles-user-infos'>Email</p>
                        <p className='titles-user-infos'>Role</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                    <div className='container-users-info'>
                        <p className='users-info'>Shayan</p>
                        <p className='users-info'>shayan@gmail.com</p>
                        <p className='users-info'>Admin</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
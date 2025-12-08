"use client"
import React, { useState } from 'react'
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
import ProductsCard from '@/components/modules/ProductsCard'
import DarkVeil from '@/anim/DarkVeil'

function Admin() {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isSideBarItemActive, setIsSideBarItemActive] = useState(1)

    const usersInfo = [
        { id: 1, name: 'Shayan', email: 'shayan@gmail.com', role: 'ADMIN' },
        { id: 2, name: 'Kian', email: 'Kian@gmail.com', role: 'USER' },
        { id: 3, name: 'MMd', email: 'MMd@gmail.com', role: 'USER' },
        { id: 4, name: 'Ahmad', email: 'ahmad@gmail.com', role: 'USER' },
        { id: 5, name: 'babak', email: 'babak@gmail.com', role: 'USER' },
        { id: 6, name: 'sara', email: 'sara@gmail.com', role: 'USER' },
        { id: 7, name: 'Mostafa', email: 'Mostafa@gmail.com', role: 'USER' },
        { id: 8, name: 'parham', email: 'parham@gmail.com', role: 'USER' },
        { id: 9, name: 'Arina', email: 'Arina@gmail.com', role: 'USER' },
        { id: 10, name: 'Mahmod', email: 'Mahmod@gmail.com', role: 'USER' },
    ]

    const sideBarItems = [
        { id: 1, text: 'Users', icon: FiUsers },
        { id: 2, text: 'Products', icon: IoWatchOutline },
        { id: 3, text: 'Tickets', icon: LiaTicketAltSolid },
        { id: 4, text: 'Comments', icon: BiCommentDetail },
        { id: 5, text: 'Sign out', icon: GoSignOut }
    ]

    return (
        <>
            <div className="container-background">
                <DarkVeil />
            </div>
            <div className='container'>
                <Nav />
                <CgMenuGridO className='icon-menu-side-bar' onClick={() => setIsSideBarOpen(true)} />
                <div className='container-admin'>
                    <div className={`container-left-bar-admin ${isSideBarOpen ? 'opened-side-bar' : 'closed-side-bar'}`}>
                        <p className='close-btn-side-bar' onClick={() => setIsSideBarOpen(false)}>X</p>
                        <h2 className='username-in-side-bar'>Welcome Shayan!</h2>
                        {sideBarItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <div className={`items-left-bar-admin ${isSideBarItemActive === item.id ? 'items-left-bar-admin-active' : ''} ${item.id === 6 ? 'bottom-item' : ''}`} key={item.id} onClick={() => { setIsSideBarItemActive(item.id); setIsSideBarOpen(false) }}>
                                    <Icon className='icons-left-bar-items' />
                                    <p className='title-left-bar-items'>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className={`user-list-container ${isSideBarItemActive != 1 ? 'onShow' : ''}`}>
                        <h1 className='title-user-list'>Users List</h1>
                        <div className='container-titles-user-info'>
                            <p className='titles-user-infos'>Name</p>
                            <p className='titles-user-infos'>Email</p>
                            <p className='titles-user-infos'>Role</p>
                        </div>
                        {usersInfo.map((info) => (
                            <div className='container-users-info' key={info.id}>
                                <p className='users-info'>{info.name}</p>
                                <p className='users-info'>{info.email}</p>
                                <p className='users-info'>{info.role}</p>
                            </div>
                        ))}
                    </div>

                    <div className={`container-products-in-shop ${isSideBarItemActive != 2 ? 'onShow' : ''}`}>
                        <h1 className='title-products-in-shop'>Products</h1>
                        <div className='container-products-in-shop-cards'>
                            <ProductsCard />
                        </div>
                        <div className='container-add-product'>
                            <h2 className='title-add-product'>Add Product</h2>
                            <input type='text' placeholder='Title' className='inputs-add-product' />
                            <input type='text' placeholder='Description' className='inputs-add-product' />
                            <input type='number' placeholder='Price' className='inputs-add-product' />
                            <input type='number' placeholder='Count' className='inputs-add-product' />
                            <div className='container-upload-section'>
                                <input type="file" id="fileInput" />
                                <label htmlFor="fileInput" className="custom-upload-file-btn">Upload 3D Model</label>
                                <input type="file" id="fileInputImg" />
                                <label htmlFor="fileInputImg" className="custom-upload-file-btn">Upload Image</label>
                            </div>
                            <button className='btn-add-product'>Add</button>
                        </div>
                    </div>

                    <div className={`container-tickets ${isSideBarItemActive != 3 ? 'onShow' : ''}`}>
                        <h2 className='title-tickets'>Coming Soon!</h2>
                    </div>

                    <div className={`container-comments ${isSideBarItemActive != 4 ? 'onShow' : ''}`}>
                        <h2 className='title-comments'>Coming Soon!</h2>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Admin
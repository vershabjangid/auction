import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import logo from "../images/Navy_and_Soft_Blue_Modern_Business_Card__YouTube_Icon__20240605_131831_0000-removebg-preview.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Login_Header() {
    let [introbanner, setintrobanner] = useState(0);
    setTimeout(() => {
        setintrobanner(1)
    }, 3000)
    return (
        <>
            <header className={introbanner == 1 ? "headeractive  border border-1 border-primary w-100 d-flex bg-black" : 'headerdeactive border border-1 border-primary w-100 d-flex bg-black'}>
                <div className='header_right  border border-1 border-secondary d-flex align-items-center'>
                    <img src={logo} alt="" />
                    <div className='text-white fs-3'>
                        Dynamic Sports Auction
                    </div>
                </div>

                <Col className='header_left border border-1 border-secondary d-flex justify-content-end align-items-center'>
                    <nav className=' nav  w-100 list-unstyled fs-5'>
                        <li>Today Auctions</li>
                        <li className=''>Upcoming Auctions</li>
                        <li className=''>Pricing</li>
                        <li className=''>About Company</li>
                    </nav>


                    <div className='menubar fs-3 mx-3'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </Col>
            </header>
        </>
    )
}

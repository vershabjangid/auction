import React from 'react'
import { Sidebar } from '../../common/Sidebar'
import { Header } from '../../common/Header'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import auction_logo from '../../images/sky.jpg'
export function ViewMyAuction() {
    return (
        <>
            <section className="main1 ">
                <Header />
                <Sidebar />

                <section className='top_options bg-white border '>
                    
                </section>
                <section className="view_my_auction_overflow w-100 overflow-y-scroll border border-1 border-success ">
                    <section className="view_my_auction_section w-100 px-1 px-lg-5">
                        <section className="view_my_auction_inner d-flex align-items-center flex-column ">
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

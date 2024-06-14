import React from 'react'
import { Col, Row } from "react-bootstrap";
import { Header } from '../../common/Header';
import { Sidebar } from '../../common/Sidebar';
import auction_logo from '../../images/sky.jpg'

export function ViewAuction() {
    return (
        <>
            <>
                <section className="main1 d-flex justify-content-between flex-column">
                    <Header />
                    <Sidebar />


                    <section className="view_auction_overflow w-100 overflow-y-scroll">
                        <section className="view_auction_section w-100 px-1 px-lg-5">
                            <section className="view_auction_inner d-flex align-items-center flex-column ">
                                <Row className=" col-12 col-lg-6 rounded m-0 py-2 bg-white justify-content-evenly text-center my-4">
                                    <div className='view_list_inner  col-12'>
                                        <div className='auction_logo p-1'>
                                            <img src={auction_logo} alt="" className='w-100 rounded-1 h-100' />
                                        </div>

                                        <div className='list_inner_content border d-flex justify-content-evenly me-1 fw-bold align-items-center'>
                                            <div>Tournament Name</div>
                                            <div>Players</div>
                                            <div>Teams</div>

                                        </div>
                                    </div>
                                </Row>

                                <Row className=" col-12 col-lg-6 rounded m-0 py-2 bg-white justify-content-evenly text-center my-4">
                                    <div className='view_list_inner  col-12'>
                                        <div className='auction_logo p-1'>
                                            <img src={auction_logo} alt="" className='w-100 rounded-1 h-100' />
                                        </div>

                                        <div className='list_inner_content border d-flex justify-content-evenly me-1 fw-bold align-items-center'>
                                            <div>Tournament Name</div>
                                            <div>Players</div>
                                            <div>Teams</div>

                                        </div>
                                    </div>
                                </Row>

                                

                            </section>
                        </section>
                    </section>
                </section>
            </>

        </>
    )
}

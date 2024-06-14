import React from 'react'
import { Col, Row } from "react-bootstrap";
import auction_logo from '../images/sky.jpg'
import { Header } from '../common/Header';
import { Sidebar } from '../common/Sidebar';
import { Link } from 'react-router-dom';

export function MyAuction() {
    return (
        <>

                    <section className="main1 d-flex justify-content-between flex-column">
                        <Header />
                        <Sidebar />


                        <section className="my_auction_overflow w-100 overflow-y-scroll">
                            <section className="my_auction_section w-100 px-1 px-lg-5">
                                <section className="my_auction_inner d-flex align-items-center flex-column ">
                                    <Link className='col-12 col-lg-6 text-black text-decoration-none' to={"/view-my-auction"}>
                                        <Row className=" col-12 rounded m-0 py-2 bg-white justify-content-evenly text-center my-4">
                                            <div className='my_list_inner  col-12'>
                                                <div className='auction_logo p-1'>
                                                    <img src={auction_logo} alt="" className='w-100 rounded-1 h-100' />
                                                </div>

                                                <div className='my_inner_content border d-flex justify-content-evenly me-1 fw-bold align-items-center'>
                                                    <div>Tournament Name</div>
                                                    <div>Players</div>
                                                    <div>Teams</div>
                                                </div>
                                            </div>
                                        </Row>
                                    </Link>


                                </section>
                            </section>
                        </section>
                    </section>
                </>

    )
}

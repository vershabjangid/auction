import React from 'react'
import { Sidebar } from '../../common/Sidebar'
import { Header } from '../../common/Header'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import auction_logo from '../../images/sky.jpg'
import { More_option } from '../../common/More_option'
export function ViewMyAuction() {
    return (
        <>
            <section className="main1 ">
                <Header />
                <Sidebar />

                <section className='top_options bg-black fw-bolder fs-5 '>
                <section className='d-flex justify-content-between col-12 col-lg-6'>
                    <div className='col-3 border-bottom border-3 py-2 text-center text-white'>
                        <Link to={"/view-my-auction"} className='text-decoration-none text-white'>
                            Detail
                        </Link>
                    </div>
                    <div className='col-3 py-2 text-center text-white'>
                        <Link to={"/team"} className='text-decoration-none text-white'>
                            Team
                        </Link>
                    </div>

                    <div className='col-3 py-2 text-center text-white'>
                        <Link to={"/team"} className='text-decoration-none text-white'>
                            Player
                        </Link>
                    </div>

                    <div className='col-3 py-2 text-center text-white'>
                        <Link to={"/team"} className='text-decoration-none text-white'>
                            Tie
                        </Link>
                    </div>
                </section>
            </section>

                <section className='inner_detail bg-white'>
                    <section className='view_details_main d-flex justify-content-between align-items-center col-12 col-lg-8 border border-1 border-success px-2 py-2' >
                        <section className='col-12 d-flex align-items-center justify-content-center flex-lg-column justify-content-between'>
                            <section className='details_logo'>
                                <img src={auction_logo} alt="" className='w-100 h-100' />
                            </section>
                            <section className='auction_details d-flex flex-column flex-lg-row'>
                                <div className='col-6 auction_details_left d-flex justify-content-between flex-column'>
                                    <div className=''>
                                        <h5 className='text-black'>
                                            Auction Name  : <span>jspl</span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 className='text-black'>
                                            Points Per Team  : <span>jspl</span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 className='text-black'>
                                            Minimum Bid  : <span>jspl</span>
                                        </h5>
                                    </div>

                                </div>

                                <div className='col-6 auction_details_right d-flex justify-content-between flex-column'>
                                    <div>
                                        <h5 className='text-black'>
                                            Bid Increased  : <span>jspl</span>
                                        </h5>
                                    </div>
                                    <div>
                                        <h5 className='text-black'>
                                            Player Per Team  : <span>jspl</span>
                                        </h5>
                                    </div>

                                    <div>
                                        <h5 className='text-black'>
                                            Total Team  : <span>jspl</span>
                                        </h5>
                                    </div>

                                </div>

                            </section>
                        </section>


                    </section>
                </section>
            </section>

            <button className='start_auction_btn'>
                Start Auction
            </button>
        </>
    )
}

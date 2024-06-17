import React from 'react'
import { Header } from '../../common/Header'
import { Sidebar } from '../../common/Sidebar'
import { More_option } from '../../common/More_option'
import { Link } from 'react-router-dom'
import team from "../../images/user-sign-icon-front-side-with-white-background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap'

export function Team() {
    return (
        <>


<section className='form_modal'>
    <section className='modal_inner border col-12 col-lg-7 p-2 bg-white rounded'>
        <Row className=''>
            
        </Row>
    </section>
</section>

            <section className="main1 ">
                <Header />
                <Sidebar />

                <section className='top_options bg-black fw-bolder fs-5 '>
                    <section className='d-flex justify-content-between col-12 col-lg-6'>
                        <div className='col-3 border-3 py-2 text-center text-white'>
                            <Link to={"/view-my-auction"} className='text-decoration-none text-white'>
                                Detail
                            </Link>
                        </div>
                        <div className='col-3 border-bottom border-3 py-2 text-center text-white'>
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


                <section className='view_team_section border border-1 d-flex justify-content-center'>
                    <section className='border border-1 border-danger col-12 col-lg-7  '>
                        <section className=' d-flex justify-content-evenly py-4'>
                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-50' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>


                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-50' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>
                        </section>


                        <section className=' d-flex justify-content-evenly py-4'>
                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-50' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>


                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-50' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>
                        </section>

                        <section className=' d-flex justify-content-evenly py-4'>
                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-50' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>


                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-50' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>
                        </section>
                       
                    </section>
                </section>


            </section>


            <section className='add_more_btn'>
                <FontAwesomeIcon icon={faPlus}/>
            </section>
        </>
    )
}

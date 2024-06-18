import React, { useEffect, useState } from 'react'
import { Header } from '../../common/Header'
import { Sidebar } from '../../common/Sidebar'
import { More_option } from '../../common/More_option'
import { Link } from 'react-router-dom'
import team from "../../images/user-sign-icon-front-side-with-white-background.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCancel, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Row } from 'react-bootstrap'
import axios from 'axios'

export function Team() {
    let [modal, setModal] = useState(false);
    let [data, setData] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {setData(res.data)})
        .catch(err => console.log(err))
    })

    console.log(data)
    return (
        <>


            {
                modal ? <section className='form_modal'>
                    <FontAwesomeIcon icon={faXmark} className=' position-absolute end-0 text-white top-0 fs-3 m-5' onClick={() => setModal(false)} />
                    <section className='modal_inner border col-11 col-lg-7 p-2 bg-white rounded '>
                        <Row className='py-3 d-flex justify-content-between align-items-center flex-column m-0 overflow-y-scroll'>
                            <form className='d-flex flex-column py-2'>
                                <label className='fs-4'>
                                    ADD Team Logo
                                </label>
                                <input type="file" className='border border-1 border-secondary rounded px-3 py-1 text-black' />
                            </form>


                            <form className='d-flex flex-column py-2'>
                                <label className='fs-4'>
                                    Team Name
                                </label>
                                <input type="text" className='add_team_input border border-1 border-secondary rounded px-3 py-1 text-black' placeholder='Enter Team Name' />
                            </form>

                            <form className='d-flex flex-column py-2'>
                                <label className='fs-4'>
                                    Team Owner Name
                                </label>
                                <input type="text" className='add_team_input border border-1 border-secondary rounded px-3 py-1 text-black' placeholder='Enter Team Owner Name' />
                            </form>

                            <form className='d-flex flex-column py-2'>
                                <label className='fs-4'>
                                    Team Owner Photo
                                </label>
                                <input type="file" className='add_team_input border border-1 border-secondary rounded px-3 py-1 text-black' placeholder='Enter Team Name' />
                            </form>

                            <form className='d-flex flex-column py-2'>
                                <label className='fs-4'>
                                    Team Co-Owner Name
                                </label>
                                <input type="text" className='add_team_input border border-1 border-secondary rounded px-3 py-1 text-black' placeholder='Enter Team Owner Name' />
                            </form>

                            <form className='d-flex flex-column py-2'>
                                <label className='fs-4'>
                                    Team Co-Owner Photo
                                </label>
                                <input type="file" className='add_team_input border border-1 border-secondary rounded px-3 py-1 text-black' placeholder='Enter Team Name' />
                            </form>


                            <div className='w-100  mt-4 py-2 d-flex justify-content-center'>
                                <button className='col-11 col-lg-3 border-0 py-2 rounded bg-danger text-white fw-bold'>
                                    Save
                                </button>
                            </div>
                        </Row>
                    </section>
                </section> : null
            }

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
                                    <img src={team} alt="" className='w-100 w-lg-50 h-75 h-lg-100' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>


                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-100 w-lg-50 h-75 h-lg-100' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>
                        </section>


                        <section className=' d-flex justify-content-evenly py-4'>
                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-100 w-lg-50 h-75 h-lg-100' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>


                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-100 w-lg-50 h-75 h-lg-100' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>
                        </section>

                        <section className=' d-flex justify-content-evenly py-4'>
                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-100 w-lg-50 h-75 h-lg-100' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>


                            <section className='team_card border col-5'>
                                <div className=' col-12 view_logo border d-flex justify-content-center align-items-center'>
                                    <img src={team} alt="" className='w-100 w-lg-50 h-75 h-lg-100' />
                                </div>
                                <div className='col-12 view_name_team d-flex justify-content-center align-items-center'>
                                    Team Name
                                </div>
                            </section>
                        </section>

                    </section>
                </section>


            </section>


            <section className='add_more_btn' onClick={() => setModal(true)}>
                <FontAwesomeIcon icon={faPlus} />
            </section>
        </>
    )
}

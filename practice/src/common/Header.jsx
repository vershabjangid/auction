import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <>
            <section className='header w-100 py-3 d-flex justify-content-center'>
                <section className='header_inner col-11 d-flex justify-content-between'>
                    <section className=' col-6 d-flex align-items-center'>
                        <button class="btn text-white fs-3 d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </section>
                    <section className=' col-6 pt-3 d-flex justify-content-end'>
                        <ul className='text-white list-unstyled col-11 col-lg-10 col-xl-9 d-none d-lg-flex justify-content-between align-items-center me-0 me-xl-3 fw-bolder '>
                            <Link className=' text-decoration-none text-white' to={"/create-auction"}>
                                <li>
                                    Create Auction
                                </li>
                            </Link>


                            <Link className=' text-decoration-none text-white' to={"/my-auction"}>
                                <li>
                                    My Auction
                                </li>
                            </Link>
                            <li>
                                Join As Player
                            </li>
                            <Link className=' text-decoration-none text-white' to={"/view-auction"}>
                                <li>
                                    View Auction
                                </li>
                            </Link>
                        </ul>
                    </section>
                </section>
            </section>
        </>
    )
}

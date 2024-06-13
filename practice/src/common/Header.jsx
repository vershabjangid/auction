import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export function Header() {
    return (
        <>
            <section className='header w-100 border border-1 border-primary py-3 d-flex justify-content-center'>
                <section className='header_inner col-11 d-flex justify-content-between'>
                    <section className='border border-1 border-success col-6 d-flex align-items-center'>
                        <button class="btn text-white fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </section>
                    <section className='border border-1 border-primary col-6 pt-3 d-flex justify-content-end'>
                        <ul className='text-white list-unstyled col-7 d-flex justify-content-between align-items-center me-3 fw-bolder'>
                            <li>
                                Create Auction
                            </li>
                            <li>
                                My Auction
                            </li>
                            <li>
                                Join As Player
                            </li>
                            <li>
                                View Auction
                            </li>
                        </ul>
                    </section>
                </section>
            </section>
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom'

export function More_option() {
    return (
        <>
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
        </>
    )
}

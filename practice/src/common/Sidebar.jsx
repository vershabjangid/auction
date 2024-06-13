import React from 'react'
import profile from "../images/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg"
export function Sidebar() {
    return (
        <>
            <div class="offcanvas bg-black text-white offcanvas-start h-100" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">Menu</h5>
                    <button type="button" className=" bg-white btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div class="offcanvas-body m-0 p-0">
                    <section className='w-100 border border-1 border-danger '>
                        <section className='w-100 p-2 profile_sidebar d-flex justify-content-between'>
                            <section className='profile_pic d-flex justify-content-center'>
                                <img src={profile} alt="" className='w-150 h-100' />
                            </section>
                            <section className='side_user_info border d-flex justify-content-center align-items-center flex-column'>
                                <section className='fw-bold'>Name</section>
                                <section className=''>93518581094</section>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
        </>
    )
}

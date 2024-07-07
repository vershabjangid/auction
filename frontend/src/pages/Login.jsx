import React, { useState } from 'react'
import { Login_Header } from '../common/Login_Header'
import banner_logo from "../images/Navy_and_Soft_Blue_Modern_Business_Card__YouTube_Icon__20240605_131831_0000-removebg-preview.png"
export function Login() {

    let [introbanner, setintrobanner] = useState(0);
    setTimeout(() => {
        setintrobanner(1)
    }, 2700)
    return (
        <>
            <section className=' w-100 border border-1 border-danger main_login'>
                <section className='overlay'>
                    <Login_Header />


                    <section className={introbanner == 0 ? 'banner_active' : "banner_deactive"}>
                        <div>
                            <img src={banner_logo} alt="" />
                        <div className='text-center'>
                            <p>DEVELOPED BY</p>
                            <h1>Bansi It Solutions</h1>
                        </div>
                        </div>

                    </section>


                    <section className='login_inner'>
                        <section className='login_main_form col-11 col-lg-4 border border-3 border-white p-2 rounded-3'>
                            <h4 className='text-black py-2 text-center'><i>LOGIN TO YOUR REGISTERED ACCOUNT! </i></h4>

                            <form className='px-3 py-2 d-flex flex-column'>
                                <label className='text-black fs-5'>Mobile.No</label>
                                <input type="number" className='px-2 border border-2 border-black rounded-2 py-2 ' />
                            </form>

                            <form className='px-3 py-2 d-flex flex-column'>
                                <label className='text-black fs-5'>Password</label>
                                <input type="password" className=' px-2 border border-2 border-black rounded-2 py-2 ' />
                                <p className='fw-light my-1'>Forgot password ?</p>
                            </form>

                            <button className='mx-3 px-5 py-2 bg-primary text-white border-0 rounded-1'>Login</button>


                            <p className='mx-3 my-4 text-black'>Not a member ? <span className=' text-primary login_register' >Register Now</span></p>

                            <p className='mx-3 my-4 text-black'>Any Trouble in login ? Contact : <a className='fw-bolder text-decoration-none'>9351858094</a></p>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

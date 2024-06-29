import React, { useState} from "react";
import { Header } from "../common/Header";
import { Sidebar } from "../common/Sidebar";
import { Col, Row } from "react-bootstrap";
import { json } from "react-router-dom";

export function CreateAuction() {

    let [name,setName]=useState("")
    let [playerperteam,setplayerperteam]=useState("")
    let [pointsperteam,setpointsperteam]=useState("")

    const collectdata= async()=>{
        const url = await fetch('http://localhost:2000/add-tournament',{
            method:"post",
            body:JSON.stringify({name,playerperteam,pointsperteam}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
       let  result = await url.json()

        console.log(result)
    }
    return (
        <>
            <section className="main1 d-flex justify-content-between flex-column">
                <Header />
                <Sidebar />


                <section className="add_auction_overflow w-100 overflow-y-scroll">
                    <section className="add_auction_section w-100 px-0 px-lg-5">
                        <section className="add_auction_inner ">
                            <Row className=" w-100 m-0  text-white justify-content-evenly text-center my-4">
                                <Col className="col-12 col-lg-3 text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Auction Name
                                        </label>

                                        <input type="text" placeholder="Enter Auction Name" onChange={(e)=>setName(e.target.value)} className="bg-transparent border-0 py-2 border-bottom mb-4" />
                                    </form>
                                </Col>


                                <Col className="col-12 col-lg-3 text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Player Per Team
                                        </label>

                                        <input type="text" placeholder="Enter Auction Name" className="bg-transparent text-white border-0 py-2 border-bottom mb-4" onChange={(e)=>setplayerperteam(e.target.value)} />
                                          
                                    </form>
                                </Col>

                                <Col className="col-12 col-lg-3 text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Points Per Team
                                        </label>

                                        <input type="number" placeholder="Enter Auction Name"  className="bg-transparent border-0 py-2 border-bottom mb-4 px-2" onChange={(e)=>setpointsperteam(e.target.value)} />
                                    </form>
                                </Col>

                            </Row>

                            <Row className=" w-100 m-0  text-white justify-content-evenly text-center my-4">
                                <Col className="col-12 col-lg-3 text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Minimum Bid
                                        </label>

                                        <input type="number" placeholder="Enter Minimum Bid" className="bg-transparent border-0 py-2 border-bottom mb-4" />
                                    </form>
                                </Col>


                                <Col className="col-12 col-lg-3 text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Bid Increased By
                                        </label>

                                        <input type="number" placeholder="Bid Increased By" className="bg-transparent text-white border-0 py-2 border-bottom mb-4" />

                                    </form>
                                </Col>

                                <Col className="col-12 col-lg-3 text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Auction Logo
                                        </label>

                                        <input type="file" placeholder="Enter Auction Name" className="bg-transparent border-0 py-2 border-bottom mb-4 px-2" />
                                    </form>
                                </Col>

                            </Row>

                            <Row className=" w-100 m-0  text-white justify-content-evenly text-center my-lg-4">
                                <Col className="col-12 col-lg-3  text-start">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Venue
                                        </label>

                                        <input type="text" placeholder="Enter Auction Venue" className="bg-transparent border-0 py-2 border-bottom mb-4" />
                                    </form>
                                </Col>


                                <Col className="col-12 col-lg-3  text-start d-none d-lg-block opacity-0">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Player Per Team
                                        </label>

                                        <select type="text" placeholder="Enter Auction Name" className="bg-transparent text-white border-0 py-2 border-bottom mb-4" >
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                        </select>
                                    </form>
                                </Col>

                                <Col className="col-3 text-start text-white d-none d-lg-block opacity-0">
                                    <form className="w-100 d-flex flex-column">
                                        <label className=" fw-bold fs-4 text-start">
                                            Points Per Team
                                        </label>

                                        <input type="number" placeholder="Enter Auction Name" className="bg-transparent border-0 py-2 border-bottom mb-4 px-2" />
                                    </form>
                                </Col>

                            </Row>

                            <Row className=" w-100 m-0  text-white justify-content-evenly text-center mb-3 my-lg-4">
                                <Col className="col-12 col-lg-3 d-flex justify-content-center text-start">
                                    <button type="button" onClick={collectdata} className="py-3 px-5 col-12 rounded border-0 bg-danger text-white fs-5 fw-bold">
                                        Create Auction
                                    </button>
                                </Col>
                            </Row>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}
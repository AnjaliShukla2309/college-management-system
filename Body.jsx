import React from "react";
import { NavLink } from "react-router-dom";


const Body = () =>{
    return(
        <div>
            <div className="container-fluid whole">
                <div className="row">
                    <div className="col-12">
                        <div className="body-title">
                            <h1>Welcome To AMC Engineering College</h1><hr></hr>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-12 col-md-3">
                        <div className="card1">
                            <div className="card1-top">
                                <div className="card1-left">
                                    <h2>1000</h2>
                                    <span>Total Students</span>
                                </div>
                                <div className="card1-right">
                                    <i class="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="card1-bottom">
                                <NavLink to="" className="click">Click Here <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1">
                            <div className="card1-top">
                                <div className="card1-left">
                                    <h2>15</h2>
                                    <span>Total Teachers</span>
                                </div>
                                <div className="card1-right">
                                <i class="fas fa-users"></i>
                                </div>
                            </div>
                            <div className="card1-bottom">
                                <NavLink to="" className="click">Click Here <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1">
                            <div className="card1-top">
                                <div className="card1-left">
                                    <h2>10</h2>
                                    <span>Total Transport</span>
                                </div>
                                <div className="card1-right">
                                    <i class="fas fa-bus"></i>
                                </div>
                            </div>
                            <div className="card1-bottom">
                                <NavLink to="" className="click">Click Here <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card1">
                            <div className="card1-top">
                                <div className="card1-left">
                                    <h2>15000</h2>
                                    <span>Total Likes</span>
                                </div>
                                <div className="card1-right">
                                <i class="fas fa-heart"></i>
                                </div>
                            </div>
                            <div className="card1-bottom">
                                <NavLink to="" className="click">Click Here <i className="fas fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
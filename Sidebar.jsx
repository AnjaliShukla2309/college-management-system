import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Sidebar.css';

class Sidebar extends React.Component{
    Show = () =>{
        if(document.getElementById('submenu').style.display === 'block'){
            document.getElementById('submenu').style.display = 'none';
            document.getElementById('drop').className = 'fas fa-angle-left';
        }else{
            document.getElementById('submenu').style.display = 'block';
            document.getElementById('drop').className = 'fas fa-angle-down';
        }
    }
    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 m-0 p-0">
                            <div className="sidebar">
                                <div className="sidebar-top">
                                    <img src="../img/logo-new.jpg" alt="..." height="160px" width="200px"></img>
                                </div>
                                <div id="sidebar-bottom">
                                    <nav>
                                        <NavLink to="/" className="nav"><i class="fas fa-tachometer-alt"></i> Dashboard</NavLink>
                                        <NavLink to="" className="nav" onClick={this.Show}><i class="fas fa-user"></i> Student <i id="drop" className="fas fa-angle-left"></i></NavLink>
                                        <div id="submenu">
                                            <NavLink to="/pages/AddStudent" className="nav"><i class="far fa-circle"></i>Add New Student</NavLink>
                                            <NavLink to="/pages/ViewStudent" className="nav"><i class="far fa-circle"></i> View Student Details</NavLink>
                                        </div>
                                        <NavLink to="/" className="nav"><i class="fas fa-book"></i> Teacher <i id="drop1" className="fas fa-angle-left"></i></NavLink>
                                        <NavLink to="/" className="nav"><i class="fas fa-bus"></i> Transport <i id="drop2" className="fas fa-angle-left"></i></NavLink>
                                        <NavLink to="/" className="nav"><i class="far fa-calendar-alt"></i> Master</NavLink>

                                        <div className="title">
                                            <span>ADMINISTRATOR</span>
                                        </div>
                                        <NavLink to="/" className="nav"><i class="far fa-user"></i> Add User</NavLink>
                                        <div className="title">
                                            <span>Report</span>
                                        </div>
                                        <NavLink to="/" className="nav"><i class="far fa-plus-square"></i> New Admission Report</NavLink>
                                        <NavLink to="/" className="nav"><i class="far fa-plus-square"></i> New Teacher Report</NavLink>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
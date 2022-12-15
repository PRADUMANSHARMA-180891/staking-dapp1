import React from 'react'
import './firstpage.css'
import {useNavigate} from 'react-router-dom';




function Firstpage() {
    const navigate= useNavigate();
  return (
    <div className='Firstpage'>


            <nav className="navbar navbar-expand-lg bg-dark navbar-dark" id='Nav'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                     Metavy
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto  mb-2 mb-lg-0 mx-md-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    
                                  governance
                                </a>
                               
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="#">
                                    Team
                                </a>
                             
                            </li>
                           

                        </ul>
                        <form className="d-flex" role="search">
       
                         <button id='Launch' className="btn btn-outline-success text-white" onClick={()=> navigate("create")} type="submit"> Launch                               
                            </button>
                          
                            </form>
                    </div>
                </div>
            </nav>

            {/* <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">Metavy</a>


            <div  id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Governance <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Team</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                
                </ul>

                </div>


                <form class="form-inline">
                    
                    <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=> navigate("create")}>Search</button>
                    
                </form>

            </nav> */}
        

    </div>
  )
}

export default Firstpage
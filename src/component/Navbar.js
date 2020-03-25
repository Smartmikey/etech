import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class NavBar extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar>
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Etech I.T Solutions</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse m-3" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto mr-lg-5">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item getstarted">
                            <Link className="nav-link" to="/get-started">Get Started</Link>
                        </li>
                        
                        </ul>
                    </div>
                    </div>
                </Navbar>
                
            </React.Fragment>
        )
    }

}

const Navbar = styled.nav`

.header-text{
    font-size: large;
    margin-left: 2rem;
  }
  
  header{
    box-shadow:0px 4px 11px -9px;
  }

  .getstarted{
      background-color: var(--mainGreen);
      
      border-radius: 5px;
    //   margin: 1.4rem;
  }
  .getstarted a{
      color: var(--mainWhite) !important;
  }

  .nav-link{
      margin: 5px 1.5rem !important;
      color: var(--mainBlack) !important;
      font-weight: bold;
  }
  .nav-link:hover{
   
      color: var(--lightGreen) !important;
  }
  
`
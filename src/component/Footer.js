import React, { Component } from 'react';
import { Title } from './Title';
import { SecTitle } from './SecTitle';
import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="row p-5 bg-light">
                <div className="col-md-6">
                    <h2 >E-tech I.T Solution</h2>
                    <p>&copy; 2020</p>
                    <Link to="#">
                        <a>Privacy - Terms</a>
                    </Link>
                </div>
                <div className="col-md-2 list">
                    <SecTitle name="Product" />
                    <ul>
                        <li>
                            <Link to="#"><a>Product</a></Link>
                        </li>
                        <li>
                            <Link to="#"><a>Product</a></Link>
                        </li>
                        <li>
                            <Link to="#"><a>Product</a></Link>
                        </li>
                        <li>
                            <Link to="#"><a>Product</a></Link>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-md-2 list">
                    <SecTitle name="Resourse" />
                    <ul>
                       <li>
                        <Link to="#"><a>Resourse</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Resourse</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Resourse</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Resourse</a></Link>
                    </li> 
                    </ul>
                    
                </div>
                <div className="col-md-2 list">
                    <SecTitle name="Features" />
                    <ul>
                       <li>
                        <Link to="#"><a>Features</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Features</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Features</a></Link>
                    </li>
                    <li>
                        <Link to="#"><a>Features</a></Link>
                    </li>  
                    </ul>
                   
                </div>
            </footer>
        );
    }
}

export default Footer;
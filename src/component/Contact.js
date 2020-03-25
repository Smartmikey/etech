import React, { Component } from "react";
import Footer from "./Footer";
import Button from "./Button";
import {Title} from "./Title";

export default class Contact extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="bg-image text-center row">
                <h1 className="lg-header-text mx-auto lg-text font-weight-bolder my-auto text-white ">Contact Us</h1>
                </section>

                <section className="">
                    <div className="row bg-img p-5">

                        <div className="col-md-6 h-75 pl-5 my-5 col-sm-12 ">
                            <Title title="Get in touch"  />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
                            malesuada consectetur ac arcu, blandit ut egestas ultrices
                            suspendisse. Integer posuere lacus eget.</p>
                            
                        </div>
                            <div className="col-md-6 my-5 col-sm-12">
                            <div className="  m-4">
                            <svg className="mr-3" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z" fill="#656565"/>
                                </svg> <span>Donsmartez@gmai.com</span>

                            </div>
                            <div className="m-4">
                            <svg className="mr-3" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.05 5C15.0267 5.19057 15.9244 5.66826 16.6281 6.37194C17.3317 7.07561 17.8094 7.97326 18 8.95L14.05 5ZM14.05 1C16.0793 1.22544 17.9716 2.13417 19.4162 3.57701C20.8609 5.01984 21.772 6.91101 22 8.94L14.05 1ZM21 16.92V19.92C21.0011 20.1985 20.9441 20.4742 20.8325 20.7293C20.7209 20.9845 20.5573 21.2136 20.3521 21.4019C20.1468 21.5901 19.9046 21.7335 19.6407 21.8227C19.3769 21.9119 19.0974 21.9451 18.82 21.92C15.7428 21.5856 12.787 20.5341 10.19 18.85C7.77382 17.3147 5.72533 15.2662 4.18999 12.85C2.49997 10.2412 1.44824 7.27099 1.11999 4.18C1.095 3.90347 1.12787 3.62476 1.21649 3.36162C1.30512 3.09849 1.44756 2.85669 1.63476 2.65162C1.82196 2.44655 2.0498 2.28271 2.30379 2.17052C2.55777 2.05833 2.83233 2.00026 3.10999 2H6.10999C6.5953 1.99522 7.06579 2.16708 7.43376 2.48353C7.80173 2.79999 8.04207 3.23945 8.10999 3.72C8.23662 4.68007 8.47144 5.62273 8.80999 6.53C8.94454 6.88792 8.97366 7.27691 8.8939 7.65088C8.81415 8.02485 8.62886 8.36811 8.35999 8.64L7.08999 9.91C8.51355 12.4135 10.5864 14.4864 13.09 15.91L14.36 14.64C14.6319 14.3711 14.9751 14.1858 15.3491 14.1061C15.7231 14.0263 16.1121 14.0555 16.47 14.19C17.3773 14.5286 18.3199 14.7634 19.28 14.89C19.7658 14.9585 20.2094 15.2032 20.5265 15.5775C20.8437 15.9518 21.0122 16.4296 21 16.92Z" stroke="#656565" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>09091693607</span>

                            </div>
                            <div className="m-4">
                            <svg className="mr-3" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM2 7C2 4.24 4.24 2 7 2C9.76 2 12 4.24 12 7C12 9.88 9.12 14.19 7 16.88C4.92 14.21 2 9.85 2 7Z" fill="#656565"/>
                            <path d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7C9.5 5.61929 8.38071 4.5 7 4.5C5.61929 4.5 4.5 5.61929 4.5 7C4.5 8.38071 5.61929 9.5 7 9.5Z" fill="#656565"/>
                            </svg>

                            <span>No. 5 anywhere in kaduna. just meet us there</span>

                            </div>
                        </div>
                       </div>
                        <div className="row">
                            <div className="col-md-3 d-none d-md-block d-lg-block"></div>
                            <div className="col-md-6 p-4 col-sm-12">
                            <Title title="Send us a message" />
                            <form action="#" >
                            <div className="form-group">
                            <div className="form-group">
                                <label for="formGroupExampleInput">Email</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" col="120" placeholder="Message"></textarea>
                            <Button className="my-4" type="submit">Send Message</Button>
                        </div>
                            
                            </div>
                            </form>
                        </div>
                            <div className="col-md-3 d-none d-md-block d-lg-block"></div>
                        </div>
                        
                    
                </section>
            <Footer />
            </React.Fragment>
        )
    }
}
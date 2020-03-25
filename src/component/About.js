import React, { Component } from "react";
import Footer from './Footer'
import image from '../assets/review-img.png'
import code from '../assets/code.jpg'
import {Title} from './Title'
import {SecTitle} from './SecTitle'
export default class About extends Component{
    render(){
        return(
            <React.Fragment>
                <section className="bg-image text-center row">
                <h1 className="lg-header-text mx-auto lg-text font-weight-bolder my-auto text-white ">About E-tech</h1>
                </section>
                <section className="row p-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="d-relative ">
                            <div className="on-fly d-none  d-lg-block">
                            <svg  width="185" height="291" viewBox="0 0 185 291" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="12" width="171" height="279" fill="#D3EDF3"/>
                                <rect x="15.5" y="0.5" width="169" height="277" stroke="#D3EDF3" stroke-dasharray="12 5"/>
                                </svg>
                            </div>
                                <img className="w-100 on-fly-img" src={image} alt="CEO" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h2 className="text-uppercase">From CEO</h2>
                        <h5 className="text-uppercase"><u>Elijah Bala</u></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis nulla viverra tortor, velit,
                            non nunc. Odio turpis mollis id elementum, tortor vitae elit senectus. Vestibulum pulvinar
                            tincidunt egestas amet viverra enim mauris accumsan mattis. Euismod malesuada nullam
                            enim sit.

                            Quis parturient ornare scelerisque diam non diam rutrum purus. Eget etiam suspendisse dis
                            quis eu egestas. Urna egestas laoreet id vivamus pharetra, vel. Posuere ut dictum eros, arcu
                            viverra. Euismod facilisis nibh lectus orci magna. Diam euismod mattis mattis viverra eget
                            tortor odio luctus. Cras lectus diam nunc massa fermentum semper. Morbi non lectus facilisis
                            etiam metus dignissim. Tellus netus mattis scelerisque condimentum lorem a malesuada.
                            Volutpat non malesuada tristique est volutpat, dignissim. Urna arcu, ut massa, tortor. Cras ut
                            orci cursus sed venenatis. Facilisis at elementum imperdiet lacus nisi volutpat pharetra turpis.
                            Nunc commodo adipiscing leo id.
                            </p>
                    </div>
                </section>
                <section className="mx-5">
                    <Title title="Something about us" />
                    <div className="row align-center bg-seconday">
                        <div className="col-md-4 col-sm-12  m-2 text-center p-3">
                        <svg width="103" height="88" viewBox="0 0 103 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M66.9971 38.462L56.3282 55.42C55.8917 56.0249 55.3608 56.5557 54.7559 56.9922C53.2955 58.011 51.4923 58.4128 49.7375 58.1103C47.9828 57.8078 46.4181 56.8255 45.3832 55.3765C44.3482 53.9275 43.9264 52.1289 44.2094 50.3709C44.4923 48.6129 45.4572 47.0374 46.8946 45.9864L63.8526 35.3174C64.2381 35.0487 64.6966 34.9047 65.1665 34.9047C65.6364 34.9047 66.095 35.0487 66.4805 35.3174C66.9646 35.667 67.2907 36.1939 67.3875 36.7831C67.4843 37.3723 67.344 37.9759 66.9971 38.462Z" fill="#D3EDF3"/>
                        <path d="M51.252 0.75C23.4678 0.75 0.939501 23.2559 0.939501 51.04C0.922459 63.3326 5.42279 75.2029 13.585 84.3945C13.8321 84.6641 14.0567 84.9336 14.3038 85.1807C14.8353 85.7561 15.4805 86.2149 16.1985 86.528C16.9166 86.8411 17.6918 87.0017 18.4752 86.9995C19.2585 86.9974 20.0329 86.8327 20.7493 86.5157C21.4656 86.1988 22.1084 85.7365 22.6368 85.1582C26.2788 81.2003 30.7023 78.0409 35.6278 75.8798C40.5532 73.7187 45.8733 72.6029 51.252 72.6029C56.6307 72.6029 61.9508 73.7187 66.8762 75.8798C71.8016 78.0409 76.2252 81.2003 79.8672 85.1582C80.3956 85.7365 81.0384 86.1988 81.7547 86.5157C82.4711 86.8327 83.2455 86.9974 84.0288 86.9995C84.8121 87.0017 85.5874 86.8411 86.3054 86.528C87.0235 86.2149 87.6687 85.7561 88.2002 85.1807L88.919 84.3945C97.0812 75.2029 101.582 63.3326 101.564 51.04C101.564 23.2559 79.0362 0.75 51.252 0.75Z" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M51.252 15.125V22.3125" stroke="#146F75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M87.1895 51.0625H80.002" stroke="#146F75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M22.502 51.0625H15.3145" stroke="#146F75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M30.9224 30.7329L25.8395 25.65" stroke="#146F75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        <path d="M71.5814 30.7329L76.6643 25.65" stroke="#146F75" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                        </svg>

                        <SecTitle name="Fast delivery" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id illo corporis dignissimos quia praesentium doloribus fuga.</p>
                        </div>
                        <div className="col-md-4 col-sm-12  m-2 text-center p-3">
                        <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M82.6123 17.6109L49.9398 2.71406C46.3983 1.09531 40.6014 1.09531 37.0598 2.71406L4.40923 17.6109C0.559229 19.3609 0.559229 22.2244 4.40923 23.9744L36.7842 38.74C40.4789 40.4244 46.5602 40.4244 50.2548 38.74L82.6298 23.9744C86.4623 22.2244 86.4623 19.3587 82.6123 17.6109Z" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.4999 54.9885L4.40923 63.1064C0.559229 64.8564 0.559229 67.722 4.40923 69.472L36.7842 84.2376C40.4789 85.9198 46.5602 85.9198 50.2548 84.2376L82.6298 69.472C86.4798 67.722 86.4798 64.8564 82.6298 63.1064L65.143 54.691" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.5 32.2299L4.3875 40.3586C0.5375 42.1086 0.5375 44.9742 4.3875 46.7242L36.7625 61.4877C40.4572 63.172 46.5384 63.172 50.2331 61.4877L82.6081 46.7242C86.48 44.9742 86.48 42.1086 82.63 40.3586L64.5 32.2299" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>





                        <SecTitle name="Very reliable" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id illo corporis dignissimos quia praesentium doloribus fuga.</p>
                        </div>
                        <div className="col-md-4 col-sm-12  m-2 text-center p-3">
                        <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M83.75 42.5C83.75 19.5195 65.2734 0.875 42.5 0.875C19.7266 0.875 1.25 19.5195 1.25 42.5C1.25 65.4805 19.7266 84.125 42.5 84.125C65.2734 84.125 83.75 65.4805 83.75 42.5Z" stroke="#146F75" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M66.5624 28.625L42.5278 56.375L32.2261 45.9688" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M28.7393 56.375L18.4375 45.9688" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M53.1797 28.625L42.1045 41.416" stroke="#146F75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>


                        <SecTitle name="Maximum Satisfaction" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id illo corporis dignissimos quia praesentium doloribus fuga.</p>
                        </div>
                        
                    </div>
                </section>
                <section className="row p-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="d-relative ">
                            
                                <img className="w-100 " src={code} alt="CEO" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h2 className="text-uppercase">We have everything you need</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis nulla viverra tortor, velit,
                            non nunc. Odio turpis mollis id elementum, tortor vitae elit senectus. Vestibulum pulvinar
                            tincidunt egestas amet viverra enim mauris accumsan mattis. Euismod malesuada nullam
                            enim sit.

                            Quis parturient ornare scelerisque diam non diam rutrum purus. Eget etiam suspendisse dis
                            quis eu egestas. Urna egestas laoreet id vivamus pharetra, vel. Posuere ut dictum eros, arcu
                            viverra. Euismod facilisis nibh lectus orci magna. Diam euismod mattis mattis viverra eget
                            tortor odio luctus. Cras lectus diam nunc massa fermentum semper. Morbi non lectus facilisis
                            etiam metus dignissim. Tellus netus mattis scelerisque condimentum lorem a malesuada.
                            Volutpat non malesuada tristique est volutpat, dignissim. Urna arcu, ut massa, tortor. Cras ut
                            orci cursus sed venenatis. Facilisis at elementum imperdiet lacus nisi volutpat pharetra turpis.
                            Nunc commodo adipiscing leo id.
                            viverra. Euismod facilisis nibh lectus orci magna. Diam euismod mattis mattis viverra eget
                            tortor odio luctus. Cras lectus diam nunc massa fermentum semper. Morbi non lectus facilisis
                            etiam metus dignissim. Tellus netus mattis scelerisque condimentum lorem a malesuada.
                            Volutpat non malesuada tristique est volutpat, dignissim. Urna arcu, ut massa, tortor. Cras ut
                            orci cursus sed venenatis. Facilisis at elementum imperdiet lacus nisi volutpat pharetra turpis.
                            Nunc commodo adipiscing leo id.
                            </p>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}
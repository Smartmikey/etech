import React, {Component} from 'react';
import card from '../assets/credit-card.svg';
import Button from './Button'
import Footer from './Footer'

export default class GetStarted extends Component {
    render(){
        return(
            <React.Fragment>
                <section className="container mt-5">
                <table class="table border">
                    <thead>
                        <tr className="border table-bordered">
                        <th colspan="2" scope="col">

                            <img className="w-25"src={card} alt="Credit card" />
                            
                        </th>
                        <th scope="col" className="text-cente">
                            <h3>Basic </h3>
                           
                            <Button>Get Started</Button>
                        </th>
                        <th scope="col" className="text-cente">
                            <h3>Premium </h3>
                            <h4 >$100/ &#8358; 35,000</h4>
                            <Button>Get Started</Button>
                        </th>
                        <th scope="col" className="text-cente">
                            <h3>Enterprise </h3>
                            <h4 >$100/ &#8358; 35,000</h4>
                            <Button>Get Started</Button>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="5" className="bg-light" >Pricing</td>
                        </tr>

                        <tr className="table-bordered">
                            <th colSpan="2">Plan cost</th>
                            <td> <h4 >$100/ &#8358; 35,000</h4></td>
                            <td> <h4 >$100/ &#8358; 35,000</h4></td>
                            <td> <h4 >$100/ &#8358; 35,000</h4></td>
                        </tr>
                        <tr className="table-bordered">
                            <th colSpan="2">Hostingt</th>
                            <td> <h4 >$100/ &#8358; 35,000</h4></td>
                            <td> <h4 >$100/ &#8358; 35,000</h4></td>
                            <td> <h4 >Free for 1 year</h4></td>
                        </tr>
                        <tr className="table-bordered">
                            <th colSpan="2">Payment process</th>
                            <td> <h6 >60% d/p - 40% after completion</h6></td>
                            <td> <h6 >60% d/p - 40% after completion</h6></td>
                            <td> <h6 >60% d/p - 40% after completion</h6></td>
                            
                        </tr>
                        <tr>
                            <td colSpan="5" className="bg-light" >Features</td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="2">
                            Responsive
                        </th>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                           </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                          </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                          </td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="2">
                            Responsive
                        </th>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                           </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                          </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                          </td>
                        </tr>
                        <tr>
                        <th colspan="2" scope="row">
                            SEO Standard
                        </th>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                          </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                           </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                          </td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="2">
                            Custom Design
                        </th>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                            </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                        </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                            </td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="2">
                            Custom Design
                        </th>
                        <td className="text-center"> 
                        <svg width="17" height="17" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1341 13L34.0842 5.60847C35.3053 4.70142 35.3053 3.2308 34.0842 2.32301L31.8729 0.680284C30.6518 -0.226761 28.6722 -0.226761 27.4501 0.680284L17.5 8.07182L7.54986 0.680284C6.32883 -0.226761 4.34915 -0.226761 3.12713 0.680284L0.915767 2.32301C-0.305256 3.23006 -0.305256 4.70068 0.915767 5.60847L10.8659 13L0.915767 20.3915C-0.305256 21.2986 -0.305256 22.7692 0.915767 23.677L3.12713 25.3197C4.34815 26.2268 6.32883 26.2268 7.54986 25.3197L17.5 17.9282L27.4501 25.3197C28.6712 26.2268 30.6518 26.2268 31.8729 25.3197L34.0842 23.677C35.3053 22.7699 35.3053 21.2993 34.0842 20.3915L24.1341 13Z" fill="#F80A0A"/>
                        </svg>


                            </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                        </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                            </td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="2">
                            Custom Design
                        </th>
                        <td className="text-center"> 
                        <svg width="17" height="17" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1341 13L34.0842 5.60847C35.3053 4.70142 35.3053 3.2308 34.0842 2.32301L31.8729 0.680284C30.6518 -0.226761 28.6722 -0.226761 27.4501 0.680284L17.5 8.07182L7.54986 0.680284C6.32883 -0.226761 4.34915 -0.226761 3.12713 0.680284L0.915767 2.32301C-0.305256 3.23006 -0.305256 4.70068 0.915767 5.60847L10.8659 13L0.915767 20.3915C-0.305256 21.2986 -0.305256 22.7692 0.915767 23.677L3.12713 25.3197C4.34815 26.2268 6.32883 26.2268 7.54986 25.3197L17.5 17.9282L27.4501 25.3197C28.6712 26.2268 30.6518 26.2268 31.8729 25.3197L34.0842 23.677C35.3053 22.7699 35.3053 21.2993 34.0842 20.3915L24.1341 13Z" fill="#F80A0A"/>
                        </svg>


                            </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                        </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                            </td>
                        </tr>
                        <tr>
                        <th scope="row" colspan="2">
                            Software maintenance
                        </th>
                        <td className="text-center"> 
                        <svg width="17" height="17" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1341 13L34.0842 5.60847C35.3053 4.70142 35.3053 3.2308 34.0842 2.32301L31.8729 0.680284C30.6518 -0.226761 28.6722 -0.226761 27.4501 0.680284L17.5 8.07182L7.54986 0.680284C6.32883 -0.226761 4.34915 -0.226761 3.12713 0.680284L0.915767 2.32301C-0.305256 3.23006 -0.305256 4.70068 0.915767 5.60847L10.8659 13L0.915767 20.3915C-0.305256 21.2986 -0.305256 22.7692 0.915767 23.677L3.12713 25.3197C4.34815 26.2268 6.32883 26.2268 7.54986 25.3197L17.5 17.9282L27.4501 25.3197C28.6712 26.2268 30.6518 26.2268 31.8729 25.3197L34.0842 23.677C35.3053 22.7699 35.3053 21.2993 34.0842 20.3915L24.1341 13Z" fill="#F80A0A"/>
                        </svg>


                            </td>
                        <td className="text-center"> 
                        <svg width="17" height="17" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.1341 13L34.0842 5.60847C35.3053 4.70142 35.3053 3.2308 34.0842 2.32301L31.8729 0.680284C30.6518 -0.226761 28.6722 -0.226761 27.4501 0.680284L17.5 8.07182L7.54986 0.680284C6.32883 -0.226761 4.34915 -0.226761 3.12713 0.680284L0.915767 2.32301C-0.305256 3.23006 -0.305256 4.70068 0.915767 5.60847L10.8659 13L0.915767 20.3915C-0.305256 21.2986 -0.305256 22.7692 0.915767 23.677L3.12713 25.3197C4.34815 26.2268 6.32883 26.2268 7.54986 25.3197L17.5 17.9282L27.4501 25.3197C28.6712 26.2268 30.6518 26.2268 31.8729 25.3197L34.0842 23.677C35.3053 22.7699 35.3053 21.2993 34.0842 20.3915L24.1341 13Z" fill="#F80A0A"/>
                        </svg>
                        </td>
                        <td className="text-center"> 
                            <svg width="20" height="20" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M44 24C44 37.2549 34.1503 48 22 48C9.8497 48 0 37.2549 0 24C0 10.7451 9.8497 0 22 0C34.1503 0 44 10.7451 44 24ZM19.4553 36.7078L35.7779 18.9014C36.3321 18.2967 36.3321 17.3163 35.7779 16.7116L33.7706 14.5219C33.2164 13.9172 32.3176 13.9172 31.7633 14.5219L18.4516 29.0437L12.2367 22.2638C11.6824 21.6591 10.7837 21.6591 10.2294 22.2638L8.22214 24.4535C7.66789 25.0581 7.66789 26.0385 8.22214 26.6432L17.448 36.7077C18.0023 37.3124 18.9009 37.3125 19.4553 36.7078V36.7078Z" fill="#146F75"/>
                            </svg>

                            </td>
                        </tr>
                    </tbody>
                    </table>
                </section>
                <Footer />
            </React.Fragment>
        )
    }
}
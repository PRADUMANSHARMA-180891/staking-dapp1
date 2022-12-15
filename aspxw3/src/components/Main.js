import React , { useState } from 'react'
import './main.css'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,

}
  from 'mdb-react-ui-kit';

import yello from './img/yello.png'
import blue from './img/blue.png'
import green from './img/green.png'

function Main() {
  const [justifyActive, setJustifyActive] = useState('tab1');;
  const handleJustifyClick = (value) => {
      if (value === justifyActive) {
          return;
      }
      setJustifyActive(value);


  };
  return (
    
    // <div className='Main'>

    //   {/* First section */}
      
      
    //                 <div className='row justify-content-center pb-2 pt-2'>
    //                     <div className='col-md-4  pt-3 pb-3'>
    //                         <div className='cardapy para1 pt-3 pb-3'>
    //                           <h3 className='pt-4 pb-3'>Account Value</h3>
    //                           <h5 className='pb-5'>---</h5>
    //                         </div>
    //                     </div>
    //                     <div className='col-md-4  pt-3 pb-3'>
    //                        <div className='cardapy para1 pt-3 pb-3'>
    //                         <h3 className='pt-4 pb-3'>Account Value <i class="bi bi-exclamation-circle"></i></h3>
    //                         <h5 className='pb-5'>---</h5>
    //                         </div>
    //                     </div>
    //                 </div>

    //   {/* Second section */}


    //                <div className='row justify-content-center  pb-4 pt-2'>
    //                     <div className='col-md-4 pt- pb-3 '>
                        
                        
    //                     <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between '>

                        
    //                         <MDBTabsItem>
    //                             <MDBTabsLink className='regi' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
    //                                 Deposit
    //                             </MDBTabsLink>
    //                         </MDBTabsItem>
                            
    //                         <MDBTabsItem >
    //                             <MDBTabsLink className='regi' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
    //                                 Withdraw
    //                             </MDBTabsLink>
    //                         </MDBTabsItem>
                           
    //                     </MDBTabs>


    //                     <div className='cardmm'>

    //                         <MDBContainer className="p-3 my-3 d-flex flex-column carddepositwith ">




    //                             <MDBTabsContent>
    //                                 <MDBTabsPane show={justifyActive === 'tab1'}>
    //                                     <div className='row justify-content-center'>
    //                                         <h1 className='para1 pt-4 pb-5'>---</h1>
    //                                         <div className='col-5 para3'><img src={yello} width="40rem" alt="..."/> <img src={blue} width="40rem" alt="..."/> <img src={green} width="40rem" alt="..."/></div>
    //                                     </div>



    //                                     <div className='row pt-3 pb-3 justify-content-evenly '>
    //                                       <div className='col-10 pt-3 pb-3'>
    //                                         <input placeholder='Enter an amount' className='enterammount'/>
    //                                       </div>

    //                                       <div className='col-10 pb-3'>
    //                                         <button className='depbutton'>Deposit</button>
    //                                       </div>

    //                                       <div className='col-10 pt-3 pb-3'>
    //                                         <ul>
    //                                           <li>
    //                                             <p> Withdraw fee is 0.1%</p>
    //                                           </li>

    //                                            <li>
    //                                             <p> Forthe First time 24 hours after a deposit,there is an additional 5% withdraw fee</p>
    //                                             </li>
    //                                         </ul>
    //                                       </div>
    //                                     </div>




    //                                 </MDBTabsPane>
    //                                 <MDBTabsPane show={justifyActive === 'tab2'}>
    //                                 <div className='row justify-content-center'>
    //                                         <h1 className='para1 pt-4 pb-5'>---</h1>
    //                                         <div className='col-4 para3'><img src={yello} width="40rem" alt="..."/> <img src={blue} width="40rem" alt="..."/> <img src={green} width="40rem" alt="..."/></div>
    //                                     </div>



    //                                     <div className='row pt-3 pb-3 justify-content-evenly '>
    //                                       <div className='col-10 pt-3 pb-3'>
    //                                         <input placeholder='Enter an amount' className='enterammount'/>
    //                                       </div>

    //                                       <div className='col-10 pb-3'>
    //                                         <button className='depbutton'>Withdraw</button>
    //                                       </div>

    //                                       <div className='col-10 pt-3 pb-3'>
    //                                         <ul>
    //                                           <li>
    //                                             <p> Withdraw fee is 0.1%</p>
    //                                           </li>

    //                                            <li>
    //                                             <p> Forthe First time 24 hours after a deposit,there is an additional 5% withdraw fee</p>
    //                                             </li>
    //                                         </ul>
    //                                       </div>
    //                                     </div>
    //                                 </MDBTabsPane>
                                    
    //                             </MDBTabsContent>
    //                         </MDBContainer>



    //                     </div>
    //                     </div>

    //              {/* Leftside of second sec */}
    //                     <div className='col-md-4 pt-5 pb-3 '>

    //                         <div className='row'>
    //                             <div className='col-12 pb-2 pt-5'>
    //                                     <div className='cardAnualyield'>
    //                                     <h4 className='pt-4 pb-3 para1'>Total annual Yield <i class="bi bi-exclamation-circle"></i></h4>
    //                                     <h5 className='pb-2 para1'>---</h5>
    //                                     <p className='pb-3 para2'>Boost Rewards up to 2.5x</p>
    //                                     <p className='abcd'> APY Reward Yield</p>
    //                                     <p className='abcd pb-3'>Portfolio Yield</p>
    //                                </div>
    //                             </div>
                             

                             
    //                             <div className='col-12 '>

    //                                 <div className='cardAnualyield1'>
    //                                       <div className='project'>
    //                                           <div className='buttonic'>
    //                                           <button className='dolb'><i class="bi bi-currency-dollar"></i></button>
    //                                           <button className='dolb'><i class="bi bi-percent"></i></button>
    //                                           </div >
    //                                           <div >
    //                                               <h4 className='pt-4 pb-3 para1'>Projected Growth</h4>
    //                                               <h5 className='pb-1 para1'>---</h5>
    //                                           </div>
    //                                       </div>
                                            
    //                                   </div>
    //                             </div>
    //                         </div>
                           

                            




    //                     </div>


    //                </div>
       
    
    // {/* Apy reward section */}

                   
    //                 <div className='row justify-content-evenly pb-5 apy'>

                                

    //                         <div className='col-md-8 pt-3 pb-3'>
    //                               <h1 className="pb-3 pt-3">APY Rewards <i class="bi bi-coin"></i></h1>
    //                                  {/* <button>Withdraw APY</button> */}
    //                                     <div className='cardapy'>
    //                                         <div className="row  justify-content-evenly">
    //                                             <div className="col-md-3 pt-3 para">
    //                                             <h6>APY Per Day</h6>
    //                                             <p >0.00</p>
    //                                             </div>
    //                                             <div className="col-md-3 pt-3 para">
    //                                             <h6>APY Earned</h6>
    //                                             <p className="para">0.00</p>
    //                                             </div>
    //                                             <div className="col-md-3 pt-3 para">
    //                                             <h6>Avilable to Withdraw</h6>
    //                                             <p className="para">0.00</p>
    //                                             </div>
    //                                         </div>
                                        
    //                                     </div>
    //                          </div>

    //                  </div>
                    
    
    
    
    // </div>
<div className='Main'>

{/* First section */}


              {/* <div className='row justify-content-center pb-2 pt-2'>
                  <div className='col-md-4  pt-3 pb-3'>
                      <div className='cardapy para1 pt-3 pb-3'>
                        <h6 className='pt-2 pb-1'>Account Value</h6>
                        <p className='pb-3'>---</p>
                      </div>
                  </div>
                  <div className='col-md-4  pt-3 pb-3'>
                     <div className='cardapy para1 pt-3 pb-3'>
                      <h6 className='pt-2 pb-1'>Account Value <i class="bi bi-exclamation-circle"></i></h6>
                      <p className='pb-3'>---</p>
                      </div>
                  </div>
              </div> */}

{/* Second section */}


             <div className='row justify-content-center  pb-4 pt-4'>




                  {/* <div className='col-md-5 pt- pb-3 '>
                  
                  
                  <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between '>

                  
                      <MDBTabsItem>
                          <MDBTabsLink className='regi' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
                              Deposit
                          </MDBTabsLink>
                      </MDBTabsItem>
                      
                      <MDBTabsItem >
                          <MDBTabsLink className='regi' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                              Withdraw
                          </MDBTabsLink>
                      </MDBTabsItem>
                     
                  </MDBTabs>


                  <div className='cardmm'>

                      <MDBContainer className="my-3 d-flex flex-column carddepositwith ">




                          <MDBTabsContent>
                              <MDBTabsPane show={justifyActive === 'tab1'}>
                                  <div className='row justify-content-center'>
                                      <h6 className='para1 pt-4 pb-2'>---</h6>
                                      <div className='col-5 para3'><img src={yello} width="25rem" alt="..."/> <img src={blue} width="25rem" alt="..."/> <img src={green} width="25rem" alt="..."/></div>
                                  </div>



                                  <div className='row pt-3 pb-2 justify-content-evenly carddepositinside '>
                                    <div className='col-10 pt-2 pb-2'>
                                      <input placeholder='Enter an amount' className='enterammount'/>
                                    </div>

                                    <div className='col-10 pb-2'>
                                      <button className='depbutton'>Deposit</button>
                                    </div>

                                    <div className='col-10 pt-1 pb-1'>
                                      <ul className='abcd'>
                                        <li>
                                          <p> Withdraw fee is 0.1%</p>
                                        </li>

                                         <li>
                                          <p> Forthe First time 24 hours after a deposit,there is an additional 5% withdraw fee</p>
                                          </li>
                                      </ul>
                                    </div>
                                  </div>




                              </MDBTabsPane>
                              <MDBTabsPane show={justifyActive === 'tab2'}>
                              <div className='row justify-content-center'>
                                      <h6 className='para1 pt-4 pb-2'>---</h6>
                                      <div className='col-5 para3'><img src={yello} width="20rem" alt="..."/> <img src={blue} width="20rem" alt="..."/> <img src={green} width="20rem" alt="..."/></div>
                                  </div>



                                  <div className='row pt-3 pb-3 justify-content-evenly '>
                                    <div className='col-10 pt-2 pb-2'>
                                      <input placeholder='Enter an amount' className='enterammount'/>
                                    </div>

                                    <div className='col-10 pt-1 pb-2'>
                                      <button className='depbutton'>Withdraw</button>
                                    </div>

                                    <div className='col-10 pt-1 pb-1'>
                                      <ul className='abcd'>
                                        <li>
                                          <p>
                                          Withdraw fee is 0.1%</p>
                                        </li>

                                         <li>
                                          <p> Forthe First time 24 hours after a deposit,there is an additional 5% withdraw fee</p>
                                          </li>
                                      </ul>
                                    </div>
                                  </div>

                              </MDBTabsPane>
                              
                          </MDBTabsContent>
                      </MDBContainer>



                  </div>
                  </div> */}

                  <div className='col-md-5 pt-2 pb-1 '>

                      <div className='row'>



                        <div className='car  pt-1'>
                                  
                                    <div className='cardapy para1 pt-1 pb-1'>
                                        <h6 className='pt-2 pb-1'>Account Value</h6>
                                        <p className='pb-2'>---</p>
                                  </div>
                            
                          </div>






                          <div className='car  pt-1'>
                                  <div className='cardAnualyield'>
                                      <h5 className='pt-2 pb-1 para1'>Total Annual Yield <i class="bi bi-exclamation-circle"></i></h5>
                                      <h6 className='pb-1 para1'>---</h6>
                                      <p className='pb-1 para2'>Boost Rewards up to 2.5x</p>
                                      <p className='abcd'> APY Reward Yield</p>
                                      <p className='abcd pb-1'>Portfolio Yield</p>
                                 </div>
                          </div>
                      

                      
                          <div className=' pt-3 car'>

                              <div className='cardAnualyield1'>
                                    <div className='project'>
                                        <div className='buttonic'>
                                        <button className='dolb'><i class="bi bi-currency-dollar"></i></button>
                                        <button className='dolb'><i class="bi bi-percent"></i></button>
                                        </div >
                                        <div >
                                            <h6 className='pt-2 pb-1 para1'>Projected Growth</h6>
                                            <p className='pb-1 para1'>---</p>
                                        </div>
                                    </div>
                                      
                                </div>
                          </div>
                      </div>







                      </div>

           {/* Leftside of second sec */}
                  {/* <div className='col-md-5 pt-4 pb-3 '>

                      <div className='row'>



                        <div className='col-12  pt-3'>
                                  
                                    <div className='cardapy para1 pt-3 pb-3'>
                                    <h6 className='pt-2 pb-1'>Account Value</h6>
                                    <p className='pb-3'>---</p>
                                  </div>
                             
                          </div>






                          <div className='col-12  pt-3'>
                                  <div className='cardAnualyield'>
                                  <h5 className='pt-2 pb-1 para1'>Total Annual Yield <i class="bi bi-exclamation-circle"></i></h5>
                                  <h6 className='pb-1 para1'>---</h6>
                                  <p className='pb-1 para2'>Boost Rewards up to 2.5x</p>
                                  <p className='abcd'> APY Reward Yield</p>
                                  <p className='abcd pb-1'>Portfolio Yield</p>
                             </div>
                          </div>
                       

                       
                          <div className='col-12 '>

                              <div className='cardAnualyield1'>
                                    <div className='project'>
                                        <div className='buttonic'>
                                        <button className='dolb'><i class="bi bi-currency-dollar"></i></button>
                                        <button className='dolb'><i class="bi bi-percent"></i></button>
                                        </div >
                                        <div >
                                            <h6 className='pt-2 pb-1 para1'>Projected Growth</h6>
                                            <p className='pb-1 para1'>---</p>
                                        </div>
                                    </div>
                                      
                                </div>
                          </div>
                      </div>
                     

                      




                  </div> */}

                 <div className='col-md-5 pt- pb-3 '>
                  
                  
                  <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between '>

                  
                      <MDBTabsItem>
                          <MDBTabsLink className='regi' onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} >
                              Deposit
                          </MDBTabsLink>
                      </MDBTabsItem>
                      
                      <MDBTabsItem >
                          <MDBTabsLink className='regi' onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                              Withdraw
                          </MDBTabsLink>
                      </MDBTabsItem>
                     
                  </MDBTabs>


                  <div className='cardmm'>

                      <MDBContainer className="my-3 d-flex flex-column carddepositwith ">




                          <MDBTabsContent>
                              <MDBTabsPane show={justifyActive === 'tab1'}>
                                  <div className='row justify-content-center'>
                                      <h6 className='para1 pt-4 pb-2'>---</h6>
                                      <div className='col-5 para3'><img src={yello} width="25rem" alt="..."/> <img src={blue} width="25rem" alt="..."/> <img src={green} width="25rem" alt="..."/></div>
                                  </div>



                                  <div className='row pt-3 pb-2 justify-content-evenly carddepositinside '>
                                    <div className='col-10 pt-2 pb-2'>
                                      <input placeholder='Enter an amount' className='enterammount'/>
                                    </div>

                                    <div className='col-10 pt-2 pb-2'>
                                      <button className='depbutton'>Deposit</button>
                                    </div>

                                    <div className='col-10 pt-2 pb-1'>
                                      <ul className='abcde'>
                                        <li>
                                          <p> Withdraw fee is 0.1%</p>
                                        </li>

                                         <li>
                                          <p> Forthe First time 24 hours after a deposit,there is an additional 5% withdraw fee</p>
                                          </li>
                                      </ul>
                                    </div>
                                  </div>




                              </MDBTabsPane>
                              <MDBTabsPane show={justifyActive === 'tab2'}>
                              <div className='row justify-content-center'>
                                      <h6 className='para1 pt-4 pb-2'>---</h6>
                                      <div className='col-5 para3'><img src={yello} width="20rem" alt="..."/> <img src={blue} width="20rem" alt="..."/> <img src={green} width="20rem" alt="..."/></div>
                                  </div>



                                  <div className='row pt-3 pb-3 justify-content-evenly '>
                                    <div className='col-10 pt-2 pb-2'>
                                      <input placeholder='Enter an amount' className='enterammount'/>
                                    </div>

                                    <div className='col-10 pt-1 pb-2'>
                                      <button className='depbutton'>Withdraw</button>
                                    </div>

                                    <div className='col-10 pt-1 pb-1'>
                                      <ul className='abcd'>
                                        <li>
                                          <p>
                                          Withdraw fee is 0.1%</p>
                                        </li>

                                         <li>
                                          <p> Forthe First time 24 hours after a deposit,there is an additional 5% withdraw fee</p>
                                          </li>
                                      </ul>
                                    </div>
                                  </div>

                              </MDBTabsPane>
                              
                          </MDBTabsContent>
                      </MDBContainer>



                  </div>
                  </div>                  


             </div>
 

{/* Apy reward section */}

             
              <div className='row justify-content-evenly pb-5 apy'>

                          

                      <div className='col-md-8 pt-3 pb-1'>
                            <h5 className="pb-3 pt-3">APY Rewards <i class="bi bi-coin"></i></h5>
                               {/* <button>Withdraw APY</button> */}
                                  <div className='cardapy'>
                                      <div className="row  justify-content-evenly">
                                          <div className="col-md-3 pt-3 para">
                                          <h6>APY Per Day</h6>
                                          <p className='para1'>0.00</p>
                                          </div>
                                          <div className="col-md-3 pt-3 para">
                                          <h6>APY Earned</h6>
                                          <p className="para1">0.00</p>
                                          </div>
                                          <div className="col-md-3 pt-3 para">
                                          <h6>Avilable to Withdraw</h6>
                                          <p className="para1">0.00</p>
                                          </div>
                                      </div>
                                  
                                  </div>
                       </div>

               </div>
              
</div>


  )
}

export default Main
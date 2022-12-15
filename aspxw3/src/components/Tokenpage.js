import { ethers } from 'ethers';
import { Link,Outlet } from 'react-router-dom';
import React, {useState,useEffect} from 'react';
import './tokenpage.css'
var web3



const networks = {
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org"
      ],
      blockExplorerUrls: ["https://bscscan.com"]
    }
  };
  
  const changeNetwork = async ({ networkName, setError }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks[networkName]
          }
        ]
      });
    } catch (err) {
      setError(err.message);
    }
  };










function Tokenpage() {



    const [errorMassage,setErrorMassage] = useState(null);
    const [defaultAccount,setDefaultAccount] = useState(null);
    const [userBalance,setUserBalance] = useState(null);
    const [connButtonText,setconnButtonText] = useState("Connect Wallet");


   

    const connectWalletHandler = () => {
        if (window.ethereum){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result=>{
                accountChangeHandler(result[0]);
                
            })

        }else {
            setErrorMassage("Install Metamask Extension..")
        }

    }

     const accountChangeHandler=(newAcount)=>{
        setDefaultAccount(newAcount);
        getUserBalance(newAcount.toString());
        setconnButtonText(newAcount.toString());
     }

     const getUserBalance = (address)=>{
        window.ethereum.request({method: 'eth_getBalance', params: [address,'latest']})
        .then(balance=>{
            setUserBalance(ethers.utils.formatEther(balance))
        })

     };

    window.ethereum.on('accountsChanged',accountChangeHandler);




   
   
   
   
    const [error, setError] = useState();

    const handleNetworkSwitch = async (networkName) => {
      setError();
      await changeNetwork({ networkName, setError });
    };
  
    const networkChanged = (chainId) => {
      console.log({ chainId });
      
    };
  
    useEffect(() => {
      window.ethereum.on("chainChanged", networkChanged);
  
      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged);
      };
    }, []);







  return (
    <div className='token'>
        
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
                                    
                                  Yield 
                                </a>
                               
                            </li>
                            <li className="nav-item">
                               <a className="nav-link" href="#">
                                   Boost
                                </a>
                             
                            </li>
                           

                        </ul>
                        {/* <form className="d-flex" role="search">

                           
       
                            <button id='connect' className="btn btn-outline-success text-white"  onClick={connectWalletHandler}>
                                {connButtonText}                               
                            </button>
                              
                          
                            </form> */}



                     <form className="d-flex" role="search id='connect_Butn'" style={{ marginRight: "5%" }}>
                            {/* <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            /> */}
                            <div className="dropdown" style={{marginRight:"17px"}}>
                                
                                <button className="btn btn-warning text-white dropdown-toggle" type="button" data-bs-toggle="dropdown"style={{backgroundColor:"black"}}> Select Network
                                </button>
                                {/* <button onClick={() =>handleNetworkSwitch("bsc")}>click</button> */}
                                <ul className="dropdown-menu">
                                     <li>
                                        <a className="dropdown-item"  onClick={() => handleNetworkSwitch("polygon")} >polygon</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item"  onClick={() => handleNetworkSwitch("bsc")}  >
                                          Binance 
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" >
                                            Sepolia
                                        </a>
                                    </li> 
                                     
                                </ul>
                            </div>
                            

                            <button id='connect' className="btn btn-outline-success text-white"  onClick={connectWalletHandler}>
                                {connButtonText}                               
                            </button>

                           
                       </form>






                    </div>
                </div>
            </nav>


  
  
  
     <div className='bas'>
        
        <div className='row justify-content-evenly text-white '>

          {/* <div className='col-3'></div> */}

               
              
                 
                  <div className='col-8 col-md-4 col-lg-2 col-lg-3 col-xl-3 p-2 text-center borderof'>
                    <Link to="Main">
                        <button className="mainpbutton  mx-3">Portfolio</button>
                    </Link>
                    <Link to="Platfrom">
                    <button className="mainpbutton">Platfrom</button></Link>
                    </div>

                    {/* <div className='col-2  text-center borderof'>
                    <Link className=' linkbb' to="/Platfrom">Platfrom</Link>
                  </div> */}
                 
                  {/* <div className='col-1'>
                    <Link className=' linkbb' to="/Platfrom">Platfrom</Link>
                  </div> */}
               
                
                    {/* <Link className=' linkbb' to="/Portfolio">Portfolio</Link>
                     <Link className=' linkbb' to="/Platfrom">Platfrom</Link> */}
                    
                    {/* <div>
                    <Link className='col-3 linkbb' to="/Portfolio">Portfolio</Link>
                     <Link className='col-3 linkbb' to="/Platfrom">Platfrom</Link>
                    </div> */}
                {/* <Link className='col-3 linkbb' to="/Portfolio">Portfolio</Link>
                <Link className='col-3 linkbb' to="/Platfrom">Platfrom</Link> */}
             

          </div>
        </div>

        <Outlet/>    
           


    </div>
   



   
  )
}

export default Tokenpage

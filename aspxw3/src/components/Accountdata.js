import { ethers } from 'ethers';
import React, {useState} from 'react';

function Accountdata() {

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


  return (
    <div>
        <h4>Connection to metamask</h4>
        <button onClick={connectWalletHandler}>{connButtonText}</button>
         <h6>Adress : {defaultAccount}</h6>
         <h6>Balance : {userBalance}</h6>
         <p>{errorMassage}</p>

    </div>
  )
}

export default Accountdata
import React,{ useEffect, useState } from 'react';
import {ethers} from "ethers";
import myabi from './abi.json';
//import Card from './Card';
import Web3 from 'web3';
import moment from 'moment';

export default function Donate() {
  const [address,setAddress]=useState(null);
  async function RequestAccounts()
  {
    if(window.ethereum && window.ethereum.isMetaMask)
    {
       const accounts = await window.ethereum.request({
        method:"eth_requestAccounts",
      });
      setAddress(accounts);
   //   console.log(accounts);
    }

  };
  RequestAccounts();
    const contractAddress="0x420E2a8D66b4a94Ec96329217F148e70e0338021";
    const web3 = new Web3(Web3.givenProvider);
    const contractInstance = new web3.eth.Contract(myabi, contractAddress);
    const [statecharity, setStatecharity] = useState([]);
    const charitites = [];
     useEffect(() => {
      const fetchData = async () => {
        const getcount = await contractInstance.methods.getcount().call(); 
        for (var i = 0; i <= getcount-1 ; i++) {
         const response = await contractInstance.methods.get(i).call();
        // console.log(i);
        charitites.push(response);
         }
        console.log(charitites[0].islive);
         // charitites.map(item => {
         //   console.log(item.description);
         //   // return <h1>{item[0]}</h1>;
         // })
        // console.log(charitites[0].title);
         //this.state = { charitites };
        // console.log(charitites);
        setStatecharity(charitites);
       // console.log(statecharity[0].title)
      }
    
      // call the function
      fetchData()
      
  });
  // async function main() {
     
  // }
  // main();

  const submitt =  async(e) => {
    e.preventDefault();
    console.log('hello World');
    const { campidd, donvalue } = e.target;
     console.log(donvalue.value);
     console.log(campidd.value);
     const response = await contractInstance.methods.donate(campidd.value).send({
      from: address[0],
      value: Web3.utils.toWei(donvalue.value, 'ether'),
    });
    
    // console.log(slive.value);
    // console.log(duration.value);
    // console.log(targetc.value);
  //  const  syresponse = await contractInstance.methods.withdrawCampaignFunds(withfunds.value).send({ from: address[0] });
}
  return (
    <>
    <body class="px-10 py-20">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Donate to charity projects around the world</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Charity for run connects nonprofits, donors, and companies in nearly every country in the world. We help fellow nonprofits access the funding, tools, training, and support they need to serve their communities. </p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
      </div>
    </div>
    {/* <!-- grid container --> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
    
    {statecharity.map((item,i) => {
      const cardddt=(
        <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-white dark:bg-gray-800">
            <h1 className="text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">{item.title}</h1>
            <h2 className="pt-2 text-xs leading-3 dark:text-gray-400 text-gray-600 dark:text-gray-500">Validity:  
             {
            moment.unix(item.deadline).toString()
            }
            </h2>
            <p className="pt-4 text-xs leading-4 text-gray-600 dark:text-gray-500" style={{height:'80px', overflow: 'hidden'}}>{item.description.length > 250 ?
    `${item.description.substring(0, 250)}...` : item.description
  }
            </p>
            
            <div className="mt-6">
            <p className="text-sm font-semibold text-indigo-700 leading-none  pb-1">Target: {item.target} ETH</p>
                <p className="text-sm font-semibold text-indigo-700 leading-none  pb-1">Balance: {Web3.utils.fromWei(item.balance, 'ether')} ETH</p>
            </div>
            <form action="" onSubmit={submitt}>
            <input type='hidden' name='campidd' value={i} className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5" style={{paddingLeft:'10px'}}/>
            <input type='text' placeholder='Enter Amount in Ethers to Donate' name='donvalue' className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5" style={{paddingLeft:'10px'}}/>
            <button className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5">Donate</button>
            </form>
        </div>
    </div>
      );  
      if(item.islive === true)
     return cardddt; 
    })}
    
    </div>
</body>
    </>
  )
}

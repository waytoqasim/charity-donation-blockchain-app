import React,{ useEffect, useState } from 'react';
import myabi from './abi.json';
import Web3 from 'web3';

export default function Withdrawfunds() {
    const contractAddress="0x420E2a8D66b4a94Ec96329217F148e70e0338021";
    const web3 = new Web3(Web3.givenProvider);
    const contractInstance = new web3.eth.Contract(myabi, contractAddress);
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
    const submitt =  async(e) => {
        e.preventDefault();
        console.log('hello World');
        const { withfunds } = e.target;
        // console.log(title.value);
        // console.log(desc.value);
        // console.log(slive.value);
        // console.log(duration.value);
        // console.log(targetc.value);
        const  syresponse = await contractInstance.methods.withdrawCampaignFunds(withfunds.value).send({ from: address[0] });
    }
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
  return (
    <>
<div class="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
    <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

        <div class="m-auto space-y-8 md:w-8/12 lg:">
            
            <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
                <div class="p-6 sm:p-16">
                    <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Withdraw Funds</h2>
                    <form action="" onSubmit={submitt} class="space-y-8">
                       

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Select Campaign</label>
                            <select  name="withfunds" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            >
                               {statecharity.map((itemcharity, index) => (
        <option value={index}> {itemcharity.title} </option>
      ))}
                                
                                </select>
                        </div>


                        <button type="submit" 
                                class="w-full py-3 px-6 rounded-md bg-sky-600
                                    focus:bg-sky-700 active:bg-sky-500">
                            <span class="text-white">Continue</span>
                        </button>

                       
                    </form>
                </div>
            </div>
          
        </div>
    </div>
</div>                           
    </>
  )
}

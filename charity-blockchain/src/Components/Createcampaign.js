import React, { useState } from "react";import myabi from './abi.json';
import Web3 from 'web3';

export default function Createcampaign() {
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
        const { title, desc, slive, duration, targetc } = e.target;
        // console.log(title.value);
        // console.log(desc.value);
        // console.log(slive.value);
        // console.log(duration.value);
        // console.log(targetc.value);
        const  syresponse = await contractInstance.methods.setcampaign(title.value, desc.value, slive.value ,duration.value, targetc.value).send({ from: address[0] });
    }
  return (
    <>
<div class="relative py-16
                before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200">
    <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">

        <div class="m-auto space-y-8 md:w-8/12 lg:">
            
            <div class="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
                <div class="p-6 sm:p-16">
                    <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Create Campaign</h2>
                    <form action="" onSubmit={submitt} class="space-y-8">
                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">TITLE</label>
                            <input  type="Text" name="title" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Description</label>
                            <input  type="text" name="desc" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Set Live</label>
                            <select  name="slive" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            >
                                <option value="true">
                                    True
                                </option>
                                <option value="false">
                                    False
                                </option>
                                </select>
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Campaign Duration</label>
                            <input  type="number" name="duration" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <div class="space-y-2">
                            <label for="email" class="text-gray-700">Campaign Target</label>
                            <input  type="number" name="targetc" id="email" 
class="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
    focus:ring-2 focus:ring-sky-300 focus:outline-none
    invalid:ring-2 invalid:ring-red-400"
                            />
                        </div>

                        <button type="submit" 
                                class="w-full py-3 px-6 rounded-md bg-sky-600
                                    focus:bg-sky-700 active:bg-sky-500">
                            <span class="text-white">Continue</span>
                        </button>
                        <p class="border-t pt-6 text-sm">
                            Campaign Ended ? 
                            <a href="/withdrawfunds" class="text-sky-500"> Withdraw funds</a>
                        </p>
                       
                    </form>
                </div>
            </div>
          
        </div>
    </div>
</div>                           
    </>
  )
}

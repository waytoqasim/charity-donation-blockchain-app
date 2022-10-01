import React from 'react'
 import moment from 'moment';
 import web3 from 'web3';
export default function Card(props) {
    return (
        <>
         {/* <!-- product card --> */}
         <div className="flex items-center justify-center py-8 px-4">
                    <div className="md:w-96 rounded shadow-lg py-4 px-5 bg-white dark:bg-gray-800">
                        <h1 className="text-lg font-bold leading-4 text-gray-800 dark:text-gray-100">{props.datta.title}</h1>
                        <h2 className="pt-2 text-xs leading-3 dark:text-gray-400 text-gray-600 dark:text-gray-500">Validity:  
                         {
                        moment.unix(props.datta.deadline).toString()
                        }
                        </h2>
                        <p className="pt-4 text-xs leading-4 text-gray-600 dark:text-gray-500">{props.datta.description}
                        {props.datta.kkk}
                        </p>
                        
                        <div className="mt-6">
                        <p className="text-sm font-semibold text-indigo-700 leading-none  pb-1">Target: {props.datta.target} ETH</p>
                            <p className="text-sm font-semibold text-indigo-700 leading-none  pb-1">Balance: {web3.utils.fromWei(props.datta.balance, 'ether')} ETH</p>
                        </div>
                        <form method='' onSubmit={props.callcamp}>
                        <input type='hidden' name='campidd' value={props.campid} className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5" style={{paddingLeft:'10px'}}/>
                        <input type='text' name='donvalue' className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5" style={{paddingLeft:'10px'}}/>
                        <button className="focus:outline-none text-indigo-700 hover:opacity-50 bg-gray-100 text-sm font-medium py-3 w-full rounded mt-5">Donate</button>
                        </form>
                    </div>
                </div>
        </>
      )
}

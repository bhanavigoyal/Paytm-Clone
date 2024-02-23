import {useSearchParams} from "react-router-dom"
import axios from "axios"
import { useState } from "react";

export const SendMoney=()=>{

    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const [amount, setAmount] = useState(0);

    return <div className="flex justify-center h-screen bg-gray-200">
        <div className="h-full flex flex-col justify-center">
            <div className="border h-min shadow-lg rounded-lg w-96 space-y-8 bg-white max-w-md">
                <div className="flex flex-col space-y-1.5 pt-6">
                    <h2 className="text-center text-3xl font-bold">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-green-500 h-12 w-12 flex items-center justify-center">
                            <span className="text-white text-2xl">{name[0].toUpperCase()}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name.toUpperCase()}</h3>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Amount (in Rs.)
                        </label>
                        <input onChange={(e)=>{
                            setAmount(e.target.value);
                        }} type="number" placeholder="Enter amount" id="amount" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"/>
                    </div>
                    <button onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to: id,
                            amount
                        },{
                            headers:{
                                Authorization: "Bearer "+ localStorage.getItem("token")
                            }
                        })
                    }} className="text-white bg-green-500 w-full px-2 py-2 h-10 rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 mt-3">
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    </div>
}
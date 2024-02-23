import { useEffect, useState } from "react"
import {AppBar} from "../components/AppBar"
import {Balance} from "../components/Balance"
import {Users} from "../components/Users"
import axios from "axios"

export function Dashboard(){
    const [amount, setAmount] = useState("");
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: ""
    });

    const authToken = localStorage.getItem('token');

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);

        }else{
            console.error("User not found")
        }
    }, []);

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization: `Bearer ${authToken}`
            }
        })
            .then(response=>{
                setAmount(response.data.balance)
            })
    },[amount])

    return <div className="h-screen bg-white flex flex-col">
            <AppBar name={user.firstName}/>
            <Balance value={amount}/>
            <div className="mx-6">
            <Users/>
            </div>
        </div>
}
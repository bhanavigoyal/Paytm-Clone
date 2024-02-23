import { useEffect, useState } from "react"
import { Button } from "./Button"
import { useNavigate } from "react-router-dom";
import  axios  from "axios";


export function Users(){

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
            .then(response=>{
                setUsers(response.data.user)
            })
    },[filter])

    return <div>
        <div className="font-bold text-lg mt-6">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e)=>{
                setFilter(e.target.value)
            }} type="text" placeholder="Search Users.." className="w-full px-2 py-1 border rounded border-slate-200"/>
        </div>
        <div>
            {users?.map(user=><User key={user._id} user={user}/>)}
        </div>
    </div>
}

function User({user}){
    const navigate=useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
        <div className="flex flex-col justify-center h-full">
            <div className="rounded-full bg-slate-200 h-10 w-10 flex flex-col mr-4 items-center justify-center">
                {user.firstName[0]}
            </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
        </div>
        <div className="flex flex-col justify-center h-full">
            <Button onClick={(e)=>{
                navigate("/send?id="+ user._id+ "&name="+ user.firstName);
            }} label={"Send Money"}/>
        </div>
    </div>
}
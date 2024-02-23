import { useState } from "react"
import { Button } from "./Button"

const [users, setUsers] = useState([{
    firstName:"Bhanavi",
    lastName:"Goyal",
    _id: 1
}])

export function Users(){
    return <div>
        <div className="font-bold text-lg mt-6">
            Users
        </div>
        <div className="my-2">
            <input type="text" placeholder="Search Users.." className="w-full px-2 py-1 border rounded border-slate-200"/>
        </div>
        <div>
            {users.map(user=><User user={user}/>)}
        </div>
    </div>
}

function User({user}){
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
            <Button label={"Send Money"} to = "/send"/>
        </div>
    </div>
}
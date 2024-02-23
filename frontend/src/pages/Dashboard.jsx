import {AppBar} from "../components/AppBar"
import {Balance} from "../components/Balance"

export function Dashboard(){
    return <div className="h-screen bg-white flex flex-col">
            <AppBar/>
            <Balance/>
            {/* <Users/> */}
        </div>
}
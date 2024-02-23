export const SendMoney=()=>{
    return <div className="flex justify-center h-screen bg-gray-200">
        <div className="h-full flex flex-col justify-center">
            <div className="border h-min shadow-lg rounded-lg w-96 space-y-8 bg-white max-w-md">
                <div className="flex flex-col space-y-1.5 pt-6">
                    <h2 className="text-center text-3xl font-bold">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-green-500 h-12 w-12 flex items-center justify-center">
                            <span className="text-white text-2xl">A</span>
                        </div>
                        <h3 className="text-2xl font-semibold">Friend's Name</h3>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Amount (in Rs.)
                        </label>
                        <input type="number" placeholder="Enter amount" id="amount" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"/>
                    </div>
                    <button className="text-white bg-green-500 w-full px-2 py-2 h-10 rounded-md text-sm font-medium hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 mt-3">
                        Initiate Transfer
                    </button>
                </div>
            </div>
        </div>
    </div>
}
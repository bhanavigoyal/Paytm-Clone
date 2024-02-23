export function Balance({value}){
    return <div className="flex pt-2">
        <div className="font-bold text-lg ml-4">
            Your balance:
        </div>
        <div className="font-semibold text-lg ml-4">
            Rs. {value}
        </div>
    </div>
}
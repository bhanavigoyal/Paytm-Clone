export function InputBox({onChange, name, label, placeholder}){
    return <>
    <div className="font-medium text-sm text-left py-2 ">
        {label}
    </div>
    <input name={name} onChange={onChange} placeholder={placeholder} className="w-full py-1 pl-2 border rounded border-slate-200"></input>
    </>
}
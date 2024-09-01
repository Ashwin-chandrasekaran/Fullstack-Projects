export default function Inputbox({label,placeholder,onchange}){
    return(
        <>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
            <input label={label} onChange={onchange} placeholder={placeholder} className="w-full rounded px-2 py-1 border border-slate-200"></input>
        </>    
    )
}
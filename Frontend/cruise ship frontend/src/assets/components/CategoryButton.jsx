export default function CategoryButton({label,onClick}){
    return(
        <div>
            <button onClick={onClick} className="w-40 h-24 bg-blue-500 text-white">{label}</button>
        </div>
    )
}
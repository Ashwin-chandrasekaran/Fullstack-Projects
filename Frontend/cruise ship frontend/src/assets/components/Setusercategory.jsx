export default function Setusercategory({onChange}){
    const usercategories=["Admin","User","Supervisor","Manager","Headcook"]
    return(
        <div className="pt-6 flex flex-row">
            <p className="ml-0 mr-4 text-sm font-medium ">Select category</p>
            <select onChange={onChange} className="focus:outline:none border-2 border-stone-950">
                {usercategories.map(category=>(
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}
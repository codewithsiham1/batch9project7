
import { FaRegCircleUser } from "react-icons/fa6";
const Banner = () => {
    return (
        <div className="flex justify-between" >
         <div>
            <a className="text-2xl font-bold">Recipe Calories</a>
         </div>
         <div className="flex text-xl font-bold gap-2">
            <a>Home</a>
            <a>Receips</a>
            <a>About</a>
            <a>Search</a>
         </div>
         <div className="w-20 flex gap-2 md:w-auto ">
            <input className="bg-slate-200 border border-gray-500 focus:outline-none  rounded-xl p-1" type="text" placeholder="search" />
            <p className="bg-[#0BE58A] rounded-xl text-3xl text-black"><FaRegCircleUser /></p>
         </div>
        
        </div>
    );
};

export default Banner;
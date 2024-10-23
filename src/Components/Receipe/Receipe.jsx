import { useEffect, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FaFireAlt } from "react-icons/fa";
const Receipe = ({recepeaddQue}) => {
    const[receipe,setReceipe]=useState([]);
    useEffect(()=>{
        fetch('class.json')
        .then(res=>res.json())
        .then(data=>setReceipe(data))
    },[])
   
    return (
        <div className=" md:w-2/3 mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-xl">
           {
                receipe.map(receipe=>
                <div key={receipe.RecipeID} className="card bg-base-100  border-2">
                    <figure className="px-8 pt-6">
                      <img className=" md:h-52 w-full rounded-xl"
                        src={receipe.RecipeImage}
                        alt="card" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-xl font-bold text-gray-800 ">{receipe.RecipeName}</h2>
                      <p className="text-gray-600 text-base">{receipe.ShortDescription}</p>
                      <h3 className="text-lg text-gray-800 font-medium">Ingredients:{receipe.Ingredients.length}</h3>
                      <ul className="ml-8">
                        {
                            receipe.Ingredients.map((item,index)=><li className="list-disc text-gray-600" key={index}>{item}</li>)
                        }
                      </ul>
                      <div className="flex gap-4">
                      <div className="flex items-center">
                      <IoMdTime />
                      <p>{receipe.PreparingTime}</p>
                      </div>
                      <div className="flex items-center">
                      <FaFireAlt />
                      <p>{receipe.Calories}</p>
                      </div>
                      </div>
                      <div className="card-actions ">
                        <button onClick={()=>recepeaddQue(receipe)} className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium">Want To Cook</button>
                      </div>
                    </div>
                  </div>)
            }
           </div>
        </div>
    );
};

export default Receipe;
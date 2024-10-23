


const Sidebar = ({receipeque,handleRemove,preparedRecipe,calculateTimeandCalories,totaltime,totalcalories}) => {
    return (
        <div className="md:w-1/3 mx-auto border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
          
            {/* watn to cook table */}
            <div className="overflow-x-auto">
              <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800  text-center pb-2">Want To Cook:{receipeque.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Caleroies</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   {receipeque.map((receipe,index)=>(
     <tr className="hover" key={index}>
     <th>{index + 1}</th>
     <td>{receipe.RecipeName}</td>
     <td>{receipe.PreparingTime}</td>
     <td>{receipe.Calories }</td>
     <td>
  <button 
    onClick={() => {
      handleRemove(receipe.RecipeID); 
      calculateTimeandCalories(receipe.PreparingTime,receipe.Calories);
    }}  
    className="bg-green-400 px-2 py-1 text-gray-800 font-medium">
    Preparing
  </button>
</td>
   </tr>
))}
    </tbody>
  </table>
</div>
            {/* current cook table */}
            <div className="overflow-x-auto">
              <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800  text-center pb-2">Currently Cooking:{preparedRecipe.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Caleroies</th>
      </tr>
    </thead>
    <tbody>
   {preparedRecipe.map((receipe,index)=>(
     <tr className="hover" key={index}>
     <th>{index + 1}</th>
     <td>{receipe.RecipeName}</td>
     <td>{receipe.PreparingTime}</td>
     <td>{receipe.Calories }</td>
   </tr>
))}
<tr className="border-none">
<th></th>
     <td></td>
     <td>Total Time={totaltime}</td>
     <td>Total Calories={totalcalories}</td>
</tr>
    </tbody>
  </table>
</div>
           {/*  */}
        </div>
    );
};

export default Sidebar;
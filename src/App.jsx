
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Image from './Components/Image/Image'
import Main from './Components/Main/Main'
import Receipe from './Components/Receipe/Receipe'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
 const [receipeque,setReceipeQue]=useState([])
 const [preparedRecipe,setPreparedRecipe]=useState([])
const [totaltime,setTotalTime]=useState(0)
const [totalcalories,setTotalCalories]=useState(0)
 const recepeaddQue=(receipe)=>{
  const isExist=receipeque.find(previousReceipe=>previousReceipe.RecipeID===receipe.RecipeID)
  if(!isExist){
    setReceipeQue([...receipeque,receipe])
  }
 else{
  alert('recepe allready excist')
 }
 }
  const handleRemove=id=>{
// find which recipe to remove
const deletedRecipe=receipeque.find(receipe=>receipe.RecipeID===id)
// remove want to cook table
const updatedQueue=receipeque.filter(receipe=>receipe.RecipeID!==id)
setReceipeQue(updatedQueue)
setPreparedRecipe([...preparedRecipe,deletedRecipe])
  }
const calculateTimeandCalories=(time,calories)=>{
  setTotalTime(totaltime+time)
  setTotalCalories(totalcalories+calories)
}
  return (
    <div className='w-10/12 mx-auto items-center p-4 px-4'>
     
    <Banner></Banner>
    <Main></Main>
    <Image></Image>
    {/* receipe card section */}
    <section className='flex flex-col md:flex-row gap-6'>
      {/* cards section */}
      <Receipe recepeaddQue={recepeaddQue} ></Receipe>
      {/* side bar */}
      <Sidebar handleRemove={handleRemove} receipeque={receipeque} preparedRecipe={preparedRecipe} calculateTimeandCalories={calculateTimeandCalories} totaltime={totaltime} totalcalories={totalcalories}></Sidebar>
    </section>
    </div>
  )
}

export default App

import ExpenseList from "../components/ExpenseList"
import Navbar from "../components/Navbar"

export default function Homepage(){
    const expenses=[
  {
    amount:"2000",
    shooping:"Grocery Shoping",
    date:"17 Nov 2026",
    category:"Food"
  },
  {
    amount:"1500",
    shooping:"Clothes Shopping",
    date:"16 Nov 2026",
    category:"Shooping"
  },
  {
    amount:"800",
    shooping:"Vegitable",
    date:"15 Nov 2026",
    category:"Food"
  }
]
return(
<>
<Navbar/>
<ExpenseList expenses={expenses}/>
</>)};

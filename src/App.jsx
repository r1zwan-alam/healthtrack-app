import {useState} from "react"

export default function App(){

const [weight,setWeight]=useState(51.2)

return(

<div style={{fontFamily:"Arial",padding:20}}>

<h2>HealthTrack</h2>

<p>Weight {weight} kg</p>

<button onClick={()=>setWeight(weight+0.2)}>
Add Weight
</button>

</div>

)
}

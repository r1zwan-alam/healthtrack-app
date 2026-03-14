import { useState } from "react"
import { profile, metrics, meals, shopping, actions } from "./data"

export default function App() {

  const [tab, setTab] = useState("home")

  return (

    <div style={{ fontFamily:"Arial", padding:20 }}>

      <h2>HealthTrack</h2>

      {tab === "home" && (
        <div>
          <h3>{profile.name}</h3>
          <p>Weight {profile.weight} kg</p>
          <p>Target {profile.target} kg</p>
          <p>BMI {profile.bmi}</p>
        </div>
      )}

      {tab === "metrics" && (
        <div>
          <h3>Body Metrics</h3>
          {metrics.map(m =>
            <p key={m.name}>
              {m.name} : {m.value} ({m.status})
            </p>
          )}
        </div>
      )}

      {tab === "meals" && (
        <div>
          <h3>Meal Plan</h3>
          {meals.map((m,i)=>
            <p key={i}>{m}</p>
          )}
        </div>
      )}

      {tab === "shop" && (
        <div>
          <h3>Shopping List</h3>
          {shopping.map((s,i)=>
            <p key={i}>{s}</p>
          )}
        </div>
      )}

      {tab === "plan" && (
        <div>
          <h3>Action Plan</h3>
          {actions.map((a,i)=>
            <p key={i}>{a}</p>
          )}
        </div>
      )}

      <div style={{ marginTop:30 }}>
        <button onClick={()=>setTab("home")}>Home</button>
        <button onClick={()=>setTab("metrics")}>Metrics</button>
        <button onClick={()=>setTab("meals")}>Meals</button>
        <button onClick={()=>setTab("shop")}>Shop</button>
        <button onClick={()=>setTab("plan")}>Plan</button>
      </div>

    </div>

  )
}

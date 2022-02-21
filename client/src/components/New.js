import React, {useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import {MultiSelect} from "react-multi-select-component";

const New = (props) =>{

    const [meatsSelected, setMeatsSelected] = useState([]);
    const [carbsSelected, setCarbsSelected] = useState([]);
    const [veggiesSelected, setVeggiesSelected] =useState([]);
    const [name, setName] = useState("");
    const [errors, setError] = useState({});
    const meats =[
        {label: "Fish", value: "fish"},
        {label: "Steak", value: "steak"},
        {label: "Hamburger", value: "burger"},
        {label: "Chicken", value: "chicken"},
        {label: "Pork", value: "pork"},
        {label: "Vegetarian", value: "vegetarian"},
    ];
    
    const carbs =[
    {label: "Noodles", value: "noodles"},
    {label: "Fries", value: "fries"},
    {label: "Rice", value: "rice"},
    {label: "Potatoes", value: "potatoes"},
    {label: "Chips", value: "chips"},
    {label: "Tortillas", value: "tortilla"},
    ];
    
    const veggies =[
        {label: "Peas", value: "peas"},
        {label: "Broccoli", value: "broccoli"},
        {label: "Green Beans", value: "greenBeans"},
        {label: "Spinach", value: "spinach"},
        {label: "Cauliflower", value: "cauliflower"},
        {label: "Salad", value: "salad"},
    ];


    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/recipes",
        {
            name,
            meatsSelected,
            carbsSelected,
            veggiesSelected
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })

    }

    return(
        <div>
            
            <header style={{borderBottom:"5px double lightgray", padding:"10px", margin:"10px"}}>
                <h1 style={{fontSize:"50px", marginLeft:"450px", marginRight:"450px"}}>Add a recipe!</h1>
                <Link to={"/"}>Return Home</Link>
            </header>

            <form onSubmit={submitHandler}>

                <div>
                    <label>Name:</label>
                    <input checked={name} onChange={(e)=>setName(e.target.value)} type="text" />
                    {errors.name?
                        <span>{errors.name.message}</span>
                        :null}
                </div>
                <div>
                <h3>Select Meats</h3>
                <MultiSelect
                    options={meats}
                    value={meatsSelected}
                    onChange={setMeatsSelected}
                    labelledby="Select" />
                </div>
                <div>
                <h3>Select Carbs</h3>
                <MultiSelect
                    options={carbs}
                    value={carbsSelected}
                    onChange={setCarbsSelected}
                    labelledby="Select" />
                </div>
                <div>
                <h3>Select Veggies</h3>
                <MultiSelect
                options={veggies}
                value={veggiesSelected}
                onChange={setVeggiesSelected}
                labelledby="Select" />
                </div>
            

            <button>Mmm... that sounds good!</button>


            </form>
            
        </div>
    )
}


export default New;
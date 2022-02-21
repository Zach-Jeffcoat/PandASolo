import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import Header from './Header';
import {MultiSelect} from 'react-multi-select-component';


const EditRecipe = (props)=>{

    const {id} = props;
    const [meatsSelected, setMeatsSelected] = useState([]);
    const [carbsSelected, setCarbsSelected] = useState([]);
    const [veggiesSelected, setVeggiesSelected] =useState([]);
    const [name, setName] = useState("");
    const [errors, setError] = useState({})
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


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Recipes/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                res.data.name && setName(res.data.name);
                res.data.meatsSelected && setMeatsSelected(res.data.meatsSelected);
                res.data.carbsSelected && setCarbsSelected(res.data.carbsSelected);
                res.data.veggiesSelected && setVeggiesSelected(res.data.veggiesSelected);
                
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [id])

const editSubmitHandler = (e)=>{
    e.preventDefault();

    axios.put(`http://localhost:8000/api/Recipes/${id}`,
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

            <Header
                link={"/"}
                linkText={"Return Home"}
                titleText={`Edit ${name}!`}
            />
            <div>
                    <label>Name:</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" />
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
                    {errors.meatsSelected?
                        <span>{errors.meatsSelected.message}</span>
                        :null}
                </div>
                <div>
                <h3>Select Carbs</h3>
                <MultiSelect
                    options={carbs}
                    value={carbsSelected}
                    onChange={setCarbsSelected}
                    labelledby="Select" />
                    {errors.carbsSelected?
                        <span>{errors.carbsSelected.message}</span>
                        :null}
                </div>
                <div>
                <h3>Select Veggies</h3>
                <MultiSelect
                options={veggies}
                value={veggiesSelected}
                onChange={setVeggiesSelected}
                labelledby="Select" />
                {errors.veggiesSelected?
                        <span>{errors.veggiesSelected.message}</span>
                        :null}
                </div>

            <button onClick={editSubmitHandler}>Aaaaaand done!</button>
        </div>

    )
}


export default EditRecipe;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const All = (props) =>{


    const [RecipeList, setRecipeList] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/Recipes")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setRecipeList(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    } , []);

    const deleteHandler= (id) =>{
        axios.delete(`http://localhost:8000/api/recipes/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setRecipeList(RecipeList.filter((Recipe, index)=>Recipe._id !== id))
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    return(
        <div style={{textAlign:"center"}}>
            <header>
                <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray", 
                marginLeft:"450px", marginRight:"450px"}}>MERN (Meal Express Randomization Network)</h1>
                <Link to={"/new"}>Add a New Recipe</Link>
            </header>
            {
                RecipeList.map((Recipe, index)=>(
                    <div key={index}>
                        <Link to={`/recipes/${Recipe._id}`}>
                            <p>{Recipe.name}</p>
                        </Link>
                        <div>
                            <button onClick={()=>deleteHandler(Recipe._id)}> Delete </button>
                        </div>
                    </div>
                ))
            }
            <div>
                {RecipeList.length !== 0 && (<Link to={`/recipes/${RecipeList.at(Math.floor(Math.random() * RecipeList.length))._id}`}>
                        <p>LOL SO RANDOM</p>
                    </Link>)
                }

                </div>
        </div>
    )
}




export default All;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Header from './Header';




const One = (props) =>{

    const {id} = props;
    const [recipe, setRecipe] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/recipes/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setRecipe(res.data);
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])


    const deleteRecipe = () =>{

        axios.delete(`http://localhost:8000/api/recipes/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err)
            })

    }


    return(
        <div>
            <div style={{textAlign:"center"}}>
                <Header
                link={"/"}
                linkText={"Return Home"}
                titleText={`${recipe.name}`}
                />
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Meats</th>
                            <th>Carbs</th>                                
                            <th>Veggies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{recipe.name}</td>
                            {recipe.meatsSelected && recipe.meatsSelected.map((label) => <td>{label.label}!</td>)}
                            {recipe.carbsSelected && recipe.carbsSelected.map((label)=> <td>{label.label}</td>)}
                            {recipe.veggiesSelected && recipe.veggiesSelected.map((label)=> <td>{label.label}</td>)}
                        </tr>
                    </tbody>
                </table>
            <button onClick={deleteRecipe}> Not in the mood! </button>
            <Link to="Change">change this</Link>
            </div>
        </div>
    )
}


export default One;
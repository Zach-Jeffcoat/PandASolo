// import React, {useState} from 'react';
// import {MultiSelect} from "react-multi-select-component";

// const meats =[
//     {label: "Fish", value: "fish"},
//     {label: "Steak", value: "steak"},
//     {label: "Hamburger", value: "burger"},
//     {label: "Chicken", value: "chicken"},
//     {label: "Pork", value: "pork"},
//     {label: "Vegetarian", value: "vegetarian"},


//     {label: "Noodles", value: "noodles"},
//     {label: "Fries", value: "fries"},
//     {label: "Rice", value: "rice"},
//     {label: "Potatoes", value: "potatoes"},
//     {label: "Chips", value: "chips"},
//     {label: "Tortillas", value: "tortilla"},


//     {label: "Peas", value: "peas"},
//     {label: "Broccoli", value: "broccoli"},
//     {label: "Green Beans", value: "greenBeans"},
//     {label: "Spinach", value: "spinach"},
//     {label: "Cauliflower", value: "cauliflower"},
//     {label: "Salad", value: "salad"},
// ];

// const Menu = (props) => {
//     const [meatsSelected, setMeatsSelected] = useState([]);
//     const [carbsSelected, setCarbsSelected] = useState([]);
//     const [veggiesSelected, setVeggiesSelected] =useState([]);

//     return(
//         <div>
//             <div>
//                 <h3>Select Meats</h3>
//                 <MultiSelect
//                     options={meats}
//                     value={meatsSelected}
//                     onChange={setMeatsSelected}
//                     labelledby="Select" />
//             </div>
//             <div>
//                 <h3>Select Carbs</h3>
//                 <MultiSelect
//                     options={carbs}
//                     value={carbsSelected}
//                     onChange={setCarbsSelected}
//                     labelledby="Select" />
//             </div>
//             <div>
//             <h3>Select Veggies</h3>
//             <MultiSelect
//                 options={veggies}
//                 value={veggiesSelected}
//                 onChange={setVeggiesSelected}
//                 labelledby="Select" />
//             </div>
//         </div>
//     )
// }

// export default Menu;
import React, { useState ,useEffect} from 'react';
import InputCard from "../../components/input card";
import TodosCard from "../../components/todos card/TodosCard";
import axios from 'axios';


function HomePage(props) {

    const [data , setData]= useState([  ]); 
    const [value , setValue] = useState(""); 

    const handelChange = (e)=> {
        setValue(e.target.value)            
    }
    const fetchData = async () =>{
        try {
         const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
         setData(response.data);
         console.log(response.data, "response")
    
      } catch (e) {
        console.log(e , "e")
      }
    }
    useEffect (() => {
    fetchData();
    console.log(data ,"data")
      },[])
   
    const insert =() => {
    setData( 
        (pre)=> [ {id:Math.random() , userId: 1, completed: false ,title: value}, ...pre ]);
        // const handelDelete = () => {
          
        // }
    }
    return (
        <div>
            <h1 style={{ color: '#eeff'}}>ToDo List </h1>
            {/* <InputCard onchange={handelChange} onclick={insert}/> */}
            {/* <TodosCard data={data} onClick={handelDelete}/> */}
        </div>
    );
}

export default HomePage;
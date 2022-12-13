import { useEffect, useState } from "react";
import { ClassObj } from "./ClassesInter";

function Classes(){
    
    const [classes,setClasses] = useState([]);
    const [pickedClass, setPickedClass] = useState(String);

    useEffect(()=>{
        fetch('https://localhost:7007/api/classes')
            .then((response)=> response.json())
            .then((data)=>{
                console.log(data);
                setClasses(data);
            })
            .catch((err)=>{
                console.log(err);
                
            })
    },[]);
    
    
    
    return (
        <div className="Classes-Component">
        <h4>Classes</h4>    
        <select>
        {classes.map((option:ClassObj)=>{
      return (
        <option key={option.classname}>{option.classname}</option>
      )
    })}
        </select>
        
        </div>
    )
}


export default Classes

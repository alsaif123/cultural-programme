import React, { useEffect, useState } from 'react';
import './Informations.css'
import Information from '../Information/Information';
import Header from '../Header/Header';


const Informations = () => {
    const[informations, setInformations] = useState([]);
    

    useEffect(()=>{
       fetch('./Data.JSON')
       .then(res => res.json())
       .then(data => setInformations(data))
    },[]);
    
    const [student, setStudent] = useState([]);

    const addStudent = (informations) => {
        
       const newStudent = [...student,informations] 
       console.log(newStudent)
       setStudent(newStudent)        
      
    }



    return (
       <>
        <Header student={student}></Header>
        <div className="container">
            
            {
                informations.map(information =><Information
                key ={information.Id}
                    information ={information}
                    addStudent = {addStudent}
                ></Information>)
            }
    
        </div>
        </>
    );
};

export default Informations;
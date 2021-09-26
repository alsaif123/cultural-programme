import React, { useState } from 'react';
import './Information.css'

const Information = (props) => {
      
    const [isClicked, setIsClicked] = useState(false);
    


     const {name, img, Id, age, taka} = props.information;
    return (
        
        <div className="style">

           
<h1>Name : {name}</h1>
            <p><img src={img} alt="" /></p>
            <h3>ID : {Id}</h3>
            <h4>Age : {age}</h4>
            <h4>Taka : {taka}
            <br />
            <button  disabled={isClicked} onClick={()=>{
                props.addStudent(props.information)
                setIsClicked(true)
            }} className="btn"> {isClicked ? "✓Paid" : "Pay"}</button>
            </h4>


        </div>
    );
};

export default Information;

// <i class="far fa-money-bill-alt"></i> 
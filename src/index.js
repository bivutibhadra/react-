
import React from 'react';
import ReactDOM from 'react-dom';

/* const todoTitle = "Bivuti BHadra"
 */const todoAddress= "House : 4/3/1-Mohonpur,Ring raod,Adabor,Shyamoli,Dhaka-1207"
const todoPhone = "Phone no : 01303244412"
const date = new Date();
const currentdate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();

const heddingStyle = {
  backgroundColor:"purple",
  color:"white",
  textAlign :"center",
  padding:"15px"
}



ReactDOM.render(
<div> 
  <h1 style={heddingStyle}>Bivuti Vushan BHadra</h1>
{/*   <h1 >{todoTitle}</h1>
 */}  <p>{todoAddress}</p>
  <p>{todoPhone}</p>
  <p>{"Date : "+currentdate + "/"+currentMonth +"/"+currentYear}</p>
</div>,
  document.getElementById('root')
);
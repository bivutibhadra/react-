

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
 
 
 function Card(props){
   return <div className="card"> 
   <h2 className="cardTitle">{props.todoName}</h2>
   <h3 className="cardTitle">{props.todoAddress}</h3>
     <p className="cardDesc">{props.todoPhone}</p>
     <p className="cardFooter">{"Date : "+currentdate + "/"+currentMonth +"/"+currentYear}</p>
   </div>
 }

 export default Card;
 


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
const {todoName,todoAddress,todoPhone} = props;
   return <div className="card"> 
   <h2 className="cardTitle">{todoName}</h2>
   <h3 className="cardTitle">{todoAddress}</h3>
     <p className="cardDesc">{todoPhone}</p>
     <p className="cardFooter">{"Date : "+currentdate + "/"+currentMonth +"/"+currentYear}</p>
   </div>
 }

 export default Card;
 
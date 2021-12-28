import React from "react";
import Card from "./components/Card";
import Data from './data.json';

function App(){

let items=[];
/* for(let x=0;x<Data.length;x++){
    items.push(<Card todoName={Data[x].title} todoAddress="House : 4/3/1-Mohonpur,Ring raod,Adabor,Shyamoli,Dhaka-1207"todoPhone={Data[x].desc}/>)
} */

/* mapping */

return <div>
{/* hedding start */}
<h1 class="headingStylepub">**&nbsp;M &nbsp;Y &nbsp;&nbsp; D &nbsp;E &nbsp;S &nbsp;I &nbsp;G &nbsp;  N&nbsp;**</h1>
{/* hedding end */}
{Data.map((item, index)=> <Card key={index} todoName={item.title} todoAddress="House : 4/3/1-Mohonpur,Ring raod,Adabor,Shyamoli,Dhaka-1207"todoPhone={item.desc}/>)} 
</div>


    
}

export default App;
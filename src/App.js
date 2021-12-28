import React from "react";
import Card from "./components/Card";
import Data from './data.json';

function App(){
return <div>
<div> 
<h1 class="headingStylepub">**&nbsp;M &nbsp;Y &nbsp;&nbsp; D &nbsp;E &nbsp;S &nbsp;I &nbsp;G &nbsp;  N&nbsp;**</h1>

<Card todoName={Data[0].title} todoAddress="House : 4/3/1-Mohonpur,Ring raod,Adabor,Shyamoli,Dhaka-1207"todoPhone={Data[0].desc}/>


<Card todoName={Data[1].title} todoAddress="House : 4/3/11-Mohonpur,Ring raod,Adabor,Shyamoli,Dhaka-1207"todoPhone={Data[1].desc}/>


<Card todoName="Name : Bhadraa" todoAddress="House : 4/3/11-Mohonpur,Ring raod,Adabor,Shyamoli,Dhaka-1207"todoPhone="Phone no : 0130324441"/>

</div>

</div>
    
}

export default App;
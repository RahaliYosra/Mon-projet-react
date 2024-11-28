import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:3000/countries");
      setData(res.data);
    };
    getData();
  }, []);


  return  (
<div>
   
      {data?.map((v) => (
        <div>
        <img src={v.flags.png} alt ={v.name}/>
        <h1> {v.name} </h1>
<div>
  <div> population : {v.population} </div>    
  <div> population : {v.population} </div>  
</div>
  
    ))
  ;
);

export default Home;
home aamalna data map f return 
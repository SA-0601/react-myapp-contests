import {getAllHackerEarth} from "../services/contestsapi";
import {useState,useEffect} from 'react';

function HackerEarth(){
    const [allhackerearth, setAllHackerEarth] = useState([]);

 
    console.log(allhackerearth);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllHackerEarth();
        setAllHackerEarth(data);
      };
      fetchData();
    }, []);
    console.log(allhackerearth);
    return (
        <div>
            <h1>Hacker Earth Contests</h1>
            {allhackerearth.map((ele,index) => (
                <div>
                <h5>Contest Name: {ele.name}</h5>
                <p>Link for registration:</p>
                <a href={ele.url}>{ele.url}</a>
                <p>Type of Contest: {ele.type_}</p>
                <p>Duration of Contest: {ele.duration}</p>
                <p>Start Time : {ele.start_time}</p>
                <p>End Time: {ele.end_time}</p>
                <p>Status: {ele.status}</p>
                </div>
                
            ))}
        </div>
        
    )
    
}

export default HackerEarth;
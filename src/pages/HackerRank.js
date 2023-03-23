import {getAllHackerRank} from "../services/contestsapi";
import {useState,useEffect} from 'react';

function HackerRank(){
    const [allhackerrank, setAllHackerRank] = useState([]);

 
    console.log(allhackerrank);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllHackerRank();
        setAllHackerRank(data);
      };
      fetchData();
    }, []);
    console.log(allhackerrank);
    return (
        <div>
            <h1>Hacker Rank Contests</h1>
            {allhackerrank.map((ele,index) => (
                <div>
                <h5>Contest Name: {ele.name}</h5>
                <p>Link for registration:</p>
                <a href="{ele.url}">{ele.url}</a>
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

export default HackerRank;
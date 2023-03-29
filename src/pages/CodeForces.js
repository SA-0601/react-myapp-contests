
import {getAllCodeForces} from "../services/contestsapi";
import {useState,useEffect} from 'react';

function CodeForces(){
    const [allcodeforces, setAllCodeForces] = useState([]);

 
    console.log(allcodeforces);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllCodeForces();
        setAllCodeForces(data);
      };
      fetchData();
    }, []);
    console.log(allcodeforces);
    return (
        <div>
            <h1>CodeForces Contests</h1>
            {allcodeforces.map((ele,index) => (
                <div>
                <h5>Contest Name: {ele.name}</h5>
                <p>Link for registration:</p>
                <a href={ele.url}> {ele.url}</a>
                <p>Duration of Contest: {ele.duration}</p>
                <p>Start Time : {ele.start_time}</p>
                <p>End Time: {ele.end_time}</p>
                <p>Status: {ele.status}</p>
                </div>
                
            ))}
        </div>
        
    )
    
}

export default CodeForces;
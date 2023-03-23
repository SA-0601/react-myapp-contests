
import {getAllContests} from "../services/contestsapi";
import {useState,useEffect} from 'react';

function AllContests(){
    const [allcontests, setAllContests] = useState([]);

 
    console.log(allcontests);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllContests();
        setAllContests(data);
      };
      fetchData();
    }, []);

    return (
        <div>
            <h1>AllContests</h1>
            {allcontests.map((ele,index) => (
                <div>
                <a href={ele.url}>{ele.name}</a>
                
                </div>
                
            ))}
        </div>
        
    )
    
}

export default AllContests;
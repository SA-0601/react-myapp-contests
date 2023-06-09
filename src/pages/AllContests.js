
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

    // allcontests.forEach(element => {
    //   if(element.site === 'CodeForces'){
    //     const codeforcesContests = element;
    //   }
    // });
    

    return (
        <div>
            <h1>AllContests</h1>
            {allcontests.map((ele,index) => (
                <div>
                   <a href={ele.url}>{ele.name}</a>
                   <p> By {ele.site}</p>
                </div>
                
            ))}
        </div>
        
    )
    
}

export default AllContests;
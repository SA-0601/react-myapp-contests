import {Card} from 'react-bootstrap';
import {getAllSites} from "../services/contestsapi";
import {useState,useEffect} from 'react';

function Home(){
    const [allsites, setAllSites] = useState([]);

    console.log(allsites);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllSites();
        setAllSites(data);
      };
      fetchData();
    }, []);

    return (
        <div>
            <h1>Home</h1>
            
            <img src="https://files.codingninjas.in/article_images/codingcompetitionblog-23489.webp" width="75%"></img>

            <h3 className='mt-5'>Websites for contests</h3>
            {allsites.map((ele) => (
                <div className='ml-2 mb-2 mr-2'>
                <Card >
                    <p>Contest Name: {ele[0]}</p>
                    <a>Contest Website: {ele[2]}</a>
                </Card>
                </div>
            ))}
        </div>   
    )
}

export default Home;
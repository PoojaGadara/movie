import react, { Fragment, useEffect, useState } from 'react';
import { useNavigate ,Link } from "react-router-dom";

const Home = () => {
    
    const navigate = useNavigate()
    const [show ,setShow] = useState([]);
    const getApi = async () => {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
        setShow(await response.json());
    }
    useEffect (() => {
        getApi();
    } ,[] );
    return(
        <Fragment>
            <h1>Movie Shows</h1>
                <div className='container-fulid mt-5'>
                    <div className='row text-center'> { 
                        show.map((curElem) => {
                            return (
                                <>
                                    <div className='row my-5'>
                                                {/*for image only*/}
                                                <div class="card">
                                                    <img class="card-img-top" src={curElem.show.image.medium} alt="Card image cap" />
                                                        <div class="card-body">
                                                            <h5 class="card-title">{curElem.show.name}</h5>
                                                            <p class="card-text"><small class="text-muted">{curElem.score}</small></p>
                                                        
                                                
                                                            <button className='btn btn-primary' onClick={ function handleClick()  {
                                                                navigate(`/MoreInformation/${curElem.show.id}`,{state:
                                                                    {id:1,name:curElem.show.name,score:curElem.score,summary:curElem.show.summary}})}}
                                                            type="button">Book Now</button>
                                                        </div>
                                                </div>
                                    </div> 
                                </>
                                    ) 
                        })  
                    }   
                    </div>
                </div>       
        </Fragment>     
    )
}
export default Home;
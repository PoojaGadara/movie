import React, { useEffect, useState } from "react";
import { useLocation, useParams ,useNavigate} from "react-router-dom";

const MoreInformation= (props) => { 
    const navigate =useNavigate()
    const{ name }  =useParams()
    const location=useLocation()
    const state= location.state ;
    return(
      <>
        <h1>Movie Details</h1>
          <div class="card">
            <div class="card-header">
              <h3><b>{state.name}</b></h3>
            </div>
            <div class="card-body">
              <h5 class="card-title"><b>Score : {state.score}</b></h5>
              <p class="card-text">{state.summary}</p>
              <button className='btn btn-primary' onClick={ function handleClick()  {
                        navigate(`/Register/${state.name}`)}}
                        type="button">Book Ticket</button>
            </div>
          </div>
      </>
    )
}
export default MoreInformation;
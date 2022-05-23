import react, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function new1(props) {

    const name = props.match.params.name;
  
    return <h1>{name}</h1>;
  }
export default new1;





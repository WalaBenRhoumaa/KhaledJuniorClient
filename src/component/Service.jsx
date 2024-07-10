import React from 'react';
import { Link } from 'react-router-dom';

export default function Service(props) {
  return (
    <div className="card">
      <Link to="/page">
        <img className="product--image" src={props.url} alt="image"/>
      </Link>
      <h4>{props.name}</h4>
    </div>
  );
}

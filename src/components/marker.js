import React from 'react';
import './marker.css';
import { useHistory } from "react-router-dom";



const Marker = (props) => {
  const history = useHistory()
  const onClickMarker = (event) => {
    if(props.activity) {history.push(`/activities/${props.activity.id}`)}
    console.log('clicked');


  }
  const { color, name, id } = props;

  return (
    <div onClick={onClickMarker}>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={''}
      />

      
        <div className="pulse" >
        {props.activity ? 
          <h2>{props.activity.name}</h2>
          : <p>No Name</p>}
        </div>
        
        </div>
      )
    };
  
export default Marker;
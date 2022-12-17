import React from 'react';
import {MdDelete} from "react-icons/md"

const ShowList = (props) => {

  return (
    <div className='showList'>
    <ul>
      <li>
      <span>{props.listname}</span>
      <button type='button' onClick={()=>{props.delete(props.id)}} >{<MdDelete/>}
      <span>Delete</span></button> 
      </li>
    </ul>
    </div>
  )
}

export default ShowList

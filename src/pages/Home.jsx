
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Vieww from '../Components/Vieww'
import Add from '../Components/Add'
import Category from '../Components/Category'

function Home() {

const [addStatus , setAddStatus] = useState([])
const [dragStatus, setDragStatus] = useState(false)
  return (
    < >
       <div className='d-flex mt-5 p-5'>
        <Add setAddStatus={setAddStatus}/>
        <h5 className='ms-auto'> <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}><span id='h'>Watch History </span><FontAwesomeIcon icon={faClockRotateLeft} /></Link></h5>
       </div>
       <div className="row w-100 p-4">
        <div className="col-md-9">
          <h4>All videos</h4>
         <Vieww addStatus={addStatus} setDragStatus={setDragStatus} />
        </div>
        <div className="col-md-3 ps-md-4">
          <Category dragStatus={dragStatus} setDragStatus={setDragStatus}/>
        </div>
       </div>
      
    </>
  )
}

export default Home
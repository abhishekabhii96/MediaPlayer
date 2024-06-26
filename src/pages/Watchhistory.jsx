import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteVideoFromHistory, getVideoFromHistoryApi } from '../services/allApii'

function Watchhistory() {
  const [VideoHistory, setVideoHistory] = useState([])

  const getHistory = async () => {
    const result = await getVideoFromHistoryApi()
    if (result.status >= 200 && result.status < 300) {
      setVideoHistory(result.data)
    }
  }
  console.log(VideoHistory);
  useEffect(() => {
    getHistory()
  }, [])

const deleteHistory = async(id) => {
  const result = await deleteVideoFromHistory(id)
  console.log(result);
}

  return (
    <>
      <div className='w-100 d-flex p-3 mt-5'>
        <h5 className='ms-md-5'>Watch History</h5>
        <h5 className='ms-auto me-md-5'><Link to={'/home'} style={{ color: 'white', textDecoration: 'none' }}><span id='h'><FontAwesomeIcon icon={faArrowLeft} className='me-2' /></span><span id='h'>Back to Home</span><FontAwesomeIcon icon={faHouse} className='ms-2' /></Link></h5>
      </div>

      <div className='row'>
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <div className='w-100'>
            {VideoHistory?.length > 0 ?
              <table className='text-center table table-bordered table-light mt-5 ms-4 me-4'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Caption</th>
                    <th>URL</th>
                    <th>Time Stamp</th>
                    <th className='text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {VideoHistory?.map((item, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{item?.caption}</td>
                    <td><Link to={item?.url} target='_blank'>{item?.url}</Link></td>
                    <td>{item?.timeStamp}</td>
                    <td><button className='btn btn-danger' onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                  </tr>))}
                </tbody>
              </table>
              :
              <p className='text-warning fs-5'>No Watch History</p>}
          </div>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  )
}

export default Watchhistory
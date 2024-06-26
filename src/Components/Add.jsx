
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allApii';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ setAddStatus }) {
  //create a state to hold data from input
  const [video, setVideo] = useState({
    caption: "",
    image: "",
    url: ""
  })


  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setVideo({
      caption: "",
      image: "",
      url: ""
    })

  };
  const handleShow = () => setShow(true);

  const validateLink = (e) => {
    console.log(e.target.value);
    const link = e.target.value

    if (link.endsWith('?feature=shared')) {
      const yTkey = link.slice(-26, -15)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })
    }
    else if (link.startsWith('https://youtu.be/')) {
      const yTkey = link.slice(17, 28)
      console.log(yTkey);
      setVideo({ video, url: embedLink })
    }
    else {
      const yTkey = link.slice(-11)
      console.log(yTkey);
      let embedLink = `https://www.youtube.com/embed/${yTkey}`
      setVideo({ ...video, url: embedLink })

    }

  }

  console.log(video);

  const handleUpload = async (e) => {
    e.preventDefault()
    const { caption, image, url } = video
    if (!caption || !image || !url) {
      toast.info('Please fill the form completely')
    }
    else {
      const result = await addVideoApi(video)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('video Uploaded successfully')
        setAddStatus(result.data)
        handleClose()
      }
      else {
        toast.error('Something went wrong') 
        console.log(result.data);
        handleClose()
      }
    }
  }


  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload<span id='h'>new video</span></h5>
        <button className='btn mb-2' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='border p-3 rounded border-secondary'>
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e) => setVideo({ ...video, image: e.target.value })} />
            <input type="text" placeholder='Video url' className='form-control mt-3' onChange={(e) => validateLink(e)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={(e) => handleUpload(e)}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
    </>
  )
}

export default Add
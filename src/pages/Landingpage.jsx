import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Landingpage() {
  return (
    <>
      <div className="row mt-5 w-100 justify-content-center alighn-items-center">
        <div className='col-md-1'></div>
        <div className='col-md-5 p-5'>
          <h3>Welcome to <span className='text-warning'>MediaPlayer</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, eius voluptate? Eligendi molestiae ipsum atque, a explicabo laboriosam excepturi distinctio aspernatur. Aperiam voluptatibus quidem praesentium ad ratione voluptates asperiores minima!</p>

          <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-5 d-flex justify-content-center align-items-center p-md-5'>
          <img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt='no image' className='w-75'></img>
        </div>
      </div>

      <div className='row w-100 mt-5'>
        <h3 className='mt-5 text-center mb-5'>Features</h3>
        <div className="col-md-1 me-md-5"></div>

        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://image.slidesdocs.com/responsive-images/background/innovative-3d-rendering-of-youtube-video-player-powerpoint-background_617af9a97a__960_540.jpg" className='w-100' height={'300px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://image.slidesdocs.com/responsive-images/background/abstract-geometry-for-video-media-player-interface-design-powerpoint-background_170b731174__960_540.jpg" className='w-100' height={'300px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-3 px-5 px-md-4 mt-3">
          <Card style={{ width: '100%' }} className='p-3'>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5eAlGqvA5BA9Ea6jGFqbzdBzUyUSGQD1lh4nX2YW5ISiKzGyctAkEcK-388-5zsfQgOk&usqp=CAU" className='w-100' height={'300px'} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-1"></div>

      </div>

      <div className="row w-100 mt-5 p-3 d-flex justify-content-center alighn-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-10 border p-5 rounded md-5">
          <div className="row w-100">
            <div className="col-md-6">
              <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
              <p className='mt-4'><span className='fs-4'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem pariatur quo, saepe provident quibusdam omnis earum nisi vero.</p>
              <p className='mt-4'><span className='fs-4'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem pariatur quo, saepe provident quibusdam omnis earum nisi vero.</p>
              <p className='mt-4'><span className='fs-4'>Play Everything :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio exercitationem pariatur quo, saepe provident quibusdam omnis earum nisi vero.</p>
            </div>

            <div className="col-md-6">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Bg8Yb9zGYyA" title="#AlaVaikunthapurramuloo - Ramuloo Ramulaa Telugu Video Song || Allu Arjun || Trivikram || Thaman S" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>

    </>
  )
}

export default Landingpage
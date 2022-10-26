import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import Anime from "../../asset/Anime"
import { useRef } from "react"


// const btn = {
//     position: 'absolute',
//     top: 120,
//     left: 100, 
// }
const path = process.env.PUBLIC_URL;

export default function Visual() {

  const box = useRef(null);


  return (
    <figure id="visual" className="myScroll">
      <di className="inner">
        <video src={process.env.PUBLIC_URL + '/img/vid.mp4'} loop autoPlay muted></video>
        <p className='since'>S I N C E 1 9 9 8</p>
        <h1>We are making <br />
          real life.
        </h1>
        <a href="#">read more about us</a>
        <span className='scrd'>S C R O L L   D O W N </span>
        <div className="bbox"></div>
      </div>


      {/* <button
              style ={btn}
              onClick={()=>{
                new Anime(window,{
                    prop: 'scroll',
                    value : 1000,
                    duration : 500,
                    
                })
              }} >button</button> */}
      <div className='box' ref={box}></div>
    </figure>
  )
}
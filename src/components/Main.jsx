import React from 'react'
import man from '../images/man.svg'

const Main = () => {
  return (
    <div className='main'>
      <div className="row-div">
        <div className="col col-xs-12 left">
        <h1><span>Best Cards </span><span>at your disposal</span></h1>
        <form action="">
          <input type="text" name="" id="email" placeholder="email Address" />
          <button>Notify me</button>
        </form>
        </div>
        <div className="col col-xs-12 image">
          <img className="" src={man} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main

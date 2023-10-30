import '../components/ScheduleCardStyle.css'
import imgg from '../assets/img3.jpg'


import React from 'react'
import { Link } from 'react-router-dom'

const ScheduleCard = () => {
  return (
    <div className='Schedule-Cointainer'>
        <div className="event-cointainer">
            <div className="event-card">
                {/* <img src={imgg} alt="event-img" /> */}
                <h3 className="event-title">Friday</h3>
                <p className="event-details">
                    <ul>
                        <li><em className='time'>18:00:</em> Registrations & Check-in </li>
                        <li><em className='time'>18:30:</em> BootCamp</li>
                        <li><em className='time'>19:45:</em> Participant Intro & Networking</li>
                        <li><em className='time'>21:00:</em> Dinner & End of Day One</li>
                    </ul>
                </p>
                {/* <div className="btn">
                    <Link to={'/Signin'}>Register Now</Link>
                </div> */}
            </div>
            <div className="event-card">
                {/* <img src={imgg} alt="event-img" /> */}
                <h3 className="event-title">Saturday</h3>
                <p className="event-details">
                    <ul>
                        <li><em className='time'>09:30:</em> Check-in. Breakfast Served.</li>
                        <li><em className='time'>10:00:</em> Team Introductions</li>
                        <li><em className='time'>11:00:</em> Prototype Building, starts.</li>
                        <li><em className='time'>13:00:</em> Lunch.</li>
                        <li><em className='time'>14:00:</em> Prototype Building, Continues.</li>
                        <li><em className='time'>20:00:</em> Dinner.</li>
                        <li><em className='time'>22:00:</em> End of Day Two</li>
                    </ul>
                </p>
                {/* <div className="btn">
                    <Link to={'/Signin'}>Register Now</Link>
                </div> */}
            </div>
            <div className="event-card">
                {/* <img src={imgg} alt="event-img" /> */}
                <h3 className="event-title">Monday</h3>
                <p className="event-details">
                    <ul>
                        <li><em className='time'>09:30:</em> Check-in. Breakfast Served.</li>
                        <li><em className='time'>10:00:</em> Team Updates. Continue Building</li>
                        <li><em className='time'>13:00:</em> Lunch Break</li>
                        <li><em className='time'>17:00:</em> End of Prototype building.</li>
                        <li><em className='time'>18:00:</em> Demo Starts</li>
                        <li><em className='time'>21:00:</em> End of Vikatan Hackathon</li>

                    </ul>
                </p>
                {/* <div className="btn">
                    <Link to={'/Signin'}>Register Now</Link>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default ScheduleCard
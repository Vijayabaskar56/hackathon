import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import SignupImg from '../assets/img3.jpg'
import RegistrationForm from '../components/RegistrationForm'

const Signup = () => {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="REGISTER NOW!" text="Bucckle up for a exciting on journey" img={SignupImg}/>
    <div className='signup'>
    <h1 className="title">Join our Startup Weekend community</h1>
    <h3 className="sub-title">Stay updated about the latest news in our global family.</h3>
    <div className="signup-content">
    <div className="right">
        <p>Interested to partner with us or want to learn more <br />
        <div>
        <p>Reach out to us at </p> 
        <a className='mail' href="mailto:maduraistartups@625001.in">maduraistartups@625001.in</a>
        </div>
        </p>
      </div>
    <div className="left">
      <RegistrationForm />
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Signup
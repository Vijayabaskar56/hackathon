import './HeroImg2Styles.css'

const HeroImg2 = (props) => {
  return (
    <div className="heroimg-cointainer">
    <div className="hero-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p className='hero-text'>{props.text}</p>
            <img className='home-img2' src={props.img} alt="img" />
        </div>
    </div>
    </div>
    )
}

export default HeroImg2;
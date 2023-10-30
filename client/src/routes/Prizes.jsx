import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PrizeCard from '../components/PrizeCard'
import PriceImg from '../assets/img1.jpg'

const Prizes = () => {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="PRICES." text="Exiting Prices waiting for you" img={PriceImg}/>
    <PrizeCard />
    </>
    )
}

export default Prizes
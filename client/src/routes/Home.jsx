import HomeImg from '../components/HeroImg'
import Prizes from './Prizes'
import Signup from './Signup'
import Navbar from '../components/Navbar'
import Schedule from './Schedule'
import Info from '../components/Info'
import FAQ from '../routes/FAQ'

const Home = () => {
  return (
      <div>
      <Navbar />
      <HomeImg />
      <Info />
      <Prizes />
      <Schedule />
      <FAQ />
      <Signup />
      </div>
    )
}

export default Home
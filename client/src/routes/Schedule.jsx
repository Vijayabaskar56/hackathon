import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ScheduleImg from '../assets/img2.jpg'
import ScheduleCard from '../components/ScheduleCard'

const Schedule = () => {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="SCHEDULES." text="Set a remainder to Never Forgot" img={ScheduleImg} />
    <ScheduleCard />
    </>
  )
}

export default Schedule
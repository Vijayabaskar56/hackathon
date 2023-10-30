import Footer from "../components/Footer";
import Questions from "../components/Questions";
import Navbar from '../components/Navbar'
import HeroImg2 from "../components/HeroImg2";
import FAQImg from '../assets/FAq.jpg'

export default function App() {
  return (
    <>
    <Navbar />
    <HeroImg2 heading="Frequenly Asked Question" text= "clear you head with all the doughts" img={FAQImg}/>
    <div className="faq">
      <div className="container">
        <div className="questions">
          {questions.map((question) => (
            <Questions key={question.id} question={question} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

const questions = [
  {
    id: 1,
    title: "What Do I need to participated",
    info:
      "Please bring a valid ID Proof along with you, in the name in which you registered for the event, and a team of 5 members with the team leader, that all there is to for you to participated"
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Its does cost you any amount, it a free hackthon event which aim to improve the community engagement."
  },
  {
    id: 3,
    title: "Does You get any help from our side?",
    info:
      "Mentors at the event will be dropping in periodically, and spending time with teams. Have a visibile white board / progress chart near you, so that if you do not need help and are progressing well, you can just point to that and explain quickly. Unless and otherwise absolutely stuck, the mentors won't deeply engage, beyond giving general feedback on shaping the idea and the market positioning. Some tech mentors can help you pick tools and frameworks to make your job easier, rather than building everything from scratch."
  }
];

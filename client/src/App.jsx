import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './routes/Home.jsx'
import Prizes from './routes/Prizes.jsx'
import Schedule from './routes/Schedule';
import FAQ from './routes/FAQ.jsx'
import Signup from './routes/Signup.jsx';


function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Prizes" element={<Prizes />} />
          <Route path="/Schedule" element={<Schedule />}/>
          <Route path="/FAQ" element={<FAQ />}/>  
          <Route path="/Signup" element={<Signup />}/>
        </Routes>
    </>
  )
}

export default App

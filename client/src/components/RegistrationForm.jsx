import  { useRef, useState, useEffect } from "react";
import '../components/RegistrationFormStyles.css'
import emailjs from '@emailjs/browser';
import axios from "axios";

const RegistrationForm = () => {

  useEffect(() => {
    axios.get("/api") // Replace "/api/data" with your backend's API endpoint
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

    const form = useRef();
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString(); // Format the date as per your requirement
    const formattedTime = currentDate.toLocaleTimeString();


  const handleSubmit = (e) => {
    e.preventDefault();


    const data = {
      Name:name,
      Email:email,
      Phoneno:phone,
      Date:formattedDate,
      Time:formattedTime
    }
    axios.post('/',data).then((response) =>{
      console.log(response.data)
      setName('');
      setEmail('');
      setPhone('');
    })
    .catch((error) => {
      console.log("Error sending data:", error);
    });
    
    emailjs.sendForm('service_pwd3ufj', 'template_b5azkst', form.current, 'XHfVUZ2V7X01UwqP_')
    .then((result) => {
      console.log(result.text);
      setIsOpenPopup(true)
    }), (error) => {
        console.log(error.text)
    };
    e.target.reset();


    setTimeout(() => {
      setIsOpenPopup(false)
    }, 5000);
  };  



  return (
    <div className="form-cointainer">
    <form ref={form} onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="name">Name:</label> */}
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="user_name"
          placeholder="Name"
          required
        />
      </div>
      <div>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="user_email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        {/* <label htmlFor="phone">Phone No:</label> */}
        <input
          type="tel"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="user_phone"
          placeholder="Phone"
          required
        />
      </div>
      <input type="submit" className="btn" value="Send"/>
      {isOpenPopup && <p className="msg">Registered Successfully</p>}
    </form>
    </div>
  );
};



export default RegistrationForm;

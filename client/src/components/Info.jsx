import { NavLink } from "react-router-dom";
import "../components/InfoStyles.css";

const Info = () => {
  return (
    <div className="section2">
      <div className="dates">Hackathon dates: July 1 - July 31 2023</div>
      <div className="info-cointainer">
        <div className="infoCard">
          <h3 className="info-title">Who we are ?</h3>
          <p className="info-content">
            Hack it is more than just a serviced coworking office. We are a
            community of people dedicated to making the world a fairer place,
            and to create a supportive working environment. The space is
            supported by Global maduraITs, EU-wide network of worker
            co-operatives in the digital tech sector. We help you to reduce your
            CAPEX & OPEX when your business need more focus on execution and
            help from hiring to GoToMarket. We have some of these excellent
            Geeks from Madurai working from here, including Oribyne & Inovatrik
            We also have Founders,Social Entrepreneurs, freelancers and small
            businesses to support each other as a community. Its The Only
            EcoSystem build out of colleges for Entrepreneurs By Entrepreneurs
            to save their energy and focus
          </p>
        </div>
        <div className="infoCard">
          <h3 className="info-title">What We are Trying </h3>
          <p className="info-content">
            Madurai has no dearth for talent, and it was proven yet again by the
            team of enthusiastic mix of students and budding entrepreneurs. The
            socially inclined ideas were built to address some of the challenges
            faced by the communities at large. <br /> <br />A structured
            prototyping event, 625001 Hackathon was designed to spark, cultivate
            and promote open innovation in the areas of education, agriculture,
            environment, women empowerment & employability and civic life &
            community power.
          </p>
        </div>
        <div className="infoCard ">
          <p className="info-content">
            The event is spread over a weekend, approximately 50 hours -
            starting from Friday evening and ends on Sunday evening. <br />{" "}
            <br />
            The agenda is simple. Selected teams are given the space and the
            resources over a weekend to build solutions for the challenges that
            we have identified. The top three teams to build elegant solutions
            are declared winners.
          </p>
        </div>
        <div className="infoCard infoCard-pro">
          <div className="sub-infocard">
            <p>
              Venue Details and Participation: <br />
              Date: September 23th, 6:00pm - Sept 25th, 9:00pm <br />
              Venue : Thoughtworks, Ascendas, Taramani, Chennai <br />
              Participation Fee : Invited on Selection. Free <br />
            </p>
          </div>
          <div className="btn-info">
            <NavLink
              to="https://vijayabaskar56.github.io/my-portfolio/"
              className="link">
              Know more about US
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

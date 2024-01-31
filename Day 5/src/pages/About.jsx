import { Header } from "rsuite";
import CustomNavbar from "../Components/CustomNavbar"
import './About.css';
const About = () => {
    return (
      <div className="con">
          <Header>
            <CustomNavbar/>
          </Header>
        <div className="about-section">
          <div className="inner-container">
            <h1>About Us</h1>
            <p className="text">
            Cloud computing has a rich history that extends back to the 1960s, with the initial concepts of time-sharing becoming popularized via remote job entry (RJE). The "data center" model, where users submitted jobs to operators to run on mainframes, was predominantly used during this era. This was a time of exploration and experimentation with ways to make large-scale computing power available to more users through time-sharing, optimizing the infrastructure, platform, and applications, and increasing efficiency for end users.
The use of the "cloud" metaphor to denote virtualized services traces back to 1994, when it was used by General Magic to describe the universe of "places" that mobile agents in the Telescript environment could go. This metaphor is credited to David Hoffman, a General Magic communications employee, based on its long-standing use in networking and telecom. The expression cloud computing became more widely known in 1996 when the Compaq Computer Corporation drew up a business plan for future computing and the Internet. The company's ambition was to supercharge sales with "cloud computing-enabled applications". The business plan foresaw that online consumer file storage would most likely be commercially successful. As a result, Compaq decided to sell server hardware to internet service providers.
            </p>
            <div className="skills">
              <span>Web Design</span>
              <span>Photoshop &amp; Illustrator</span>
              <span>Coding</span>
            </div>
          </div>
        </div>
        </div>
      );
    }
export default About;
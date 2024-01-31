import { Header } from "rsuite";
import CustomNavbar from "../Components/CustomNavbar"
import './Contact.css';
const Contact = () => {
    return (
      <div className="k">
              <Header>
                <CustomNavbar/>
              </Header>
            <div className="c">
              <div className="card">
                <div className="left">
                  <img src="https://images.unsplash.com/photo-1659706994835-fb804722b0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                </div>
                <div className="right">
                  <h2>Contact Us</h2>
                  <div className="contact">
                    <div className="form-container">
                      <form className="form">
                        <div className="username">
                          <input type="text" placeholder="Enter your Name" />
                        </div>
                        <div className="useremail">
                          <input type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="usermessage">
                          <textarea placeholder="Enter your message" required defaultValue={""} />
                        </div>
                        <div className="usersubmit">
                          <input type="submit" defaultValue="Contact Us" />
                        </div>
                      </form>
                    </div>
                    <div className="address">
                      <div className="email">
                      </div>
                      <div className="location">
                      </div>
                      <div className="social">
                        <span><a href="#"><i className="fab fa-facebook" /></a></span>
                        <span><a href="#" target="_blank"><i className="fab fa-instagram" /></a></span>
                        <span><a href="#" target="_blank"><i className="fab fa-twitter" /></a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          );
        }
export default Contact;
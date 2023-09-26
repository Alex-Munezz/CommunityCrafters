import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';
import image1 from './image1.jpeg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpeg';
import image5 from './image5.webp';
import image6 from './image6.webp';
import image7 from './image7.jpg';


function LandingPage() {

    const navigate = useNavigate();
    const handleCreateAccount = () => {
        navigate('/CreateAccount');
      };

      const handleLogin = () => {
        navigate('/Login');
      };

    return (
        <div className='landing-container'>
  <h1>Welcome to CommunityCrafters where you can find
     all the services you need in one place </h1>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <div className="box">
      <span style={{'--i': 1}}><img src={image1} alt="" /></span>
      <span style={{'--i': 2}}><img src={image2} alt="" /></span>
      <span style={{'--i': 3}}><img src={image3} alt="" /></span>
      <span style={{'--i': 4}}><img src={image4} alt="" /></span>
      <span style={{'--i': 5}}><img src={image5} alt="" /></span>
      <span style={{'--i': 6}}><img src={image6} alt="" /></span>
      <span style={{'--i': 7}}><img src={image7} alt="" /></span>
    </div>
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <p className='landingparagraph'>
     Discover the perfect blend of convenience and community with our
      innovative app! Seamlessly connecting local service providers with
      those in need, our platform transforms your everyday tasks into 
      stress-free experiences. From skilled artisans and reliable handymen 
      to trusted pet sitters and more, find the experts you need just around 
      the corner. Embrace the power of your local community and simplify 
      your life with our local services marketplace. Welcome to a world 
      where quality services and neighborly connections come together effortlessly.
     </p>
     <div className='landing'> 
     <p>Would you like to give us a shot?</p>
     <br />
     <button class="btn"
     onClick={handleCreateAccount}>
    Create Account
</button>
      <br />
      <br /><br />
      <h2>Already a user? <br />Login here :</h2>
      <br />
      <button className="button2"
      onClick={handleLogin}>
         LOGIN
      </button>
      </div>
      <br /><br /><br />
       <Footer />
        </div>
    )
}
export default LandingPage;
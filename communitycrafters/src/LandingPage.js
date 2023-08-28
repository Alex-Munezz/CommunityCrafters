import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';

function LandingPage() {

    const navigate = useNavigate();
    const handleGetStarted = () => {
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
     <button className='fadeInShakeButton'
           type="button"
           onClick={handleGetStarted}>
        Try us
      </button>
      <br />
      <br />
      <br />
      <h2>Already a user? <br />Login here :</h2>
      <button className='loginbutton'
      type='button'
      onClick={handleLogin}>Login</button><br />
       <Footer />
        </div>
    )
}
export default LandingPage;
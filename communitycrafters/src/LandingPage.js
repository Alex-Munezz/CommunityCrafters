import { useNavigate } from 'react-router-dom';
import Footer from './Footer.js';

    const images = [
      {
        id : 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRbvGLS5mjh3GzSxDaEzoR2Whs9OXCmGLQLBfIfGzES0RjCwm9QhrLEFeyRUrqQjzRWXw&usqp=CAU',
      },
      {
        id : 2,
        image: 'https://us.123rf.com/450wm/bermek/bermek2304/bermek230403255/202409630-power-cord-plugged-into-electrical-outlet-on-insulated-wall-in-hospital-room.jpg?ver=6',
      },
      {
        id : 3,
        image: 'https://nextdaycleaning.com/wp-content/uploads/2020/06/Main-Benefits-of-Residential-Cleaning-Services-1024x663.jpg',
      },
      {
        id : 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKxp-BFy5a336hk4y9-PTT9Qw77UFWgCDiQ&usqp=CAU',
      },
      {
        id : 5,
        image: 'https://i0.wp.com/www.hadviser.com/wp-content/uploads/2020/04/2-stunning-african-braids-CLPMe82H6Kw.jpg?resize=1073%2C1080&ssl=1',
      },
    ]
   
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
     <div className="box">
      {images.map((image, index) => (
        <span key={index} style={{'--1': index + 1}}>
        <img src={images} alt=""/>
        </span>
      ))}
     </div>
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
      <br /><br /><br /><br />
       <Footer />
        </div>
    )
}
export default LandingPage;
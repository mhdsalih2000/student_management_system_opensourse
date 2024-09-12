
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { useState ,  } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const raw = {
    email,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/admin/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(raw),
      });
  
      if (response.ok) { // Checks if the response status is 2xx
        if (response.status === 201) {
          const data = await response.json();
          console.log('Signup successful', data);
          toast.success('Successfully registered');
          setTimeout(() => {
            navigate('/verify-otp'); // Corrected route
          }, 500);
          localStorage.setItem('user', JSON.stringify(data));
        } else if (response.status === 422) {
          const errorData = await response.json();
          console.error('Signup failed', errorData);
          toast.info("An unverified account exists with this email. Please verify with OTP");
          navigate('/verify-otp');
        } else if (response.status === 400) {
          const errorData = await response.json();
          toast.error(errorData.message);
        }
      } else {
        // Handles all non-2xx responses
        const errorData = await response.json();
        toast.error(errorData.message || 'An error occurred');
      }
    } catch (error) {
      // This block catches network errors or other issues with the request
      console.error('An error occurred:', error);
      toast.error('An unexpected error occurred. Please check your network connection or try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
       {loading?<div className="custom-bar-loader">
        <BarLoader width={423.5} loading={true}   />
      </div>:<div></div>}
        <div className="conta">
         <ToastContainer />
          <div className="innerheader">
            <p className='content'>SignUp to Access and Manage Your College Easily</p>
          </div>
          <div className="innerinput">
            <form className="signup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="button-form">
                <button type="submit" disabled={loading}>
                 Next
                </button>
                <p className='pli'>
                  <a href="#">Already have an account?</a>
                </p>
              </div>
              <div className='so'>
                <p className='fs'>
                  Need help? Check out our <a href="/faqs" className="faq-link">FAQs</a> or contact our <a href="/support" className="support-link">Support Team</a>.
                </p>
              </div>
            </form>
          </div>
          </div>
          </div>
      
      )}



export default Signup;

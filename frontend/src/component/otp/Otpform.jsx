import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Otpform.css'

function Otpform({passwrod}) {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api//admin/varify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp , passwrod })
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log('OTP verification successful', data);
        toast.success('OTP verified successfully');
        // Handle successful OTP verification
      } else if (response.status === 400) {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
  
     <div className='contai'>
   
      <div className="otp-header">
        <p className='otp-content'>Enter the OTP sent to your email</p>
      </div>
      <div className="otp-input-container">
        <form className="otp-form" onSubmit={handleVerify}>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <div className="otp-button-container">
            <button type="submit" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify OTP'}

            </button>
            fnsaf
          </div>
          <div className='help-spacing'>
            <p className='footer-text'>
              Need help? Check out our <a href="/faqs" className="faq-link">FAQs</a> or contact our <a href="/support" className="support-link">Support Team</a>.
            </p>
          </div>
        </form>
      </div>
      </div>

  );
}

export default Otpform;

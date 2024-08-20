'use client'

import React, { useEffect, useState } from 'react'
import { ConfirmationResult, getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import { app } from '@/firebase';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [otpSent, setOtpSent] = useState(false);

  const auth = getAuth(app);
  const router = useRouter();

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      'size': 'normal',
      'callback': (response: any) => {
        // Handle reCAPTCHA response
      },
      'expired-callback': () => {
        // Handle expired reCAPTCHA
      }
    })
  }, [auth])

  const handlePhoneNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhoneNumber(e.target.value);
  }

  const handleOTPChange = (e: any) => {
    setOtp(e.target.value);
  }

  const handleSendOTP = async () => {
    try {
      const formattedPhoneNumber = `+${phoneNumber.replace(/\D/g, '')}`;
      const confirmation = await signInWithPhoneNumber(auth, formattedPhoneNumber, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setOtpSent(true);
      setPhoneNumber('');
      alert('OTP sent successfully');

    } catch (error) {
      console.log(error);
    }
  };

  const handleOTPSubmit = async () => {
    if (!confirmationResult) {
      console.error('No confirmation result available');
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      setOtp('');
      router.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {!otpSent ? (
        <div>
          <div id="recaptcha-container"></div>
        </div>
      ) : null}

      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter phone number"
        className='border'
      />
      <br /><br />
      <input
        type="text"
        value={otp}
        onChange={handleOTPChange}
        placeholder='Enter otp'
        className='border'
      />
      <button
        onClick={otpSent ? handleOTPSubmit : handleSendOTP}
        className={`bg-${otpSent ? 'green' : 'blue'}-500 `}
      >
        {otpSent ? 'Submit OTP' : 'Send OTP'}
      </button>
    </div>
  )
}

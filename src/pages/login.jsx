import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';  // Import ikon mata material
import '../dist/css/LoginPage.css';
import backgroundImage from '../assets/img/background.png';

function Login() {
  const navigate = useNavigate();

  // Menyimpan input email, password, dan status login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Status visibilitas password

  // Fungsi untuk menangani login
  const handleLogin = () => {
    // Mengecek apakah email dan password benar (misalnya hardcoded)
    if (email === 'admin.com' && password === '123') {
      // Login berhasil, arahkan ke halaman dashboard
      setLoginFailed(false);
      navigate('/dashboard');
    } else {
      // Login gagal, tampilkan pesan error
      setLoginFailed(true);
    }
  };

  // Fungsi untuk toggle visibilitas password
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle antara true dan false
  };

  return (
    <div className="login-container">
      <div className="login-image">
        <img src={backgroundImage} alt="Pemandangan" />
      </div>
      <div className="login-form">
        <h2>Welcome Admin!</h2>
        <p>Selamat datang kembali pengelola tempat wisata pemandian air panas Papandayan Kota Garut.</p>

        <p className='title_input_field'>Alamat Email</p>
        <input
          type="email"
          placeholder="Masukkan alamat email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Mengubah email
        />

        <p className='title_input_field'>Kata Sandi</p>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}  // Menyesuaikan type input tergantung visibilitas
            placeholder="Masukkan kata sandi"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Mengubah password
          />
          <span className="password-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <MdVisibility /> : <MdVisibilityOff />} {/* Menggunakan ikon material design */}
          </span>
        </div>

        <button className="submit-button" onClick={handleLogin}>Masuk</button>

        {loginFailed && <p className="error-message" style={{ color: 'red' }}>Login gagal! Email atau kata sandi salah.</p>}
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import '../dist/css/main.css'; // Pastikan jalur ini benar
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import userAvatar from '../assets/img/User.png';
import { useNavigate } from "react-router-dom"

const Profiladmin = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeaderComponent />  
      <SidebarComponent /> 

      <div className="admin-profile">
      <h2>Profil Admin</h2>
      <p>Ini adalah halaman untuk melihat profil dan mengedit profil admin</p>
      </div>
      <div className="profile-card box">
        <div className="profile-header box">
        <div className="profile-avatar box">
        <img src={userAvatar} alt="User" className="user-avatar" />
        </div>
          <div className="profile-info box">
            <h3>Refiani Julianti</h3>
            <p>Pengelola Agrowisata Tepas Papandayan</p>
            <p>Unnamed Road, Cisurupan, Kec. Cisurupan, Kabupaten Garut, Jawa Barat 44163</p>
          </div>
          <button className="edit-button box" onClick={() => navigate('/editprofil')}>Edit</button>
        </div>

        <div className="profile-section box">
          <div className="section-header box">
            <h3>Informasi Pribadi</h3>
          </div>
          <div className="info-row box">
            <label>Nama Depan</label>
            <p>Refiani</p>
          </div>
          <div className="info-row box">
            <label>Nama Belakang</label>
            <p>Julianti</p>
          </div>
          <div className="info-row box">
            <label>Alamat</label>
            <p>Unnamed Road, Cisurupan, Kec. Cisurupan, Kabupaten Garut, Jawa Barat 44163</p>
          </div>
          <div className="info-row box">
            <label>Email</label>
            <p>refianijuliantin@gmail.com</p>
          </div>
          <div className="info-row box">
            <label>Nomor Telepon</label>
            <p>0812-1985-3387</p>
          </div>
          <div className="info-row box">
            <label>Bio</label>
            <p>Pengelola Agrowisata Tepas papandayan</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default Profiladmin;

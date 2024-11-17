import React from 'react';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import '../dist/css/main.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Datapegawai = () => {
  const navigate = useNavigate();
  console.log("tes");
  const dataPegawai = [
    { id: 1, nip: "22134762784", name: "Refiani Julianti", position: "Pengelola", phone: "085123456789" },
    { id: 2, nip: "22145672653", name: "Nina", position: "Kasir", phone: "085243567853" },
    { id: 3, nip: "22135265753", name: "Chika", position: "Marketing", phone: "081345267376" },
  ];

  const handleAddStaff = () => {
    // Logika untuk mengelola staff, bisa membuka modal atau navigasi
    console.log('Kelola staff');
  };

  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <div className="data-container">
        <div className="data-pegawai">
          <h2>Data Pegawai</h2>
            <p>Ini adalah halaman berisi data pegawai Agrowisata Tepas Papandayan</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>NIP</th>
                  <th>Nama</th>
                  <th>Posisi</th>
                  <th>No HP</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataPegawai.map((pegawai) => (
                  <tr key={pegawai.id}>
                    <td>{pegawai.nip}</td>
                    <td>{pegawai.name}</td>
                    <td>{pegawai.position}</td>
                    <td>{pegawai.phone}</td>
                    <td>
                    <button className="action-button edit" onClick={() => handleEdit(ticket.id)}><FaEdit /> Edit</button>
                    <button className="action-button delete" onClick={() => handleDelete(ticket.id)}><FaTrash /> Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="manage-staff-button" onClick={() => navigate('/kelolapegawai')}>Kelola Pegawai</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datapegawai;

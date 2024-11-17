import React from 'react';
import '../dist/css/main.css';
import SidebarComponent from '../components/SidebarComponent.jsx';
import HeaderComponent from '../components/HeaderComponent.jsx';
import { FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Inven = () => {
    const navigate = useNavigate();
    const inventoryItems = [
        { id: 1, kode: 'B001', name: 'Tenda Camping', stock: 50, price: 'Rp.1.500.000' },
        { id: 2, kode: 'B002', name: 'Matras Camping', stock: 120, price: 'Rp.200.000' },
        { id: 3, kode: 'B003', name: 'Sleeping Bag', stock: 80, price: 'Rp.300.000' },
        { id: 4, kode: 'B004', name: 'Senter LED', stock: 150, price: 'Rp.75.000' },
    ];

    const handleEdit = (id) => {
        // Action to edit inventory item
        console.log('Edit item ID:', id);
    };

    const handleDelete = (id) => {
        // Action to delete inventory item
        console.log('Delete item ID:', id);
    };

    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            
            <div className="inventory-container">
                <h2>Data Inventaris</h2>
                <p>Ini adalah halaman untuk melihat data serta mengelola inventaris Agrowisata Tepas Papandayan.</p>
            
                {/* Card for table and inventory management */}
                <div className="inventory-management">
                <h3></h3>
                <p>Total barang saat ini: <strong>250</strong> transaksi</p>
                    <div className="filter-search">
                        <button className="filter-button"><FaFilter /> Filter</button>
                        <div className="search-bar">
                            <input type="text" placeholder="Pencarian" />
                            <button><FaSearch /></button>
                        </div>
                    </div>

                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>KODE BARANG</th>
                                <th>NAMA BARANG</th>
                                <th>HARGA</th>
                                <th>JUMLAH</th>
                                <th>AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventoryItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.kode}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.stock}</td>
                                    <td>
                                        <button className="action-button edit" onClick={() => handleEdit(item.id)}><FaEdit /> Edit</button>
                                        <button className="action-button delete" onClick={() => handleDelete(item.id)}><FaTrash /> Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination">
                        <button>Previous</button>
                        <button className="page-number active">1</button>
                        <button className="page-number">2</button>
                        <button className="page-number">3</button>
                        <button>Next</button>
                    </div>
                    <button className="manage-inventory-button" onClick={() => navigate('/kelolainven')}>Kelola Inventaris</button>
                </div>
            </div>
        </>
    );
};

export default Inven;

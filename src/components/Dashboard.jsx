import React from "react";
import law from '../assets/law.png';

const Dashboard = () => {
  return (
    <div id="dashboard" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <img className="w-full max-w-[500px] mx-auto my-4" src={law} alt="Law" />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold py-2">Kelola Informasi dan Dokumen Notaris Secara Terpusat</h1>
          <p className="text-gray-700 mb-4">
            Selamat datang di layanan terpadu kami. Kami menyediakan platform untuk mengelola dan mengakses dokumen hukum dan administrasi notaris Anda. Dengan sistem yang terintegrasi, Anda dapat dengan mudah menangani berbagai keperluan hukum seperti pembuatan akta, pengesahan dokumen, dan konsultasi hukum lainnya. Kami berkomitmen untuk memberikan pelayanan yang cepat, akurat, dan aman sesuai dengan kebutuhan Anda.
          </p>
          <button onClick={() => document.getElementById('layanan').scrollIntoView({ behavior: 'smooth' })} className='bg-[#500404] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

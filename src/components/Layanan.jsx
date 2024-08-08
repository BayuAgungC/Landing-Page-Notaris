import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';

const services = [
  {
    title: 'Konsultasi Hukum',
    duration: '1-2 bulan',
    description: 'Layanan konsultasi hukum untuk membantu Anda memahami dan menyelesaikan masalah hukum Anda secara efektif dan efisien.',
    requirements: [
      'KTP',
      'Surat Kuasa',
      'Dokumen Terkait'
    ],
    priceRange: 'IDR 500,000 - 1,000,000'
  },
  {
    title: 'Pembuatan Akta Notaris',
    duration: '1-3 minggu',
    description: 'Pembuatan berbagai jenis akta notaris, termasuk akta pendirian perusahaan, akta perjanjian, dan akta perubahan.',
    requirements: [
      'KTP',
      'Dokumen Pendirian',
      'Surat Pengantar'
    ],
    priceRange: 'IDR 1,000,000 - 3,000,000'
  },
  {
    title: 'Perubahan Data Perusahaan',
    duration: '2-4 minggu',
    description: 'Layanan perubahan data perusahaan, seperti perubahan nama, alamat, atau struktur kepemilikan.',
    requirements: [
      'KTP',
      'Dokumen Perubahan',
      'Surat Pengantar'
    ],
    priceRange: 'IDR 2,000,000 - 5,000,000'
  },
  {
    title: 'Pembuatan Surat Kuasa',
    duration: '1 minggu',
    description: 'Pembuatan surat kuasa untuk keperluan hukum yang membutuhkan delegasi wewenang.',
    requirements: [
      'KTP',
      'Dokumen Terkait'
    ],
    priceRange: 'IDR 500,000 - 1,000,000'
  },
  {
    title: 'Legal Drafting',
    duration: '2 minggu',
    description: 'Penyusunan dokumen hukum, termasuk kontrak, perjanjian, dan dokumen legal lainnya.',
    requirements: [
      'KTP',
      'Draft Dokumen',
      'Surat Pengantar'
    ],
    priceRange: 'IDR 1,500,000 - 4,000,000'
  },
  {
    title: 'Lainnya',
    duration: 'Bervariasi',
    description: 'Layanan notaris lainnya yang mungkin Anda butuhkan, harap hubungi kami untuk informasi lebih lanjut.',
    requirements: [
      'Bervariasi'
    ],
    priceRange: 'Bervariasi'
  }
];

const Cards = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div id="layanan" className='w-full py-[10rem] px-4 bg-gray-100'>
      <div className='max-w-[1240px] mx-auto'>
        <h2 className='text-4xl font-bold text-left mb-8'>Daftar Layanan</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300 cursor-pointer'
              onClick={() => handleCardClick(service)}
            >
              <h2 className='text-xl font-bold text-gray-800 text-center py-4'>{service.title}</h2>
              <div className='flex items-center justify-center'>
                <FaClock className='text-gray-500 mr-2' />
                <span className='text-gray-500'>{service.duration}</span>
              </div>
              <p className='text-gray-600 text-center py-4'>{service.description}</p>
              <button className='bg-[#500404] text-white w-full rounded-md font-medium py-2'>More Information</button>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50' onClick={handleClose}>
          <div className='bg-white p-8 rounded-lg max-w-lg mx-auto relative' onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleClose}
              className='absolute top-2 right-2 text-gray-500 hover:text-gray-700'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>{selectedService.title}</h2>
            <p className='text-gray-600 mb-2'><strong>Waktu Pengerjaan:</strong> {selectedService.duration}</p>
            <p className='text-gray-600 mb-2'><strong>Range Harga:</strong> {selectedService.priceRange}</p>
            <p className='text-gray-600 mb-4'><strong>Syarat-syarat:</strong></p>
            <ul className='list-disc pl-5 mb-4'>
              {selectedService.requirements.map((req, idx) => (
                <li key={idx} className='text-gray-600'>{req}</li>
              ))}
            </ul>
            <p className='text-gray-600'><strong>Deskripsi:</strong> {selectedService.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
import React, { useState } from 'react';
import { FaClock } from 'react-icons/fa';

const services = [
  {
    title: 'Konsultasi',
    duration: '',
    description: 'Layanan konsultasi untuk membantu masyarakat memahami permasalahan hukum secara menyeluruh. Konsultasi dapat dilakukan secara langsung di kantor atau secara daring sesuai dengan kenyamanan .  kami siap memberikan solusi terbaik dan profesional untuk segala kebutuhan hukum Anda.',
    requirements: ['Menyesuaikan'],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Sewa Menyewa',
    duration: 'Bervariasi',
    description: 'Layanan pembuatan dan pengurusan dokumen sewa-menyewa properti. Proses ini mencakup perjanjian sewa, penentuan objek, serta fasilitas yang disewakan. Kami memastikan semua dokumen lengkap dan sesuai dengan hukum agar transaksi berjalan aman dan lancar.',
    requirements: [
      'Fotokopi/File sertifikat',
      'Fotokopi/File surat pernyataan ahli waris',
      'Fotokopi/File akta kematian orang tua',
      'Fotokopi/File KTP, KK ahli waris (yang menyewakan)',
      'Fotokopi/File KTP, KK penyewa',
      'PBB tahun terbaru 2024',
      'Nilai sewa',
      'Masa sewa',
      'Objek dan fasilitas sewa',
      'Penggunaan objek sewa',
    ],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Pengajuan PBG + SLF',
    duration: 'Bervariasi',
    description: 'Layanan pengajuan PBG (Persetujuan Bangunan Gedung) dan SLF (Sertifikat Laik Fungsi). Kami membantu Anda mempersiapkan seluruh dokumen teknis dan administrasi yang diperlukan, termasuk gambar teknik rumah dan spesifikasi teknis. Alur layanan meliputi pendaftaran OSS/NIB, pengajuan IPKKPR, hingga pengajuan online dan penyerahan berkas fisik.',
    requirements: [
      'Nomor Induk Berusaha (NIB) perorangan/badan hukum',
      'Fotokopi SHM + AJB (legasir)',
      'KTP, KK pemohon sesuai SHM/AJB',
      'PBB tahun terbaru 2024',
      'Foto lokasi dan sharelocknya',
      'Dokumen teknis (gambar teknik, spesifikasi, perhitungan konstruksi, dokumen kajian teknis)',
      'Alur pengurusan: OSS, IPKKPR, SIM-BG',
    ],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Pendirian CV',
    duration: 'Bervariasi',
    description: 'Layanan pembuatan dokumen pendirian CV meliputi persiapan dokumen pendukung seperti KTP, NPWP pendiri/pengurus, dan modal usaha. Kami memastikan proses pendirian CV Anda berjalan lancar dan sesuai peraturan yang berlaku, dengan pendampingan penuh dari tim profesional.',
    requirements: [
      'KTP, KK, NPWP pendiri/pengurus',
      'Keterangan domisili',
      'Modal',
      'Jenis usaha',
      'Nama CV minimal 3 suku kata',
    ],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Pembuatan PT Perorangan',
    duration: 'Bervariasi',
    description: 'Layanan pembuatan PT perorangan yang memudahkan pengusaha untuk mendirikan perusahaan. Proses ini mencakup pengurusan NIB, KTP, NPWP, dan dokumen pendukung lainnya. Dengan bantuan tim ahli kami, Anda dapat memulai bisnis Anda dengan lebih mudah dan cepat.',
    requirements: ['KTP, NPWP, dokumen pendukung usaha', 'Modal minimal', 'Keterangan domisili', 'Surat pernyataan kesesuaian kegiatan usaha'],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Pembuatan Warmeeking',
    duration: 'Bervariasi',
    description: 'Kami menyediakan layanan pembuatan warmeeking untuk memenuhi kebutuhan bisnis Anda. Layanan ini mencakup pengurusan dokumen resmi, perizinan, dan pengesahan yang sesuai dengan peraturan yang berlaku.',
    requirements: ['Dokumen teknis dan legal', 'Surat keterangan usaha', 'Dokumen tambahan sesuai kebutuhan'],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Pembuatan PPJB',
    duration: 'Bervariasi',
    description: 'Layanan pembuatan Perjanjian Pengikatan Jual Beli (PPJB) untuk transaksi properti yang aman dan sah. Kami membantu menyusun dokumen lengkap dengan persyaratan yang jelas agar proses jual beli berjalan lancar.',
    requirements: [
      'KTP/KK para pihak',
      'Dokumen tanah/objek jual (sertifikat, PBB, dll)',
      'Surat waris (apabila ada pewarisan)',
    ],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Pembuatan Kuasa Menjual',
    duration: 'Bervariasi',
    description: 'Layanan penyusunan surat kuasa menjual properti atau aset lainnya, dilengkapi dengan persyaratan yang memastikan transaksi Anda sah dan aman. Tim kami akan membantu Anda menyusun surat kuasa dengan lengkap dan sesuai kebutuhan hukum.',
    requirements: [
      'KTP/KK para pihak',
      'Dokumen tanah/objek jual (sertifikat, PBB, dll)',
      'Surat waris (apabila ada pewarisan)',
    ],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
  {
    title: 'Lainnya',
    duration: 'Bervariasi',
    description: 'Kami menyediakan berbagai layanan notaris lainnya sesuai kebutuhan klien. Harap hubungi kami untuk informasi lebih lanjut mengenai layanan khusus yang mungkin Anda perlukan.',
    requirements: ['Bervariasi sesuai kebutuhan'],
    priceRange: 'Hubungi untuk informasi lebih lanjut',
  },
];

const Cards = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div id="layanan" className="w-full py-[10rem] px-4 bg-gray-100">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold text-left mb-8">Daftar Layanan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-white hover:scale-105 duration-300 cursor-pointer"
              onClick={() => handleCardClick(service)}
            >
              <h2 className="text-xl font-bold text-gray-800 text-center py-4">
                {service.title}
              </h2>
              <div className="flex items-center justify-center">
                <FaClock className="text-gray-500 mr-2" />
                <span className="text-gray-500">{service.duration}</span>
              </div>
              <p className="text-gray-600 text-center py-4">
                {truncateText(service.description, 20)}
              </p>
              <button className="bg-[#500404] text-white w-full rounded-md font-medium py-2 mt-auto">
                More Information
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white p-8 rounded-lg max-w-lg mx-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedService.title}
            </h2>
            <p className="text-gray-600 mb-2">
              <strong>Waktu Pengerjaan:</strong> {selectedService.duration}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Range Harga:</strong> {selectedService.priceRange}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Syarat-syarat:</strong>
            </p>
            <ul className="list-disc pl-5 mb-4">
              {selectedService.requirements.map((req, idx) => (
                <li key={idx} className="text-gray-600">
                  {req}
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              <strong>Deskripsi:</strong> {selectedService.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;

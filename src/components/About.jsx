import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h2 className="text-4xl font-bold text-center py-8">Tentang Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img 
              className="w-full h-auto rounded-lg shadow-lg" 
              src="https://www.ini.id/apps/public/images/logo-ini.png" 
              alt="Kantor Notaris" 
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Informasi Kantor</h3>
            <p className="text-gray-700 mb-4">
              Kami adalah kantor notaris yang berkomitmen untuk memberikan pelayanan hukum terbaik. Dengan pengalaman bertahun-tahun, kami siap membantu Anda dengan berbagai layanan notaris seperti pembuatan akta, pengesahan dokumen, dan konsultasi hukum.
            </p>
            <p className="text-gray-700 mb-2"><strong>Alamat:</strong></p>
            <p className="text-gray-700 mb-4">Jl. St. No.53, Beru, Kec. Wlingi, Kabupaten Blitar, Jawa Timur 66184</p>
            <p className="text-gray-700 mb-2"><strong>Telepon:</strong></p>
            <p className="text-gray-700 mb-4">0813-3566-6334</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong></p>
            <p className="text-gray-700 mb-4">agusdanrekan@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Jam:</strong></p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Senin - Jumat: 09:00 - 16:00</li>
              <li>Sabtu - Minggu Tutup</li>
              <li>Tanggal Merah dan Hari Besar Libur</li>
            </ul>

            <button 
              className='bg-[#500404] w-[250px] rounded-md font-medium py-3 text-white'
              onClick={() => window.open('https://maps.app.goo.gl/9Jt7usovKeVhwV6n8', '_blank')}
            >
              Lihat Lokasi di Google Maps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

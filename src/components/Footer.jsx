import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#500404] text-gray-300 py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Informasi Utama */}
        <div>
          <h1 className="text-3xl font-bold text-white">
            Kantor Notaris Agus Santoso
          </h1>
          <p className="py-4">
            Kami menyediakan berbagai layanan notaris yang cepat, akurat, dan aman. Komitmen kami adalah memberikan pelayanan terbaik sesuai kebutuhan Anda.
          </p>
          {/* Email dengan link mailto */}
          <div className="flex items-center mt-6">
            <FaEnvelope size={20} className="mr-2" />
            <a
              href="mailto:agusdanrekan@gmail.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              agusdanrekan@gmail.com
            </a>
          </div>
        </div>

        {/* Layanan */}
        <div>
          <h6 className="font-medium text-white">Layanan Kami</h6>
          <ul className="mt-4">
            <li className="py-2 text-sm">Pembuatan Akta</li>
            <li className="py-2 text-sm">Pengesahan Dokumen</li>
            <li className="py-2 text-sm">Konsultasi Hukum</li>
            <li className="py-2 text-sm">Perjanjian dan Kontrak</li>
          </ul>
        </div>

        {/* Informasi Tambahan */}
        <div>
          <h6 className="font-medium text-white">Informasi</h6>
          <ul className="mt-4">
            <li className="py-2 text-sm">Tentang Kami</li>
            <li className="py-2 text-sm">Kontak</li>
            <li className="py-2 text-sm">Kebijakan Privasi</li>
            <li className="py-2 text-sm">Syarat dan Ketentuan</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center">
        <p>&copy; 2024 Kantor Notaris Agus Santoso. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

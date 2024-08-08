import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#ffffff]'>Kantor Notaris Agus Santoso</h1>
        <p className='py-4'>Kami menyediakan berbagai layanan notaris yang cepat, akurat, dan aman. Komitmen kami adalah memberikan pelayanan terbaik sesuai kebutuhan Anda.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Layanan</h6>
            <ul>
                <li className='py-2 text-sm'>Pembuatan Akta</li>
                <li className='py-2 text-sm'>Pengesahan Dokumen</li>
                <li className='py-2 text-sm'>Konsultasi Hukum</li>
                <li className='py-2 text-sm'>Perjanjian dan Kontrak</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Dukungan</h6>
            <ul>
                <li className='py-2 text-sm'>Harga</li>
                <li className='py-2 text-sm'>Dokumentasi</li>
                <li className='py-2 text-sm'>Panduan</li>
                <li className='py-2 text-sm'>Status API</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Perusahaan</h6>
            <ul>
                <li className='py-2 text-sm'>Tentang Kami</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Karir</li>
                <li className='py-2 text-sm'>Pers</li>
                <li className='py-2 text-sm'>Kontak</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Klaim</li>
                <li className='py-2 text-sm'>Kebijakan</li>
                <li className='py-2 text-sm'>Syarat dan Ketentuan</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

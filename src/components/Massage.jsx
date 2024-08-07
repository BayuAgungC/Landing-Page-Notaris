import React, { useState } from 'react';

const Massage = () => {
  const [userMessage, setUserMessage] = useState('');
  const phoneNumber = '6285732715806';

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(userMessage || 'Halo, saya ingin bertanya lebih lanjut.');
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Ingin tahu lebih lanjut?
          </h1>
          <p>Kontak kami untuk lebih banyak pertanyaan.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='text'
              placeholder='Masukkan pesan Anda'
              value={userMessage}
              onChange={handleMessageChange}
            />
            <a
              href={getWhatsAppLink()}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-white text-[#500404] hover:bg-[#a83838] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 transition duration-200'>
                Send
              </button>
            </a>
          </div>
          <p>
            Kami peduli dengan perlindungan data Anda. Baca{' '}
            <span className='text-[#000000]'>Kebijakan Privasi</span> kami.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Massage;

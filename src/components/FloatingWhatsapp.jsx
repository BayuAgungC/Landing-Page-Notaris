import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsapp = () => (
  <a 
    href="https://wa.me/6281335666334" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition-transform"
  >
    <FaWhatsapp size={24} color="white" />
  </a>
);

export default FloatingWhatsapp;

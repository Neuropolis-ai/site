"use client";

import React from "react";
import { 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter, 
  FaTelegram, 
  FaEnvelope,
  FaLink
} from "react-icons/fa";
import { toast } from "react-hot-toast";

interface SocialShareButtonsProps {
  title: string;
  url: string;
  description?: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ 
  title, 
  url, 
  description = "Интересный кейс о внедрении ИИ-ассистента"
}) => {
  // Полный URL страницы
  const fullUrl = typeof window !== "undefined" 
    ? `${window.location.origin}${url}` 
    : `https://neuropolis.ai${url}`;
  
  // Функция для копирования URL в буфер обмена
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      toast.success("Ссылка скопирована!");
    }).catch(err => {
      toast.error("Не удалось скопировать ссылку");
      console.error("Ошибка копирования: ", err);
    });
  };

  // Шаринг в LinkedIn
  const handleLinkedInShare = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
      "_blank",
      "width=600,height=600"
    );
  };

  // Шаринг в Facebook
  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
      "_blank",
      "width=600,height=600"
    );
  };

  // Шаринг в Twitter
  const handleTwitterShare = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
      "_blank",
      "width=600,height=600"
    );
  };

  // Шаринг в Telegram
  const handleTelegramShare = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
      "_blank",
      "width=600,height=600"
    );
  };

  // Шаринг по email
  const handleEmailShare = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + "\n\n" + fullUrl)}`;
  };

  return (
    <div className="w-full" id="social-share">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">Поделиться кейсом:</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleLinkedInShare}
          aria-label="Поделиться в LinkedIn"
          className="p-2.5 rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
        >
          <FaLinkedin size={18} />
        </button>
        
        <button
          onClick={handleFacebookShare}
          aria-label="Поделиться в Facebook"
          className="p-2.5 rounded-full bg-[#3b5998] text-white hover:opacity-90 transition-opacity"
        >
          <FaFacebook size={18} />
        </button>
        
        <button
          onClick={handleTwitterShare}
          aria-label="Поделиться в Twitter"
          className="p-2.5 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
        >
          <FaTwitter size={18} />
        </button>
        
        <button
          onClick={handleTelegramShare}
          aria-label="Поделиться в Telegram"
          className="p-2.5 rounded-full bg-[#0088cc] text-white hover:opacity-90 transition-opacity"
        >
          <FaTelegram size={18} />
        </button>
        
        <button
          onClick={handleEmailShare}
          aria-label="Поделиться по Email"
          className="p-2.5 rounded-full bg-gray-600 text-white hover:opacity-90 transition-opacity"
        >
          <FaEnvelope size={18} />
        </button>
        
        <button
          onClick={copyToClipboard}
          aria-label="Копировать ссылку"
          className="p-2.5 rounded-full bg-gray-800 text-white hover:opacity-90 transition-opacity"
        >
          <FaLink size={18} />
        </button>
      </div>
    </div>
  );
};

export default SocialShareButtons; 
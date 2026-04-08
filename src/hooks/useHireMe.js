import { useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LanguageContext } from '../contexts/LanguageContext';
import { ThemeContext } from '../contexts/ThemeContext';

export const useHireMe = () => {
  const { lang } = useContext(LanguageContext);
  const { isDarkMode } = useContext(ThemeContext);

  const handleHireMe = () => {
    const toastId = toast.loading(
      lang === 'tr'
        ? 'İletişim isteği gönderiliyor...'
        : 'Sending hire request...'
    );

    const payload = {
      language: lang,
      theme: isDarkMode ? 'dark' : 'light',
    };

    axios
      .post('https://reqres.in/api/workintech', payload, {
        //reqres-free-v1
        headers: {
          'x-api-key': import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        console.log(
          `[API] ${lang === 'tr' ? 'Beni İşe Al - Başarılı' : 'Hire Me - Success'}`,
          response.data
        );
        toast.update(toastId, {
          render:
            lang === 'tr'
              ? 'Mesajınız başarıyla iletildi! 🎉'
              : 'Message sent successfully! 🎉',
          type: 'success',
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.warn(
          `[API] ${lang === 'tr' ? 'Beni İşe Al - Hata' : 'Hire Me - Error'}`,
          error.message || error
        );
        toast.update(toastId, {
          render:
            lang === 'tr'
              ? 'Hata oluştu, tekrar deneyin.'
              : 'Error occurred, try again.',
          type: 'error',
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  return { handleHireMe };
};

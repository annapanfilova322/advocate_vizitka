// ВСЕ ДАННЫЕ САЙТА

// 🔒 ШИФРОВАННЫЙ ПАРОЛЬ (Base64)
const encodedPassword = "QW5QYTIwMjQhTGF3eWVyI1NlY3VyZQ=="; // Это "AnPa2024!Lawyer#Secure" в base64

// 🔒 ФУНКЦИЯ ДЕШИФРОВКИ
const decodePassword = (encoded: string): string => {
  return atob(encoded); // Просто Base64 декодирование
};

export const siteData = {
  // 🔒 ДЕШИФРОВАННЫЙ ПАРОЛЬ
  get adminPassword() {
    return decodePassword(encodedPassword);
  },
  
  // ОТЗЫВЫ
  testimonials: [
   {
      id: 1,
      company: 'ООО "ПЕТРОХОЛОД ГРУПП"', 
      drive_link: "https://drive.google.com/file/d/16KUHshBhZxwpk0jRrjEIFcCrmQrMAP1y/view?usp=sharing"
    },
    {
      id: 2,
      company: 'ЗАО "ГЕОСТРОЙ"',
      drive_link: "https://drive.google.com/file/d/17lBoA38xk9scVqEPNjdmmn0GVd4X2axW/view?usp=sharing" 
    },
    {
      id: 3,
      company: 'ООО "ЧИСТЫЙ МИР"',
      drive_link: "https://drive.google.com/file/d/12txecrXqHap-e70vUjAYlShrKG6sKi1e/view?usp=sharing" 
    },
    {
      id: 4,
      company: 'ООО "АМИГО"',
      drive_link: "https://drive.google.com/file/d/1LDVV0ZCB5PcOwA8c6yXfGrHWOvLUQB47/view?usp=sharing" 
    }
    ,
    {
      id: 5,
      company: 'ООО "АЛЁНА"',
      drive_link: "https://drive.google.com/file/d/1TKJtJjYE2rGb8oEgtA6UK0Do1q4VJ-Xk/view?usp=sharing" 
    }
    ,
    {
      id: 6,
      company: "Адвокадсткая коллегия",
      drive_link: "https://drive.google.com/file/d/1hp5eCuveovbG6_l6yRAs1Yh39ag6jBYV/view?usp=sharing" 
    }
  ],
  
  // СЕРТИФИКАТЫ
  certificates: [
    {
      id: 1,
      title: "Сертификат адвоката",
      image: "/certificates/cert1.jpg",
      drive_link: ""
    },
    {
      id: 2, 
      title: "Диплом юриста", 
      image: "/certificates/cert2.jpg",
      drive_link: "https://drive.google.com/cert2"
    }
  ]
};

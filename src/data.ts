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
      letterUrl: "https://drive.google.com/file/d/16KUHshBhZxwpk0jRrjEIFcCrmQrMAP1y"
    },
    {
      id: 2,
      company: 'ЗАО "ГЕОСТРОЙ"',
      letterUrl: "https://drive.google.com/file/d/17lBoA38xk9scVqEPNjdmmn0GVd4X2axW"
    },
    {
      id: 3,
      company: 'ООО "ЧИСТЫЙ МИР"',
      letterUrl: "https://drive.google.com/file/d/12txecrXqHap-e70vUjAYlShrKG6sKi1e"
    },
    {
      id: 4,
      company: 'ООО "АМИГО"',
      letterUrl: "https://drive.google.com/file/d/1LDVV0ZCB5PcOwA8c6yXfGrHWOvLUQB47"
    },
    {
      id: 5,
      company: 'ООО "АЛЁНА"',
      letterUrl: "https://drive.google.com/file/d/1TKJtJjYE2rGb8oEgtA6UK0Do1q4VJ-Xk"
    },
    {
      id: 6,
      company: "Адвокадсткая коллегия",
      letterUrl: "https://drive.google.com/file/d/1hp5eCuveovbG6_l6yRAs1Yh39ag6jBYV"
    }
  ],
  // СЕРТИФИКАТЫ
  certificates: [
    {
      id: 1,
      title: "Сертификат адвоката",
      image: "/certificates/cert1.jpg",
      drive_link: "https://drive.google.com/file/d/1DDji3Q56VweYsi_nw9vT-_yiQmWIhz4c"
    },
    {
      id: 2,
      title: "Диплом юриста",
      image: "/certificates/cert2.jpg",
      drive_link: "https://drive.google.com/file/d/1dmCZWBkC_wdCZ41QSnZY8cL7jIBOYA-k"
    }
  ]
};

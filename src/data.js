// ВСЕ ДАННЫЕ САЙТА ЗДЕСЬ
export const siteData = {
  // ПАРОЛЬ ДЛЯ АДМИНКИ
  adminPassword: "admin123",
  
  // ОТЗЫВЫ
  testimonials: [
    {
      id: 1,
      company: "ООО Рога и копыта", 
      drive_link: "https://drive.google.com/test1"
    },
    {
      id: 2,
      company: "ИП Иванов",
      drive_link: "https://drive.google.com/test2" 
    }
  ],
  
  // СЕРТИФИКАТЫ
  certificates: [
    {
      id: 1,
      title: "Сертификат адвоката",
      image: "/certificates/cert1.jpg",
      drive_link: "https://drive.google.com/file/d/1DDji3Q56VweYsi_nw9vT-_yiQmWIhz4c/view?usp=sharing"
    },
    {
      id: 2, 
      title: "Диплом юриста", 
      image: "/certificates/cert2.jpg",
      drive_link: "https://drive.google.com/cert2"
    }
  ]
};

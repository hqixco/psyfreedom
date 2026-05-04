import { ImageSourcePropType } from 'react-native';

export type EducationItem = {
  years: string;
  title: string;
  description: string;
};

export type SpecialistProduct = {
  id: string;
  title: string;
  type: 'Курс' | 'Игра' | 'Видеоурок' | 'Книга' | 'Промокод';
  price: string;
  rating: string;
  image: ImageSourcePropType;
};

export type SpecialistReview = {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
  avatar: ImageSourcePropType;
};

export type SpecialistDetails = {
  id: string;
  name: string;
  specialization: string;
  price: string;
  experience: string;
  city: string;
  rating: string;
  reviewsCount: number;
  image: ImageSourcePropType;
  tags: string[];
  stats: {
    products: number;
    materials: number;
    sessions: number;
  };
  about: string;
  methods: string[];
  topics: string[];
  sessionBenefits: string[];
  education: EducationItem[];
  certificates: ImageSourcePropType[];
  media: ImageSourcePropType[];
  products: SpecialistProduct[];
  reviews: SpecialistReview[];
};

const specialistImage = require('../../assets/specialist-photo-default.jpg');
const specialistAvatar = require('../../assets/images/specialist-avatar-default.png');
const reviewAvatar = require('../../assets/review-avatar-default.png');
const certificate1 = require('../../assets/images/specialist-certificate-1.png');
const certificate2 = require('../../assets/images/specialist-certificate-2.png');
const media1 = require('../../assets/images/specialist-media-preview-1.png');
const placeholder = require('../../assets/product-placeholder-square.png');
const productCourse = require('../../assets/product-placeholder-square.png');
const bookImage = require('../../assets/product-placeholder-square.png');

export const specialistDetails: SpecialistDetails = {
  id: 'specialist-1',
  name: 'Анна Смирнова',
  specialization: 'Психолог',
  price: 'От 1 200 ₽',
  experience: '12 лет',
  city: 'Москва',
  rating: '5.0',
  reviewsCount: 120,
  image: specialistImage,
  tags: ['Отношения', 'Семья', 'Фобии'],
  stats: {
    products: 6,
    materials: 12,
    sessions: 40,
  },
  about:
    'Если спросить у психологов: «За что вам платят?», многие начнут говорить про образование, методы или опыт. Но на самом деле ко мне приходят за возможностью наконец-то услышать себя, снизить тревогу и найти опору там, где раньше был только хаос. Я работаю мягко и структурно, без давления, помогая клиенту идти в темпе, который ему подходит. В дополнение я отдельно проговариваю, как возвращаться к себе между встречами и не терять эффект от работы.',
  methods: [
    'Интегративная психотерапия',
    'Нейролингвистическая психотерапия',
    'Системная семейная психотерапия',
  ],
  topics: ['Отношения', 'Семья', 'Фобии', 'Самооценка', 'Стресс'],
  sessionBenefits: [
    'Понимание своих эмоций',
    'Навык работы с тревогой',
    'Улучшение отношений',
    'Личный план действий',
  ],
  education: [
    {
      years: '2015 — 2019',
      title: 'Институт повышения квалификации и переподготовки кадров РУДН',
      description: '«Психологическое консультирование»',
    },
    {
      years: '2021 — 2025',
      title: 'Московский гештальт институт',
      description: '«Теория и практика гештальт терапии»',
    },
  ],
  certificates: [certificate1, certificate2, placeholder],
  media: [media1, placeholder, media1],
  products: [
    { id: 'product-1', title: 'Девичник', type: 'Курс', price: '6 000 ₽', rating: '5.0', image: productCourse },
    { id: 'product-2', title: 'Секреты счастливой жены', type: 'Курс', price: '10 000 ₽', rating: '5.0', image: productCourse },
    { id: 'product-8', title: 'Игра на доверие', type: 'Игра', price: '4 200 ₽', rating: '4.8', image: placeholder },
    { id: 'product-10', title: 'Видеоурок по самооценке', type: 'Видеоурок', price: '990 ₽', rating: '4.4', image: placeholder },
    { id: 'product-6', title: 'Название книги', type: 'Книга', price: '10 000 ₽', rating: '4.9', image: bookImage },
    { id: 'product-4', title: 'Промокод на курс', type: 'Промокод', price: 'Бесплатно', rating: '4.7', image: placeholder },
  ],
  reviews: [
    {
      id: 'review-1',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      text: 'Очень деликатный и внимательный специалист. После нескольких встреч стало легче понимать свои реакции и спокойнее проходить сложные разговоры.',
      rating: 5,
      avatar: reviewAvatar,
    },
    {
      id: 'review-2',
      author: 'Мария Белова',
      date: '18 ноября 2023',
      text: 'Понравилось, что на сессиях есть структура и конкретные шаги. Работа не уходит в абстракцию, а действительно помогает в жизни.',
      rating: 5,
      avatar: specialistAvatar,
    },
    {
      id: 'review-3',
      author: 'Александр Романов',
      date: '7 декабря 2023',
      text: 'Стало лучше понимать, откуда берется тревога, и какие инструменты помогают не проваливаться в нее полностью.',
      rating: 5,
      avatar: reviewAvatar,
    },
  ],
};

export function getSpecialistDetailsById(id: string): SpecialistDetails {
  if (id === specialistDetails.id) {
    return specialistDetails;
  }

  return {
    ...specialistDetails,
    id,
    name: 'Имя Фамилия',
    specialization: 'Специализация',
  };
}


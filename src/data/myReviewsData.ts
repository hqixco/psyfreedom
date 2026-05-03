import { ImageSourcePropType } from 'react-native';

export type WrittenReview = {
  id: string;
  targetTitle: string;
  rating: number;
  date: string;
  text: string;
  reply?: {
    author: string;
    date: string;
    text: string;
  };
};

export type PendingReview = {
  id: string;
  targetTitle: string;
  image: ImageSourcePropType;
  type: 'product' | 'specialist' | 'session';
};

const purchaseImage = require('../../assets/images/product-course-devichnik.png');

export const writtenReviewsMock: WrittenReview[] = [
  {
    id: '1',
    targetTitle: 'Имя Фамилия специалиста или\nтовар',
    rating: 5,
    date: '30 октября 2023',
    text: 'Вы разберётесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    reply: {
      author: 'Имя Фамилия специалиста ответ',
      date: '13 июля 2023',
      text: 'Спасибо за ваше мнение и хороший отзыв!',
    },
  },
  {
    id: '2',
    targetTitle: 'Имя Фамилия специалиста или\nтовар',
    rating: 5,
    date: '30 октября 2023',
    text: 'Вы разберётесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
  },
  {
    id: '3',
    targetTitle: 'Онлайн консультация с\nМарией Лапиной',
    rating: 4,
    date: '22 сентября 2023',
    text: 'Хороший опыт консультации. Понравилась структура сессии, ощущение спокойствия и очень понятные рекомендации после встречи.',
    reply: {
      author: 'Мария Лапина ответ',
      date: '24 сентября 2023',
      text: 'Благодарю за отзыв. Рада, что консультация была вам полезна.',
    },
  },
];

export const pendingReviewsMock: PendingReview[] = [
  {
    id: '1',
    targetTitle: 'Секреты счастливой жены\nКак найти себя',
    image: purchaseImage,
    type: 'product',
  },
  {
    id: '2',
    targetTitle: 'Онлайн консультация\nМария Лапина',
    image: purchaseImage,
    type: 'specialist',
  },
  {
    id: '3',
    targetTitle: 'Секреты счастливой жены\nКак найти себя',
    image: purchaseImage,
    type: 'product',
  },
  {
    id: '4',
    targetTitle: 'Индивидуальная сессия\nПсихолог',
    image: purchaseImage,
    type: 'session',
  },
  {
    id: '5',
    targetTitle: 'Секреты счастливой жены\nКак найти себя',
    image: purchaseImage,
    type: 'product',
  },
  {
    id: '6',
    targetTitle: 'Онлайн консультация\nМария Лапина',
    image: purchaseImage,
    type: 'specialist',
  },
  {
    id: '7',
    targetTitle: 'Секреты счастливой жены\nКак найти себя',
    image: purchaseImage,
    type: 'product',
  },
];


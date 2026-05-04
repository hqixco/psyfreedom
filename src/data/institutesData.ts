import { ImageSourcePropType } from 'react-native';

export type InstituteReview = {
  id: string;
  author: string;
  date: string;
  rating: number;
  avatar: ImageSourcePropType;
  text: string;
};

export type InstituteProgram = {
  id: string;
  title: string;
  items: string[];
};

export type InstituteMediaItem = {
  id: string;
  image: ImageSourcePropType;
};

export type InstituteDetails = {
  id: string;
  title: string;
  educationTypes: string[];
  city: string;
  tags: string[];
  rating: string;
  reviewsCount: number;
  productsCount: number;
  materialsCount: number;
  cover: ImageSourcePropType;
  description: string;
  directions: string[];
  reviews: InstituteReview[];
  programs: InstituteProgram[];
  media: InstituteMediaItem[];
};

const instituteCover = require('../../assets/фото (6).jpg');
const instituteReviewAvatar = require('../../assets/review-avatar-default.png');
const instituteMediaA = require('../../assets/images/promo-card-default.png');
const instituteMediaB = require('../../assets/images/image-placeholder.png');

export const instituteDetailsMock: InstituteDetails = {
  id: '1',
  title: 'Онлайн институт психологии',
  educationTypes: ['Бакалавриат', 'Повышение квалификации'],
  city: 'г. Москва',
  tags: ['Отношения', 'Семья', 'Фобии'],
  rating: '5.0',
  reviewsCount: 120,
  productsCount: 6,
  materialsCount: 12,
  cover: instituteCover,
  description:
    'Если вы спросите у психологов: «За что вам платят?», многие ответят: «За инсайт». Это значит, что во время сессии вы узнаете о себе что-то новое. Клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решаются в результате нашей работы. Есть еще несколько практических блоков, чтобы описание можно было раскрывать.',
  directions: [
    'Интегративная психотерапия',
    'Нейролингвистическая психотерапия',
    'Системная семейная психотерапия',
  ],
  reviews: [
    {
      id: '1',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      rating: 5,
      avatar: instituteReviewAvatar,
      text:
        'Вы разберетесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    },
    {
      id: '2',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      rating: 5,
      avatar: instituteReviewAvatar,
      text:
        'Вы разберетесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    },
    {
      id: '3',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      rating: 5,
      avatar: instituteReviewAvatar,
      text:
        'Вы разберетесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    },
  ],
  programs: [
    {
      id: '1',
      title: 'Клинический психолог',
      items: ['Магистр', 'Срок обучения 5 лет'],
    },
  ],
  media: [
    { id: '1', image: instituteMediaA },
    { id: '2', image: instituteMediaB },
    { id: '3', image: instituteMediaA },
    { id: '4', image: instituteMediaB },
  ],
};

export const moscowGestaltInstituteDetailsMock: InstituteDetails = {
  id: 'moscow-gestalt',
  title: 'Московский гештальт институт',
  educationTypes: ['Профессиональная переподготовка', 'Повышение квалификации'],
  city: 'г. Москва',
  tags: ['Гештальт-терапия', 'Отношения', 'Семья'],
  rating: '5.0',
  reviewsCount: 120,
  productsCount: 8,
  materialsCount: 14,
  cover: instituteCover,
  description:
    'Московский гештальт институт готовит специалистов в области гештальт-подхода, семейной терапии и консультирования. Программы строятся на практике, супервизии и разборе реальных клиентских случаев. Внутри программы есть дополнительные практические блоки, супервизия и разбор типичных ошибок в работе.',
  directions: [
    'Гештальт-терапия',
    'Семейное консультирование',
    'Индивидуальная работа с клиентами',
  ],
  reviews: instituteDetailsMock.reviews,
  programs: [
    {
      id: '1',
      title: 'Гештальт-подход',
      items: ['Базовый курс', 'Практические сессии'],
    },
  ],
  media: instituteDetailsMock.media,
};

export const institutesMock: InstituteDetails[] = [instituteDetailsMock, moscowGestaltInstituteDetailsMock];

export function getInstituteDetailsById(instituteId: string) {
  return institutesMock.find((item) => item.id === instituteId) ?? institutesMock[0];
}

import { ImageSourcePropType } from 'react-native';

export type CommissionItem = {
  id: string;
  title: string;
  description: string;
};

export type CooperationStory = {
  id: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

export type SpecialistStep = {
  id: string;
  title: string;
  description: string;
};

export type CooperationBannerItem = {
  id: string;
  title: string;
  description: string;
  variant: 'blue' | 'mint' | 'lavender';
  image?: ImageSourcePropType;
};

export const commissionItems: CommissionItem[] = [
  {
    id: '1',
    title: '10% комиссии за сделку',
    description: 'Все сделки между пользователями\nи специалистами, облагаются\nкомиссией.',
  },
  {
    id: '2',
    title: '10% комиссии за сделку',
    description: 'Все сделки между пользователями\nи специалистами, облагаются\nкомиссией.',
  },
  {
    id: '3',
    title: '10% комиссии за сделку',
    description: 'Все сделки между пользователями\nи специалистами, облагаются\nкомиссией.',
  },
];

export const cooperationStories: CooperationStory[] = [
  {
    id: '1',
    title: 'После выхода на\nPsyfreedom я смогла\nисполнить свою мечту!',
    subtitle: 'После выхода на Psyfreedom я смогла\nисполнить свою мечту!',
    image: require('../../assets/cooperation-story-card-bg.jpg'),
  },
  {
    id: '2',
    title: 'После выхода на\nPsyfreedom я смогла\nисполнить свою мечту!',
    subtitle: 'После выхода на Psyfreedom я смогла\nисполнить свою мечту!',
    image: require('../../assets/cooperation-story-card-bg.jpg'),
  },
  {
    id: '3',
    title: 'После выхода на\nPsyfreedom я смогла\nисполнить свою мечту!',
    subtitle: 'После выхода на Psyfreedom я смогла\nисполнить свою мечту!',
    image: require('../../assets/cooperation-story-card-bg.jpg'),
  },
  {
    id: '4',
    title: 'После выхода на\nPsyfreedom я смогла\nисполнить свою мечту!',
    subtitle: 'После выхода на Psyfreedom я смогла\nисполнить свою мечту!',
    image: require('../../assets/cooperation-story-card-bg.jpg'),
  },
];

export const specialistSteps: SpecialistStep[] = [
  {
    id: 'register',
    title: 'Пройдите регистрацию на сайте',
    description:
      'Поймёте, как представление о себе влияет на ваше поведение и удовлетворённость жизнью. Узнаете, почему бывает трудно ответить на вопрос «Кто я и чего хочу?» и как справляться с этим состоянием.',
  },
  {
    id: 'documents',
    title: 'Заполните анкету и загрузите необходимые документы',
    description:
      'Заполните основную информацию, образование, специализацию, методы работы и загрузите необходимые документы.',
  },
  {
    id: 'payment',
    title: 'Оплатите первоначальный взнос в размере 5 000 ₽',
    description:
      'После оплаты первоначального взноса анкета будет передана на проверку модератором.',
  },
  {
    id: 'moderation',
    title: 'Дождитесь проверки модератором',
    description:
      'Модератор проверит ваши данные, документы и соответствие требованиям платформы.',
  },
  {
    id: 'publish',
    title: 'Разместите на платформе ваш товар или услугу',
    description:
      'Поймёте, как представление о себе влияет на ваше поведение и удовлетворённость жизнью. Узнаете, почему бывает трудно ответить на вопрос «Кто я и чего хочу?» и как справляться с этим состоянием. Сформулируете цели на курс. Начнёте заполнять журнал рефлексии.',
  },
];

export const cooperationBanners: CooperationBannerItem[] = [
  {
    id: 'officeRent',
    title: 'Аренда кабинета',
    description: 'Здесь вы можете найти информацию\nпо аренде помещений для встреч\nс клиентами',
    variant: 'blue',
    image: require('../../assets/cooperation-office-rent-bg.jpg'),
  },
  {
    id: 'productReview',
    title: 'Разобрать продукт',
    description: 'Здесь вы можете найти информацию\nпо аренде помещений для встреч\nс клиентами',
    variant: 'mint',
    image: require('../../assets/cooperation-product-review-bg.jpg'),
  },
  {
    id: 'earn',
    title: 'Как начать зарабатывать\nс платформой',
    description: 'Здесь вы можете найти информацию\nпо аренде помещений для встреч\nс клиентами',
    variant: 'lavender',
    image: require('../../assets/cooperation-earn-bg.jpg'),
  },
];


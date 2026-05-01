import { ProductDetails, Review } from './productDetailsData';

type TestAuthor = NonNullable<ProductDetails['author']>;

export const testQuestions = [
  {
    id: 'q1',
    question: '1. У меня отличное чувство юмора.',
    options: [
      'Да',
      'Скорее «Да», чем «Нет»',
      'Скорее «Нет», чем «Да»',
      'Нет',
      'Свой вариант ответа',
    ],
    allowCustomAnswer: true,
  },
];

const authorMaria = require('../../assets/images/author-maria.png');
const reviewAvatar = require('../../assets/картинка.png');

export const testResult: {
  title: string;
  resultTitle: string;
  metrics: { label: string; value: number }[];
  summary: string;
  descriptions: { title: string; text: string }[];
  author: TestAuthor;
  reviews: Review[];
} = {
  title: 'Узнать свой психологический возраст',
  resultTitle: 'Ваши результаты',
  metrics: [
    { label: 'Увлеченность', value: 56 },
    { label: 'Позитивность', value: 64 },
    { label: 'Открытость опыту', value: 78 },
  ],
  summary:
    'Ваш психологический возраст — 34 лет. Вы психологически взрослый человек, который уже достаточно хорошо понимает свои реакции, но сохраняет живой интерес к новому опыту и внутреннему росту.',
  descriptions: [
    {
      title: 'Позитивность — 18 из 28.',
      text: 'Чем больше баллов, тем вы более позитивны, легче замечаете поддерживающие стороны жизни и быстрее возвращаетесь к устойчивости после стресса.',
    },
    {
      title: 'Увлеченность — 9 из 16.',
      text: 'Чем больше баллов, тем вы более увлеченный человек, которому проще включаться в интересные задачи и удерживать внимание на важном.',
    },
    {
      title: 'Открытость опыту — 22 из 28.',
      text: 'Чем больше баллов, тем вы более открыты новому опыту, гибче адаптируетесь к переменам и легче пробуете незнакомые способы действий.',
    },
  ],
  author: {
    name: 'Мария Лапина',
    role: 'Психолог',
    rating: '5.0',
    reviewsCount: 120,
    image: authorMaria,
  },
  reviews: [
    {
      id: 'test-review-1',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      text: 'Вы разберётесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
      avatar: reviewAvatar,
    },
    {
      id: 'test-review-2',
      author: 'Марина Белова',
      date: '12 ноября 2023',
      text: 'Тест помогает спокойно взглянуть на себя и получить понятную интерпретацию результата. Формат короткий, но ощущается полезным и структурным.',
      avatar: reviewAvatar,
    },
    {
      id: 'test-review-3',
      author: 'Александр Романов',
      date: '5 декабря 2023',
      text: 'Понравилось, что результат не сводится к одной фразе. Есть разбор по шкалам, поэтому легче понять, на что опираться дальше.',
      avatar: reviewAvatar,
    },
  ],
};

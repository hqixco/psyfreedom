import { ImageSourcePropType } from 'react-native';

export type ProductVariant =
  | 'courseCompact'
  | 'courseFull'
  | 'promoCode'
  | 'book'
  | 'testPaid'
  | 'testFree';

export type ProductSummary = {
  id: string;
  title: string;
  type: string;
  price: string;
  rating: string;
  image: ImageSourcePropType;
};

export type Review = {
  id: string;
  author: string;
  date: string;
  text: string;
  avatar?: ImageSourcePropType;
};

export type ProductDetails = {
  id: string;
  variant: ProductVariant;
  title: string;
  categoryLabel: string;
  price: string;
  image: ImageSourcePropType;
  rating?: string;
  reviewsCount?: number;
  author?: {
    name: string;
    role: string;
    specialistId?: string;
    rating?: string;
    reviewsCount?: number;
    image?: ImageSourcePropType;
  };
  tags?: string[];
  description?: string;
  terms?: string;
  characteristics?: { label: string; value: string }[];
  promoInfo?: { label: string; value: string }[];
  bookInfo?: { label: string; value: string }[];
  courseProgram?: { id: string; title: string; description: string }[];
  relatedItems?: ProductSummary[];
  reviews?: Review[];
  promoBadge?: string;
  actionLabel?: string;
  actionPrice?: string;
  actionNote?: string;
};

const authorImage = require('../../assets/image (1).png');
const reviewAvatar = require('../../assets/картинка.png');
const productCourse = require('../../assets/photo.png');
const promoImage = require('../../assets/photo.png');
const bookImage = require('../../assets/photo.png');
const testImage = require('../../assets/photo.png');
const mariaAuthorImage = require('../../assets/images/author-maria.png');
const placeholderImage = require('../../assets/photo.png');

const defaultDescription =
  'Подробный курс о выстраивании устойчивых отношений, работе с внутренними страхами и формировании эмоциональной опоры. Материал подан простым языком и подходит для самостоятельного прохождения, если вам нужен спокойный и структурный формат движения к результату.';

const longCourseDescription =
  'Этот курс помогает мягко пересобрать привычные сценарии отношений, заметить повторяющиеся паттерны и научиться действовать устойчивее. Внутри собраны видеоуроки, письменные материалы и практические задания, которые позволяют не только понять причину сложностей, но и применить новые инструменты в реальной жизни. Курс подходит тем, кто хочет глубже разобраться в своих реакциях, снизить тревожность и научиться выстраивать более честный контакт с собой и близкими.';

const promoDescription =
  'Промокод даёт скидку на участие в выбранном курсе и позволяет активировать доступ по сниженной цене. Подходит тем, кто хочет попробовать формат обучения на платформе Psyfreedom и получить выгоду сразу после активации.';

const promoTerms =
  'Промокод действует один раз на один заказ, не суммируется с другими акциями и распространяется только на выбранные курсы раздела психологии. Скидка применяется автоматически после ввода кода на этапе оформления. Если срок действия истёк, промокод становится недоступен для активации.';

const bookDescription =
  'Книга о внутренней опоре, отношениях и саморазвитии. Автор последовательно проводит читателя через темы близости, границ, тревоги и повседневной устойчивости, добавляя примеры, упражнения и вопросы для самостоятельной работы.';

const testDescription =
  'Если вы спросите у психологов: «За что вам платят?», часть из них скажет, что за знание методик. Но часто человеку важнее получить ясность о себе и своих реакциях. Этот тест помогает мягко посмотреть на характер, заметить сильные стороны и увидеть привычные поведенческие сценарии.';

const defaultCharacteristics = [
  { label: 'Формат', value: 'Онлайн' },
  { label: 'Кол-во мест', value: '30' },
  { label: 'Дата начала', value: '27.10.2025' },
  { label: 'Вид материала', value: 'PDF' },
  { label: 'Время прохождения', value: '4 часа 30 минут' },
];

const defaultAuthor = {
  name: 'Мария Лапина',
  role: 'Психолог',
  rating: '5.0',
  reviewsCount: 120,
  image: authorImage,
};

const defaultReviews: Review[] = [
  {
    id: 'review-1',
    author: 'Ирина Макарова',
    date: '30 октября 2023',
    text: 'Очень понятный и тёплый материал. После курса стало проще замечать свои реакции и спокойнее говорить о сложных вещах.',
    avatar: reviewAvatar,
  },
  {
    id: 'review-2',
    author: 'Мария Белова',
    date: '18 ноября 2023',
    text: 'Понравилась структура и практические задания. Не просто теория, а реальные шаги, которые можно внедрить в жизнь.',
    avatar: reviewAvatar,
  },
  {
    id: 'review-3',
    author: 'Александр Романов',
    date: '7 декабря 2023',
    text: 'Курс помог собрать мысли и снизить тревогу. Формат оказался удобным, а материалы не перегружены.',
    avatar: reviewAvatar,
  },
];

const relatedItems: ProductSummary[] = [
  { id: 'product-2', title: 'Секреты счастливой жены', type: 'Курс', price: '10 000 ₽', rating: '5.0', image: productCourse },
  { id: 'product-4', title: 'Промокод на курс', type: 'Промокод', price: 'Бесплатно', rating: '4.7', image: promoImage },
  { id: 'product-6', title: 'Название книги', type: 'Книга', price: '10 000 ₽', rating: '4.9', image: bookImage },
  { id: 'product-1', title: 'Девичник', type: 'Курс', price: '6 000 ₽', rating: '4.8', image: productCourse },
];

export const productDetailsMap: Record<string, ProductDetails> = {
  'product-1': {
    id: 'product-1',
    variant: 'courseFull',
    title: 'Девичник',
    categoryLabel: 'Курс',
    price: '6 000 ₽',
    image: productCourse,
    rating: '5.0',
    reviewsCount: 120,
    tags: ['Отношения', 'Семья', 'Фобии'],
    description: longCourseDescription,
    characteristics: defaultCharacteristics,
    author: defaultAuthor,
    courseProgram: [
      { id: 'module-1', title: '1. Введение', description: 'Разбор целей курса, формата работы и точки старта.' },
      { id: 'module-2', title: '2. Базовые принципы', description: 'Основа устойчивых отношений и способы замечать свои сценарии.' },
      { id: 'module-3', title: '3. Работа с эмоциями', description: 'Практики, которые помогают выдерживать напряжение и не уходить в автоматизм.' },
      { id: 'module-4', title: '4. Практика', description: 'Конкретные шаги для переноса новых навыков в повседневную жизнь.' },
      { id: 'module-5', title: '5. Заключение', description: 'Подведение итогов и план поддерживающих действий после курса.' },
    ],
    reviews: defaultReviews,
    relatedItems,
    actionLabel: 'Купить 6 000 ₽',
  },
  'product-2': {
    id: 'product-2',
    variant: 'courseCompact',
    title: 'Секреты счастливой жены',
    categoryLabel: 'Курс',
    price: '10 000 ₽',
    image: productCourse,
    rating: '5.0',
    reviewsCount: 120,
    tags: ['Отношения', 'Семья', 'Фобии'],
    description: defaultDescription,
    characteristics: defaultCharacteristics,
    author: defaultAuthor,
    actionLabel: 'Купить 10 000 ₽',
  },
  'product-4': {
    id: 'product-4',
    variant: 'promoCode',
    title: 'Промокод на курс',
    categoryLabel: 'Промокод',
    price: 'Бесплатно',
    image: promoImage,
    tags: ['Скидка', 'Курсы'],
    description: promoDescription,
    terms: promoTerms,
    promoBadge: 'Скидка 15%',
    promoInfo: [
      { label: 'Промокод', value: 'PSY15' },
      { label: 'Размер скидки', value: '15%' },
      { label: 'Действует до', value: '31.12.2026' },
      { label: 'Категория', value: 'Курсы / Психология' },
      { label: 'Формат', value: 'Онлайн' },
    ],
    author: {
      name: 'Psyfreedom',
      role: 'Партнёрская программа',
      image: authorImage,
    },
    actionLabel: 'Получить промокод',
    actionNote: 'Промокод будет доступен сразу после активации',
  },
  'product-6': {
    id: 'product-6',
    variant: 'book',
    title: 'Название книги',
    categoryLabel: 'Книга',
    price: '10 000 ₽',
    image: bookImage,
    rating: '4.9',
    reviewsCount: 54,
    tags: ['Отношения', 'Семья', 'Саморазвитие'],
    description: bookDescription,
    bookInfo: [
      { label: 'Автор', value: 'Олег Рой' },
      { label: 'Издательство', value: 'Psyfreedom' },
      { label: 'Год издания', value: '2025' },
      { label: 'Количество страниц', value: '240' },
      { label: 'Формат', value: 'PDF' },
      { label: 'Язык', value: 'Русский' },
    ],
    author: {
      name: 'Олег Рой',
      role: 'Автор',
      rating: '4.9',
      reviewsCount: 54,
      image: authorImage,
    },
    reviews: defaultReviews,
    relatedItems,
    actionLabel: 'Купить 10 000 ₽',
  },
  'product-9': {
    id: 'product-9',
    variant: 'courseFull',
    title: 'Курс без выгорания',
    categoryLabel: 'Курс',
    price: '7 200 ₽',
    image: productCourse,
    rating: '5.0',
    reviewsCount: 78,
    tags: ['Выгорание', 'Саморазвитие', 'Стресс'],
    description: longCourseDescription,
    characteristics: defaultCharacteristics,
    author: defaultAuthor,
    courseProgram: [
      { id: 'burnout-1', title: '1. Введение', description: 'Как заметить первые признаки истощения.' },
      { id: 'burnout-2', title: '2. Базовые принципы', description: 'Что реально влияет на восстановление, а что только усиливает усталость.' },
      { id: 'burnout-3', title: '3. Работа с эмоциями', description: 'Инструменты для снижения перегрузки и возвращения контакта с собой.' },
      { id: 'burnout-4', title: '4. Практика', description: 'Недельный план возвращения устойчивости.' },
      { id: 'burnout-5', title: '5. Заключение', description: 'Как поддерживать эффект после прохождения программы.' },
    ],
    reviews: defaultReviews,
    relatedItems,
    actionLabel: 'Купить 7 200 ₽',
  },
  'product-3': {
    id: 'product-3',
    variant: 'testFree',
    title: 'Какой у тебя характер',
    categoryLabel: 'Тест',
    price: 'Бесплатно',
    image: testImage,
    rating: '5.0',
    reviewsCount: 120,
    tags: ['Отношения', 'Семья', 'Фобии'],
    description: testDescription,
    author: {
      name: 'Мария Лапина',
      role: 'Психолог',
      rating: '5.0',
      reviewsCount: 120,
      image: mariaAuthorImage,
    },
    actionLabel: 'Начать тест',
  },
  'test-paid-1': {
    id: 'test-paid-1',
    variant: 'testPaid',
    title: 'Какой у тебя характер',
    categoryLabel: 'Тест',
    price: '10 000 ₽',
    image: testImage,
    rating: '5.0',
    reviewsCount: 120,
    tags: ['Отношения', 'Семья', 'Фобии'],
    description: testDescription,
    author: {
      name: 'Мария Лапина',
      role: 'Психолог',
      rating: '5.0',
      reviewsCount: 120,
      image: mariaAuthorImage,
    },
    actionLabel: 'Купить',
    actionPrice: '1 000 ₽',
  },
  'test-free-1': {
    id: 'test-free-1',
    variant: 'testFree',
    title: 'Какой у тебя характер',
    categoryLabel: 'Тест',
    price: 'Бесплатно',
    image: testImage,
    rating: '5.0',
    reviewsCount: 120,
    tags: ['Отношения', 'Семья', 'Фобии'],
    description: testDescription,
    author: {
      name: 'Мария Лапина',
      role: 'Психолог',
      rating: '5.0',
      reviewsCount: 120,
      image: mariaAuthorImage,
    },
    actionLabel: 'Начать тест',
  },
};

export function getProductDetailsById(id: string): ProductDetails {
  return (
    productDetailsMap[id] ?? {
      id,
      variant: 'courseCompact',
      title: 'Товар',
      categoryLabel: 'Курс',
      price: '10 000 ₽',
      image: placeholderImage,
      rating: '5.0',
      reviewsCount: 120,
      tags: ['Отношения', 'Семья'],
      description: defaultDescription,
      characteristics: defaultCharacteristics,
      author: defaultAuthor,
      actionLabel: 'Купить 10 000 ₽',
    }
  );
}

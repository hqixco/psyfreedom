import { ImageSourcePropType } from 'react-native';

export type Product = {
  id: string;
  title: string;
  type: string;
  price: string;
  rating: string;
  image: ImageSourcePropType;
  isTop?: boolean;
  variant?: string;
};

export type ProductCategory = {
  id: string;
  title: string;
  icon:
    | 'play-circle'
    | 'pricetag'
    | 'book'
    | 'people'
    | 'school'
    | 'videocam'
    | 'game-controller'
    | 'help-circle';
};

export const productCategories: ProductCategory[] = [
  { id: 'videos', title: 'Видеоуроки', icon: 'play-circle' },
  { id: 'promo', title: 'Промокоды', icon: 'pricetag' },
  { id: 'books', title: 'Книги', icon: 'book' },
  { id: 'groups', title: 'Терапевтические\nгруппы', icon: 'people' },
  { id: 'courses', title: 'Курсы', icon: 'school' },
  { id: 'webinars', title: 'Вебинары', icon: 'videocam' },
  { id: 'games', title: 'Игры', icon: 'game-controller' },
  { id: 'tests', title: 'Тесты', icon: 'help-circle' },
];

const productImage = require('../../assets/image (3).jpg');
const bookImage = require('../../assets/image (3).jpg');
const courseImage = require('../../assets/image (3).jpg');

export const topProducts: Product[] = [
  {
    id: 'product-2',
    title: 'Секреты счастливой жены',
    type: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: bookImage,
    isTop: true,
  },
  {
    id: 'product-1',
    title: 'Девичник',
    type: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: courseImage,
    isTop: true,
  },
  {
    id: 'product-5',
    title: 'Вебинар об отношениях',
    type: 'Вебинар',
    price: '3 800 ₽',
    rating: '0.0',
    image: courseImage,
    isTop: true,
  },
  {
    id: 'product-6',
    title: 'Книга о самоценности',
    type: 'Книга',
    price: '2 500 ₽',
    rating: '0.0',
    image: courseImage,
    isTop: true,
  },
  {
    id: 'product-10',
    title: 'Видеоурок по самооценке',
    type: 'Видеоурок',
    price: '990 ₽',
    rating: '0.0',
    image: courseImage,
    isTop: true,
  },
];

export const products: Product[] = [
  { id: 'product-1', title: 'Девичник', type: 'Курс', price: '6 000 ₽', rating: '0.0', image: courseImage },
  { id: 'product-2', title: 'Секреты счастливой жены', type: 'Курс', price: '6 000 ₽', rating: '0.0', image: courseImage },
  { id: 'product-3', title: 'Какой у тебя характер', type: 'Тест', price: 'Бесплатно', rating: '0.0', image: productImage, variant: 'testFree' },
  { id: 'product-4', title: 'Промокод на консультацию', type: 'Промокод', price: '1 100 ₽', rating: '0.0', image: productImage },
  { id: 'product-5', title: 'Вебинар об отношениях', type: 'Вебинар', price: '3 800 ₽', rating: '0.0', image: productImage },
  { id: 'product-6', title: 'Книга о самоценности', type: 'Книга', price: '2 500 ₽', rating: '0.0', image: bookImage },
  { id: 'product-7', title: 'Терапевтическая группа', type: 'Группа', price: '8 700 ₽', rating: '0.0', image: productImage },
  { id: 'product-8', title: 'Игра на доверие', type: 'Игра', price: '4 200 ₽', rating: '0.0', image: productImage },
  { id: 'product-9', title: 'Курс без выгорания', type: 'Курс', price: '6 300 ₽', rating: '0.0', image: courseImage },
  { id: 'product-10', title: 'Видеоурок по самооценке', type: 'Видеоурок', price: '990 ₽', rating: '0.0', image: productImage },
  { id: 'product-11', title: 'Курс по тревожности', type: 'Курс', price: '7 200 ₽', rating: '0.0', image: courseImage },
  { id: 'product-12', title: 'Промокод на вебинар', type: 'Промокод', price: '600 ₽', rating: '0.0', image: productImage },
  { id: 'test-paid-1', title: 'Какой у тебя характер', type: 'Тест', price: '10 000 ₽', rating: '0.0', image: productImage, variant: 'testPaid' },
  { id: 'test-free-1', title: 'Какой у тебя характер', type: 'Тест', price: 'Бесплатно', rating: '0.0', image: productImage, variant: 'testFree' },
  { id: 'product-1-alt1', title: 'Девичник', type: 'Курс', price: '6 000 ₽', rating: '0.0', image: courseImage },
  { id: 'product-2-alt1', title: 'Секреты счастливой жены', type: 'Курс', price: '6 000 ₽', rating: '0.0', image: courseImage },
  { id: 'product-5-alt1', title: 'Вебинар об отношениях', type: 'Вебинар', price: '3 800 ₽', rating: '0.0', image: productImage },
  { id: 'product-6-alt1', title: 'Книга о самоценности', type: 'Книга', price: '2 500 ₽', rating: '0.0', image: bookImage },
];

export const productSortOptions = ['По цене', 'По рейтингу', 'Новые анкеты'];

import { ImageSourcePropType } from 'react-native';

export type PurchaseCategory = 'courses' | 'books' | 'videos';

export type PurchaseItem = {
  id: string;
  category: PurchaseCategory;
  title: string;
  price: string;
  type: string;
  author: string;
  image: ImageSourcePropType;
};

export const purchaseChips = [
  { id: 'all', title: 'Все (10)' },
  { id: 'courses', title: 'Курсы (1)' },
  { id: 'books', title: 'Книги (5)' },
  { id: 'videos', title: 'Видеоуроки (4)' },
] as const;

const purchaseImage = require('../../assets/images/product-devichnik.png');
const purchaseBookImage = require('../../assets/photo.png');

export const purchasesMock: PurchaseItem[] = [
  { id: '1', category: 'courses', title: 'Секреты счастливой жены\nКак найти себя', price: '100 000 ₽', type: 'Курс', author: 'Имя Фамилия автора', image: purchaseImage },
  { id: '2', category: 'books', title: 'Название книги\nКак найти себя', price: '6 000 ₽', type: 'Книга', author: 'Имя Фамилия автора', image: purchaseBookImage },
  { id: '3', category: 'books', title: 'Название книги\nПро отношения', price: '6 000 ₽', type: 'Книга', author: 'Имя Фамилия автора', image: purchaseBookImage },
  { id: '4', category: 'books', title: 'Название книги\nПро тревогу', price: '6 000 ₽', type: 'Книга', author: 'Имя Фамилия автора', image: purchaseBookImage },
  { id: '5', category: 'books', title: 'Название книги\nПро семью', price: '6 000 ₽', type: 'Книга', author: 'Имя Фамилия автора', image: purchaseBookImage },
  { id: '6', category: 'books', title: 'Название книги\nКак жить легче', price: '6 000 ₽', type: 'Книга', author: 'Имя Фамилия автора', image: purchaseBookImage },
  { id: '7', category: 'videos', title: 'Секреты счастливой жены\nКак найти себя', price: '100 000 ₽', type: 'Видеоурок', author: 'Имя Фамилия автора', image: purchaseImage },
  { id: '8', category: 'videos', title: 'Видеоурок\nПро отношения', price: '100 000 ₽', type: 'Видеоурок', author: 'Имя Фамилия автора', image: purchaseImage },
  { id: '9', category: 'videos', title: 'Видеоурок\nПро семью', price: '100 000 ₽', type: 'Видеоурок', author: 'Имя Фамилия автора', image: purchaseImage },
  { id: '10', category: 'videos', title: 'Видеоурок\nПро самооценку', price: '100 000 ₽', type: 'Видеоурок', author: 'Имя Фамилия автора', image: purchaseImage },
];

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
  isPurchased: boolean;
  downloadFileType?: string;
  downloadFileSize?: string;
};

export const purchaseChipBase = [
  { id: 'all', title: 'Все' },
  { id: 'courses', title: 'Курсы' },
  { id: 'books', title: 'Книги' },
  { id: 'videos', title: 'Видеоуроки' },
] as const;

const purchaseImage = require('../../assets/images/product-course-devichnik.png');
const purchaseBookImage = require('../../assets/product-placeholder-square.png');

export const purchasesMock: PurchaseItem[] = [
  {
    id: '1',
    category: 'courses',
    title: 'Секреты счастливой жены\nКак найти себя',
    price: '100 000 ₽',
    type: 'Курс',
    author: 'Имя Фамилия автора',
    image: purchaseImage,
    isPurchased: true,
    downloadFileType: 'PDF',
    downloadFileSize: '5 мб',
  },
  {
    id: '2',
    category: 'books',
    title: 'Название книги\nКак найти себя',
    price: '6 000 ₽',
    type: 'Книга',
    author: 'Имя Фамилия автора',
    image: purchaseBookImage,
    isPurchased: true,
    downloadFileType: 'EPUB',
    downloadFileSize: '3 мб',
  },
  {
    id: '3',
    category: 'books',
    title: 'Название книги\nПро отношения',
    price: '6 000 ₽',
    type: 'Книга',
    author: 'Имя Фамилия автора',
    image: purchaseBookImage,
    isPurchased: true,
    downloadFileType: 'PDF',
    downloadFileSize: '4 мб',
  },
  {
    id: '4',
    category: 'books',
    title: 'Название книги\nПро тревогу',
    price: '6 000 ₽',
    type: 'Книга',
    author: 'Имя Фамилия автора',
    image: purchaseBookImage,
    isPurchased: true,
    downloadFileType: 'PDF',
    downloadFileSize: '6 мб',
  },
  {
    id: '5',
    category: 'books',
    title: 'Название книги\nПро семью',
    price: '6 000 ₽',
    type: 'Книга',
    author: 'Имя Фамилия автора',
    image: purchaseBookImage,
    isPurchased: true,
    downloadFileType: 'PDF',
    downloadFileSize: '5 мб',
  },
  {
    id: '6',
    category: 'books',
    title: 'Название книги\nКак жить легче',
    price: '6 000 ₽',
    type: 'Книга',
    author: 'Имя Фамилия автора',
    image: purchaseBookImage,
    isPurchased: true,
    downloadFileType: 'PDF',
    downloadFileSize: '4 мб',
  },
  {
    id: '7',
    category: 'videos',
    title: 'Секреты счастливой жены\nКак найти себя',
    price: '100 000 ₽',
    type: 'Видеоурок',
    author: 'Имя Фамилия автора',
    image: purchaseImage,
    isPurchased: true,
  },
  {
    id: '8',
    category: 'videos',
    title: 'Видеоурок\nПро отношения',
    price: '100 000 ₽',
    type: 'Видеоурок',
    author: 'Имя Фамилия автора',
    image: purchaseImage,
    isPurchased: true,
  },
  {
    id: '9',
    category: 'videos',
    title: 'Видеоурок\nПро семью',
    price: '100 000 ₽',
    type: 'Видеоурок',
    author: 'Имя Фамилия автора',
    image: purchaseImage,
    isPurchased: true,
  },
  {
    id: '10',
    category: 'videos',
    title: 'Видеоурок\nПро самооценку',
    price: '100 000 ₽',
    type: 'Видеоурок',
    author: 'Имя Фамилия автора',
    image: purchaseImage,
    isPurchased: true,
  },
];

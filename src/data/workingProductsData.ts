import { ImageSourcePropType } from 'react-native';

export type WorkingProductStatus = 'published' | 'archived';

export type WorkingProductType =
  | 'course'
  | 'book'
  | 'test'
  | 'promoCode'
  | 'videoLesson';

export type WorkingProduct = {
  id: string;
  title: string;
  type: WorkingProductType;
  typeLabel: string;
  price: string;
  image: ImageSourcePropType;
  status: WorkingProductStatus;
};

export type ProductTopicId =
  | 'relationships'
  | 'family'
  | 'phobias'
  | 'stress'
  | 'selfEsteem'
  | 'career'
  | 'money';

export type WorkingProductFormValues = {
  title: string;
  productType: Exclude<WorkingProductType, 'videoLesson'> | null;
  topics: ProductTopicId[];
  price: string;
  description: string;
  attachedFileName: string | null;
  courseFormat: string;
  courseSeats: string;
  courseStartDate: string;
  courseDuration: string;
  bookFormat: string;
  bookGenre: string;
  bookPages: string;
  bookDuration: string;
  bookPublisher: string;
  bookPublishYear: string;
  bookIsbn: string;
  bookAgeLimit: string;
  testLink: string;
  promoDateFrom: string;
  promoDateTo: string;
  promoCode: string;
};

export const workingProductsMock: WorkingProduct[] = [
  {
    id: '1',
    title: 'Секреты счастливой жены\nКак найти себя',
    type: 'videoLesson',
    typeLabel: 'Видеоурок',
    price: '100 000 ₽',
    image: require('../../assets/images/product-devichnik.png'),
    status: 'published',
  },
  {
    id: '2',
    title: 'Секреты счастливой жены\nКак найти себя',
    type: 'videoLesson',
    typeLabel: 'Видеоурок',
    price: '100 000 ₽',
    image: require('../../assets/images/product-devichnik.png'),
    status: 'published',
  },
  {
    id: '3',
    title: 'Секреты счастливой жены\nКак найти себя',
    type: 'videoLesson',
    typeLabel: 'Видеоурок',
    price: '100 000 ₽',
    image: require('../../assets/images/product-devichnik.png'),
    status: 'archived',
  },
];

export const productTypeOptions = [
  { id: 'course', title: 'Курс' },
  { id: 'book', title: 'Книга' },
  { id: 'test', title: 'Тест' },
  { id: 'promoCode', title: 'Промокод' },
] as const;

export const topicOptions = [
  { id: 'relationships', title: 'Отношения' },
  { id: 'family', title: 'Семья' },
  { id: 'phobias', title: 'Фобии' },
  { id: 'stress', title: 'Стресс' },
  { id: 'selfEsteem', title: 'Самооценка' },
  { id: 'career', title: 'Карьера' },
  { id: 'money', title: 'Деньги' },
] as const;

export const createProductInitialValues: WorkingProductFormValues = {
  title: 'Название товара',
  productType: null,
  topics: [],
  price: '0 ₽',
  description:
    'Если человек приходит с неудовлетворенностью в личной или профессиональной сфере, то результатом нашей работы будет удовлетворенность. Человек решится организовать для себя то, что сделает его счастливым, успешным и здоровым в личной и профессиональной сферах.',
  attachedFileName: null,
  courseFormat: 'Онлайн',
  courseSeats: '123',
  courseStartDate: '',
  courseDuration: '',
  bookFormat: 'Аудио',
  bookGenre: 'Научная литература',
  bookPages: '245',
  bookDuration: '4:25:10',
  bookPublisher: 'Альпина Диджитал',
  bookPublishYear: '2013г.',
  bookIsbn: '978-5-4461-1594-5',
  bookAgeLimit: '16+',
  testLink: 'ZWE123Bhsk67',
  promoDateFrom: '',
  promoDateTo: '',
  promoCode: 'ZWE123Bhsk67',
};

export const productTypeLabelMap: Record<WorkingProductType, string> = {
  course: 'Курс',
  book: 'Книга',
  test: 'Тест',
  promoCode: 'Промокод',
  videoLesson: 'Видеоурок',
};

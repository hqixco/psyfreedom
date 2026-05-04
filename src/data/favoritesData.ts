import { ImageSourcePropType } from 'react-native';

export type FavoriteCategory = 'services' | 'products' | 'journal' | 'video';

export type FavoriteStatus = 'default' | 'deletedByAuthor';

export type FavoriteItem = {
  id: string;
  category: FavoriteCategory;
  productId?: string;
  title: string;
  type: string;
  price?: string;
  rating?: string;
  image: ImageSourcePropType;
  status: FavoriteStatus;
};

export const favoriteChips = [
  { id: 'all', title: 'Все' },
  { id: 'services', title: 'Услуги' },
  { id: 'products', title: 'Товары' },
  { id: 'journal', title: 'Журнал' },
  { id: 'video', title: 'Видеоурок' },
] as const;

const favoriteImage = require('../../assets/images/product-course-devichnik.png');
const favoriteBookImage = require('../../assets/product-placeholder-square.png');

export const mockFavorites: FavoriteItem[] = [
  {
    id: 'favorite-1',
    category: 'products',
    productId: 'product-1',
    title: 'Девичник',
    type: 'Курс',
    price: '6 000 ₽',
    rating: '5.0',
    image: favoriteImage,
    status: 'default',
  },
  {
    id: 'favorite-2',
    category: 'products',
    productId: 'product-2',
    title: 'Секреты счастливой жены',
    type: 'Книга',
    price: '10 000 ₽',
    rating: '5.0',
    image: favoriteBookImage,
    status: 'deletedByAuthor',
  },
  {
    id: 'favorite-3',
    category: 'products',
    productId: 'product-3',
    title: 'Какой у тебя характер',
    type: 'Тест',
    price: 'Бесплатно',
    rating: '5.0',
    image: favoriteImage,
    status: 'default',
  },
  {
    id: 'favorite-4',
    category: 'services',
    title: 'Имя Фамилия',
    type: 'Психолог',
    price: 'От 1 200 ₽',
    rating: '5.0',
    image: favoriteImage,
    status: 'default',
  },
  {
    id: 'favorite-5',
    category: 'journal',
    title: 'Как стать счастливым',
    type: 'Статья',
    rating: '0.0',
    image: favoriteImage,
    status: 'default',
  },
  {
    id: 'favorite-6',
    category: 'video',
    title: 'Название',
    type: 'Видеоурок',
    rating: '0.0',
    image: favoriteImage,
    status: 'default',
  },
];

const favoriteProductIdToItemId = new Map(
  mockFavorites
    .filter((item) => item.category === 'products' && item.productId)
    .map((item) => [item.productId as string, item.id]),
);

export const dismissedFavoriteIds = new Set<string>();

export function setFavoriteProductVisibility(productId: string, visible: boolean) {
  const favoriteId = favoriteProductIdToItemId.get(productId);

  if (!favoriteId) {
    return;
  }

  if (visible) {
    dismissedFavoriteIds.delete(favoriteId);
    return;
  }

  dismissedFavoriteIds.add(favoriteId);
}

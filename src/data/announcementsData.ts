import { ImageSourcePropType } from 'react-native';

export type AnnouncementCategory = 'all' | 'books' | 'courses' | 'games' | 'video';

export type Announcement = {
  id: string;
  category: Exclude<AnnouncementCategory, 'all'>;
  typeLabel: string;
  date: string;
  dateRange?: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
};

export const announcementChips: { id: AnnouncementCategory; title: string }[] = [
  { id: 'all', title: 'Все (6)' },
  { id: 'books', title: 'Книги (2)' },
  { id: 'courses', title: 'Курсы (2)' },
  { id: 'games', title: 'Игры (1)' },
  { id: 'video', title: 'Видеоурок (1)' },
];

const announcementBook = require('../../assets/product-placeholder-square.png');
const announcementPromo = require('../../assets/images/promo-card-default.png');
const announcementGame = require('../../assets/images/product-test-character.png');
const announcementVideo = require('../../assets/images/video-card-cover-default.png');

const defaultDescription =
  'Если вы спросите у психологов: «За что вам платят?». Многие ответят: «За инсайт». Это значит за то, что во время сессии вы узнаете о себе что-то новое. Мне клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решаются в результате нашей работы.';

export const announcements: Announcement[] = [
  {
    id: 'announcement-1',
    category: 'books',
    typeLabel: 'Книга',
    date: '1 июля 2025',
    dateRange: '1 июля 2025 - 31 декабря 2025',
    title: 'Как стать счастливым и наладить свою жизнь',
    description: defaultDescription,
    image: announcementBook,
  },
  {
    id: 'announcement-2',
    category: 'courses',
    typeLabel: 'Акция',
    date: '1 июля 2025',
    dateRange: '1 июля 2025 - 31 декабря 2025',
    title: 'Скидка на курс по отношениям',
    description: defaultDescription,
    image: announcementPromo,
  },
  {
    id: 'announcement-3',
    category: 'books',
    typeLabel: 'Книга',
    date: '10 июля 2025',
    dateRange: '10 июля 2025 - 15 января 2026',
    title: 'Новая книга о внутренней опоре',
    description: defaultDescription,
    image: announcementBook,
  },
  {
    id: 'announcement-4',
    category: 'courses',
    typeLabel: 'Курс',
    date: '20 июля 2025',
    dateRange: '20 июля 2025 - 30 ноября 2025',
    title: 'Старт нового потока без выгорания',
    description: defaultDescription,
    image: announcementPromo,
  },
  {
    id: 'announcement-5',
    category: 'games',
    typeLabel: 'Игра',
    date: '25 июля 2025',
    dateRange: '25 июля 2025 - 25 декабря 2025',
    title: 'Терапевтическая игра для компаний',
    description: defaultDescription,
    image: announcementGame,
  },
  {
    id: 'announcement-6',
    category: 'video',
    typeLabel: 'Видеоурок',
    date: '1 августа 2025',
    dateRange: '1 августа 2025 - 31 декабря 2025',
    title: 'Видео о личных границах и поддержке',
    description: defaultDescription,
    image: announcementVideo,
  },
];


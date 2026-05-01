import { ImageSourcePropType } from 'react-native';

export type VideoJournalItem = {
  id: string;
  title: string;
  topic: string;
  views: number;
  image: ImageSourcePropType;
  author: {
    name: string;
    role: string;
    rating: string;
    reviewsCount: number;
    image: ImageSourcePropType;
  };
  description: string;
  isFavorite?: boolean;
};

const videoImage = require('../../assets/images/video-1.png');
const articleImage = require('../../assets/images/article-1.png');
const authorImage = require('../../assets/images/author-maria.png');

const description =
  'Если вы спросите у психологов: «За что вам платят?». Многие ответят: «За инсайт». Это значит за то, что во время сессии вы узнаете о себе что-то новое. Мне клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решаются в результате нашей работы.';

const author = {
  name: 'Мария Лапина',
  role: 'Психолог',
  rating: '5.0',
  reviewsCount: 120,
  image: authorImage,
};

export const videoJournalItems: VideoJournalItem[] = [
  { id: 'video-journal-1', title: 'Как стать счастливым и наладить свою жизнь', topic: 'Отношения', views: 28, image: videoImage, description, author },
  { id: 'video-journal-2', title: 'Почему мы выгораем и как остановиться', topic: 'Стресс', views: 31, image: articleImage, description, author },
  { id: 'video-journal-3', title: 'Как говорить о чувствах спокойно', topic: 'Семья', views: 24, image: videoImage, description, author },
  { id: 'video-journal-4', title: 'Что делать при тревожном дне', topic: 'Самооценка', views: 17, image: articleImage, description, author },
  { id: 'video-journal-5', title: 'Поддержка подростка без давления', topic: 'Дети и родители', views: 43, image: videoImage, description, author },
  { id: 'video-journal-6', title: 'Как выстроить личные границы', topic: 'Отношения', views: 26, image: articleImage, description, author },
  { id: 'video-journal-7', title: 'Найти опору в себе', topic: 'Саморазвитие', views: 32, image: videoImage, description, author },
  { id: 'video-journal-8', title: 'Сон без перегруза', topic: 'Проблемы со сном', views: 20, image: articleImage, description, author },
];


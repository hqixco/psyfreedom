import { ImageSourcePropType } from 'react-native';

export type HumorPostType = 'video' | 'text' | 'image';
export type HumorFilterType = 'all' | HumorPostType;

export type HumorComment = {
  id: string;
  author: string;
  date: string;
  text: string;
  avatar: ImageSourcePropType;
};

export type HumorPost = {
  id: string;
  type: HumorPostType;
  author: {
    name: string;
    avatar: ImageSourcePropType;
  };
  createdAt: string;
  text: string;
  image?: ImageSourcePropType;
  likes: number;
  commentsCount: number;
  views: number;
  isLiked?: boolean;
  comments: HumorComment[];
};

export const humorChips: { id: HumorFilterType; title: string }[] = [
  { id: 'all', title: 'Все' },
  { id: 'video', title: 'Видео' },
  { id: 'text', title: 'Тексты' },
  { id: 'image', title: 'Изображения' },
];

const authorAvatar = require('../../assets/images/author-maria.png');
const commentAvatar = require('../../assets/картинка.png');
const humorImage = require('../../assets/images/article-1.png');
const humorAltImage = require('../../assets/images/video-1.png');

const postText =
  'Если вы спросите у психологов: «За что вам платят?». Многие ответят: «За инсайт». Это значит за то, что во время сессии вы узнаете о себе что-то новое. Мне клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решаются в результате нашей работы.';

const commentText =
  'Я бы хотел поделиться своим положительным опытом работы с психологом. Встречи с этим специалистом оказались настоящим прорывом в моей жизни.';

const comments: HumorComment[] = [
  { id: 'comment-1', author: 'Имя Фамилия', date: '13 июля 2023', text: commentText, avatar: commentAvatar },
  { id: 'comment-2', author: 'Мария Белова', date: '14 июля 2023', text: commentText, avatar: commentAvatar },
  { id: 'comment-3', author: 'Ирина Макарова', date: '15 июля 2023', text: commentText, avatar: commentAvatar },
  { id: 'comment-4', author: 'Александр Романов', date: '16 июля 2023', text: commentText, avatar: commentAvatar },
];

export const humorPosts: HumorPost[] = [
  {
    id: 'humor-1',
    type: 'image',
    author: { name: 'Том рат', avatar: authorAvatar },
    createdAt: 'Сегодня в 14:00',
    text: postText,
    image: humorImage,
    likes: 50,
    commentsCount: 50,
    views: 150,
    comments,
  },
  {
    id: 'humor-2',
    type: 'text',
    author: { name: 'Том рат', avatar: authorAvatar },
    createdAt: 'Сегодня в 12:30',
    text: `${postText}\n\n${postText}`,
    likes: 42,
    commentsCount: 18,
    views: 97,
    comments,
  },
  {
    id: 'humor-3',
    type: 'video',
    author: { name: 'Том рат', avatar: authorAvatar },
    createdAt: 'Вчера в 18:10',
    text: postText,
    image: humorAltImage,
    likes: 63,
    commentsCount: 21,
    views: 203,
    comments,
  },
  {
    id: 'humor-4',
    type: 'image',
    author: { name: 'Том рат', avatar: authorAvatar },
    createdAt: 'Вчера в 09:20',
    text: postText,
    image: humorImage,
    likes: 31,
    commentsCount: 12,
    views: 88,
    comments,
  },
  {
    id: 'humor-5',
    type: 'text',
    author: { name: 'Том рат', avatar: authorAvatar },
    createdAt: '2 дня назад',
    text: `${postText}\n\n${postText}`,
    likes: 55,
    commentsCount: 34,
    views: 120,
    comments,
  },
  {
    id: 'humor-6',
    type: 'video',
    author: { name: 'Том рат', avatar: authorAvatar },
    createdAt: '3 дня назад',
    text: postText,
    image: humorAltImage,
    likes: 77,
    commentsCount: 50,
    views: 150,
    comments,
  },
];

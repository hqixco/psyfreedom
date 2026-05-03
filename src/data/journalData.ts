import { ImageSourcePropType } from 'react-native';

export type JournalCategory = {
  id: string;
  title: string;
  icon: string;
};

export type Article = {
  id: string;
  title: string;
  topic: string;
  views: number;
  image: ImageSourcePropType;
  isFavorite?: boolean;
};

export type Video = {
  id: string;
  title: string;
  topic: string;
  views: number;
  image: ImageSourcePropType;
};

export type ArticleTopic = {
  id: string;
  title: string;
};

export const journalCategories: JournalCategory[] = [
  { id: 'humor', title: 'Юмор', icon: 'happy-outline' },
  { id: 'articles', title: 'Статьи', icon: 'newspaper-outline' },
  { id: 'video', title: 'Видеожурнал', icon: 'play-circle-outline' },
  { id: 'announcements', title: 'Анонсы', icon: 'flame-outline' },
];

export const articleTopics: ArticleTopic[] = [
  { id: 'parents-1', title: 'Для детей\nподростков\nи родителей' },
  { id: 'parents-2', title: 'Для детей\nподростков\nи родителей' },
  { id: 'self-worth', title: 'Самооценка\nи внутренняя\nопора' },
  { id: 'stress', title: 'Стресс,\nвыгорание\nи отдых' },
  { id: 'family', title: 'Семья,\nотношения\nи границы' },
];

const articleImage = require('../../assets/images/article-card-cover-default.png');
const articlePlaceholder = require('../../assets/images/article-card-cover-placeholder.png');
const videoImage = require('../../assets/images/video-card-cover-default.png');

export const articles: Article[] = [
  { id: 'article-1', title: 'Название статьи', topic: 'Тема', views: 28, image: articleImage },
  { id: 'article-2', title: 'Как пережить расставание', topic: 'Отношения', views: 34, image: articlePlaceholder },
  { id: 'article-3', title: 'Пять практик против тревоги', topic: 'Самооценка', views: 46, image: articleImage },
  { id: 'article-4', title: 'Почему мы выгораем', topic: 'Стресс', views: 19, image: articlePlaceholder },
  { id: 'article-5', title: 'Границы в семье', topic: 'Семья', views: 52, image: articleImage },
  { id: 'article-6', title: 'Как перестать сравнивать себя с другими', topic: 'Самооценка', views: 41, image: articlePlaceholder },
  { id: 'article-7', title: 'Что делать при конфликте с подростком', topic: 'Дети и родители', views: 23, image: articleImage },
  { id: 'article-8', title: 'Сон и тревога: как разорвать круг', topic: 'Проблемы со сном', views: 38, image: articlePlaceholder },
  { id: 'article-9', title: 'Как просить о помощи без чувства вины', topic: 'Отношения', views: 27, image: articleImage },
  { id: 'article-10', title: 'Панические атаки: первые шаги поддержки', topic: 'Стресс', views: 48, image: articlePlaceholder },
  { id: 'article-11', title: 'Найти себя без гонки за идеалом', topic: 'Поиск себя', views: 22, image: articleImage },
  { id: 'article-12', title: 'Родительская усталость и восстановление', topic: 'Дети и родители', views: 31, image: articlePlaceholder },
  { id: 'article-13', title: 'Как говорить о чувствах спокойно', topic: 'Семья', views: 25, image: articleImage },
  { id: 'article-14', title: 'Почему откладывание только усиливает стресс', topic: 'Прокрастинация', views: 44, image: articlePlaceholder },
  { id: 'article-15', title: 'Поддержка после утраты', topic: 'Отношения', views: 29, image: articleImage },
  { id: 'article-16', title: 'Маленькие ритуалы для устойчивости', topic: 'Саморазвитие', views: 36, image: articlePlaceholder },
];

export const videos: Video[] = [
  { id: 'video-1', title: 'Название', topic: 'Тема', views: 28, image: videoImage },
  { id: 'video-2', title: 'Как стать счастливым', topic: 'Отношения', views: 31, image: articleImage },
  { id: 'video-3', title: 'Как пережить тревожный день', topic: 'Стресс', views: 24, image: videoImage },
  { id: 'video-4', title: 'Разговор о границах', topic: 'Семья', views: 17, image: articlePlaceholder },
  { id: 'video-5', title: 'Поддержка подростка', topic: 'Дети и родители', views: 43, image: videoImage },
  { id: 'video-6', title: 'Как не выгореть в помощи другим', topic: 'Выгорание', views: 26, image: articleImage },
  { id: 'video-7', title: 'Найти опору в себе', topic: 'Самооценка', views: 32, image: videoImage },
  { id: 'video-8', title: 'Сон без перегруза', topic: 'Проблемы со сном', views: 20, image: articlePlaceholder },
];


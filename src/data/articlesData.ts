import { ImageSourcePropType } from 'react-native';

export type ArticleContentBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'heading';
      text: string;
    };

export type ArticleDetails = {
  id: string;
  title: string;
  topic: string;
  image: ImageSourcePropType;
  content: ArticleContentBlock[];
  author: {
    name: string;
    role: string;
    rating: string;
    reviewsCount: number;
    image: ImageSourcePropType;
  };
  isFavorite?: boolean;
};

const articleImage = require('../../assets/images/article-card-cover-default.png');
const articlePlaceholder = require('../../assets/images/article-card-cover-placeholder.png');
const authorImage = require('../../assets/images/avatar-maria.png');

const defaultContent: ArticleContentBlock[] = [
  {
    type: 'paragraph',
    text: 'Начнем с любви к себе. В популярной психологии под любовью к себе обычно понимают безусловное принятие себя, без оценок, критики и осуждения. Гордятся обычно чем-то — своими достижениями и успехами. То есть это ощущение ближе к самоуважению и чувству собственного достоинства, но без возвышения себя над другими. Под заботой понимают деятельность, направленную на чье-либо благополучие, в том числе по отношению к себе. В чем же она может проявляться?',
  },
  {
    type: 'heading',
    text: 'Любить, гордиться, заботиться о себе: в чем разница?',
  },
  {
    type: 'paragraph',
    text: 'В качестве примера рассмотрим мать и ребенка. Новорожденный малыш нуждается в уходе, внимании, ласке, то есть у него возникает множество разных потребностей, которые стремится удовлетворить «достаточно хорошая мама». Достаточно хорошая для своего ребенка, как указывал Дональд Вудс Винникотт, понимает нужды именно своего ребенка и умеет их удовлетворять.',
  },
  {
    type: 'paragraph',
    text: 'Человек, который заботится о себе, делает то же самое — понимает свои потребности и умеет их удовлетворять. Иными словами, его деятельность направлена на собственное благополучие. Такая забота не про идеальность, а про устойчивость, бережность к себе и умение замечать, что именно вам сейчас действительно нужно.',
  },
];

const defaultAuthor = {
  name: 'Мария Лапина',
  role: 'Психолог',
  rating: '5.0',
  reviewsCount: 120,
  image: authorImage,
};

export const articleDetailsMap: Record<string, ArticleDetails> = {
  'article-1': {
    id: 'article-1',
    title: 'Как стать счастливым и наладить свою жизнь',
    topic: 'Отношения',
    image: articleImage,
    content: defaultContent,
    author: defaultAuthor,
  },
  'article-2': {
    id: 'article-2',
    title: 'Как пережить расставание',
    topic: 'Отношения',
    image: articlePlaceholder,
    content: defaultContent,
    author: defaultAuthor,
  },
  'article-3': {
    id: 'article-3',
    title: 'Пять практик против тревоги',
    topic: 'Самооценка',
    image: articleImage,
    content: defaultContent,
    author: defaultAuthor,
  },
};

export function getArticleDetailsById(id: string): ArticleDetails {
  return (
    articleDetailsMap[id] ?? {
      id,
      title: 'Как стать счастливым и наладить свою жизнь',
      topic: 'Отношения',
      image: articlePlaceholder,
      content: defaultContent,
      author: defaultAuthor,
    }
  );
}



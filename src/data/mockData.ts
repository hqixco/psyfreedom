export type TopicItem = {
  id: string;
  title: string;
  icon: string;
  backgroundColor: string;
  image?: number;
  gradientColors?: [string, string];
  isAllTopics?: boolean;
};

export type BannerItem = {
  id: string;
  title: string;
  image: string | number;
};

export type SpecialistItem = {
  id: string;
  name: string;
  specialization: string;
  price: string;
  rating: string;
  image: string | number;
};

export type TopicCategory = {
  id: string;
  title: string;
  items: string[];
};

export type SpecialistCategoryItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  topic: string;
  views: number;
  image: string | number;
};

export type ProductItem = {
  id: string;
  title: string;
  type: string;
  price: string;
  rating: string;
  image: string | number;
};

export const banners: BannerItem[] = [
  {
    id: 'banner-1',
    title: 'Почему выбирают\nPsyfreedom',
    image: require('../../assets/1.jpg'),
  },
  {
    id: 'banner-2',
    title: 'Как справиться\nсо стрессом',
    image: require('../../assets/2.jpg'),
  },
  {
    id: 'banner-3',
    title: 'Поддержка\nв сложный период',
    image: require('../../assets/2.jpg'),
  },
];

export const topics: TopicItem[] = [
  {
    id: 'love',
    title: 'Любовь',
    icon: 'heart-outline',
    backgroundColor: '#D8FFF0',
    image: require('../../assets/lyubov.png'),
  },
  {
    id: 'career',
    title: 'Карьера',
    icon: 'briefcase-outline',
    backgroundColor: '#CFFBEA',
    image: require('../../assets/karjera.png'),
  },
  {
    id: 'money',
    title: 'Деньги',
    icon: 'cash-outline',
    backgroundColor: '#D8FFF0',
    image: require('../../assets/dengi.png'),
  },
  {
    id: 'esteem',
    title: 'Самооценка',
    icon: 'ribbon-outline',
    backgroundColor: '#CFFBEA',
    image: require('../../assets/samoocenka.png'),
  },
  {
    id: 'stress',
    title: 'Стресс',
    icon: 'flash-outline',
    backgroundColor: '#D8FFF0',
    image: require('../../assets/stress.png'),
  },
  {
    id: 'all-topics',
    title: 'Все темы',
    icon: 'add',
    backgroundColor: '#CFFBEA',
    image: require('../../assets/vse temy.png'),
    isAllTopics: true,
  },
];

export const specialists: SpecialistItem[] = [
  {
    id: 'spec-1',
    name: 'Анна Смирнова',
    specialization: 'Психолог',
    price: 'От 1 200 ₽',
    rating: '5.0',
    image: require('../../assets/image (1).png'),
  },
  {
    id: 'spec-2',
    name: 'Мария Алексеева',
    specialization: 'Психотерапевт',
    price: 'От 1 200 ₽',
    rating: '5.0',
    image: require('../../assets/image (1).png'),
  },
  {
    id: 'spec-3',
    name: 'Елена Иванова',
    specialization: 'Семейный психолог',
    price: 'От 1 200 ₽',
    rating: '5.0',
    image: require('../../assets/image (1).png'),
  },
  {
    id: 'spec-4',
    name: 'Ольга Петрова',
    specialization: 'Коуч',
    price: 'От 1 200 ₽',
    rating: '5.0',
    image: require('../../assets/image (1).png'),
  },
];

export const topicCategories: TopicCategory[] = [
  {
    id: 'relationships-1',
    title: 'Отношения',
    items: [
      'Трудности в отношениях',
      'Поиск себя и планы на жизнь',
      'Прокрастинация и выгорание',
      'Проблемы со сном',
      'Неуверенность в себе',
      'Панические атаки',
      'Поиск себя и планы на жизнь',
      'Прокрастинация и выгорание',
    ],
  },
  {
    id: 'career',
    title: 'Карьера',
    items: [
      'Проблемы со сном',
      'Неуверенность в себе',
      'Панические атаки',
      'Поиск себя и планы на жизнь',
      'Прокрастинация и выгорание',
      'Проблемы со сном',
    ],
  },
  {
    id: 'relationships-2',
    title: 'Отношения',
    items: ['Трудности в отношениях', 'Неуверенность в себе', 'Панические атаки'],
  },
];

export const products: ProductItem[] = [
  {
    id: 'product-1',
    title: 'Девичник',
    type: 'Курс',
    price: '100 000 ₽',
    rating: '5.0',
    image: require('../../assets/photo.png'),
  },
  {
    id: 'product-2',
    title: 'Девичник',
    type: 'Курс',
    price: '100 000 ₽',
    rating: '5.0',
    image: require('../../assets/photo.png'),
  },
  {
    id: 'product-3',
    title: 'Девичник',
    type: 'Курс',
    price: '100 000 ₽',
    rating: '5.0',
    image: require('../../assets/photo.png'),
  },
  {
    id: 'product-4',
    title: 'Девичник',
    type: 'Курс',
    price: '100 000 ₽',
    rating: '5.0',
    image: require('../../assets/photo.png'),
  },
];

export const platformGuideImage = require('../../assets/happy-young-female-working-laptop 1.png');

export const specialistPromoDecor = require('../../assets/kak-stat.png');

export const specialistCategories: SpecialistCategoryItem[] = [
  {
    id: 'nutrition',
    title: 'Нутрициология',
    subtitle: 'Саморазвитие',
    icon: 'nutrition-outline',
  },
  {
    id: 'neuro',
    title: 'Нейромедитация',
    subtitle: 'Саморазвитие',
    icon: 'accessibility-outline',
  },
  {
    id: 'body',
    title: 'Телесная терапия',
    subtitle: 'Саморазвитие',
    icon: 'medkit-outline',
  },
  {
    id: 'psychiatrists',
    title: 'Психиатры',
    subtitle: 'Специалисты',
    icon: 'person-outline',
  },
];

export const articles: ArticleItem[] = [
  {
    id: 'article-1',
    title: 'Название статьи',
    topic: 'Тема',
    views: 28,
    image: require('../../assets/image (2).png'),
  },
  {
    id: 'article-2',
    title: 'Название статьи',
    topic: 'Тема',
    views: 28,
    image: require('../../assets/image (2).png'),
  },
  {
    id: 'article-3',
    title: 'Название статьи',
    topic: 'Тема',
    views: 28,
    image: require('../../assets/image (2).png'),
  },
  {
    id: 'article-4',
    title: 'Название статьи',
    topic: 'Тема',
    views: 28,
    image: require('../../assets/image (2).png'),
  },
];

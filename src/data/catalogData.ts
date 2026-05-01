export type CatalogTabItem = {
  id: string;
  label: string;
};

export type QuickLinkItem = {
  id: string;
  title: string;
  icon: 'services' | 'products' | 'journal';
};

export type HomeBannerItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: number;
  backgroundColor?: string;
  kind: 'small' | 'large';
  accent?: string[];
};

export type CatalogProduct = {
  id: string;
  title: string;
  type: string;
  price: string;
  rating: string;
  image: number;
  tags: string[];
  description: string;
  characteristics: Array<{ label: string; value: string }>;
  author: {
    name: string;
    role: string;
    rating: string;
    reviews: string;
  };
};

export type CatalogSpecialist = {
  id: string;
  name: string;
  specialization: string;
  price: string;
  rating: string;
  city: string;
  experience: string;
  image: number;
  tags: string[];
  about: string;
  methods: string[];
  topics: string[];
  outcomes: string[];
};

export type CatalogArticle = {
  id: string;
  title: string;
  topic: string;
  views: number;
  image: number;
  author: string;
  body: string;
  kind?: 'article' | 'video';
};

export type AnnouncementItem = {
  id: string;
  title: string;
  type: string;
  date: string;
};

export type ReviewItem = {
  id: string;
  author: string;
  date: string;
  text: string;
};

export const catalogTabs: CatalogTabItem[] = [
  { id: 'client', label: 'Клиенту' },
  { id: 'business', label: 'Бизнес-клиенту' },
  { id: 'specialist', label: 'Специалисту' },
];

export const quickLinks: QuickLinkItem[] = [
  { id: 'services', title: 'Услуги', icon: 'services' },
  { id: 'products', title: 'Товары', icon: 'products' },
  { id: 'journal', title: 'Журнал', icon: 'journal' },
];

export const homeBanners: HomeBannerItem[] = [
  {
    id: 'humor',
    title: 'Юмор',
    image: require('../../assets/humor-orange.jpg'),
    kind: 'small',
    accent: ['#FFC76B', '#FF8E68'],
  },
  {
    id: 'dating',
    title: 'Знакомства',
    image: require('../../assets/znakomstva.jpg'),
    kind: 'small',
    accent: ['#FF5F7D', '#FF9BB5'],
  },
  {
    id: 'book',
    title: 'Новая книга О. Рой',
    subtitle: 'с 16 февраля',
    image: require('../../assets/novaya-kniga.jpg'),
    backgroundColor: '#66D5ED',
    kind: 'large',
  },
  {
    id: 'depression',
    title: 'Как справиться\nс депрессией?',
    subtitle: 'Ваши проблемы решаются',
    image: require('../../assets/kak-spravitsa.jpg'),
    backgroundColor: '#8F9697',
    kind: 'large',
  },
];

const productTemplate = {
  tags: ['Отношения', 'Семья', 'Фобии'],
  description:
    'Подробный курс о выстраивании устойчивых отношений, работе с внутренними страхами и формировании эмоциональной опоры. Материал подан простым языком и подходит для самостоятельного прохождения.',
  characteristics: [
    { label: 'Формат', value: 'Онлайн' },
    { label: 'Кол-во мест', value: '30' },
    { label: 'Дата начала', value: '27.10.2025' },
    { label: 'Вид материала', value: 'PDF' },
    { label: 'Время прохождения', value: '4 часа 30 минут' },
  ],
  author: {
    name: 'Мария Лапина',
    role: 'Психолог',
    rating: '5.0',
    reviews: '120 отзывов',
  },
};

export const products: CatalogProduct[] = [
  {
    id: 'product-1',
    title: 'Девичник',
    type: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-2',
    title: 'Секреты счастливой жены',
    type: 'Курс',
    price: '10 000 ₽',
    rating: '5.0',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-3',
    title: 'Тест на характер',
    type: 'Тест',
    price: 'Бесплатно',
    rating: '4.8',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-4',
    title: 'Промокод на консультацию',
    type: 'Промокод',
    price: '1 100 ₽',
    rating: '4.7',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-5',
    title: 'Вебинар об отношениях',
    type: 'Вебинар',
    price: '3 800 ₽',
    rating: '4.9',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-6',
    title: 'Книга о самоценности',
    type: 'Книга',
    price: '2 500 ₽',
    rating: '4.9',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-7',
    title: 'Терапевтическая группа',
    type: 'Группа',
    price: '8 700 ₽',
    rating: '4.6',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-8',
    title: 'Игра на доверие',
    type: 'Игра',
    price: '4 200 ₽',
    rating: '4.8',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-9',
    title: 'Курс без выгорания',
    type: 'Курс',
    price: '6 300 ₽',
    rating: '5.0',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-10',
    title: 'Видеоурок по самооценке',
    type: 'Видеоурок',
    price: '990 ₽',
    rating: '4.4',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-11',
    title: 'Курс по тревожности',
    type: 'Курс',
    price: '7 200 ₽',
    rating: '4.8',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
  {
    id: 'product-12',
    title: 'Промокод на вебинар',
    type: 'Промокод',
    price: '600 ₽',
    rating: '4.5',
    image: require('../../assets/photo.png'),
    ...productTemplate,
  },
];

const specialistTemplate = {
  city: 'Москва',
  experience: '12 лет',
  tags: ['Тревожность', 'Выгорание', 'Отношения'],
  about:
    'Помогаю пройти сложные периоды без ощущения, что вы остались с проблемой один на один. Работаю мягко, структурно и с фокусом на применимый результат.',
  methods: ['КПТ', 'Коучинговые техники', 'Системный подход'],
  topics: ['Трудности в отношениях', 'Панические атаки', 'Поиск себя'],
  outcomes: ['Больше устойчивости', 'Понятный план действий', 'Снижение тревоги'],
};

export const specialists: CatalogSpecialist[] = [
  {
    id: 'specialist-1',
    name: 'Анна Смирнова',
    specialization: 'Психолог',
    price: 'От 1 200 ₽',
    rating: '5.0',
    image: require('../../assets/image (1).png'),
    ...specialistTemplate,
  },
  {
    id: 'specialist-2',
    name: 'Мария Алексеева',
    specialization: 'Психотерапевт',
    price: 'От 2 400 ₽',
    rating: '5.0',
    image: require('../../assets/image (1).png'),
    ...specialistTemplate,
  },
  {
    id: 'specialist-3',
    name: 'Ольга Петрова',
    specialization: 'Коуч',
    price: 'От 1 800 ₽',
    rating: '4.9',
    image: require('../../assets/image (1).png'),
    ...specialistTemplate,
  },
  {
    id: 'specialist-4',
    name: 'Елена Иванова',
    specialization: 'Психиатр',
    price: 'От 3 200 ₽',
    rating: '4.8',
    image: require('../../assets/image (1).png'),
    ...specialistTemplate,
  },
  {
    id: 'specialist-5',
    name: 'Ирина Морева',
    specialization: 'Ментор',
    price: 'От 2 000 ₽',
    rating: '4.7',
    image: require('../../assets/image (1).png'),
    ...specialistTemplate,
  },
  {
    id: 'specialist-6',
    name: 'Алина Королева',
    specialization: 'Коуч',
    price: 'От 1 500 ₽',
    rating: '4.9',
    image: require('../../assets/image (1).png'),
    ...specialistTemplate,
  },
];

export const articles: CatalogArticle[] = [
  {
    id: 'article-1',
    title: 'Название статьи',
    topic: 'Тема',
    views: 28,
    image: require('../../assets/images/article-1.png'),
    author: 'Том Рат',
    body:
      'Статья о том, как замечать собственные паттерны поведения, пересобирать ежедневные привычки и не терять контакт с собой в периоды высокой нагрузки.',
    kind: 'article',
  },
  {
    id: 'article-2',
    title: 'Как пережить расставание',
    topic: 'Отношения',
    views: 43,
    image: require('../../assets/images/article-1.png'),
    author: 'Ольга Самойлова',
    body:
      'Разбираем, почему после утраты отношений так сложно восстановиться, и какие шаги помогают вернуть опору и ритм жизни.',
    kind: 'article',
  },
  {
    id: 'article-3',
    title: 'Пять практик против тревоги',
    topic: 'Саморазвитие',
    views: 57,
    image: require('../../assets/images/article-1.png'),
    author: 'Марина Котова',
    body:
      'Короткие практики, которые можно встроить в день без специальных условий. Подойдут для мягкого снижения напряжения и возвращения внимания в тело.',
    kind: 'article',
  },
];

export const videos: CatalogArticle[] = [
  {
    id: 'video-1',
    title: 'Название',
    topic: 'Тема',
    views: 28,
    image: require('../../assets/images/video-1.png'),
    author: 'Том Рат',
    body:
      'Видеоразбор о том, как отслеживать автоматические реакции и перестраивать коммуникацию в сложных разговорах.',
    kind: 'video',
  },
  {
    id: 'video-2',
    title: 'Как стать счастливым',
    topic: 'Отношения',
    views: 80,
    image: require('../../assets/images/video-1.png'),
    author: 'Павел Миронов',
    body:
      'Видеоматериал о внутренней опоре, навыках самоподдержки и практиках, которые помогают сохранять устойчивость.',
    kind: 'video',
  },
];

export const announcements: AnnouncementItem[] = [
  { id: 'announcement-1', title: 'Как стать счастливым и наладить свою жизнь', type: 'Книга', date: '1 июля 2025' },
  { id: 'announcement-2', title: 'Скидка на курс по самооценке', type: 'Акция', date: '10 июля 2025' },
];

export const categories = {
  productChips: ['Видеоуроки', 'Промокоды', 'Книги', 'Терапевтические группы', 'Курсы', 'Вебинары', 'Игры'],
  serviceChips: ['Психологи / Психотерапевты', 'Коучи', 'Психиатры', 'Саморазвитие', 'Обучение и институты', 'Менторинг'],
  coachChips: ['Коучинг для родителей', 'Карьерный коучинг', 'Коучинг для родителей'],
  journalChips: ['Юмор', 'Статьи', 'Видеожурнал', 'Анонсы'],
  articleTopics: ['Для детей подростков и родителей', 'Отношения', 'Самооценка', 'Карьера'],
};

export const filters = {
  sortOptions: ['По цене', 'Новые анкеты', 'Топ-10', 'По рейтингу'],
  filterSections: [
    {
      title: 'Категории',
      options: ['Товары', 'Видеоуроки', 'Курсы', 'Промокоды', 'Книги', 'Тесты', 'Вебинары', 'Терапевтическая группа', 'Игры'],
    },
    {
      title: 'Темы',
      options: ['Трудности в отношениях', 'Поиск себя и планы на жизнь', 'Прокрастинация и выгорание', 'Проблемы со сном', 'Неуверенность в себе', 'Панические атаки', 'Посмотреть все'],
    },
    {
      title: 'Местоположение',
      options: ['Выберите город'],
    },
    {
      title: 'Стоимость',
      options: ['от 110 ₽', 'до 12 930 ₽', 'Бесплатно'],
    },
    {
      title: 'Тип',
      options: ['В записи', 'Онлайн'],
    },
  ],
};

export const reviews: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Ирина Макарова',
    date: '30 октября 2023',
    text: 'Очень бережная подача материала и много практических рекомендаций. После прохождения стало проще собирать себя в стрессовые периоды.',
  },
  {
    id: 'review-2',
    author: 'Мария Белова',
    date: '18 ноября 2023',
    text: 'Понравилась структура и то, что советы не оторваны от реальной жизни. Материал хочется пересматривать.',
  },
  {
    id: 'review-3',
    author: 'Александр Романов',
    date: '7 декабря 2023',
    text: 'Хорошее ощущение сопровождения даже в статичном формате. Много пользы без перегруза.',
  },
];

export const searchResults = [
  { id: 'search-1', title: 'Помощь с утратой близкого', type: 'Видеоурок' },
  { id: 'search-2', title: 'Как прожить горе и не застрять в нём', type: 'Статья' },
  { id: 'search-3', title: 'Поддержка после потери', type: 'Видеоурок' },
  { id: 'search-4', title: 'Этапы проживания утраты', type: 'Статья' },
];

export const searchHistory = [
  { id: 'history-1', title: 'Панические атаки', type: 'Статья' },
  { id: 'history-2', title: 'Прокрастинация и выгорание', type: 'Видеоурок' },
  { id: 'history-3', title: 'Поиск себя', type: 'Статья' },
];

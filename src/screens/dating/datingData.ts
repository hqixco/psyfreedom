import { ImageSourcePropType } from 'react-native';

export type DatingQuestionnaireStatus = 'notStarted' | 'inProgress' | 'submitted' | 'approved';

export type DatingProfileItem = {
  id: string;
  name: string;
  age: number;
  image: ImageSourcePropType;
  isFavorite: boolean;
  isHighlighted: boolean;
};

export type DatingEventItem = {
  id: string;
  day: string;
  month: string;
  title: string;
  city: string;
  views: number;
  image: ImageSourcePropType;
  isFavorite: boolean;
};

export type DatingEventDetailsMock = {
  id: string;
  title: string;
  price: string;
  dateTime: string;
  address: string;
  participants: string;
  image: ImageSourcePropType;
  isFavorite: boolean;
  description: string;
  result: string;
  organizer: {
    name: string;
    role: string;
    avatar: ImageSourcePropType;
  };
};

export type DatingBookedEvent = {
  id: string;
  date: string;
  title: string;
  tickets: string;
  price: string;
  status: string;
};

export type DatingIncomingInvite = {
  id: string;
  fromName: string;
  eventTitle: string;
  place: string;
};

export type DatingOutgoingInvite = {
  id: string;
  toName: string;
  eventTitle: string;
  place: string;
};

export type DatingApprovedCategory = {
  id: string;
  title: string;
  icon: string;
};

export type DatingBookItem = {
  id: string;
  title: string;
  typeLabel: string;
  price: string;
  rating: string;
  image: ImageSourcePropType;
  isFavorite: boolean;
};

export type DatingInfoRow = {
  label: string;
  value: string;
};

export type DatingProfileSection = {
  id: string;
  title: string;
  rows: DatingInfoRow[];
};

export type DatingProfilePromoOption = {
  id: string;
  text: string;
  badge?: string;
  active: boolean;
};

export type DatingProfilePromoCard = {
  id: string;
  title: string;
  subtitle: string;
  highlighted: boolean;
  options: DatingProfilePromoOption[];
  buttonText: string;
};

export type DatingCollectionsTabId = 'likesMe' | 'myLikes' | 'guests';

export type DatingCollectionProfileItem = {
  id: string;
  tab: DatingCollectionsTabId;
  name: string;
  age: number;
  image: ImageSourcePropType;
  isLiked: boolean;
  isDeleted: boolean;
};

export const datingClubData = {
  title: 'Знакомства',
  heroTitle: 'Хочешь отношений?',
  heroText: 'Регистрируйтесь на нашем сайте знакомств и найди свою вторую половинку',
  heroImage: require('../../../assets/images/dating-hero-banner.png'),
  accordion: [
    {
      id: 'who',
      title: 'Кто может вступить в клуб знакомств',
      blocks: [
        {
          title: 'Если тебе 18+, то',
          text: 'Разберётесь в своих желаниях, узнаете свои сильные стороны. Научитесь устанавливать личные границы и отстаивать их.',
        },
        {
          title: 'Тем, кто хочет лучше разобраться в себе',
          text: 'Разберётесь в своих желаниях, узнаете свои сильные стороны. Научитесь устанавливать личные границы и отстаивать их.',
        },
      ],
    },
    {
      id: 'rules',
      title: 'Правила клуба',
      blocks: [
        {
          title: '',
          text: 'Правила клуба знакомств. Текст можно заменить позже.',
        },
      ],
    },
    {
      id: 'info',
      title: 'Полезная информация',
      blocks: [
        {
          title: '',
          text: 'Полезная информация о клубе знакомств. Текст можно заменить позже.',
        },
      ],
    },
  ],
};

export const datingApprovedHero = {
  title: 'Нужна помощь специалиста?',
  text: 'Регистрируйся на нашем сайте и пользуйся всеми преимуществами маркетплейса',
  buttonText: 'Подобрать специалиста',
  image: require('../../../assets/images/specialist-help-banner.png'),
};

export const datingCatalogHero = {
  title: 'Хочешь отношений?',
  text: 'Регистрируйтесь на нашем сайте знакомств и найди свою вторую половинку',
  image: require('../../../assets/images/dating-hero-banner.png'),
};

export const datingApprovedCategories: DatingApprovedCategory[] = [
  { id: 'video', title: 'Видео', icon: 'film-outline' },
  { id: 'specialists', title: 'Специалисты', icon: 'people-outline' },
  { id: 'books', title: 'Книги', icon: 'book-outline' },
  { id: 'articles', title: 'Статьи', icon: 'newspaper-outline' },
];

export const datingProfiles: DatingProfileItem[] = [
  {
    id: '1',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/avatar-user-default.png'),
    isFavorite: false,
    isHighlighted: true,
  },
  {
    id: '2',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-1.png'),
    isFavorite: false,
    isHighlighted: false,
  },
  {
    id: '3',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-2.png'),
    isFavorite: false,
    isHighlighted: false,
  },
  {
    id: '4',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/avatar-user-default.png'),
    isFavorite: false,
    isHighlighted: false,
  },
  {
    id: '5',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-1.png'),
    isFavorite: false,
    isHighlighted: false,
  },
  {
    id: '6',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-2.png'),
    isFavorite: false,
    isHighlighted: false,
  },
  {
    id: '7',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/avatar-user-default.png'),
    isFavorite: false,
    isHighlighted: false,
  },
  {
    id: '8',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-1.png'),
    isFavorite: false,
    isHighlighted: false,
  },
];

export const datingEvents: DatingEventItem[] = [
  {
    id: '1',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
  {
    id: '2',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/humor-card-banner.png'),
    isFavorite: true,
  },
  {
    id: '3',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
  {
    id: '4',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/humor-card-banner.png'),
    isFavorite: true,
  },
  {
    id: '5',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
  {
    id: '6',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/humor-card-banner.png'),
    isFavorite: true,
  },
  {
    id: '7',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
];

export const datingFavoriteEvents: DatingEventItem[] = [
  {
    id: 'favorite-1',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
  {
    id: 'favorite-2',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/humor-card-banner.png'),
    isFavorite: true,
  },
  {
    id: 'favorite-3',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
  {
    id: 'favorite-4',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/humor-card-banner.png'),
    isFavorite: true,
  },
  {
    id: 'favorite-5',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: true,
  },
  {
    id: 'favorite-6',
    day: '10',
    month: 'дек',
    title: 'Название',
    city: 'Город проведения',
    views: 28,
    image: require('../../../assets/images/humor-card-banner.png'),
    isFavorite: true,
  },
];

export const datingBooks: DatingBookItem[] = [
  {
    id: '1',
    title: 'Девичник',
    typeLabel: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: false,
  },
  {
    id: '2',
    title: 'Девичник',
    typeLabel: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: false,
  },
  {
    id: '3',
    title: 'Девичник',
    typeLabel: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: false,
  },
  {
    id: '4',
    title: 'Девичник',
    typeLabel: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: false,
  },
  {
    id: '5',
    title: 'Девичник',
    typeLabel: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: false,
  },
  {
    id: '6',
    title: 'Девичник',
    typeLabel: 'Курс',
    price: '6 000 ₽',
    rating: '0.0',
    image: require('../../../assets/images/product-course-devichnik.png'),
    isFavorite: false,
  },
];

export const datingProfileDetailsMock = {
  id: '1',
  name: 'Анастасия',
  age: 25,
  zodiac: 'Телец',
  city: 'Москва',
  isFavorite: true,
  photos: [
    require('../../../assets/images/avatar-user-default.png'),
    require('../../../assets/images/avatar-user-default.png'),
    require('../../../assets/images/avatar-user-default.png'),
    require('../../../assets/images/avatar-user-default.png'),
  ],
  about:
    'Если вы спросите у психологов: «За что вам платят?». Многие ответят: «За инсайт». Это значит за то, что во время сессии вы узнаете о себе, что-то новое. Мне клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решатся в результате нашей работы.',
  infoRows: [
    { label: 'Религия', value: 'Православие' },
    { label: 'Цель знакомства', value: 'Флирт' },
    { label: 'Вредные привычки', value: 'Нет' },
    { label: 'Семейное положение', value: 'Не замужем' },
  ],
  dreams: 'Большая и дружная семья',
  interests: ['Спорт', 'Музыка', 'Путешествия', 'Дети', 'Семья', 'Искусство', 'Рыбалка'],
  sections: [
    {
      id: 'appearance',
      title: 'Внешность',
      rows: [
        { label: 'Рост', value: '172 см' },
        { label: 'Вес', value: '61 кг' },
        { label: 'Цвет глаз', value: 'Зеленые' },
        { label: 'Цвет волос', value: 'Русые' },
        { label: 'Боди-арт', value: 'Нет' },
        { label: 'Телосложение', value: 'Изящная' },
      ],
    },
    {
      id: 'lookingFor',
      title: 'Кого я ищу',
      rows: [
        { label: 'Возраст', value: '20–25 лет' },
        { label: 'Наличие детей', value: 'Нет' },
        { label: 'Рост', value: '160–180 см' },
        { label: 'Религия', value: 'Не важно' },
        { label: 'Место проживания', value: 'В крупном городе' },
        { label: 'Идеальный партнер', value: 'Помогать мужу в его работе' },
      ],
    },
    {
      id: 'work',
      title: 'Сфера деятельности',
      rows: [
        { label: 'Образование', value: 'Высшее' },
        { label: 'Профессия', value: 'Инженер' },
        { label: 'Место учебы', value: 'МГТУ имю И. Федорова' },
        { label: 'Работа', value: 'Начальник отдела' },
      ],
    },
    {
      id: 'children',
      title: 'Информация о детях',
      rows: [
        { label: 'Наличие детей', value: 'Да' },
        { label: 'Желание иметь детей', value: 'Да' },
        { label: 'Пол ребенка', value: 'Мужской' },
        { label: 'Возраст', value: '15 лет' },
        { label: 'Проживает', value: 'Отдельно' },
      ],
    },
    {
      id: 'vacation',
      title: 'Идеальный отпуск',
      rows: [
        { label: 'Место отдыха', value: 'Отели' },
        { label: 'Идеальный отпуск', value: 'Солнце, море и песок' },
        { label: 'Любимое время года', value: 'Весна' },
      ],
    },
    {
      id: 'pets',
      title: 'Домашние животные',
      rows: [
        { label: 'Есть домашние животные', value: 'Да' },
        { label: 'Отношение', value: 'Отношусь нейтрально' },
      ],
    },
  ] as DatingProfileSection[],
};

export const datingUserProfileMock = {
  name: 'Имя',
  surname: 'Фамилия',
  avatar: require('../../../assets/images/avatar-user-default.png'),
};

export const datingProfileMenuItems = [
  { id: 'collections', title: 'Подборки' },
  { id: 'favorites', title: 'Избранное' },
  { id: 'requests', title: 'Заявки' },
  { id: 'booked', title: 'Забронированные' },
];

export const datingProfilePromoCards: DatingProfilePromoCard[] = [
  {
    id: 'raise_profile',
    title: 'Поднять мою анкету',
    subtitle: '',
    highlighted: false,
    options: [
      { id: '30', text: '1 200 Б - 30 дней', badge: 'ВЫГОДНО', active: true },
      { id: '15', text: '900 Б - 15 дней', active: false },
      { id: '1', text: '200 Б - 1 день', active: false },
    ],
    buttonText: 'Взять себе',
  },
  {
    id: 'vip',
    title: 'Сделать VIP',
    subtitle: 'Поднять карточку товара в каталоге поиска',
    highlighted: true,
    options: [
      { id: '30', text: '1 200 Б - 30 дней', badge: 'ВЫГОДНО', active: true },
      { id: '15', text: '900 Б - 15 дней', active: false },
      { id: '1', text: '200 Б - 1 день', active: false },
    ],
    buttonText: 'Взять себе',
  },
];

export const datingCollectionsTabs: { id: DatingCollectionsTabId; title: string }[] = [
  { id: 'likesMe', title: 'Кому я нравлюсь' },
  { id: 'myLikes', title: 'Мои симпатии' },
  { id: 'guests', title: 'Гости' },
];

export const datingCollectionsProfiles: DatingCollectionProfileItem[] = [
  {
    id: '1',
    tab: 'likesMe',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/avatar-user-default.png'),
    isLiked: true,
    isDeleted: false,
  },
  {
    id: '2',
    tab: 'likesMe',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-1.png'),
    isLiked: true,
    isDeleted: true,
  },
  {
    id: '3',
    tab: 'likesMe',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-2.png'),
    isLiked: true,
    isDeleted: false,
  },
  {
    id: '4',
    tab: 'likesMe',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/avatar-user-default.png'),
    isLiked: true,
    isDeleted: false,
  },
  {
    id: '5',
    tab: 'myLikes',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-1.png'),
    isLiked: true,
    isDeleted: false,
  },
  {
    id: '6',
    tab: 'guests',
    name: 'Анна',
    age: 25,
    image: require('../../../assets/images/specialist-photo-2.png'),
    isLiked: true,
    isDeleted: false,
  },
];

export const interestTags = [
  'Спорт',
  'Музыка',
  'Путешествия',
  'Дети',
  'Семья',
  'Искусство',
  'Рыбалка',
  'Автомобили',
  'Книги',
  'Садоводство',
  'Религия',
  'Игры',
  'Бизнес',
  'Инвестиции',
  'Вязание',
  'Рисование',
  'Мечтание',
];

export const partnerQualityTags = ['Спортивный', 'Ласковый', 'Темпераментный'];

export const relationshipAspectTags = ['Обмен умениями', 'Развлечения', 'Общие друзья'];

export const initialDatingForm = {
  mainInfo: {
    name: '',
    surname: '',
    hideSurname: false,
    city: '',
    hideCity: false,
    gender: 'male' as 'male' | 'female',
    age: '',
    hideAge: false,
    maritalStatus: '',
    zodiac: '',
    religion: '',
    workExperience: '',
    badHabits: '',
    visitGoal: '',
    about: '',
    dreams: '',
    interests: [] as string[],
    certificate: null as { fileName: string } | null,
    photos: [] as { id: string; image: number }[],
  },
  work: {
    education: 'Высшее',
    diplomaProfession: 'Инженер',
    studyPlace: 'МГТУ имю И. Федорова',
    currentWork: 'Начальник отдела',
  },
  appearance: {
    height: '170',
    weight: '65',
    eyeColor: 'Голубые',
    hairColor: 'Каштановые',
    bodyType: 'Изящная',
    bodyArt: 'Воздержусь',
  },
  children: {
    hasChildren: 'yes' as 'yes' | 'no',
    wantsMoreChildren: 'yes' as 'yes' | 'no',
    children: [
      {
        gender: 'male' as 'male' | 'female',
        age: '15 лет',
        lives: 'Отдельно',
      },
    ],
  },
  partner: {
    ageRange: '20 - 25 лет',
    hasChildren: 'Нет',
    height: '160-180 см',
    religion: 'Не важно',
    livingPlace: 'В крупном городе',
    idealPartner: 'Помогать мужу в его работе',
    importantInRelationship: '',
    wishes: '',
    qualities: ['Спортивный', 'Ласковый'],
    aspects: ['Обмен умениями', 'Развлечения'],
  },
  vacation: {
    place: 'Отели',
    idealVacation: 'Солнце, море и песок',
    season: 'Весна',
  },
  pets: {
    hasPets: 'yes' as 'yes' | 'no',
    attitude: 'Отношусь нейтрально',
  },
};

export const mockDatingPhoto = require('../../../assets/images/image-placeholder.png');

export const datingEventDetailsMock: DatingEventDetailsMock = {
  id: '1',
  title: 'Секреты счастливой жены',
  price: '10 000 ₽',
  dateTime: 'Дата и время проведения',
  address: 'г. Москва, Красная Площадь, 1',
  participants: 'Кол-во участников',
  image: require('../../../assets/images/dating-event-card-1.png'),
  isFavorite: false,
  description:
    'Если вы спросите у психологов: «За что вам платят?». Многие ответят: «За инсайт». Это значит за то, что во время сессии вы узнаете о себе, что-то новое. Мне клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решатся в результате нашей работы.',
  result:
    'Если вы спросите у психологов: «За что вам платят?». Многие ответят: «За инсайт». Это значит за то, что во время сессии вы узнаете о себе, что-то новое. Мне клиенты платят не за инсайты, не за мое время и знания, а за конкретное изменение, на которое они решатся в результате нашей работы.',
  organizer: {
    name: 'Мария Лапина',
    role: 'Организатор',
    avatar: require('../../../assets/images/avatar-maria.png'),
  },
};

export const datingBookedEvents: DatingBookedEvent[] = [
  {
    id: '1',
    date: '20 сентября',
    title: 'Название мероприятия',
    tickets: '2 билета',
    price: '7 500 ₽',
    status: 'Оплачено',
  },
  {
    id: '2',
    date: '19 августа',
    title: 'Название мероприятия',
    tickets: '2 билета',
    price: '7 500 ₽',
    status: 'Оплачено',
  },
];

export const datingIncomingInvites: DatingIncomingInvite[] = [
  {
    id: '1',
    fromName: 'Мария Смирнова',
    eventTitle: 'Климт. Ожившие Полотна',
    place: 'Пространство Люмьер-Холл',
  },
  {
    id: '2',
    fromName: 'Мария Смирнова',
    eventTitle: 'Климт. Ожившие Полотна',
    place: 'Пространство Люмьер-Холл',
  },
];

export const datingOutgoingInvites: DatingOutgoingInvite[] = [
  {
    id: '1',
    toName: 'Мария Смирнова',
    eventTitle: 'Климт. Ожившие Полотна',
    place: 'Пространство Люмьер-Холл',
  },
  {
    id: '2',
    toName: 'Мария Смирнова',
    eventTitle: 'Климт. Ожившие Полотна',
    place: 'Пространство Люмьер-Холл',
  },
];

export const datingMapMock = {
  image: require('../../../assets/images/dating-map-moscow.png'),
};


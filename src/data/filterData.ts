export type FilterOption = {
  id: string;
  title: string;
};

export type CheckboxSectionConfig = {
  id: string;
  title: string;
  type: 'checkbox';
  options: FilterOption[];
  showAllLabel?: string;
};

export type LocationSectionConfig = {
  id: string;
  title: string;
  type: 'location';
  placeholder: string;
};

export type PriceRangeSectionConfig = {
  id: string;
  title: string;
  type: 'priceRange';
  minPlaceholder: string;
  maxPlaceholder: string;
  freeOption: string;
};

export type FilterSectionConfig = CheckboxSectionConfig | LocationSectionConfig | PriceRangeSectionConfig;

export type FilterConfig = {
  title: string;
  sections: FilterSectionConfig[];
};

export type SelectedFilters = {
  productTypes: string[];
  topics: string[];
  location?: string;
  price: {
    min?: string;
    max?: string;
    free: boolean;
  };
  format: string[];
  specialistTypes: string[];
  meetingType: string[];
  sessionFormat: string[];
  coachCategories: string[];
  materialTypes: string[];
  dateRanges: string[];
  popularity: string[];
};

export const defaultProductFilters: SelectedFilters = {
  productTypes: [],
  topics: [],
  location: undefined,
  price: {
    min: '',
    max: '',
    free: false,
  },
  format: [],
  specialistTypes: [],
  meetingType: [],
  sessionFormat: [],
  coachCategories: [],
  materialTypes: [],
  dateRanges: [],
  popularity: [],
};

export const productFilterConfig: FilterConfig = {
  title: 'Фильтры',
  sections: [
    {
      id: 'productTypes',
      title: 'Товары',
      type: 'checkbox',
      options: [
        { id: 'videoLessons', title: 'Видеоуроки' },
        { id: 'courses', title: 'Курсы' },
        { id: 'promoCodes', title: 'Промокоды' },
        { id: 'books', title: 'Книги' },
        { id: 'tests', title: 'Тесты' },
        { id: 'webinars', title: 'Вебинары' },
        { id: 'therapyGroups', title: 'Терапевтическая группа' },
        { id: 'games', title: 'Игры' },
      ],
    },
    {
      id: 'topics',
      title: 'Темы',
      type: 'checkbox',
      options: [
        { id: 'relationships', title: 'Трудности в отношениях' },
        { id: 'lifePlans', title: 'Поиск себя и планы на жизнь' },
        { id: 'burnout', title: 'Прокрастинация и выгорание' },
        { id: 'sleep', title: 'Проблемы со сном' },
        { id: 'confidence', title: 'Неуверенность в себе' },
        { id: 'panic', title: 'Панические атаки' },
      ],
      showAllLabel: 'Посмотреть все',
    },
    {
      id: 'location',
      title: 'Местоположение',
      type: 'location',
      placeholder: 'Выберите город',
    },
    {
      id: 'price',
      title: 'Стоимость',
      type: 'priceRange',
      minPlaceholder: 'от 110 ₽',
      maxPlaceholder: 'до 12 930 ₽',
      freeOption: 'Бесплатно',
    },
    {
      id: 'format',
      title: 'Тип',
      type: 'checkbox',
      options: [
        { id: 'recorded', title: 'В записи' },
        { id: 'online', title: 'Онлайн' },
      ],
    },
  ],
};

export const servicesFilterConfig: FilterConfig = {
  title: 'Фильтры',
  sections: [
    {
      id: 'specialistTypes',
      title: 'Специалисты',
      type: 'checkbox',
      options: [
        { id: 'psychologists', title: 'Психологи / Психотерапевты' },
        { id: 'coaches', title: 'Коучи' },
        { id: 'psychiatrists', title: 'Психиатры' },
        { id: 'selfDevelopment', title: 'Саморазвитие' },
        { id: 'education', title: 'Обучение и институты' },
        { id: 'mentoring', title: 'Менторинг' },
      ],
    },
    {
      id: 'topics',
      title: 'Темы',
      type: 'checkbox',
      options: [
        { id: 'relationships', title: 'Трудности в отношениях' },
        { id: 'lifePlans', title: 'Поиск себя и планы на жизнь' },
        { id: 'burnout', title: 'Прокрастинация и выгорание' },
        { id: 'sleep', title: 'Проблемы со сном' },
        { id: 'confidence', title: 'Неуверенность в себе' },
        { id: 'panic', title: 'Панические атаки' },
        { id: 'loss', title: 'Утрата близкого' },
      ],
      showAllLabel: 'Посмотреть все',
    },
    {
      id: 'location',
      title: 'Местоположение',
      type: 'location',
      placeholder: 'Выберите город',
    },
    {
      id: 'price',
      title: 'Стоимость',
      type: 'priceRange',
      minPlaceholder: 'от 1 200 ₽',
      maxPlaceholder: 'до 12 930 ₽',
      freeOption: 'Бесплатно',
    },
    {
      id: 'meetingType',
      title: 'Тип встречи',
      type: 'checkbox',
      options: [
        { id: 'online', title: 'Онлайн' },
        { id: 'offline', title: 'Офлайн' },
      ],
    },
    {
      id: 'sessionFormat',
      title: 'Формат',
      type: 'checkbox',
      options: [
        { id: 'individual', title: 'Индивидуально' },
        { id: 'group', title: 'Группа' },
      ],
    },
  ],
};

export const coachesFilterConfig: FilterConfig = {
  title: 'Фильтры',
  sections: [
    {
      id: 'coachCategories',
      title: 'Категории коучей',
      type: 'checkbox',
      options: [
        { id: 'parents', title: 'Коучинг для родителей' },
        { id: 'career', title: 'Карьерный коучинг' },
        { id: 'business', title: 'Бизнес-коучинг' },
        { id: 'life', title: 'Лайф-коучинг' },
      ],
    },
    {
      id: 'topics',
      title: 'Темы',
      type: 'checkbox',
      options: [
        { id: 'relationships', title: 'Трудности в отношениях' },
        { id: 'lifePlans', title: 'Поиск себя и планы на жизнь' },
        { id: 'burnout', title: 'Прокрастинация и выгорание' },
        { id: 'sleep', title: 'Проблемы со сном' },
        { id: 'confidence', title: 'Неуверенность в себе' },
        { id: 'panic', title: 'Панические атаки' },
        { id: 'loss', title: 'Утрата близкого' },
      ],
    },
    {
      id: 'location',
      title: 'Местоположение',
      type: 'location',
      placeholder: 'Выберите город',
    },
    {
      id: 'price',
      title: 'Стоимость',
      type: 'priceRange',
      minPlaceholder: 'от 1 200 ₽',
      maxPlaceholder: 'до 12 930 ₽',
      freeOption: 'Бесплатно',
    },
    {
      id: 'meetingType',
      title: 'Тип встречи',
      type: 'checkbox',
      options: [
        { id: 'online', title: 'Онлайн' },
        { id: 'offline', title: 'Офлайн' },
      ],
    },
  ],
};

export const articlesFilterConfig: FilterConfig = {
  title: 'Фильтры',
  sections: [
    {
      id: 'topics',
      title: 'Темы',
      type: 'checkbox',
      options: [
        { id: 'relationships', title: 'Трудности в отношениях' },
        { id: 'lifePlans', title: 'Поиск себя и планы на жизнь' },
        { id: 'burnout', title: 'Прокрастинация и выгорание' },
        { id: 'sleep', title: 'Проблемы со сном' },
        { id: 'confidence', title: 'Неуверенность в себе' },
        { id: 'panic', title: 'Панические атаки' },
        { id: 'relations-topic', title: 'Отношения' },
        { id: 'family', title: 'Семья' },
        { id: 'children', title: 'Дети и родители' },
        { id: 'self-worth', title: 'Самооценка' },
        { id: 'stress', title: 'Стресс' },
      ],
    },
    {
      id: 'materialTypes',
      title: 'Тип материала',
      type: 'checkbox',
      options: [
        { id: 'articles', title: 'Статьи' },
        { id: 'video-journal', title: 'Видеожурнал' },
        { id: 'announcements', title: 'Анонсы' },
        { id: 'humor', title: 'Юмор' },
      ],
    },
    {
      id: 'dateRanges',
      title: 'Дата',
      type: 'checkbox',
      options: [
        { id: 'week', title: 'За неделю' },
        { id: 'month', title: 'За месяц' },
        { id: 'year', title: 'За год' },
        { id: 'all-time', title: 'За всё время' },
      ],
    },
    {
      id: 'popularity',
      title: 'Популярность',
      type: 'checkbox',
      options: [
        { id: 'popular', title: 'Популярные' },
        { id: 'new', title: 'Новые' },
        { id: 'most-viewed', title: 'Больше просмотров' },
      ],
    },
  ],
};

export const profileQuickLinks = [
  { id: 'collections', title: 'Подборки', icon: 'bookmarks-outline' },
  { id: 'services', title: 'Сервисы', icon: 'briefcase-outline' },
] as const;

export const profileBanners = [
  {
    id: 'platform',
    title: 'Как пользоваться\nплатформой',
    description: 'Возможности платформы\nи ее функции',
    buttonText: 'Перейти',
    image: require('../../assets/3.jpg'),
    variant: 'mint' as const,
  },
  {
    id: 'specialist',
    title: 'Как стать специалистом и\nначать зарабатывать с нашей\nплатформой',
    description: 'Инструменты для работы на платформе,\nмеханики заработка и продвижения',
    buttonText: 'Перейти',
    image: require('../../assets/Без имени-1.jpg'),
    variant: 'blue' as const,
  },
] as const;

export const profileMenuItems = [
  { id: 'about', title: 'О приложении' },
  { id: 'faq', title: 'Вопрос-ответ' },
  { id: 'feedback', title: 'Обратная связь' },
] as const;

export const userProfileMock = {
  name: 'Иван Иванов',
  phone: '+7 (987)654-32-10',
  email: 'info@mail.ru',
  birthDate: '21.04.1986',
  photo: require('../../assets/images/avatar-maria.png'),
  selectedProfileType: 'main' as const,
  pushEnabled: true,
};

export const profileAppointments = [
  {
    id: '1',
    time: '10:00',
    title: 'Онлайн консультация',
    date: '12 июня',
  },
  {
    id: '2',
    time: '10:00',
    title: 'Онлайн консультация',
    date: '12 июня',
  },
] as const;

export const profileMainMenu = [
  { id: 'purchases', title: 'Мои покупки' },
  { id: 'reviews', title: 'Отзывы' },
  { id: 'emergency', title: 'Экстренная помощь' },
] as const;

export const profileSettingsMenu = [
  { id: 'edit', title: 'Редактирование профиля' },
  { id: 'logout', title: 'Выйти из профиля' },
  { id: 'delete', title: 'Удалить профиль' },
] as const;

export const profileInfoMenu = [
  { id: 'about', title: 'О приложении' },
  { id: 'faq', title: 'Вопрос-ответ' },
  { id: 'feedback', title: 'Обратная связь' },
] as const;

export const profilePartnerBanner = {
  id: 'partner',
  title: 'Как стать\nпартнером',
  description: 'Оставьте заявку на\nразмещение рекламы\nили услуги',
  buttonText: 'Перейти',
  image: require('../../assets/help-banner-bg.jpg'),
  height: 220,
  variant: 'mint' as const,
};


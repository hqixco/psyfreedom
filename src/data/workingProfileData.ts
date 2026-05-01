export const workingProfileMock = {
  mainProfile: {
    title: 'Основной',
    avatar: require('../../assets/images/author-maria.png'),
  },
  workProfile: {
    title: 'Рабочий',
    selectedLabel: 'Выбран',
    avatar: require('../../assets/images/author-maria.png'),
  },
  bonuses: {
    amount: 200,
    description:
      '1 бонус = 1 рубль. Бонусы можно применить на продвижение карточки услуги или товаров.\nУдалить нежелательный отзыв. Они не сгорают.',
  },
};

export const workingProfileMainMenu = [
  { id: 'reviewsRating', title: 'Отзывы и рейтинг' },
  { id: 'sessionsCalendar', title: 'Календарь сессий' },
  { id: 'myProducts', title: 'Мои товары' },
] as const;

export const workingProfileStats = [
  { id: 'scheduledMeetings', title: 'Назначено встреч' },
  { id: 'completedMeetings', title: 'Прошло встреч' },
  { id: 'soldProducts', title: 'Продано товаров' },
  { id: 'views', title: 'Просмотры' },
] as const;

export const workingProfileExtraMenu = [
  { id: 'associations', title: 'Ассоциации' },
  { id: 'officeRent', title: 'Аренда кабинета' },
  { id: 'developProduct', title: 'Разработать продукт' },
  { id: 'cooperation', title: 'Сотрудничество' },
] as const;

export const workingProfileSettingsMenu = [
  { id: 'edit', title: 'Редактирование профиля' },
  { id: 'logout', title: 'Выйти из профиля' },
  { id: 'delete', title: 'Удалить профиль' },
] as const;

export const workingProfileInfoMenu = [
  { id: 'about', title: 'О приложении' },
  { id: 'faq', title: 'Вопрос-ответ' },
  { id: 'feedback', title: 'Обратная связь' },
] as const;

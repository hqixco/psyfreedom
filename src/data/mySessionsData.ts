import { ImageSourcePropType } from 'react-native';

export type SessionItem = {
  id: string;
  date: string;
  dateLabel: string;
  time: string;
  title: string;
  specialistName: string;
  specialistRole: string;
  specialistAvatar: ImageSourcePropType;
  rating: string;
  reviewsCount: number;
  price: string;
  format: string;
  status: 'Оплачено' | 'Ожидает' | 'Отменено';
};

export const sessionsMock: SessionItem[] = [
  {
    id: '1',
    date: '2024-10-06',
    dateLabel: 'Сегодня',
    time: '10:00',
    title: 'Онлайн консультация',
    specialistName: 'Мария Лапина',
    specialistRole: 'Психолог',
    specialistAvatar: require('../../assets/images/author-maria.png'),
    rating: '5.0',
    reviewsCount: 120,
    price: '9 000 ₽',
    format: 'Онлайн консультация',
    status: 'Оплачено',
  },
  {
    id: '2',
    date: '2024-10-19',
    dateLabel: '19 октября',
    time: '12:00',
    title: 'Онлайн консультация',
    specialistName: 'Мария Лапина',
    specialistRole: 'Психолог',
    specialistAvatar: require('../../assets/images/author-maria.png'),
    rating: '5.0',
    reviewsCount: 120,
    price: '9 000 ₽',
    format: 'Онлайн консультация',
    status: 'Оплачено',
  },
  {
    id: '3',
    date: '2024-10-19',
    dateLabel: '19 октября',
    time: '10:00',
    title: 'Онлайн консультация',
    specialistName: 'Мария Лапина',
    specialistRole: 'Психолог',
    specialistAvatar: require('../../assets/images/author-maria.png'),
    rating: '5.0',
    reviewsCount: 120,
    price: '9 000 ₽',
    format: 'Онлайн консультация',
    status: 'Оплачено',
  },
];

export const calendarMonthMock = {
  monthTitle: 'Октябрь',
  year: '2024',
  selectedDate: '2024-10-19',
  markedDates: ['2024-10-06', '2024-10-07', '2024-10-19'],
};

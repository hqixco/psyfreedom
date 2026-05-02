import { ImageSourcePropType } from 'react-native';

export type Specialist = {
  id: string;
  name: string;
  specialization: string;
  price: string;
  rating: string;
  image: ImageSourcePropType;
  city?: string;
  tags?: string[];
  isTop?: boolean;
};

export type ServiceCategory = {
  id: string;
  title: string;
  icon: 'people' | 'compass' | 'medkit' | 'leaf' | 'school' | 'person';
};

export type CoachCategory = {
  id: string;
  title: string;
  image?: ImageSourcePropType;
};

const specialistImage = require('../../assets/image (4).jpg');

export const serviceCategories: ServiceCategory[] = [
  { id: 'psychologists', title: 'Психологи /\nПсихотерапевты', icon: 'people' },
  { id: 'coaches', title: 'Коучи', icon: 'compass' },
  { id: 'psychiatrists', title: 'Психиатры', icon: 'medkit' },
  { id: 'self-development', title: 'Саморазвитие', icon: 'leaf' },
  { id: 'education', title: 'Обучение и\nинституты', icon: 'school' },
  { id: 'mentoring', title: 'Менторинг', icon: 'person' },
];

export const topSpecialists: Specialist[] = [
  { id: 'top-1', name: 'Анна Смирнова', specialization: 'Психолог', price: 'От 1 200 ₽', rating: '0.0', image: specialistImage, isTop: true },
  { id: 'top-2', name: 'Мария Алексеева', specialization: 'Психотерапевт', price: 'От 1 200 ₽', rating: '0.0', image: specialistImage, isTop: true },
  { id: 'top-3', name: 'Ольга Петрова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '0.0', image: specialistImage, isTop: true },
  { id: 'top-4', name: 'Елена Иванова', specialization: 'Психиатр', price: 'От 1 200 ₽', rating: '0.0', image: specialistImage, isTop: true },
  { id: 'top-5', name: 'Ирина Белова', specialization: 'Ментор', price: 'От 1 200 ₽', rating: '0.0', image: specialistImage, isTop: true },
];

export const specialists: Specialist[] = [
  { id: '1', name: 'Анна Смирнова', specialization: 'Психолог', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '2', name: 'Мария Алексеева', specialization: 'Психотерапевт', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '3', name: 'Ольга Петрова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '4', name: 'Елена Иванова', specialization: 'Психиатр', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '5', name: 'Ирина Белова', specialization: 'Саморазвитие', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '6', name: 'Алина Корнеева', specialization: 'Ментор', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '7', name: 'Светлана Романова', specialization: 'Психолог', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '8', name: 'Наталья Соколова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '9', name: 'Полина Миронова', specialization: 'Психотерапевт', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '10', name: 'Дарья Ковалева', specialization: 'Психиатр', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '11', name: 'Алёна Морозова', specialization: 'Саморазвитие', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '12', name: 'Вера Титова', specialization: 'Ментор', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '13', name: 'Ксения Гаврилова', specialization: 'Психолог', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '14', name: 'Юлия Макарова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '15', name: 'Лидия Воронова', specialization: 'Психотерапевт', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: '16', name: 'Марина Сафонова', specialization: 'Ментор', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
];

export const coachCategories: CoachCategory[] = [
  { id: 'parents', title: 'Коучинг для\nродителей', image: require('../../assets/kouching-dlya-roditelej.jpg') },
  { id: 'career', title: 'Карьерный\nкоучинг', image: require('../../assets/karjernyj-kouching.jpg') },
  { id: 'personal', title: 'Личностный\nкоучинг' },
];

export const coaches: Specialist[] = [
  { id: 'coach-1', name: 'Ольга Петрова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-2', name: 'Наталья Соколова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-3', name: 'Юлия Макарова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-4', name: 'Алина Корнеева', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-5', name: 'Мария Власова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-6', name: 'Екатерина Лукина', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-7', name: 'Тамара Фролова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-8', name: 'Лариса Нечаева', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-9', name: 'Валерия Комарова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-10', name: 'Оксана Рябова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-11', name: 'Ирина Белова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-12', name: 'Анна Мельник', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-13', name: 'Марина Ким', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-14', name: 'София Миронова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-15', name: 'Полина Егорова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
  { id: 'coach-16', name: 'Евгения Борисова', specialization: 'Коуч', price: 'От 1 200 ₽', rating: '5.0', city: 'Москва', tags: ['Отношения', 'Семья'], image: specialistImage },
];

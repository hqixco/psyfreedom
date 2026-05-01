import { ImageSourcePropType } from 'react-native';

export type EmergencyCategory = {
  id: string;
  title: string;
  variant: 'blue' | 'mint' | 'lavender';
  backgroundImage?: ImageSourcePropType;
};

export type EmergencyContact = {
  id: string;
  title: string;
  tags: string[];
  phone: string;
  phoneRaw: string;
  website: string;
  logo: ImageSourcePropType;
};

export const emergencyCategories: EmergencyCategory[] = [
  {
    id: 'children',
    title: 'Для детей, подростков\nи родителей',
    variant: 'blue',
    backgroundImage: require('../../assets/images/help-specialist.png'),
  },
  {
    id: 'women',
    title: 'Для женщин, оказавшихся\nв сложной ситуации',
    variant: 'mint',
    backgroundImage: require('../../assets/images/help-specialist.png'),
  },
  {
    id: 'psychiatric',
    title: 'Скорая психиатрическая\nпомощь (круглосуточно)',
    variant: 'lavender',
    backgroundImage: require('../../assets/images/help-specialist.png'),
  },
];

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'mchs',
    title: 'Горячая линия Центра экстренной\nпсихологической помощи МЧС\nРоссии',
    tags: ['Утрата', 'Семья', 'Фобии', 'Насилие', 'Стресс'],
    phone: '+7 (495) 898-89-00',
    phoneRaw: '+74958988900',
    website: 'https://globalpsy.org',
    logo: require('../../assets/images/placeholder.png'),
  },
];

export const emergencyDescription =
  'Не все сотрудники горячих линий – например, государственных понимают особенности психических расстройств. Если специалист не смог помочь вам, попробуйте позвонить в другую службу и поговорить с оператором.';

import { ImageSourcePropType } from 'react-native';

export type AssociationReview = {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
};

export type Association = {
  id: string;
  title: string;
  city: string;
  description: string;
  website: string;
  phone: string;
  email: string;
  address: string;
  specialist: {
    name: string;
    role: string;
    rating: string;
    reviewsCount: number;
    avatar: ImageSourcePropType;
  };
  reviews: AssociationReview[];
};

const baseAssociation: Omit<Association, 'id' | 'city'> = {
  title: 'Международная ассоциация психологов International association of psychologists',
  description:
    'Международная ассоциация психологов — некоммерческая организация, объединение специалистов в области психологии, психотерапии и смежных отраслей науки. Деятельность Ассоциации носит международный характер, исполнительный орган расположен в Российской Федерации (г. Москва).',
  website: 'https://globalpsy.org',
  phone: '+7 (405) 879-99-00',
  email: 'inf0psyfreedom@mail.ru',
  address: '105082, г. Москва, Рубцовская наб, д.3 стр.1, этаж/помещ. 15/I ком./офис 22а/2-1.',
  specialist: {
    name: 'Мария Лапина',
    role: 'Психолог',
    rating: '5.0',
    reviewsCount: 120,
    avatar: require('../../assets/images/author-maria.png'),
  },
  reviews: [
    {
      id: '1',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      rating: 5,
      text: 'Вы разберётесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    },
    {
      id: '2',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      rating: 5,
      text: 'Вы разберётесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    },
    {
      id: '3',
      author: 'Ирина Макарова',
      date: '30 октября 2023',
      rating: 5,
      text: 'Вы разберётесь в себе, своих желаниях и ценностях вместе с профессиональными психологами. Научитесь рефлексировать, отстаивать личные границы, замечать эмоции и совершать осознанный выбор.',
    },
  ],
};

export const associationsMock: Association[] = [
  {
    id: '1',
    city: 'Москва',
    ...baseAssociation,
  },
  {
    id: '2',
    city: 'Санкт-Петербург',
    ...baseAssociation,
  },
  {
    id: '3',
    city: 'Казань',
    ...baseAssociation,
  },
];

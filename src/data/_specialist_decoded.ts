import { ImageSourcePropType } from 'react-native';

export type EducationItem = {
  years: string;
  title: string;
  description: string;
};

export type SpecialistProduct = {
  id: string;
  title: string;
  type: 'Курс' | 'Игра' | 'Видеоурок' | 'Книга' | 'Промокод';
  price: string;
  rating: string;
  image: ImageSourcePropType;
};

export type SpecialistReview = {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
  avatar: ImageSourcePropType;
};

export type SpecialistDetails = {
  id: string;
  name: string;
  specialization: string;
  price: string;
  experience: string;
  city: string;
  rating: string;
  reviewsCount: number;
  image: ImageSourcePropType;
  tags: string[];
  stats: {
    products: number;
    materials: number;
    sessions: number;
  };
  about: string;
  methods: string[];
  topics: string[];
  sessionBenefits: string[];
  education: EducationItem[];
  certificates: ImageSourcePropType[];
  media: ImageSourcePropType[];
  products: SpecialistProduct[];
  reviews: SpecialistReview[];
};

const specialistImage = require('../../assets/specialist-photo-default.jpg');
const specialistAvatar = require('../../assets/images/specialist-avatar-default.png');
const reviewAvatar = require('../../assets/review-avatar-default.png');
const certificate1 = require('../../assets/images/specialist-certificate-1.png');
const certificate2 = require('../../assets/images/specialist-certificate-2.png');
const media1 = require('../../assets/images/specialist-media-preview-1.png');
const placeholder = require('../../assets/product-placeholder-square.png');
const productCourse = require('../../assets/product-placeholder-square.png');
const bookImage = require('../../assets/product-placeholder-square.png');

export const specialistDetails: SpecialistDetails = {
  id: 'specialist-1',
  name: '���� ��������',
  specialization: '��������',
  price: '�� 1 200 ?',
  experience: '12 ���',
  city: '������',
  rating: '5.0',
  reviewsCount: 120,
  image: specialistImage,
  tags: ['���������', '�����', '�����'],
  stats: {
    products: 6,
    materials: 12,
    sessions: 40,
  },
  about:
    '���� �� �������� � ����������: ��� ��� ��� ������?�, ������ ������ �������� ��� �����������, ������ ��� ����. �� �� ����� ���� �� ��� �������� �� ������������ �������-�� �������� ����, ������� ������� � ����� ����� ���, ��� ������ ��� ������ ����. � ������� ����� � ����������, ��� ��������, ������� ������� ���� � �����, ������� ��� ��������.',
  methods: [
    '������������� ������������',
    '�������������������� ������������',
    '��������� �������� ������������',
  ],
  topics: ['���������', '�����', '�����', '����������', '������'],
  sessionBenefits: [
    '��������� ����� ������',
    '����� ������ � ��������',
    '��������� ���������',
    '������ ���� ��������',
  ],
  education: [
    {
      years: '2015 � 2019',
      title: '�������� ��������� ������������ � �������������� ������ ����',
      description: '���������������� ����������������',
    },
    {
      years: '2021 � 2025',
      title: '���������� �������� ��������',
      description: '������� � �������� �������� �������',
    },
  ],
  certificates: [certificate1, certificate2, placeholder],
  media: [media1, placeholder, media1],
  products: [
    { id: 'product-1', title: '��������', type: '����', price: '6 000 ?', rating: '5.0', image: productCourse },
    { id: 'product-2', title: '������� ���������� ����', type: '����', price: '10 000 ?', rating: '5.0', image: productCourse },
    { id: 'product-8', title: '���� �� �������', type: '����', price: '4 200 ?', rating: '4.8', image: placeholder },
    { id: 'product-10', title: '��������� �� ����������', type: '���������', price: '990 ?', rating: '4.4', image: placeholder },
    { id: 'product-6', title: '�������� �����', type: '�����', price: '10 000 ?', rating: '4.9', image: bookImage },
    { id: 'product-4', title: '�������� �� ����', type: '��������', price: '���������', rating: '4.7', image: placeholder },
  ],
  reviews: [
    {
      id: 'review-1',
      author: '����� ��������',
      date: '30 ������� 2023',
      text: '����� ���������� � ������������ ����������. ����� ���������� ������ ����� ����� �������� ���� ������� � ��������� ��������� ������� ���������.',
      rating: 5,
      avatar: reviewAvatar,
    },
    {
      id: 'review-2',
      author: '����� ������',
      date: '18 ������ 2023',
      text: '�����������, ��� �� ������� ���� ��������� � ���������� ����. ������ �� ������ � ����������, � ������������� �������� � �����.',
      rating: 5,
      avatar: specialistAvatar,
    },
    {
      id: 'review-3',
      author: '��������� �������',
      date: '7 ������� 2023',
      text: '���� ����� ��������, ������ ������ �������, � ����� ����������� �������� �� ������������� � �� ���������.',
      rating: 5,
      avatar: reviewAvatar,
    },
  ],
};

export function getSpecialistDetailsById(id: string): SpecialistDetails {
  if (id === specialistDetails.id) {
    return specialistDetails;
  }

  return {
    ...specialistDetails,
    id,
    name: '��� �������',
    specialization: '�������������',
  };
}


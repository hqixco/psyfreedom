import { ImageSourcePropType } from 'react-native';

export type OfficeRentItem = {
  id: string;
  title: string;
  area: string;
  price: string;
  address: string;
  image: ImageSourcePropType;
  description: string;
};

export const officeRentItems: OfficeRentItem[] = [
  {
    id: '1',
    title: 'Кабинет CMPi',
    area: '12 м²',
    price: 'от 100 000 ₽',
    address: 'г. Москва, ул. Ленина, 99',
    image: require('../../assets/images/location-map-moscow.jpg'),
    description: 'Кабинет для проведения индивидуальных консультаций и встреч с клиентами.',
  },
  {
    id: '2',
    title: 'Кабинет CMPi',
    area: '12 м²',
    price: 'от 100 000 ₽',
    address: 'г. Москва, ул. Ленина, 99',
    image: require('../../assets/images/location-map-moscow.jpg'),
    description: 'Кабинет для проведения индивидуальных консультаций и встреч с клиентами.',
  },
];


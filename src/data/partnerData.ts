import { ImageSourcePropType } from 'react-native';

export type PartnerPageData = {
  title: string;
  bannerTitle: string;
  description: string;
  advantages: string[];
  bannerImage: ImageSourcePropType;
};

export const partnerPageData: PartnerPageData = {
  title: 'Как стать партнером',
  bannerTitle: 'Как стать специалистом\nи начать зарабатывать\nс нашей платформой',
  description:
    'Международная ассоциация психологов — некоммерческая организация, объединение специалистов в области психологии, психотерапии и смежных отраслей науки. Деятельность Ассоциации носит международный характер, исполнительный орган расположен в Российской Федерации (г. Москва).',
  advantages: [
    '1. Если вы спросите у психологов',
    '2. Если вы спросите у психологов',
    '3. Если вы спросите у психологов',
  ],
  bannerImage: require('../../assets/images/help-specialist.png'),
};

export const partnerFormInitialValues = {
  name: 'Иван Иванов',
  phone: '+7 (987)654-32-10',
  email: 'info@mail.ru',
};

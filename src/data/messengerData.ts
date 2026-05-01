import { ImageSourcePropType } from 'react-native';

export type ChatUser = {
  id: string;
  name: string;
  role: string;
  avatar?: ImageSourcePropType;
};

export type ChatPreview = {
  id: string;
  user: ChatUser;
  lastMessage: string;
  time?: string;
  unreadCount?: number;
  isSupport?: boolean;
};

export type ChatMessage =
  | {
      id: string;
      type: 'date';
      label: string;
    }
  | {
      id: string;
      sender: 'me' | 'other';
      type: 'text' | 'image' | 'imageWithText';
      text?: string;
      image?: ImageSourcePropType;
      createdAt?: string;
    };

const mariaAvatar = require('../../assets/images/author-maria.png');
const specialistAvatar = require('../../assets/images/specialist-1.png');
const specialistAvatarAlt = require('../../assets/images/specialist-2.png');
const imageOne = require('../../assets/images/video-1.png');
const imageTwo = require('../../assets/images/product-devichnik.png');

export const chatAttachmentMock = imageOne;

export const chatPreviews: ChatPreview[] = [
  {
    id: 'support',
    isSupport: true,
    user: {
      id: 'support',
      name: 'Поддержка',
      role: 'Чат-бот',
    },
    lastMessage: 'Здравствуйте! Я рада, что вы обратились в поддержку.',
    time: '10:09',
    unreadCount: 5,
  },
  {
    id: 'donald',
    user: {
      id: 'donald',
      name: 'Дональд Макдональд',
      role: 'Психолог',
      avatar: specialistAvatar,
    },
    lastMessage: 'Здравствуйте! Я рада, что вы...',
  },
  {
    id: 'maria',
    user: {
      id: 'maria',
      name: 'Мария Лапина',
      role: 'Психолог',
      avatar: mariaAvatar,
    },
    lastMessage: 'Здравствуйте! Я рада, что вы...',
  },
  {
    id: 'elise',
    user: {
      id: 'elise',
      name: 'Елиз Мартин',
      role: 'Коуч',
      avatar: specialistAvatarAlt,
    },
    lastMessage: 'По проблеме проконсультируете?',
  },
  {
    id: 'olivia',
    user: {
      id: 'olivia',
      name: 'Оливия Стоун',
      role: 'Психолог',
      avatar: specialistAvatar,
    },
    lastMessage: 'Давайте подберем удобное время.',
  },
  {
    id: 'mark',
    user: {
      id: 'mark',
      name: 'Марк Ривз',
      role: 'Коуч',
      avatar: specialistAvatarAlt,
    },
    lastMessage: 'Спасибо за обратную связь.',
  },
];

export const chatMessagesByChatId: Record<string, ChatMessage[]> = {
  support: [
    {
      id: 'support-date-1',
      type: 'date',
      label: 'Сегодня',
    },
    {
      id: 'support-1',
      sender: 'other',
      type: 'text',
      text: 'Здравствуйте! Я рада, что вы обратились в поддержку. Чем могу помочь?',
    },
  ],
  maria: [
    {
      id: 'm1',
      sender: 'me',
      type: 'text',
      text: 'Здравствуйте, я бы хотел записаться на консультацию к психологу. У меня возникли некоторые проблемы, которые я не могу решить самостоятельно.',
    },
    {
      id: 'date-1',
      type: 'date',
      label: '22 февраля',
    },
    {
      id: 'm2',
      sender: 'other',
      type: 'text',
      text: 'Здравствуйте! Я рада, что вы обратились ко мне. Расскажите, пожалуйста, о своих проблемах. Что именно вас беспокоит?',
    },
    {
      id: 'date-2',
      type: 'date',
      label: 'Сегодня',
    },
    {
      id: 'm3',
      sender: 'me',
      type: 'image',
      image: imageOne,
    },
    {
      id: 'm4',
      sender: 'other',
      type: 'imageWithText',
      image: imageTwo,
      text: 'Картинка и текст',
    },
  ],
  donald: [
    {
      id: 'donald-date-1',
      type: 'date',
      label: 'Сегодня',
    },
    {
      id: 'donald-1',
      sender: 'other',
      type: 'text',
      text: 'Здравствуйте! Я рада, что вы...',
    },
  ],
  elise: [
    {
      id: 'elise-date-1',
      type: 'date',
      label: 'Сегодня',
    },
    {
      id: 'elise-1',
      sender: 'me',
      type: 'text',
      text: 'По проблеме проконсультируете?',
    },
  ],
  olivia: [
    {
      id: 'olivia-date-1',
      type: 'date',
      label: 'Сегодня',
    },
    {
      id: 'olivia-1',
      sender: 'other',
      type: 'text',
      text: 'Давайте подберем удобное время.',
    },
  ],
  mark: [
    {
      id: 'mark-date-1',
      type: 'date',
      label: 'Сегодня',
    },
    {
      id: 'mark-1',
      sender: 'other',
      type: 'text',
      text: 'Спасибо за обратную связь.',
    },
  ],
};

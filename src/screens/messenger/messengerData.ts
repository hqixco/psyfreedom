import { ImageSourcePropType } from 'react-native';

export type MessengerChatItem = {
  id: string;
  chatId?: string;
  type: 'support' | 'default';
  name: string;
  role: string;
  lastMessage: string;
  time: string;
  unreadCount: number;
  avatar?: ImageSourcePropType;
};

export const messengerChats: MessengerChatItem[] = [
  {
    id: 'support',
    chatId: 'support',
    type: 'support',
    name: 'Поддержка',
    role: 'Чат-бот',
    lastMessage: 'Здравствуйте! Я рада, что вы...',
    time: '10:09',
    unreadCount: 5,
      avatar: require('../../../assets/support-avatar.png'),
  },
  {
    id: 'maria',
    chatId: 'maria',
    type: 'default',
    name: 'Мария Лапина',
    role: 'Психолог',
    lastMessage: 'Спасибо, вижу, что это важный для вас запрос. Давайте разберёмся вместе.',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/avatar-maria.png'),
  },
  {
    id: 'donald-1',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: 'Психолог',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/avatar-user-default.png'),
  },
  {
    id: 'donald-2',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: 'Психолог',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/avatar-user-default.png'),
  },
  {
    id: 'donald-3',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: 'Психолог',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/avatar-user-default.png'),
  },
  {
    id: 'donald-4',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: 'Психолог',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/avatar-user-default.png'),
  },
];


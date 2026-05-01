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
  },
  {
    id: 'donald-1',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: '',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/author-1.png'),
  },
  {
    id: 'donald-2',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: '',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/author-1.png'),
  },
  {
    id: 'donald-3',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: '',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/author-1.png'),
  },
  {
    id: 'donald-4',
    chatId: 'donald',
    type: 'default',
    name: 'Дональд Макдональд',
    role: '',
    lastMessage: 'Здравствуйте! Я рада, что вы обратили...',
    time: '10:09',
    unreadCount: 0,
    avatar: require('../../../assets/images/author-1.png'),
  },
];

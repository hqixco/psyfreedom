export type SearchResultType = 'video' | 'article';

export type SearchResultItem = {
  id: string;
  title: string;
  type: SearchResultType;
  typeLabel: string;
};

export const searchHistoryMock: SearchResultItem[] = [
  {
    id: 'history-1',
    title: 'Помощь с утратой близкого',
    type: 'video',
    typeLabel: 'Видеоурок',
  },
  {
    id: 'history-2',
    title: 'Помощь с утратой близкого',
    type: 'video',
    typeLabel: 'Видеоурок',
  },
  {
    id: 'history-3',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'history-4',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'history-5',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'history-6',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
];

export const searchResultsMock: SearchResultItem[] = [
  {
    id: 'result-1',
    title: 'Помощь с утратой близкого',
    type: 'video',
    typeLabel: 'Видеоурок',
  },
  {
    id: 'result-2',
    title: 'Помощь с утратой близкого',
    type: 'video',
    typeLabel: 'Видеоурок',
  },
  {
    id: 'result-3',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-4',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-5',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-6',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-7',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-8',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-9',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-10',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
  {
    id: 'result-11',
    title: 'Помощь с утратой близкого',
    type: 'article',
    typeLabel: 'Статья',
  },
];

export type WorkingSessionItem = {
  id: string;
  date: string;
  dateLabel: string;
  time: string;
  title: string;
  clientName: string;
  status: string;
};

export type WorkTimeRange = {
  id: string;
  start: string;
  end: string;
};

export type WorkDaySchedule = {
  id: string;
  title: string;
  enabled: boolean;
  expanded: boolean;
  ranges: WorkTimeRange[];
};

export const workingSessionsMock: WorkingSessionItem[] = [
  {
    id: '1',
    date: '2024-10-06',
    dateLabel: 'Сегодня',
    time: '10:00',
    title: 'Онлайн консультация в 10:00',
    clientName: 'Специалист',
    status: 'Статус',
  },
  {
    id: '2',
    date: '2024-10-19',
    dateLabel: '19 октября',
    time: '10:00',
    title: 'Онлайн консультация в 10:00',
    clientName: 'Специалист',
    status: 'Статус',
  },
  {
    id: '3',
    date: '2024-10-19',
    dateLabel: '19 октября',
    time: '12:00',
    title: 'Онлайн консультация в 12:00',
    clientName: 'Специалист',
    status: 'Статус',
  },
];

export const workingScheduleMock: WorkDaySchedule[] = [
  {
    id: 'monday',
    title: 'Понедельник',
    enabled: true,
    expanded: true,
    ranges: [
      { id: '1', start: '9:00', end: '13:30' },
      { id: '2', start: '9:00', end: '13:30' },
    ],
  },
  {
    id: 'tuesday',
    title: 'Вторник',
    enabled: true,
    expanded: false,
    ranges: [
      { id: '1', start: '9:00', end: '17:00' },
      { id: '2', start: '12:00', end: '15:00' },
    ],
  },
  {
    id: 'wednesday',
    title: 'Среда',
    enabled: false,
    expanded: false,
    ranges: [
      { id: '1', start: '9:00', end: '17:00' },
      { id: '2', start: '12:00', end: '15:00' },
    ],
  },
];

export const workingCalendarMock = {
  monthTitle: 'Октябрь',
  year: '2024',
  selectedDate: '2024-10-06',
  markedDates: ['2024-10-06', '2024-10-07', '2024-10-19'],
};

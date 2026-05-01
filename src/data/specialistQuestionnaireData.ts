export type AttachedFile = {
  name: string;
};

export type SpecialistApplicationStatus =
  | 'notStarted'
  | 'inProgress'
  | 'submitted'
  | 'approved'
  | 'rejected';

export type EducationItem = {
  institution: string;
  specialty: string;
  graduationYear: string;
  stillStudying: boolean;
  diplomaScan: AttachedFile | null;
  attachmentScan: AttachedFile | null;
};

export type SpecialistApplicationForm = {
  basicInfo: {
    name: string;
    age: string;
    experience: string;
    nameChangeDocument: AttachedFile | null;
  };
  education: EducationItem[];
  specialization: {
    specializations: string[];
    methods: string[];
    motivationText: string;
    aboutText: string;
  };
  additionalInfo: {
    status: 'ip' | 'selfEmployed' | null;
    registrationDocument: AttachedFile | null;
    therapyHours: string;
    therapyDocument: AttachedFile | null;
    supervisionHours: string;
    supervisionDocument: AttachedFile | null;
  };
};

export const specializationOptions = [
  { id: 'psychologist', title: 'Психолог' },
  { id: 'coach', title: 'Коуч' },
  { id: 'psychiatrist', title: 'Психиатр' },
  { id: 'clinicalPsychologist', title: 'Клинический психолог' },
  { id: 'mentor', title: 'Ментор' },
  { id: 'supervisor', title: 'Супервизор' },
] as const;

export const methodOptions = [
  { id: 'integrative', title: 'Интегративная психология' },
  { id: 'systemicFamily', title: 'Системная семейная психология' },
  { id: 'cbt', title: 'Когнитивно-поведенческая психология' },
  { id: 'integrative2', title: 'Интегративная психология' },
] as const;

export const initialSpecialistApplicationForm: SpecialistApplicationForm = {
  basicInfo: {
    name: 'Иван Иванов',
    age: '25',
    experience: '2 года',
    nameChangeDocument: null,
  },
  education: [
    {
      institution: '',
      specialty: 'Преподаватель психологии',
      graduationYear: '',
      stillStudying: false,
      diplomaScan: null,
      attachmentScan: null,
    },
  ],
  specialization: {
    specializations: [],
    methods: ['integrative'],
    motivationText: '',
    aboutText: '',
  },
  additionalInfo: {
    status: 'ip',
    registrationDocument: null,
    therapyHours: '20',
    therapyDocument: null,
    supervisionHours: '20',
    supervisionDocument: null,
  },
};

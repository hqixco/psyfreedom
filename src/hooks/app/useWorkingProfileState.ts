import { useState } from 'react';
import {
  initialSpecialistApplicationForm,
  SpecialistApplicationForm,
  SpecialistApplicationStatus,
} from '../../data/specialistQuestionnaireData';
import { WorkingProduct, workingProductsMock } from '../../data/workingProductsData';

export function useWorkingProfileState() {
  const [specialistApplicationStatus, setSpecialistApplicationStatus] =
    useState<SpecialistApplicationStatus>('notStarted');
  const [specialistQuestionnaireStep, setSpecialistQuestionnaireStep] = useState(1);
  const [specialistApplicationForm, setSpecialistApplicationForm] =
    useState<SpecialistApplicationForm>(initialSpecialistApplicationForm);
  const [workingProducts, setWorkingProducts] = useState<WorkingProduct[]>(workingProductsMock);

  return {
    specialistApplicationStatus,
    setSpecialistApplicationStatus,
    specialistQuestionnaireStep,
    setSpecialistQuestionnaireStep,
    specialistApplicationForm,
    setSpecialistApplicationForm,
    workingProducts,
    setWorkingProducts,
  };
}

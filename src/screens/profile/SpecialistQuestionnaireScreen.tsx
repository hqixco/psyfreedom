import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { QuestionnaireFooter } from '../../components/specialist-questionnaire/QuestionnaireFooter';
import { QuestionnaireHeader } from '../../components/specialist-questionnaire/QuestionnaireHeader';
import { AdditionalInfoStep } from '../../components/specialist-questionnaire/steps/AdditionalInfoStep';
import { BasicInfoStep } from '../../components/specialist-questionnaire/steps/BasicInfoStep';
import { EducationStep } from '../../components/specialist-questionnaire/steps/EducationStep';
import { SpecializationStep } from '../../components/specialist-questionnaire/steps/SpecializationStep';
import { colors } from '../../constants/theme';
import {
  EducationItem,
  initialSpecialistApplicationForm,
  SpecialistApplicationForm,
  SpecialistApplicationStatus,
} from '../../data/specialistQuestionnaireData';

const TOTAL_STEPS = 4;

export function SpecialistQuestionnaireScreen({
  currentStep,
  status,
  form,
  onBackToProfile,
  onChangeStep,
  onChangeForm,
  onChangeStatus,
  onSubmit,
  setBottomTabsVisible,
}: {
  currentStep: number;
  status: SpecialistApplicationStatus;
  form: SpecialistApplicationForm;
  onBackToProfile: () => void;
  onChangeStep: (step: number) => void;
  onChangeForm: (next: SpecialistApplicationForm) => void;
  onChangeStatus: (status: SpecialistApplicationStatus) => void;
  onSubmit: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
}) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    setBottomTabsVisible?.(false);
    return () => setBottomTabsVisible?.(true);
  }, [setBottomTabsVisible]);

  const markProgress = (nextForm: SpecialistApplicationForm) => {
    onChangeForm(nextForm);
    if (status === 'notStarted' || status === 'rejected') {
      onChangeStatus('inProgress');
    }
  };

  const isStepValid = (() => {
    switch (currentStep) {
      case 1:
        return Boolean(
          form.basicInfo.name.trim() &&
            form.basicInfo.age.trim() &&
            form.basicInfo.experience.trim()
        );
      case 2:
        return form.education.every(
          (item) =>
            item.institution.trim() &&
            item.specialty.trim() &&
            (item.stillStudying || item.graduationYear.trim())
        );
      case 3:
        return Boolean(
          form.specialization.specializations.length &&
            form.specialization.methods.length &&
            form.specialization.motivationText.trim() &&
            form.specialization.aboutText.trim()
        );
      case 4:
        return Boolean(
          form.additionalInfo.status &&
            form.additionalInfo.therapyHours.trim() &&
            form.additionalInfo.supervisionHours.trim()
        );
      default:
        return false;
    }
  })();

  const handleBack = () => {
    if (currentStep === 1) {
      onBackToProfile();
      return;
    }
    onChangeStep(currentStep - 1);
  };

  const handleNext = () => {
    if (!isStepValid) {
      return;
    }

    if (currentStep === TOTAL_STEPS) {
      onSubmit();
      return;
    }

    onChangeStatus('inProgress');
    onChangeStep(currentStep + 1);
  };

  const addEducationItem = () => {
    const nextItem: EducationItem = {
      institution: '',
      specialty: '',
      graduationYear: '',
      stillStudying: false,
      diplomaScan: null,
      attachmentScan: null,
    };
    markProgress({ ...form, education: [...form.education, nextItem] });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: 110 + insets.bottom }}
        >
          <QuestionnaireHeader currentStep={currentStep} totalSteps={TOTAL_STEPS} onBack={handleBack} />

          {status === 'rejected' ? (
            <View style={styles.rejectedNotice}>
              <Text style={styles.rejectedText}>Анкету нужно доработать</Text>
            </View>
          ) : null}

          {currentStep === 1 ? (
            <BasicInfoStep
              value={form.basicInfo}
              onChange={(basicInfo) => markProgress({ ...form, basicInfo })}
            />
          ) : null}
          {currentStep === 2 ? (
            <EducationStep
              items={form.education}
              onChange={(education) => markProgress({ ...form, education })}
              onAdd={addEducationItem}
            />
          ) : null}
          {currentStep === 3 ? (
            <SpecializationStep
              value={form.specialization}
              onChange={(specialization) => markProgress({ ...form, specialization })}
            />
          ) : null}
          {currentStep === 4 ? (
            <AdditionalInfoStep
              value={form.additionalInfo}
              onChange={(additionalInfo) => markProgress({ ...form, additionalInfo })}
            />
          ) : null}
        </ScrollView>

        <QuestionnaireFooter
          onBack={handleBack}
          onNext={handleNext}
          nextDisabled={!isStepValid}
          bottomInset={insets.bottom}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export function SpecialistApplicationPendingScreen({
  onBack,
}: {
  onBack: () => void;
}) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.pendingContainer}>
        <Text style={styles.pendingTitle}>Анкета отправлена на проверку</Text>
        <Text style={styles.pendingDescription}>
          Мы проверим ваши данные и документы. После одобрения вы сможете пользоваться рабочим профилем.
        </Text>
        <Pressable style={styles.pendingButton} onPress={onBack}>
          <Text style={styles.pendingButtonText}>Понятно</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export const specialistQuestionnaireInitialForm = initialSpecialistApplicationForm;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  rejectedNotice: {
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#F3F7FB',
  },
  rejectedText: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  pendingContainer: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  pendingTitle: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: '700',
    color: colors.primaryDark,
    textAlign: 'center',
  },
  pendingDescription: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
    textAlign: 'center',
  },
  pendingButton: {
    marginTop: 28,
    height: 52,
    borderRadius: 26,
    paddingHorizontal: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendingButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

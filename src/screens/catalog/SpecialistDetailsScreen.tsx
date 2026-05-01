import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ConsultationPaymentSheet } from '../../components/payment/ConsultationPaymentSheet';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppointmentSheet } from '../../components/specialist-details/AppointmentSheet';
import { ReviewSheet } from '../../components/specialist-details/ReviewSheet';
import { SpecialistAboutSection } from '../../components/specialist-details/SpecialistAboutSection';
import { SpecialistAdditionalInfo } from '../../components/specialist-details/SpecialistAdditionalInfo';
import { SpecialistHeader } from '../../components/specialist-details/SpecialistHeader';
import { SpecialistHero } from '../../components/specialist-details/SpecialistHero';
import { SpecialistInfoBlock } from '../../components/specialist-details/SpecialistInfoBlock';
import { SpecialistMethodsSection } from '../../components/specialist-details/SpecialistMethodsSection';
import { SpecialistProductsPreview } from '../../components/specialist-details/SpecialistProductsPreview';
import { SpecialistReviewsSection } from '../../components/specialist-details/SpecialistReviewsSection';
import { SpecialistStats } from '../../components/specialist-details/SpecialistStats';
import { SpecialistStickyActionBar } from '../../components/specialist-details/SpecialistStickyActionBar';
import { colors } from '../../constants/theme';
import { getSpecialistDetailsById } from '../../data/specialistDetailsData';
import { SpecialistProductsScreen } from './SpecialistProductsScreen';
import { SpecialistScreenProps } from './types';
import { consultationPaymentMock } from '../../data/paymentData';

type LocalView = 'details' | 'products';

export function SpecialistDetailsScreen({
  onBack,
  onOpenPaymentScreen,
  onOpenProductDetails,
  specialist,
  setBottomTabsVisible,
}: SpecialistScreenProps) {
  const insets = useSafeAreaInsets();
  const baseDetails = getSpecialistDetailsById(specialist.id);
  const details = {
    ...baseDetails,
    name: specialist.name,
    specialization: specialist.specialization,
    price: specialist.price,
    rating: specialist.rating,
    city: specialist.city ?? baseDetails.city,
    image: specialist.image,
  };
  const [view, setView] = useState<LocalView>('details');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isPaymentSheetOpen, setIsPaymentSheetOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [specialization, setSpecialization] = useState('Психолог');
  const [meetingType, setMeetingType] = useState('Онлайн');
  const [appointmentDate, setAppointmentDate] = useState('21.02.2025');
  const [appointmentTime, setAppointmentTime] = useState('10:00');

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);

    return () => {
      setBottomTabsVisible(true);
    };
  }, [setBottomTabsVisible]);

  if (view === 'products') {
    return (
      <SpecialistProductsScreen
        products={details.products}
        onBack={() => setView('details')}
        onSearch={() => console.log('search specialist products')}
        onOpenProduct={onOpenProductDetails}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.contentContainer, { paddingBottom: 110 + insets.bottom }]}
        >
          <SpecialistHeader onBack={onBack} onShare={() => console.log('share specialist')} />
          <SpecialistHero image={details.image} />
          <SpecialistInfoBlock specialist={details} />
          <SpecialistStats stats={details.stats} />
          <SpecialistAboutSection text={details.about} />
          <SpecialistMethodsSection
            methods={details.methods}
            topics={details.topics}
            sessionBenefits={details.sessionBenefits}
          />
          <SpecialistReviewsSection
            rating={details.rating}
            reviewsCount={details.reviewsCount}
            reviews={details.reviews}
            onOpenReview={() => setIsReviewOpen(true)}
          />
          <SpecialistAdditionalInfo
            education={details.education}
            certificates={details.certificates}
            media={details.media}
          />
          <SpecialistProductsPreview
            products={details.products}
            onPressAll={() => setView('products')}
            onPressProduct={onOpenProductDetails}
          />
        </ScrollView>

        <SpecialistStickyActionBar
          bottomInset={insets.bottom}
          isFavorite={isFavorite}
          onToggleFavorite={() => setIsFavorite((value) => !value)}
          onPressAppointment={() => setIsAppointmentOpen(true)}
        />
      </View>

      <AppointmentSheet
        visible={isAppointmentOpen}
        specialization={specialization}
        meetingType={meetingType}
        date={appointmentDate}
        time={appointmentTime}
        onSelectDate={setAppointmentDate}
        onSelectTime={setAppointmentTime}
        onSelectSpecialization={setSpecialization}
        onSelectMeetingType={setMeetingType}
        onClose={() => setIsAppointmentOpen(false)}
        onSubmit={() => {
          setIsAppointmentOpen(false);
          setIsPaymentSheetOpen(true);
        }}
      />

      <ConsultationPaymentSheet
        visible={isPaymentSheetOpen}
        onClose={() => setIsPaymentSheetOpen(false)}
        onPay={() => {
          setIsPaymentSheetOpen(false);
          onOpenPaymentScreen?.({
            title: consultationPaymentMock.title,
            price: consultationPaymentMock.price,
          });
        }}
        title={consultationPaymentMock.title}
        dateLabel={consultationPaymentMock.dateLabel}
        sessionsCount={consultationPaymentMock.sessionsCount}
        price={consultationPaymentMock.price}
        baseSessionPrice={consultationPaymentMock.baseSessionPrice}
      />

      <ReviewSheet visible={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingTop: 0,
  },
});

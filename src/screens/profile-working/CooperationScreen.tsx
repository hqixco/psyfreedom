import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CommissionCard } from '../../components/cooperation/CommissionCard';
import { CooperationBanner } from '../../components/cooperation/CooperationBanner';
import { CooperationHeader } from '../../components/cooperation/CooperationHeader';
import { CooperationStickyButton } from '../../components/cooperation/CooperationStickyButton';
import { SpecialistStepsAccordion } from '../../components/cooperation/SpecialistStepsAccordion';
import { StoriesSection } from '../../components/cooperation/StoriesSection';
import { colors, typography } from '../../constants/theme';
import { commissionItems, cooperationBanners } from '../../data/cooperationData';

export function CooperationScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 + insets.bottom }}
        >
          <CooperationHeader onBack={onBack} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.commissionContent}
            style={styles.commissionSection}
          >
            {commissionItems.map((item) => (
              <CommissionCard key={item.id} title={item.title} description={item.description} />
            ))}
          </ScrollView>

          <View style={styles.introSection}>
            <Text style={styles.introTitle}>Новичкам везет с Psyfreedom</Text>
            <Text style={styles.introDescription}>
              Зарегистрируйтесь на нашем сайте и мы поможем{'\n'}
              вам начать продавать ваши товары и услуги легко и{'\n'}
              быстро.
            </Text>
          </View>

          <View style={styles.storiesSection}>
            <StoriesSection />
          </View>

          <SpecialistStepsAccordion />

          <View style={styles.bannersSection}>
            {cooperationBanners.map((item) => (
              <CooperationBanner
                key={item.id}
                item={item}
                onPress={() => console.log('cooperation banner', item.id)}
              />
            ))}
          </View>
        </ScrollView>

        <CooperationStickyButton onPress={() => console.log('start cooperation')} />
      </View>
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
  commissionSection: {
    marginTop: 10,
  },
  commissionContent: {
    paddingHorizontal: 16,
  },
  introSection: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  introTitle: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  introDescription: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 21,
    color: colors.primaryDark,
  },
  storiesSection: {
    marginTop: 18,
  },
  bannersSection: {
    marginHorizontal: 16,
    marginTop: 18,
  },
});

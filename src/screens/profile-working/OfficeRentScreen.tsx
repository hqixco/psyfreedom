import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { OfficeRentCard } from '../../components/office-rent/OfficeRentCard';
import { OfficeRentHeader } from '../../components/office-rent/OfficeRentHeader';
import { colors } from '../../constants/theme';
import { officeRentItems } from '../../data/officeRentData';

export function OfficeRentScreen({
  onBack,
  onOpenDetails,
}: {
  onBack: () => void;
  onOpenDetails: (officeId: string) => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <OfficeRentHeader onBack={onBack} />
        {officeRentItems.map((item) => (
          <OfficeRentCard key={item.id} item={item} onOpenDetails={onOpenDetails} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssociationContactsSection } from '../../components/associations/AssociationContactsSection';
import { AssociationDetailsHeader } from '../../components/associations/AssociationDetailsHeader';
import { AssociationInfoSection } from '../../components/associations/AssociationInfoSection';
import { colors } from '../../constants/theme';
import { Association } from '../../data/associationsData';

export function AssociationDetailsScreen({
  association,
  onBack,
}: {
  association: Association;
  onBack: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <AssociationDetailsHeader onBack={onBack} onShare={() => console.log('share association')} />
        <AssociationInfoSection association={association} />
        <AssociationContactsSection association={association} />
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

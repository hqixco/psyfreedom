import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AssociationCard } from '../../components/associations/AssociationCard';
import { AssociationsHeader } from '../../components/associations/AssociationsHeader';
import { colors } from '../../constants/theme';
import { associationsMock } from '../../data/associationsData';

export function AssociationsScreen({
  onBack,
  onOpenAssociation,
}: {
  onBack: () => void;
  onOpenAssociation: (associationId: string) => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <AssociationsHeader onBack={onBack} />
        <View style={styles.list}>
          {associationsMock.map((association) => (
            <AssociationCard
              key={association.id}
              association={association}
              onPress={onOpenAssociation}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  list: {
    paddingBottom: 12,
  },
});

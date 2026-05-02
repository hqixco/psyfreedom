import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Specialist } from '../../data/servicesData';
import { SpecialistCard } from './SpecialistCard';

type TopSpecialistsSectionProps = {
  specialists: Specialist[];
  onPressSpecialist: (id: string) => void;
};

export function TopSpecialistsSection({ specialists, onPressSpecialist }: TopSpecialistsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Топ-10 специалистов</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {specialists.map((item, index) => (
          <View key={item.id} style={index === specialists.length - 1 ? undefined : styles.itemSpacer}>
            <SpecialistCard item={item} width={185} imageHeight={185} variant="top10" onPress={() => onPressSpecialist(item.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 26,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: 'rgba(255, 240, 225, 0.56)',
  },
  title: {
    marginHorizontal: 16,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.text,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 2,
  },
  itemSpacer: {
    marginRight: 8,
  },
});

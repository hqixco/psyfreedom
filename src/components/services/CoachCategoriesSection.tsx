import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { CoachCategory } from '../../data/servicesData';
import { CoachCategoryCard } from './CoachCategoryCard';

type CoachCategoriesSectionProps = {
  categories: CoachCategory[];
  cardWidth: number;
  onPressCategory: (id: string) => void;
};

export function CoachCategoriesSection({ categories, cardWidth, onPressCategory }: CoachCategoriesSectionProps) {
  return (
    <View>
      <Text style={styles.title}>Категории коучей</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.content}>
        {categories.map((item, index) => (
          <View key={item.id} style={index === categories.length - 1 ? undefined : styles.itemSpacer}>
            <CoachCategoryCard item={item} width={cardWidth} onPress={() => onPressCategory(item.id)} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 16,
    marginTop: 18,
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.text,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  itemSpacer: {
    marginRight: 8,
  },
});

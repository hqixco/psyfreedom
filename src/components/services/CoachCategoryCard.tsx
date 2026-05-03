import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { CoachCategory } from '../../data/servicesData';

type CoachCategoryCardProps = {
  item: CoachCategory;
  width: number;
  onPress: () => void;
};

export function CoachCategoryCard({ item, width, onPress }: CoachCategoryCardProps) {
  return (
    <Pressable style={[styles.card, { width }]} onPress={onPress}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.arrowBubble}>
        <Image source={require('../../../assets/images/arrow-forward.svg')} style={styles.arrowIcon} />
      </View>
      <Image source={item.image ?? require('../../../assets/images/coach-category-card-bg.png')} style={styles.decor} resizeMode="cover" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 124,
    borderRadius: 12,
    padding: 14,
    overflow: 'hidden',
    backgroundColor: colors.mintLight,
  },
  title: {
    fontSize: 14,
    lineHeight: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
    zIndex: 2,
  },
  arrowBubble: {
    position: 'absolute',
    left: 14,
    bottom: 12,
    width: 45,
    height: 22,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: 1,
  },
  arrowIcon: {
    width: 20,
    height: 12,
  },
  decor: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
    zIndex: 0,
  },
});


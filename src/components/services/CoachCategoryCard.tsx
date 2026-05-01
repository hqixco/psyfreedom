import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
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
        <Ionicons name="arrow-forward" size={14} color={colors.primary} />
      </View>
      <Image source={require('../../../assets/images/coach-category-bg.png')} style={styles.decor} resizeMode="cover" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 82,
    borderRadius: 10,
    padding: 14,
    marginRight: 8,
    overflow: 'hidden',
    backgroundColor: colors.mintLight,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  arrowBubble: {
    position: 'absolute',
    left: 14,
    bottom: 12,
    width: 34,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    zIndex: 1,
  },
  decor: {
    position: 'absolute',
    right: -10,
    bottom: -8,
    width: 84,
    height: 84,
    opacity: 0.25,
  },
});

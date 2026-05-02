import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { EmergencyCategory } from '../../data/emergencyHelpData';

export function EmergencyCategoryCard({
  category,
  onPress,
}: {
  category: EmergencyCategory;
  onPress: () => void;
}) {
  const backgroundStyle =
    category.variant === 'blue'
      ? styles.blueCard
      : category.variant === 'mint'
        ? styles.mintCard
        : styles.lavenderCard;

  return (
    <Pressable style={[styles.card, backgroundStyle]} onPress={onPress}>
      <Text style={styles.title}>{category.title}</Text>
      {category.backgroundImage ? (
        <Image source={category.backgroundImage} style={styles.backgroundImage} />
      ) : (
        <View style={styles.decorCircle}>
          <Ionicons name="medical-outline" size={48} color={colors.primaryDark} style={styles.decorIcon} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 92,
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
  blueCard: {
    backgroundColor: '#D9F7FF',
  },
  mintCard: {
    backgroundColor: '#DFFFF3',
  },
  lavenderCard: {
    backgroundColor: '#EAF0FF',
  },
  title: {
    maxWidth: 300,
    fontSize: 21,
    lineHeight: 25,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  backgroundImage: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 150,
    height: 100,
    opacity: 0.25,
    resizeMode: 'cover',
  },
  decorCircle: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: 150,
    height: 100,
    opacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decorIcon: {
    opacity: 0.7,
  },
});

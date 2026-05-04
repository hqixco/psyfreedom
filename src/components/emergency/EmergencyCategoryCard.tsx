import { Ionicons } from '@expo/vector-icons';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
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
      {category.backgroundImage ? (
        <ImageBackground
          source={category.backgroundImage}
          resizeMode="cover"
          style={styles.background}
          imageStyle={styles.backgroundImage}
          pointerEvents="none"
        >
          <View style={styles.content}>
            <Text style={styles.title}>{category.title}</Text>
          </View>
        </ImageBackground>
      ) : (
        <>
          <View style={styles.content}>
            <Text style={styles.title}>{category.title}</Text>
          </View>
          <View style={styles.decorCircle}>
            <Ionicons name="medical-outline" size={48} color={colors.primaryDark} style={styles.decorIcon} />
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
    position: 'relative',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  backgroundImage: {
    opacity: 0.25,
    width: '100%',
    height: '100%',
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

import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function StoryCard({
  image,
  title,
  subtitle,
}: {
  image: number;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 280,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingBottom: 14,
    paddingTop: 34,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    ...typography.Inter[600],
    color: colors.white,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: colors.white,
  },
});

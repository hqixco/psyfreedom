import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

export function CommissionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <ImageBackground
      source={require('../../../assets/cooperation-commission-card-bg.jpg')}
      resizeMode="cover"
      style={styles.card}
      imageStyle={styles.image}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 280,
    borderRadius: 12,
    padding: 20,
    marginRight: 10,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  description: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 14,
    color: colors.primaryDark,
  },
});

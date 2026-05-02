import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { Association } from '../../data/associationsData';

export function AssociationSpecialistSection({ association }: { association: Association }) {
  const specialist = association.specialist;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Автор</Text>
      <View style={styles.card}>
        <Image source={specialist.avatar} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{specialist.name}</Text>
          <Text style={styles.role}>{specialist.role}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFC93C" />
            <Text style={styles.ratingText}>
              {specialist.rating} {specialist.reviewsCount} отзывов
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 36,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.primaryDark,
    marginBottom: 14,
  },
  card: {
    backgroundColor: colors.cardLight,
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    marginRight: 14,
    backgroundColor: '#E6E6E6',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  role: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  ratingRow: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.primaryDark,
  },
});

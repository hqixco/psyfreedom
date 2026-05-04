import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { OfficeRentItem } from '../../data/officeRentData';

export function OfficeRentCard({
  item,
  onOpenDetails,
}: {
  item: OfficeRentItem;
  onOpenDetails: (officeId: string) => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{item.area}</Text>
          <Text style={styles.meta}>{item.price}</Text>
        </View>
        <Text style={styles.address}>Адрес {item.address}</Text>
        <Pressable style={styles.linkButton} onPress={() => onOpenDetails(item.id)}>
          <Text style={styles.linkText}>Подробнее</Text>
        </Pressable>
      </View>
      <View style={styles.side}>
        <Image source={item.image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEFEF',
    backgroundColor: colors.white,
    marginHorizontal: 16,
    marginTop: 14,
    padding: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  metaRow: {
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  meta: {
    fontSize: 12,
    lineHeight: 18,
    ...typography.Inter[400],
    color: colors.primary,
  },
  address: {
    marginTop: 5,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  side: {
    width: 85,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  linkButton: {
    marginTop: 7,
    alignSelf: 'flex-start',
  },
  linkText: {
    color: colors.primary,
    fontSize: 12,
    ...typography.Inter[400],
    textDecorationLine: 'underline',
  },
});

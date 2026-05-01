import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
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
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>
          {item.area} {item.price}
        </Text>
        <Text style={styles.address}>Адрес {item.address}</Text>
        <Pressable style={styles.button} onPress={() => onOpenDetails(item.id)}>
          <Text style={styles.buttonText}>Подробнее</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    overflow: 'hidden',
    marginHorizontal: 16,
    marginTop: 14,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  meta: {
    marginTop: 6,
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '700',
    color: colors.primary,
  },
  address: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 20,
    color: colors.text,
  },
  button: {
    marginTop: 14,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '700',
  },
});

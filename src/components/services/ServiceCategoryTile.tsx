import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ServiceCategory } from '../../data/servicesData';

type ServiceCategoryTileProps = {
  item: ServiceCategory;
  width: number;
  onPress: (id: string) => void;
};

export function ServiceCategoryTile({ item, width, onPress }: ServiceCategoryTileProps) {
  return (
    <Pressable style={[styles.tile, { width }]} onPress={() => onPress(item.id)}>
      <View style={styles.iconWrap}>
        <Ionicons name={item.icon} size={17} color={colors.white} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    height: 108,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    backgroundColor: colors.cardLight,
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 12,
    lineHeight: 13,
    fontWeight: '500',
    textAlign: 'center',
    color: colors.primaryDark,
  },
});

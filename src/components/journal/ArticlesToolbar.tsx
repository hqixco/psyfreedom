import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type ArticlesToolbarProps = {
  onOpenFilter: () => void;
};

export function ArticlesToolbar({ onOpenFilter }: ArticlesToolbarProps) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.button} onPress={onOpenFilter}>
        <Text style={styles.buttonText}>Фильтры</Text>
        <Ionicons name="options-outline" size={18} color={colors.primaryDark} style={styles.icon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 16,
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primaryDark,
  },
  icon: {
    marginLeft: 6,
  },
});

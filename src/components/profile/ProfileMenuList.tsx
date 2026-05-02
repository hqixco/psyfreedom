import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { profileMenuItems } from '../../data/profileData';

export function ProfileMenuList({ onOpenFaq = () => undefined }: { onOpenFaq?: () => void }) {
  return (
    <View style={styles.container}>
      {profileMenuItems.map((item) => (
        <Pressable
          key={item.id}
          style={styles.item}
          onPress={item.id === 'faq' ? onOpenFaq : () => console.log('profile menu', item.id)}
        >
          <Text style={styles.itemText}>{item.title}</Text>
          <Ionicons name="chevron-forward" size={22} color={colors.primaryDark} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
  },
  item: {
    height: 52,
    borderRadius: 10,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
});

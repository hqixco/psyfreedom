import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { profileQuickLinks } from '../../data/profileData';

export function ProfileQuickLinks() {
  return (
    <View style={styles.row}>
      {profileQuickLinks.map((item) => (
        <Pressable
          key={item.id}
          style={styles.card}
          onPress={() => console.log('profile quick link', item.id)}
        >
          <View style={styles.iconWrap}>
            <Ionicons name={item.icon} size={20} color={colors.white} />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    height: 84,
    borderRadius: 10,
    backgroundColor: colors.cardLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
});

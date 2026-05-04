import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
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
          <Image
            source={
              item.id === 'collections'
                ? require('../../../assets/profile-collections-icon.svg')
                : require('../../../assets/profile-services-icon.svg')
            }
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.title}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
    flex: 1,
    height: 95,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 360,
    backgroundColor: colors.primary,
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
});

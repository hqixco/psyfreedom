import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { EmergencyContact } from '../../data/emergencyHelpData';
import { EmergencyTags } from './EmergencyTags';

export function EmergencyContactCard({
  contact,
  onPressPhone,
  onPressWebsite,
}: {
  contact: EmergencyContact;
  onPressPhone: () => void;
  onPressWebsite: () => void;
}) {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{contact.title}</Text>
        <View style={styles.logoCircle}>
          <Image source={contact.logo} style={styles.logo} />
        </View>
      </View>

      <EmergencyTags tags={contact.tags} />

      <Pressable onPress={onPressPhone}>
        <Text style={styles.phone}>{contact.phone}</Text>
      </Pressable>

      <Pressable onPress={onPressWebsite}>
        <Text style={styles.website}>{contact.website}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    padding: 14,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    paddingRight: 12,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  logoCircle: {
    width: 57,
    height: 57,
    borderRadius: 32,
    backgroundColor: '#F5F9FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 57,
    height: 57,
    resizeMode: 'contain',
  },
  phone: {
    marginTop: 14,
    fontSize: 16,
    lineHeight: 18,
    ...typography.Inter[600],
    color: '#F02F6B',
  },
  website: {
    marginTop: 6,
    fontSize: 14,
    lineHeight: 18,
    ...typography.Inter[600],
    color: colors.primary,
  },
});

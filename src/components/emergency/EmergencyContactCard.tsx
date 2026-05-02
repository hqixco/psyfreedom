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
        <Image source={contact.logo} style={styles.logo} />
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
    padding: 18,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    paddingRight: 12,
    fontSize: 17,
    lineHeight: 21,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    resizeMode: 'contain',
  },
  phone: {
    marginTop: 14,
    fontSize: 21,
    lineHeight: 26,
    ...typography.Inter[700],
    color: '#F02F6B',
  },
  website: {
    marginTop: 8,
    fontSize: 17,
    lineHeight: 22,
    ...typography.Inter[700],
    color: colors.primary,
  },
});

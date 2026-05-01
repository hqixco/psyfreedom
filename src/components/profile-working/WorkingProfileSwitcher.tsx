import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';
import { workingProfileMock } from '../../data/workingProfileData';

export function WorkingProfileSwitcher({
  onSelectMain,
}: {
  onSelectMain: () => void;
}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.profileCard} onPress={onSelectMain}>
        <Image source={workingProfileMock.mainProfile.avatar} style={styles.avatar} />
        <Text style={styles.label}>Основной</Text>
      </Pressable>

      <View style={styles.profileCard}>
        <Image source={workingProfileMock.workProfile.avatar} style={styles.avatar} />
        <Text style={styles.label}>
          Рабочий{'\n'}
          <Text style={styles.selectedText}>Выбран</Text>
        </Text>
      </View>

      <Pressable style={styles.bellButton} onPress={() => console.log('working profile notifications')}>
        <Ionicons name="notifications-outline" size={28} color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 32,
    position: 'relative',
  },
  profileCard: {
    alignItems: 'center',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    resizeMode: 'cover',
    backgroundColor: colors.white,
  },
  label: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 18,
    color: colors.primaryDark,
  },
  selectedText: {
    color: colors.primary,
    fontWeight: '700',
  },
  bellButton: {
    position: 'absolute',
    right: 0,
    top: 18,
  },
});

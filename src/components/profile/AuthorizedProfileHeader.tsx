import { ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { ProfileTypeSwitcher } from './ProfileTypeSwitcher';

type AuthorizedProfileHeaderProps = {
  selectedProfileType: 'main' | 'work';
  onSelectProfileType: (type: 'main' | 'work') => void;
  mainProfilePhoto?: ImageSourcePropType | null;
};

export function AuthorizedProfileHeader({
  selectedProfileType,
  onSelectProfileType,
  mainProfilePhoto,
}: AuthorizedProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <ProfileTypeSwitcher
        selectedProfileType={selectedProfileType}
        onSelectProfileType={onSelectProfileType}
        mainProfilePhoto={mainProfilePhoto}
        rowStyle={styles.row}
        profileCardStyle={styles.profileCard}
        circleStyle={styles.circle}
        mainLabelStyle={styles.label}
        workLabelStyle={styles.workLabel}
        selectedLabelStyle={styles.selectedLabel}
      />
      <Pressable style={styles.bellButton} onPress={() => console.log('profile notifications')}>
        <Image source={require('../../../assets/profile-notifications-icon.svg')} style={styles.bellIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  row: {
    gap: 18,
  },
  profileCard: {
    alignItems: 'center',
  },
  circle: {
    width: 88,
    height: 88,
    borderRadius: 44,
  },
  label: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 18,
    ...typography.Inter[400],
    textAlign: 'center',
  },
  workLabel: {
    marginTop: 4,
    fontSize: 13,
    lineHeight: 16,
    ...typography.Inter[400],
    textAlign: 'center',
  },
  selectedLabel: {
    color: colors.primary,
    ...typography.Inter[400],
    textAlign: 'center',
  },
  bellButton: {
    position: 'absolute',
    right: 0,
    top: 8,
    padding: 2,
  },
  bellIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

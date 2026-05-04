import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { workingProfileMock } from '../../data/workingProfileData';

type WorkingProfileSwitcherProps = {
  onSelectMain: () => void;
  rowStyle?: StyleProp<ViewStyle>;
  profileCardStyle?: StyleProp<ViewStyle>;
  avatarStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  selectedLabelStyle?: StyleProp<TextStyle>;
  bellButtonStyle?: StyleProp<ViewStyle>;
};

export function WorkingProfileSwitcher({
  onSelectMain,
  rowStyle,
  profileCardStyle,
  avatarStyle,
  labelStyle,
  selectedLabelStyle,
  bellButtonStyle,
}: WorkingProfileSwitcherProps) {
  return (
    <View style={[styles.container, rowStyle]}>
      <Pressable style={[styles.profileCard, profileCardStyle]} onPress={onSelectMain}>
        <Image source={workingProfileMock.mainProfile.avatar} style={[styles.avatar, avatarStyle]} />
        <Text style={[styles.label, labelStyle]}>Основной</Text>
      </Pressable>

      <View style={[styles.profileCard, profileCardStyle]}>
        <Image source={workingProfileMock.workProfile.avatar} style={[styles.avatar, avatarStyle]} />
        <Text style={[styles.label, labelStyle]}>
          Рабочий{'\n'}
          <Text style={[styles.selectedText, selectedLabelStyle]}>Выбран</Text>
        </Text>
      </View>

      <Pressable
        style={[styles.bellButton, bellButtonStyle]}
        onPress={() => console.log('working profile notifications')}
      >
        <Image source={require('../../../assets/profile-notifications-icon.svg')} style={styles.bellIcon} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
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
    ...typography.Inter[700],
  },
  bellButton: {
    position: 'absolute',
    right: 0,
    top: 18,
    padding: 2,
  },
  bellIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});

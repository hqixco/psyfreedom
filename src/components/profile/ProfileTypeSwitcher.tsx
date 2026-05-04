import { Ionicons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProfileTypeSwitcherProps = {
  selectedProfileType: 'main' | 'work';
  onSelectProfileType: (type: 'main' | 'work') => void;
  mainProfilePhoto?: ImageSourcePropType | null;
  rowStyle?: StyleProp<ViewStyle>;
  profileCardStyle?: StyleProp<ViewStyle>;
  circleStyle?: StyleProp<ViewStyle>;
  mainLabelStyle?: StyleProp<TextStyle>;
  workLabelStyle?: StyleProp<TextStyle>;
  selectedLabelStyle?: StyleProp<TextStyle>;
};

export function ProfileTypeSwitcher({
  selectedProfileType,
  onSelectProfileType,
  mainProfilePhoto,
  rowStyle,
  profileCardStyle,
  circleStyle,
  mainLabelStyle,
  workLabelStyle,
  selectedLabelStyle,
}: ProfileTypeSwitcherProps) {
  return (
    <View style={[styles.row, rowStyle]}>
      <Pressable style={[styles.profileCard, profileCardStyle]} onPress={() => onSelectProfileType('main')}>
        <View
          style={[
            styles.circle,
            circleStyle,
            selectedProfileType === 'main' ? styles.circleActive : styles.circleInactive,
          ]}
        >
          {mainProfilePhoto ? (
            <Image source={mainProfilePhoto} style={styles.photo} />
          ) : (
            <Ionicons
              name="person"
              size={48}
              color={selectedProfileType === 'main' ? colors.white : colors.primary}
            />
          )}
          {selectedProfileType === 'main' ? <View style={styles.mainOverlay} /> : null}
        </View>
        <Text style={[styles.label, mainLabelStyle]}>Основной</Text>
        {selectedProfileType === 'main' ? (
          <Text style={[styles.selectedLabel, selectedLabelStyle]}>Выбран</Text>
        ) : null}
      </Pressable>

      <Pressable style={[styles.profileCard, profileCardStyle]} onPress={() => onSelectProfileType('work')}>
        <View
          style={[
            styles.circle,
            circleStyle,
            selectedProfileType === 'work' ? styles.circleActive : styles.circleInactive,
          ]}
        >
          <Ionicons
            name="person"
            size={48}
            color={selectedProfileType === 'work' ? colors.white : colors.primary}
          />
        </View>
        <Text style={[styles.label, workLabelStyle]}>Рабочий</Text>
        {selectedProfileType === 'work' ? (
          <Text style={[styles.selectedLabel, selectedLabelStyle]}>Выбран</Text>
        ) : null}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  profileCard: {
    alignItems: 'center',
  },
  circle: {
    width: 85,
    height: 85,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  circleActive: {
    backgroundColor: colors.primary,
  },
  circleInactive: {
    backgroundColor: colors.white,
  },
  mainOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 54,
    backgroundColor: 'rgba(7, 132, 154, 0.18)',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  label: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 16,
    ...typography.Inter[400],
    color: colors.primaryDark,
    textAlign: 'center',
  },
  selectedLabel: {
    marginTop: 2,
    color: colors.primary,
    ...typography.Inter[500],
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'center',
  },
});

import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';
import { ProfileTypeSwitcher } from './ProfileTypeSwitcher';

type AuthorizedProfileHeaderProps = {
  selectedProfileType: 'main' | 'work';
  onSelectProfileType: (type: 'main' | 'work') => void;
};

export function AuthorizedProfileHeader({
  selectedProfileType,
  onSelectProfileType,
}: AuthorizedProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <ProfileTypeSwitcher
        selectedProfileType={selectedProfileType}
        onSelectProfileType={onSelectProfileType}
      />
      <Pressable style={styles.bellButton} onPress={() => console.log('profile notifications')}>
        <Ionicons name="notifications-outline" size={28} color={colors.primaryDark} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  bellButton: {
    position: 'absolute',
    right: 0,
    top: 8,
  },
});

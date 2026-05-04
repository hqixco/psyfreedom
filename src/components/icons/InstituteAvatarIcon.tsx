import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

type InstituteAvatarIconProps = {
  size?: number;
  style?: any;
};

export function InstituteAvatarIcon({ size = 80, style }: InstituteAvatarIconProps) {
  const borderRadius = size / 2;
  
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius }, style]}>
      <Ionicons name="briefcase" size={size * 0.5} color="#1E5D96" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F0F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

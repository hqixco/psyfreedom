import { Pressable, StyleSheet, View } from 'react-native';

type AppSwitchProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export function AppSwitch({ value, onValueChange }: AppSwitchProps) {
  return (
    <Pressable
      accessibilityRole="switch"
      accessibilityState={{ checked: value }}
      onPress={() => onValueChange(!value)}
      style={[styles.track, value ? styles.trackActive : styles.trackInactive]}
    >
      <View style={[styles.thumb, value ? styles.thumbActive : styles.thumbInactive]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 38,
    height: 21,
    borderRadius: 360,
    padding: 2,
    justifyContent: 'center',
  },
  trackActive: {
    backgroundColor: '#05728F',
  },
  trackInactive: {
    backgroundColor: '#D9D9D9',
  },
  thumb: {
    width: 17,
    height: 17,
    borderRadius: 360,
    backgroundColor: '#FFFFFF',
  },
  thumbActive: {
    alignSelf: 'flex-end',
  },
  thumbInactive: {
    alignSelf: 'flex-start',
  },
});

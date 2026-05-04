import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ConsentCheckboxProps = {
  checked: boolean;
  onToggle: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  linkStyle?: StyleProp<TextStyle>;
};

export function ConsentCheckbox({
  checked,
  onToggle,
  containerStyle,
  boxStyle,
  textStyle,
  linkStyle,
}: ConsentCheckboxProps) {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={onToggle}>
      <View style={[styles.box, checked ? styles.boxChecked : null, boxStyle]}>
        {checked ? <Ionicons name="checkmark" size={12} color={colors.white} /> : null}
      </View>
      <Text style={[styles.text, textStyle]}>
        Я принимаю <Text style={[styles.link, linkStyle]}>Политику конфиденциальности</Text>{'\n'}
        и <Text style={[styles.link, linkStyle]}>Согласие на обработку персональных данных</Text>
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 10,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  text: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: colors.muted,
  },
  link: {
    color: colors.primary,
    ...typography.Inter[600],
  },
});

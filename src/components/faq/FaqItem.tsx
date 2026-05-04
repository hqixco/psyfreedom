import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { type StyleProp, type ViewStyle } from 'react-native';
import { colors, typography } from '../../constants/theme';

export type FaqItemProps = {
  title: string;
  answer: string;
  isOpen: boolean;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

export function FaqItem({ title, answer, isOpen, onPress, containerStyle }: FaqItemProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable style={styles.header} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={colors.primaryDark}
        />
      </Pressable>

      {isOpen ? (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{answer}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 5,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    overflow: 'hidden',
  },
  header: {
    minHeight: 54,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    paddingRight: 12,
    fontSize: 14,
    lineHeight: 22,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  answerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 18,
  },
  answer: {
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
});

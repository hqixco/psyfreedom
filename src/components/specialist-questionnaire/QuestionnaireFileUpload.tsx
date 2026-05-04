import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { AttachedFile } from '../../data/specialistQuestionnaireData';

export function QuestionnaireFileUpload({
  title,
  file,
  onPress,
}: {
  title: string;
  file: AttachedFile | null;
  onPress: () => void;
  }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconWrap}>
        <Ionicons name="attach-outline" size={20} color={colors.primaryDark} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          Размер документа не должен превышать 25 Мб.{'\n'}
          Формат: .jpeg, .jpg, .png
        </Text>
        {file ? <Text style={styles.attached}>{file.name} прикреплен</Text> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardLight,
    borderRadius: 8,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  iconWrap: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    lineHeight: 17,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  description: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 15,
    color: colors.muted,
  },
  attached: {
    marginTop: 6,
    fontSize: 12,
    ...typography.Inter[700],
    color: colors.primary,
  },
});

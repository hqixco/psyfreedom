import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';
import { AttachedFile } from '../../data/specialistQuestionnaireData';

const attachIcon = require('../../../assets/attachment-paperclip.svg');

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
      <Image source={attachIcon} style={styles.icon} />
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
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 2,
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

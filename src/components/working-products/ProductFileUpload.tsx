import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

const attachIcon = require('../../../assets/attachment-paperclip.svg');

export function ProductFileUpload({
  title,
  description,
  fileName,
  onPress,
}: {
  title: string;
  description: string;
  fileName: string | null;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={attachIcon} style={styles.icon} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        {fileName ? <Text style={styles.fileName}>{fileName} прикреплен</Text> : null}
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
    marginTop: 14,
    marginBottom: 18,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
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
  fileName: {
    marginTop: 8,
    fontSize: 12,
    ...typography.Inter[600],
    color: colors.primary,
  },
});

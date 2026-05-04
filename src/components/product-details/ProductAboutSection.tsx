import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, typography } from '../../constants/theme';

type ProductAboutSectionProps = {
  title: string;
  text?: string;
  compact?: boolean;
};

export function ProductAboutSection({
  title,
  text,
  compact = false,
}: ProductAboutSectionProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) {
    return null;
  }

  const shouldCollapse = text.trim().length > 220;
  const visibleText = shouldCollapse && !expanded ? `${text.slice(0, compact ? 190 : 260)}...` : text;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{visibleText}</Text>
      {shouldCollapse ? (
        <Pressable onPress={() => setExpanded((value) => !value)}>
          <Text style={styles.link}>{expanded ? 'Свернуть' : 'Читать ещё'}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 35,
  },
  title: {
    marginHorizontal: 16,
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  text: {
    marginTop: 15,
    marginHorizontal: 16,
    fontSize: 16,
    lineHeight: 20,
    color: colors.text,
  },
  link: {
    marginTop: 18,
    marginHorizontal: 16,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primary,
  },
});

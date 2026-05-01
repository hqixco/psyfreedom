import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme';

type SpecialistAboutSectionProps = {
  text: string;
};

export function SpecialistAboutSection({ text }: SpecialistAboutSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = text.length > 220;
  const visibleText = shouldCollapse && !expanded ? `${text.slice(0, 260)}...` : text;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>О себе</Text>
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
    marginHorizontal: 16,
    marginTop: 28,
  },
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    lineHeight: 21,
    color: colors.text,
  },
  link: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
});

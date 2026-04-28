import { useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { theme, typography } from '../constants/theme';
import { topicCategories } from '../data/mockData';

type AllTopicsModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function AllTopicsModal({ visible, onClose }: AllTopicsModalProps) {
  const initialSelection = useMemo(() => new Set(['relationships-1-0', 'relationships-1-5']), []);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(initialSelection);

  const toggleTopic = (topicKey: string) => {
    setSelectedTopics((current) => {
      const next = new Set(current);

      if (next.has(topicKey)) {
        next.delete(topicKey);
      } else {
        next.add(topicKey);
      }

      return next;
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
      navigationBarTranslucent
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />

        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.title}>{'\u0412\u0441\u0435 \u0442\u0435\u043c\u044b'}</Text>
            <Pressable onPress={onClose} hitSlop={10}>
              <CloseIcon />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            {topicCategories.map((category) => (
              <View key={category.id}>
                <Text style={styles.categoryTitle}>{category.title}</Text>

                {category.items.map((item, index) => {
                  const topicKey = `${category.id}-${index}`;
                  const checked = selectedTopics.has(topicKey);

                  return (
                    <Pressable key={topicKey} style={styles.topicRow} onPress={() => toggleTopic(topicKey)}>
                      <View style={[styles.checkbox, checked && styles.checkboxChecked]}>
                        {checked ? <CheckIcon /> : null}
                      </View>
                      <Text style={styles.topicText}>{item}</Text>
                    </Pressable>
                  );
                })}
              </View>
            ))}

            <Pressable style={styles.submitButton} onPress={onClose}>
              <Text style={styles.submitText}>
                {'\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b'}
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

function CheckIcon() {
  return (
    <Svg width={8} height={6} viewBox="0 0 10 7" fill="none">
      <Path
        d="M8.75 0.75L3.25 6.25L0.75 3.75"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CloseIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.25 17.25L6.75 6.75"
        stroke="#033542"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.25 6.75L6.75 17.25"
        stroke="#033542"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.overlay,
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '68%',
    backgroundColor: theme.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingTop: 22,
    paddingHorizontal: 34,
    paddingBottom: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  title: {
    fontSize: 20,
    color: theme.primaryDark,
    ...typography.Inter[600],
  },
  scrollContent: {
    paddingBottom: 16,
  },
  categoryTitle: {
    marginTop: 16,
    marginBottom: 10,
    fontSize: 16,
    color: theme.primary,
    ...typography.Inter[600],
  },
  topicRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
  },
  topicText: {
    flex: 1,
    fontSize: 14,
    color: '#4A4A4A',
    ...typography.Inter[400],
  },
  submitButton: {
    height: 41,
    borderRadius: 16,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 15,
  },
  submitText: {
    color: theme.white,
    fontSize: 14,
    ...typography.Inter[500],
  },
});

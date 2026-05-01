import { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FaqHeader } from '../../components/faq/FaqHeader';
import { FaqItem } from '../../components/faq/FaqItem';
import { colors } from '../../constants/theme';
import { faqItems } from '../../data/faqData';

export function FaqScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [openedId, setOpenedId] = useState<string | null>('faq-2');

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <FaqHeader onBack={onBack} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 14, paddingBottom: 80 + insets.bottom }}
      >
        {faqItems.map((item) => (
          <FaqItem
            key={item.id}
            title={item.title}
            answer={item.answer}
            isOpen={openedId === item.id}
            onPress={() => {
              setOpenedId((prev) => (prev === item.id ? null : item.id));
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

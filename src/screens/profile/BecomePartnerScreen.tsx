import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BecomePartnerHeader } from '../../components/partner/BecomePartnerHeader';
import { BecomePartnerSheet } from '../../components/partner/BecomePartnerSheet';
import { PartnerAdvantagesList } from '../../components/partner/PartnerAdvantagesList';
import { PartnerHeroBanner } from '../../components/partner/PartnerHeroBanner';
import { PartnerRequestToast } from '../../components/partner/PartnerRequestToast';
import { colors, typography } from '../../constants/theme';
import { partnerFormInitialValues, partnerPageData } from '../../data/partnerData';

export function BecomePartnerScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [form, setForm] = useState(partnerFormInitialValues);

  useEffect(() => {
    if (!toastVisible) {
      return undefined;
    }
    const timer = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [toastVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <PartnerRequestToast visible={toastVisible} top={insets.top + 8} onClose={() => setToastVisible(false)} />

        <BecomePartnerHeader onBack={onBack} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 + insets.bottom }}
        >
          <View style={styles.bannerSpacing}>
            <PartnerHeroBanner title={partnerPageData.bannerTitle} image={partnerPageData.bannerImage as number} />
          </View>

          <Text style={styles.description}>{partnerPageData.description}</Text>
          <PartnerAdvantagesList advantages={partnerPageData.advantages} />
        </ScrollView>

        <View style={[styles.bottomBar, { paddingBottom: 10 + insets.bottom }]}>
          <Pressable style={styles.button} onPress={() => setIsSheetOpen(true)}>
            <Text style={styles.buttonText}>Оставить заявку</Text>
          </Pressable>
        </View>

        <BecomePartnerSheet
          visible={isSheetOpen}
          form={form}
          onChangeForm={setForm}
          onClose={() => setIsSheetOpen(false)}
          onSubmit={() => {
            console.log('partner request submitted', form);
            setIsSheetOpen(false);
            setToastVisible(true);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bannerSpacing: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  description: {
    marginHorizontal: 16,
    marginTop: 28,
    fontSize: 20,
    lineHeight: 27,
    color: colors.primaryDark,
    ...typography.Inter[400],
  },
  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  button: {
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    ...typography.Inter[700],
  },
});

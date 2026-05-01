import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmergencyCategoryCard } from '../../components/emergency/EmergencyCategoryCard';
import { EmergencyContactCard } from '../../components/emergency/EmergencyContactCard';
import { EmergencyHelpHeader } from '../../components/emergency/EmergencyHelpHeader';
import { colors } from '../../constants/theme';
import {
  emergencyCategories,
  emergencyContacts,
  emergencyDescription,
} from '../../data/emergencyHelpData';

export function EmergencyHelpScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const mainContact = emergencyContacts[0];

  const handlePhonePress = async (phoneRaw: string) => {
    const url = `tel:${phoneRaw}`;
    try {
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
        return;
      }
    } catch (error) {
      console.log('call emergency phone failed', error);
    }
    console.log('call emergency phone', phoneRaw);
  };

  const handleWebsitePress = async (website: string) => {
    try {
      const canOpen = await Linking.canOpenURL(website);
      if (canOpen) {
        await Linking.openURL(website);
        return;
      }
    } catch (error) {
      console.log('open emergency website failed', error);
    }
    console.log('open emergency website', website);
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <EmergencyHelpHeader onBack={onBack} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 110 + insets.bottom }}
        >
          <View style={styles.categories}>
            {emergencyCategories.map((category) => (
              <EmergencyCategoryCard
                key={category.id}
                category={category}
                onPress={() => console.log('emergency category', category.id)}
              />
            ))}
          </View>

          <Text style={styles.sectionTitle}>Контакты экстренных служб</Text>
          <Text style={styles.description}>{emergencyDescription}</Text>

          <View style={styles.contactCardSpacing}>
            <EmergencyContactCard
              contact={mainContact}
              onPressPhone={() => handlePhonePress(mainContact.phoneRaw)}
              onPressWebsite={() => handleWebsitePress(mainContact.website)}
            />
          </View>
        </ScrollView>

        <View style={[styles.bottomBar, { paddingBottom: 10 + insets.bottom }]}>
          <Pressable style={styles.emergencyButton} onPress={() => handlePhonePress(mainContact.phoneRaw)}>
            <Text style={styles.emergencyButtonText}>Получить экстренную помощь</Text>
          </Pressable>
        </View>
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
  categories: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 28,
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  description: {
    marginHorizontal: 16,
    marginTop: 18,
    fontSize: 17,
    lineHeight: 23,
    color: colors.text,
  },
  contactCardSpacing: {
    marginHorizontal: 16,
    marginTop: 28,
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
  emergencyButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },
});

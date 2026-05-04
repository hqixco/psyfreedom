import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { EmergencyCategoryCard } from '../../components/emergency/EmergencyCategoryCard';
import { EmergencyContactCard } from '../../components/emergency/EmergencyContactCard';
import { EmergencyHelpHeader } from '../../components/emergency/EmergencyHelpHeader';
import { colors, typography } from '../../constants/theme';
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
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 + insets.bottom }}
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

          <View style={styles.buttonSpacing}>
            <Pressable style={styles.emergencyButton} onPress={() => handlePhonePress(mainContact.phoneRaw)}>
              <Text style={styles.emergencyButtonText}>Получить экстренную помощь</Text>
            </Pressable>
          </View>
        </ScrollView>
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
  scroll: {
    flex: 1,
  },
  categories: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 18,
    fontSize: 20,
    lineHeight: 31,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  description: {
    marginHorizontal: 16,
    marginTop: 13,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  contactCardSpacing: {
    marginHorizontal: 16,
    marginTop: 28,
  },
  buttonSpacing: {
    marginTop: 40,
    marginBottom: 60,
    marginHorizontal: 16,
  },
  emergencyButton: {
    height: 41,
    borderRadius: 26,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyButtonText: {
    color: colors.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
});

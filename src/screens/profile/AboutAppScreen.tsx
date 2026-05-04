import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { ProfileMenuItem } from '../../components/profile/ProfileMenuItem';
import { colors, typography } from '../../constants/theme';

const aboutLogo = require('../../../assets/лого.png');

type AboutAppScreenProps = {
  onBack: () => void;
};

export function AboutAppScreen({ onBack }: AboutAppScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <AuthHeader onBack={onBack} title="О приложении" />

        <View style={styles.aboutCard}>
          <Image source={aboutLogo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.description}>
            Я бы хотел поделиться своим положительным опытом работы с психологом. Встречи с этим специалистом
            оказались настоящим прорывом в моей жизни.
          </Text>
        </View>

        <View style={styles.menu}>
          <ProfileMenuItem title="Оцените приложение" onPress={() => console.log('rate app')} />
          <View style={styles.versionRow}>
            <View style={styles.versionContent}>
              <Text style={styles.versionLabel}>Версия</Text>
              <Text style={styles.versionValue}>4.1.1.2</Text>
            </View>
            <Ionicons name="chevron-forward" size={15} color={colors.primaryDark} />
          </View>
          <ProfileMenuItem title="Сайт разработчика" onPress={() => console.log('developer website')} />
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
    paddingTop: 24,
  },
  aboutCard: {
    marginTop: 10,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#F5F9FD',
    padding: 17,
  },
  logo: {
    width: 120,
    height: 44,
    marginLeft: 0,
  },
  description: {
    marginTop: 15,
    fontSize: 14,
    lineHeight: 18,
    color: colors.text,
  },
  menu: {
    marginTop: 4,
    paddingHorizontal: 16,
  },
  versionRow: {
    minHeight: 58,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  versionContent: {
    flex: 1,
    paddingRight: 12,
  },
  versionLabel: {
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  versionValue: {
    marginTop: 2,
    fontSize: 12,
    color: colors.primaryDark,
  },
});

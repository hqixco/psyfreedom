import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { ProfileMenuItem } from '../../components/profile/ProfileMenuItem';
import { colors, typography } from '../../constants/theme';

type AboutAppScreenProps = {
  onBack: () => void;
};

export function AboutAppScreen({ onBack }: AboutAppScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <AuthHeader onBack={onBack} />
        <Text style={styles.title}>О приложении</Text>

        <Text style={styles.description}>
          Я бы хотел поделиться своим положительным опытом работы с психологом. Встречи с этим
          специалистом оказались настоящим прорывом в моей жизни.
        </Text>

        <View style={styles.menu}>
          <ProfileMenuItem title="Оцените приложение" onPress={() => console.log('rate app')} />
          <View style={styles.versionRow}>
            <Text style={styles.versionLabel}>Версия</Text>
            <Text style={styles.versionValue}>4.1.1.2</Text>
          </View>
          <ProfileMenuItem
            title="Сайт разработчика"
            onPress={() => console.log('developer website')}
          />
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
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  title: {
    fontSize: 28,
    ...typography.Inter[700],
    color: colors.primaryDark,
    marginTop: 12,
  },
  description: {
    marginTop: 24,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  menu: {
    marginTop: 28,
  },
  versionRow: {
    height: 54,
    borderRadius: 10,
    backgroundColor: colors.cardLight,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  versionLabel: {
    fontSize: 16,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  versionValue: {
    fontSize: 16,
    color: colors.primaryDark,
  },
});

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { ProfileMenuItem } from '../../components/profile/ProfileMenuItem';
import { colors } from '../../constants/theme';

type FeedbackScreenProps = {
  onBack: () => void;
};

export function FeedbackScreen({ onBack }: FeedbackScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <AuthHeader onBack={onBack} title="Обратная связь" />

        <Text style={styles.description}>
          Здесь можно написать нам о работе приложения, задать вопрос или сообщить о проблеме.
        </Text>

        <View style={styles.menu}>
          <ProfileMenuItem title="Написать в поддержку" onPress={() => console.log('feedback support')} />
          <ProfileMenuItem title="Оставить отзыв" onPress={() => console.log('feedback review')} />
          <ProfileMenuItem title="Связаться по почте" onPress={() => console.log('feedback email')} />
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
  description: {
    marginTop: 24,
    paddingHorizontal: 16,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  menu: {
    marginTop: 28,
    paddingHorizontal: 16,
  },
});

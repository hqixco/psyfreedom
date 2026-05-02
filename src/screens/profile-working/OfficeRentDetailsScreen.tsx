import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { OfficeRentDetailsHeader } from '../../components/office-rent/OfficeRentDetailsHeader';
import { colors, typography } from '../../constants/theme';
import { OfficeRentItem } from '../../data/officeRentData';

export function OfficeRentDetailsScreen({
  office,
  onBack,
}: {
  office: OfficeRentItem;
  onBack: () => void;
}) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}>
        <OfficeRentDetailsHeader title={office.title} onBack={onBack} />
        <Image source={office.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{office.title}</Text>
          <Text style={styles.meta}>
            {office.area} {office.price}
          </Text>
          <Text style={styles.address}>{office.address}</Text>
          <Text style={styles.description}>{office.description}</Text>
          <Pressable style={styles.button} onPress={() => console.log('contact office rent', office.id)}>
            <Text style={styles.buttonText}>Связаться по аренде</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    backgroundColor: colors.cardLight,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  meta: {
    marginTop: 8,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[700],
    color: colors.primary,
  },
  address: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  description: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
  },
  button: {
    marginTop: 24,
    height: 46,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 15,
    ...typography.Inter[700],
  },
});

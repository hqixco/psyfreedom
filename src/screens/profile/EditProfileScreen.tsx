import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AddPhotoSheet } from '../../components/profile/AddPhotoSheet';
import { EditableProfile, EditProfileForm } from '../../components/profile/EditProfileForm';
import { EditPhotoSheet } from '../../components/profile/EditPhotoSheet';
import { colors, typography } from '../../constants/theme';

type EditProfileScreenProps = {
  profile: EditableProfile;
  onBack: () => void;
  onSave: (profile: EditableProfile) => void;
};

const mockPhoto = require('../../../assets/images/avatar-maria.png');
const mockReplacementPhoto = require('../../../assets/images/specialist-photo-1.png');

export function EditProfileScreen({ profile, onBack, onSave }: EditProfileScreenProps) {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState<EditableProfile>(profile);
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false);
  const [isEditPhotoOpen, setIsEditPhotoOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: 100 + insets.bottom }]}
      >
        <View style={styles.container}>
          <AuthHeader onBack={onBack} />
          <Text style={styles.title}>Настройки профиля</Text>
          <EditProfileForm
            value={form}
            onChange={setForm}
            onPressPhoto={() => {
              if (form.photo) {
                setIsEditPhotoOpen(true);
              } else {
                setIsAddPhotoOpen(true);
              }
            }}
            onSave={() => {
              onSave(form);
              onBack();
            }}
          />
        </View>
      </ScrollView>

      <AddPhotoSheet
        visible={isAddPhotoOpen}
        onClose={() => setIsAddPhotoOpen(false)}
        onPickPhoto={() => {
          setForm((prev) => ({ ...prev, photo: mockPhoto }));
          setIsAddPhotoOpen(false);
        }}
        onTakePhoto={() => {
          setForm((prev) => ({ ...prev, photo: mockPhoto }));
          setIsAddPhotoOpen(false);
        }}
      />

      <EditPhotoSheet
        visible={isEditPhotoOpen}
        onClose={() => setIsEditPhotoOpen(false)}
        onDeletePhoto={() => {
          setForm((prev) => ({ ...prev, photo: null }));
          setIsEditPhotoOpen(false);
        }}
        onReplacePhoto={() => {
          setForm((prev) => ({ ...prev, photo: mockReplacementPhoto }));
          setIsEditPhotoOpen(false);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingBottom: 100,
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
    marginBottom: 28,
  },
});


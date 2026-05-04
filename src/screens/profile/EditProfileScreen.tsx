import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthHeader } from '../../components/auth/AuthHeader';
import { AddPhotoSheet } from '../../components/profile/AddPhotoSheet';
import { EditableProfile, EditProfileForm } from '../../components/profile/EditProfileForm';
import { EditPhotoSheet } from '../../components/profile/EditPhotoSheet';
import { colors, typography } from '../../constants/theme';
import { pickImageSource, takePhotoSource } from '../../utils/pickImageFile';

type EditProfileScreenProps = {
  profile: EditableProfile;
  onBack: () => void;
  onSave: (profile: EditableProfile) => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

export function EditProfileScreen({ profile, onBack, onSave, setBottomTabsVisible }: EditProfileScreenProps) {
  const insets = useSafeAreaInsets();
  const [form, setForm] = useState<EditableProfile>(profile);
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false);
  const [isEditPhotoOpen, setIsEditPhotoOpen] = useState(false);

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);

    return () => {
      setBottomTabsVisible(true);
    };
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={[styles.scrollContent, { paddingBottom: 120 + insets.bottom }]}
          >
            <View style={styles.headerWrap}>
              <AuthHeader onBack={onBack} title="Настройки профиля" />
            </View>

            <View style={styles.formWrap}>
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
              />
            </View>
          </ScrollView>

          <View style={[styles.footer, { paddingBottom: 16 + insets.bottom }]}>
            <Pressable
              style={styles.saveButton}
              onPress={() => {
                onSave(form);
                onBack();
              }}
            >
              <Text style={styles.saveButtonText}>Сохранить изменения</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>

      <AddPhotoSheet
        visible={isAddPhotoOpen}
        onClose={() => setIsAddPhotoOpen(false)}
        onPickPhoto={async () => {
          const nextPhoto = await pickImageSource();
          if (nextPhoto) {
            setForm((prev) => ({ ...prev, photo: nextPhoto }));
          }
          setIsAddPhotoOpen(false);
        }}
        onTakePhoto={async () => {
          const nextPhoto = await takePhotoSource();
          if (nextPhoto) {
            setForm((prev) => ({ ...prev, photo: nextPhoto }));
          }
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
        onReplacePhoto={async () => {
          const nextPhoto = await pickImageSource();
          if (nextPhoto) {
            setForm((prev) => ({ ...prev, photo: nextPhoto }));
          }
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
  keyboard: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  headerWrap: {
    paddingTop: 24,
  },
  formWrap: {
    paddingHorizontal: 16,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  saveButton: {
    height: 41,
    borderRadius: 360,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 14,
    ...typography.Inter[600],
  },
});

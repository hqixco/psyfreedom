import { useState } from 'react';
import { Image, ImageSourcePropType, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography } from '../../constants/theme';
import { EducationItem } from '../../data/specialistDetailsData';

type TabKey = 'education' | 'certificates' | 'media';

type SpecialistAdditionalInfoProps = {
  education: EducationItem[];
  certificates: ImageSourcePropType[];
  media: ImageSourcePropType[];
};

const infoGallery = [
  require('../../../assets/specialist-gallery-image-1.png'),
  require('../../../assets/specialist-gallery-image-2.png'),
];

export function SpecialistAdditionalInfo({
  education,
  certificates,
  media,
}: SpecialistAdditionalInfoProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('education');
  const [previewImage, setPreviewImage] = useState<ImageSourcePropType | null>(null);

  const tabs = [
    { key: 'education' as const, label: 'Образование' },
    { key: 'certificates' as const, label: 'Сертификат' },
    { key: 'media' as const, label: 'Фото и видео материалы' },
  ];

  return (
    <>
      <View style={styles.section}>
        <Text style={styles.title}>Дополнительная информация</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsRow}
        >
          {tabs.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <Pressable
                key={tab.key}
                style={[styles.tab, active ? styles.activeTab : styles.inactiveTab]}
                onPress={() => setActiveTab(tab.key)}
              >
                <Text style={[styles.tabText, active ? styles.activeText : styles.inactiveText]}>
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {activeTab === 'education'
          ? education.map((item) => (
              <View key={`${item.years}-${item.title}`} style={styles.educationItem}>
                <Text style={styles.years}>{item.years}</Text>
                <Text style={styles.educationText}>{item.title}</Text>
                <Text style={styles.educationText}>{item.description}</Text>
                <GalleryRow onOpenImage={setPreviewImage} />
              </View>
            ))
          : null}

        {activeTab === 'certificates' ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.mediaList}>
            {certificates.map((item, index) => (
              <Pressable key={`cert-${index}`} onPress={() => setPreviewImage(item)}>
                <Image source={item} style={styles.sliderImage} resizeMode="cover" />
              </Pressable>
            ))}
          </ScrollView>
        ) : null}

        {activeTab === 'media' ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.mediaList}>
            {media.map((item, index) => (
              <Pressable key={`media-${index}`} onPress={() => setPreviewImage(item)}>
                <Image source={item} style={styles.sliderImage} resizeMode="cover" />
              </Pressable>
            ))}
          </ScrollView>
        ) : null}
      </View>

      <Modal visible={Boolean(previewImage)} transparent animationType="fade" onRequestClose={() => setPreviewImage(null)}>
        <View style={styles.modalOverlay}>
          <Pressable style={styles.closeButton} onPress={() => setPreviewImage(null)}>
            <Ionicons name="close" size={28} color={colors.white} />
          </Pressable>
          {previewImage ? <Image source={previewImage} style={styles.previewImage} resizeMode="contain" /> : null}
        </View>
      </Modal>
    </>
  );
}

function GalleryRow({ onOpenImage }: { onOpenImage: (image: ImageSourcePropType) => void }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryRow}>
      {infoGallery.map((item, index) => (
        <Pressable key={`gallery-${index}`} onPress={() => onOpenImage(item)}>
          <Image source={item} style={styles.galleryImage} resizeMode="cover" />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 70,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  tabsRow: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    paddingRight: 16,
  },
  tab: {
    height: 43,
    borderRadius: 360,
    paddingHorizontal: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  inactiveTab: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
  },
  tabText: {
    fontSize: 16,
  },
  activeText: {
    color: colors.white,
    ...typography.Inter[700],
  },
  inactiveText: {
    color: colors.primaryDark,
    ...typography.Inter[600],
  },
  educationItem: {
    marginTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  years: {
    fontSize: 16,
    ...typography.Inter[600],
    marginBottom: 15,
    color: colors.primaryDark,
  },
  educationText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  galleryRow: {
    paddingTop: 20,
  },
  galleryImage: {
    width: 148,
    height: 110,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  mediaList: {
    paddingTop: 14,
  },
  sliderImage: {
    width: 180,
    height: 110,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: colors.cardLight,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 54,
    right: 20,
    zIndex: 2,
  },
  previewImage: {
    width: '100%',
    height: '78%',
  },
});

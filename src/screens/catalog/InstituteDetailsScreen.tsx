import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { RatingStarIcon } from '../../components/icons/RatingStarIcon';
import { SpecialistHeader } from '../../components/specialist-details/SpecialistHeader';
import { colors, typography } from '../../constants/theme';
import { InstituteDetails } from '../../data/institutesData';

type InstituteDetailsScreenProps = {
  institute: InstituteDetails;
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

type InfoTabKey = 'programs' | 'media';

const infoTabs: { id: InfoTabKey; label: string }[] = [
  { id: 'programs', label: 'Программы обучения' },
  { id: 'media', label: 'Фото и видео материалы' },
];

function SectionTitle({ children }: { children: string }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <View style={styles.tagsRow}>
      {tags.map((tag) => (
        <View key={tag} style={styles.tagChip}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );
}

function ReadMoreText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = text.length > 220;
  const visibleText = shouldCollapse && !expanded ? `${text.slice(0, 260)}...` : text;

  return (
    <View>
      <Text style={styles.aboutText}>{visibleText}</Text>
      {shouldCollapse ? (
        <Pressable onPress={() => setExpanded((value) => !value)}>
          <Text style={styles.link}>{expanded ? 'Свернуть' : 'Читать ещё'}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function ReviewCard({
  author,
  date,
  text,
  avatar,
  rating,
}: {
  author: string;
  date: string;
  text: string;
  avatar: InstituteDetails['reviews'][number]['avatar'];
  rating: number;
}) {
  return (
    <View style={styles.reviewCard}>
      <View style={styles.reviewCardTop}>
        <Image source={avatar} style={styles.reviewAvatar} />
        <View style={styles.reviewMeta}>
          <View style={styles.reviewStarsRow}>
            {Array.from({ length: rating }).map((_, index) => (
              <RatingStarIcon key={index} width={18} />
            ))}
          </View>
          <Text style={styles.reviewDate}>{date}</Text>
          <Text style={styles.reviewAuthor}>{author}</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{text}</Text>
    </View>
  );
}

function TabPills({
  activeTab,
  onChange,
}: {
  activeTab: InfoTabKey;
  onChange: (tab: InfoTabKey) => void;
}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsRow}>
      {infoTabs.map((tab) => {
        const active = tab.id === activeTab;
        return (
          <Pressable
            key={tab.id}
            style={[styles.tab, active ? styles.activeTab : styles.inactiveTab]}
            onPress={() => onChange(tab.id)}
          >
            <Text style={[styles.tabText, active ? styles.activeText : styles.inactiveText]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

export function InstituteDetailsScreen({
  institute,
  onBack,
  setBottomTabsVisible,
}: InstituteDetailsScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeInfoTab, setActiveInfoTab] = useState<InfoTabKey>('programs');
  const [directionsExpanded, setDirectionsExpanded] = useState(false);

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
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.contentContainer, { paddingBottom: 110 + insets.bottom }]}
        >
          <SpecialistHeader onBack={onBack} onShare={() => console.log('share institute', institute.id)} />

          <View style={styles.heroWrap}>
            <Image source={institute.cover} style={styles.heroImage} resizeMode="cover" />
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.title}>{institute.title}</Text>
            {institute.educationTypes.map((line) => (
              <Text key={line} style={styles.role}>
                {line}
              </Text>
            ))}
            <Text style={styles.city}>{institute.city}</Text>
            <TagRow tags={institute.tags} />

            <View style={styles.ratingRow}>
              <RatingStarIcon width={18} />
              <Text style={styles.ratingValue}>{institute.rating}</Text>
              <Text style={styles.reviewsText}>{`${institute.reviewsCount} отзывов`}</Text>
            </View>

            <View style={styles.statsRow}>
              <StatCard value={String(institute.productsCount)} label="Товаров" />
              <StatCard value={String(institute.materialsCount)} label="Материалов" />
            </View>
          </View>

          <View style={styles.section}>
            <SectionTitle>Описание</SectionTitle>
            <ReadMoreText text={institute.description} />
          </View>

          <View style={styles.section}>
            <SectionTitle>Направления в обучении</SectionTitle>
            <View style={styles.directionList}>
              {(directionsExpanded ? institute.directions : institute.directions.slice(0, 3)).map((item) => (
                <View key={item} style={styles.directionRow}>
                  <Text style={styles.directionBullet}>•</Text>
                  <Text style={styles.directionText}>{item}</Text>
                </View>
              ))}
            </View>
            {institute.directions.length > 3 ? (
              <Pressable onPress={() => setDirectionsExpanded((value) => !value)}>
                <Text style={styles.link}>{directionsExpanded ? 'Свернуть' : 'Читать ещё'}</Text>
              </Pressable>
            ) : null}
          </View>

          <View style={[styles.section, styles.reviewsSection]}>
            <View style={styles.reviewsHeader}>
              <Text style={styles.sectionTitleLarge}>Отзывы</Text>
              <View style={styles.ratingRow}>
                <RatingStarIcon width={16} />
                <Text style={styles.ratingValue}>{institute.rating}</Text>
                <Text style={styles.reviewsText}>{`${institute.reviewsCount} отзывов`}</Text>
              </View>
            </View>

            {institute.reviews.map((review) => (
              <ReviewCard
                key={review.id}
                author={review.author}
                date={review.date}
                text={review.text}
                avatar={review.avatar}
                rating={review.rating}
              />
            ))}

            <Pressable
              style={styles.leaveReviewButton}
              onPress={() => console.log('leave institute review', institute.id)}
            >
              <Text style={styles.leaveReviewText}>Оставить отзыв</Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitleLarge}>Дополнительная информация</Text>
            <TabPills activeTab={activeInfoTab} onChange={setActiveInfoTab} />

            {activeInfoTab === 'programs' ? (
              <View style={styles.programBlock}>
                {institute.programs.map((program) => (
                  <View key={program.id}>
                    <Text style={styles.programTitle}>{program.title}</Text>
                    <View style={styles.programItems}>
                      {program.items.map((item) => (
                        <Text key={item} style={styles.programItem}>
                          - {item}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.mediaGrid}>
                {institute.media.map((item) => (
                  <View key={item.id} style={styles.mediaItem}>
                    <Image source={item.image} style={styles.mediaImage} resizeMode="cover" />
                  </View>
                ))}
              </View>
            )}
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
  contentContainer: {
    paddingTop: 0,
  },
  heroWrap: {
    marginHorizontal: 16,
    marginTop: 8,
  },
  heroImage: {
    width: '100%',
    height: 370,
    borderRadius: 12,
    backgroundColor: colors.cardLight,
  },
  infoBlock: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  title: {
    marginTop: 6,
    fontSize: 20,
    lineHeight: 30,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  role: {
    marginTop: 2,
    fontSize: 14,
    color: colors.muted,
  },
  city: {
    marginTop: 4,
    fontSize: 14,
    color: colors.primaryDark,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tagChip: {
    height: 18,
    borderRadius: 14,
    backgroundColor: '#EAF8FA',
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 12,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingValue: {
    marginLeft: 6,
    fontSize: 14,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  reviewsText: {
    marginLeft: 6,
    fontSize: 14,
    color: colors.muted,
  },
  statsRow: {
    marginTop: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    width: '48.5%',
    height: 96,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.cardLight,
  },
  statValue: {
    fontSize: 32,
    ...typography.Inter[600],
    color: colors.primary,
  },
  statLabel: {
    marginTop: 5,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  section: {
    marginTop: 32,
    marginHorizontal: 16,
  },
  reviewsSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  sectionTitleLarge: {
    fontSize: 24,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  aboutText: {
    marginTop: 15,
    fontSize: 16,
    ...typography.Inter[400],
    lineHeight: 19,
    color: colors.text,
  },
  link: {
    marginTop: 20,
    fontSize: 14,
    ...typography.Inter[400],
    color: colors.primary,
  },
  directionList: {
    marginTop: 8,
  },
  directionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  directionBullet: {
    fontSize: 16,
    color: colors.primaryDark,
    marginRight: 8,
  },
  directionText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[400],
    color: colors.primaryDark,
  },
  reviewsHeader: {
    marginTop: 30,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewCard: {
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: colors.white,
    padding: 17,
  },
  reviewCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewAvatar: {
    width: 88,
    height: 88,
    borderRadius: 360,
    marginRight: 12,
    backgroundColor: colors.cardLight,
  },
  reviewMeta: {
    flex: 1,
  },
  reviewStarsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewDate: {
    marginTop: 4,
    fontSize: 12,
    color: colors.muted,
  },
  reviewAuthor: {
    marginTop: 10,
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  reviewText: {
    marginTop: 13,
    fontSize: 14,
    lineHeight: 16,
    color: colors.text,
  },
  leaveReviewButton: {
    marginTop: 20,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaveReviewText: {
    fontSize: 16,
    ...typography.Inter[600],
    color: '#033542',
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
  programBlock: {
    marginTop: 14,
  },
  programTitle: {
    fontSize: 16,
    ...typography.Inter[600],
    color: colors.primaryDark,
  },
  programItems: {
    marginTop: 6,
  },
  programItem: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
  mediaGrid: {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  mediaItem: {
    width: '48.5%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.cardLight,
    marginBottom: 10,
  },
  mediaImage: {
    width: '100%',
    height: '100%',
  },
});

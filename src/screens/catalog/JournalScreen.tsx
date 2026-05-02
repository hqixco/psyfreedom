import { type ReactNode, useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArticleCard } from '../../components/journal/ArticleCard';
import { JournalCategoryGrid } from '../../components/journal/JournalCategoryGrid';
import { JournalHeader } from '../../components/journal/JournalHeader';
import { JournalHelpBanner } from '../../components/journal/JournalHelpBanner';
import { JournalSectionHeader } from '../../components/journal/JournalSectionHeader';
import { VideoCard } from '../../components/journal/VideoCard';
import { SearchOverlay } from '../../components/search/SearchOverlay';
import { colors } from '../../constants/theme';
import type { Announcement } from '../../data/announcementsData';
import { defaultProductFilters, type SelectedFilters } from '../../data/filterData';
import type { HumorPost } from '../../data/humorData';
import { articles, articleTopics, journalCategories } from '../../data/journalData';
import type { VideoJournalItem } from '../../data/videoJournalData';
import { videoJournalItems } from '../../data/videoJournalData';
import { AnnouncementDetailsScreen } from './AnnouncementDetailsScreen';
import { AnnouncementsScreen } from './AnnouncementsScreen';
import { ArticlesScreen } from './ArticlesScreen';
import { HumorDetailsScreen } from './HumorDetailsScreen';
import { HumorScreen } from './HumorScreen';
import { VideoJournalDetailsScreen } from './VideoJournalDetailsScreen';
import { VideoJournalScreen } from './VideoJournalScreen';
import { type CatalogScreenNavigationProps } from './types';

type JournalView =
  | 'journal'
  | 'articles'
  | 'announcements'
  | 'announcement-details'
  | 'humor'
  | 'humor-details'
  | 'video-journal'
  | 'video-details';

const DETAIL_READY_IDS = new Set(['article-1', 'article-2', 'article-3']);

export function JournalScreen({
  bottomTabsHeight,
  onBack,
  onOpenArticleDetails,
  onOpenServices,
}: CatalogScreenNavigationProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [journalView, setJournalView] = useState<JournalView>('journal');
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const [selectedHumorPost, setSelectedHumorPost] = useState<HumorPost | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoJournalItem | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(defaultProductFilters);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const cardWidth = Math.min(180, width * 0.46);
  const categoryWidth = (width - 16 * 2 - 8 * 2) / 3;

  const handleOpenArticle = (id: string) => {
    if (DETAIL_READY_IDS.has(id)) {
      onOpenArticleDetails(id);
      return;
    }

    console.log('open article', id);
  };

  if (journalView === 'articles') {
    return (
      <>
        <ArticlesScreen
          bottomTabsHeight={bottomTabsHeight}
          articles={articles}
          topics={articleTopics}
          selectedFilters={selectedFilters}
          isFilterOpen={isFilterOpen}
          onBack={() => setJournalView('journal')}
          onSearch={() => setSearchVisible(true)}
          onOpenFilter={() => setIsFilterOpen(true)}
          onCloseFilter={() => setIsFilterOpen(false)}
          onApplyFilters={(filters) => {
            setSelectedFilters(filters);
            setIsFilterOpen(false);
          }}
          onResetFilters={() => setSelectedFilters(defaultProductFilters)}
          onChangeFilters={setSelectedFilters}
          onPressTopic={(id) => console.log('open article topic', id)}
          onPressBanner={() => console.log('write to us')}
          onPressArticle={handleOpenArticle}
        />
        <SearchOverlay
          visible={searchVisible}
          onClose={() => setSearchVisible(false)}
          onOpenArticle={() => onOpenArticleDetails('article-1')}
          onOpenSpecialists={(topicId) => onOpenServices(undefined, topicId)}
        />
      </>
    );
  }

  if (journalView === 'announcements') {
    return (
      <AnnouncementsScreen
        onBack={() => setJournalView('journal')}
        onOpenAnnouncement={(announcement) => {
          setSelectedAnnouncement(announcement);
          setJournalView('announcement-details');
        }}
      />
    );
  }

  if (journalView === 'announcement-details' && selectedAnnouncement) {
    return (
      <AnnouncementDetailsScreen
        announcement={selectedAnnouncement}
        onBack={() => setJournalView('announcements')}
      />
    );
  }

  if (journalView === 'video-journal') {
    return (
      <>
        <VideoJournalScreen
          onBack={() => setJournalView('journal')}
          onSearch={() => setSearchVisible(true)}
          onOpenVideo={(item) => {
            setSelectedVideo(item);
            setJournalView('video-details');
          }}
        />
        <SearchOverlay
          visible={searchVisible}
          onClose={() => setSearchVisible(false)}
          onOpenSpecialists={(topicId) => onOpenServices(undefined, topicId)}
        />
      </>
    );
  }

  if (journalView === 'video-details' && selectedVideo) {
    return (
      <VideoJournalDetailsScreen
        item={selectedVideo}
        onBack={() => setJournalView('video-journal')}
      />
    );
  }

  if (journalView === 'humor') {
    return (
      <HumorScreen
        onBack={() => setJournalView('journal')}
        onOpenPost={(post) => {
          setSelectedHumorPost(post);
          setJournalView('humor-details');
        }}
      />
    );
  }

  if (journalView === 'humor-details' && selectedHumorPost) {
    return (
      <HumorDetailsScreen
        post={selectedHumorPost}
        onBack={() => setJournalView('humor')}
      />
    );
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.contentContainer, { paddingBottom: 100 + bottomTabsHeight + insets.bottom }]}
        >
          <JournalHeader title="Журнал" onBack={onBack} onSearch={() => setSearchVisible(true)} />

          <JournalHelpBanner onPress={() => console.log('write to us')} />

          <JournalCategoryGrid
            categories={journalCategories}
            categoryWidth={categoryWidth}
            onPressCategory={(id) => {
              if (id === 'articles') {
                setJournalView('articles');
                return;
              }

              if (id === 'announcements') {
                setJournalView('announcements');
                return;
              }

              if (id === 'video') {
                setJournalView('video-journal');
                return;
              }

              if (id === 'humor') {
                setJournalView('humor');
                return;
              }

              console.log('open journal category', id);
            }}
          />

          <ScrollViewSection
            title="Статьи"
            onPressMore={() => setJournalView('articles')}
            content={
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                {articles.slice(0, 5).map((item, index, list) => (
                  <View
                    key={item.id}
                    style={[styles.cardWrap, index === list.length - 1 ? undefined : styles.cardGap]}
                  >
                    <ArticleCard
                      item={item}
                      width={cardWidth}
                      imageHeight={181}
                      onPress={() => handleOpenArticle(item.id)}
                    />
                  </View>
                ))}
              </ScrollView>
            }
          />

          <ScrollViewSection
            title="Видеожурнал"
            onPressMore={() => setJournalView('video-journal')}
            content={
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
                {videoJournalItems.slice(0, 5).map((item, index, list) => (
                  <View
                    key={item.id}
                    style={[styles.cardWrap, index === list.length - 1 ? undefined : styles.cardGap]}
                  >
                    <VideoCard
                      item={{
                        id: item.id,
                        title: item.title,
                        topic: item.topic,
                        views: item.views,
                        image: item.image,
                      }}
                      width={cardWidth}
                      onPress={() => {
                        setSelectedVideo(item);
                        setJournalView('video-details');
                      }}
                    />
                  </View>
                ))}
              </ScrollView>
            }
          />
        </ScrollView>
      </SafeAreaView>

      <SearchOverlay
        visible={searchVisible}
        onClose={() => setSearchVisible(false)}
        onOpenArticle={() => onOpenArticleDetails('article-1')}
        onOpenSpecialists={(topicId) => onOpenServices(undefined, topicId)}
      />
    </>
  );
}

function ScrollViewSection({
  title,
  onPressMore,
  content,
}: {
  title: string;
  onPressMore: () => void;
  content: ReactNode;
}) {
  return (
    <View style={styles.section}>
      <JournalSectionHeader title={title} onPressMore={onPressMore} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    paddingTop: 0,
  },
  horizontalList: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  cardWrap: {
    marginBottom: 10,
  },
  cardGap: {
    marginRight: 10,
  },
  section: {
    marginTop: 30,
  },
});

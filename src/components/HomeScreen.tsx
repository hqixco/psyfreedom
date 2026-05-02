import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { AllTopicsModal } from './AllTopicsModal';
import { ArticlesSection } from './ArticlesSection';
import { BottomTabs } from './BottomTabs';
import { getBottomTabsHeight } from './bottomTabsLayout';
import { CategoryGrid } from './CategoryGrid';
import { DatingBanner } from './DatingBanner';
import { PlatformGuideBanner } from './PlatformGuideBanner';
import { ProductsSection } from './ProductsSection';
import { SpecialistPromoBanner } from './SpecialistPromoBanner';
import { SpecialistCard } from './SpecialistCard';
import { SearchOverlay } from './search/SearchOverlay';
import { TopicCard } from './TopicCard';
import { theme, typography } from '../constants/theme';
import { banners, topics } from '../data/mockData';
import { specialists } from '../data/catalogData';

const horizontalPadding = 14;
const topicGap = 8;
const bannerSnapInterval = 292;
const specialistSnapInterval = 195;
const homeSections = [
  'search-topics',
  'specialists-header',
  'specialists-list',
  'dating',
  'products',
  'guide',
  'promo',
  'categories',
  'articles',
] as const;
type HomeSection = (typeof homeSections)[number];

type HomeScreenProps = {
  showBottomTabs?: boolean;
  bottomTabsHeight?: number;
  onOpenDating?: () => void;
  onOpenArticleFromSearch?: (articleId: string) => void;
  onOpenJournal?: () => void;
  onOpenProducts?: () => void;
  onOpenSpecialists?: () => void;
  onOpenServicesFromSearch?: (topicId: string) => void;
  onOpenSpecialistDetails?: (specialistId: string) => void;
  onOpenProductDetails?: (productId: string) => void;
};

export function HomeScreen({
  showBottomTabs = true,
  bottomTabsHeight: bottomTabsHeightProp,
  onOpenDating,
  onOpenArticleFromSearch,
  onOpenJournal,
  onOpenProducts,
  onOpenSpecialists,
  onOpenServicesFromSearch,
  onOpenSpecialistDetails,
  onOpenProductDetails,
}: HomeScreenProps) {
  const [isTopicsVisible, setTopicsVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const { width } = useWindowDimensions();
  const { bottom: bottomInset } = useSafeAreaInsets();
  const bottomTabsHeight = bottomTabsHeightProp ?? getBottomTabsHeight(bottomInset);
  const topicCardWidth = Math.floor((width - horizontalPadding * 2 - topicGap * 2) / 3);

  const renderSection = ({ item }: { item: HomeSection }) => {
    if (item === 'search-topics') {
      return (
        <>
          <View style={styles.searchWrap}>
            <TextInput
              placeholder={'\u041f\u043e\u0438\u0441\u043a \u0443\u0441\u043b\u0443\u0433 \u0438 \u0442\u043e\u0432\u0430\u0440\u043e\u0432'}
              placeholderTextColor={theme.searchPlaceholder}
              style={styles.searchInput}
              onFocus={() => setSearchVisible(true)}
            />
            <View style={styles.searchIcon}>
              <SearchIcon />
            </View>
          </View>

          <View style={styles.topicsGrid}>
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                item={topic}
                width={topicCardWidth}
                onPress={() => topic.isAllTopics && setTopicsVisible(true)}
              />
            ))}
          </View>
        </>
      );
    }

    if (item === 'specialists-header') {
      return (
        <View style={styles.specialistsHeader}>
          <Text style={styles.specialistsTitle}>{'\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b'}</Text>
          <Pressable style={styles.allProfilesButton} onPress={onOpenSpecialists}>
            <Text style={styles.allProfilesText}>{'\u0412\u0441\u0435 \u0430\u043d\u043a\u0435\u0442\u044b'}</Text>
          </Pressable>
        </View>
      );
    }

    if (item === 'specialists-list') {
      return (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.specialistsList}
          snapToInterval={specialistSnapInterval}
          snapToAlignment="start"
        >
          {specialists.map((specialist, index) => (
            <View key={specialist.id} style={index === specialists.length - 1 ? styles.lastSpecialist : undefined}>
              <SpecialistCard item={specialist} onPress={() => onOpenSpecialistDetails?.(specialist.id)} />
            </View>
          ))}
        </ScrollView>
      );
    }

    if (item === 'dating') {
      return <DatingBanner onPress={onOpenDating} />;
    }

    if (item === 'products') {
      return <ProductsSection onOpenProductDetails={onOpenProductDetails} onOpenProducts={onOpenProducts} />;
    }

    if (item === 'guide') {
      return <PlatformGuideBanner />;
    }

    if (item === 'promo') {
      return <SpecialistPromoBanner />;
    }

    if (item === 'categories') {
      return <CategoryGrid />;
    }

    return <ArticlesSection onOpenJournal={onOpenJournal} />;
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <FlatList
          style={styles.scrollView}
          data={[...homeSections]}
          keyExtractor={(item) => item}
          renderItem={renderSection}
          ListHeaderComponent={
            <>
              <View style={styles.bannerSection}>
                <LinearGradient
                  colors={['rgba(19,183,227,0.3)', 'rgba(199,243,255,0.3)']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.bannerSectionGradient}
                />

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.bannersContent}
                  snapToInterval={bannerSnapInterval}
                  snapToAlignment="start"
                >
                  {banners.map((banner, index) => (
                    <ImageBackground
                      key={banner.id}
                      source={typeof banner.image === 'string' ? { uri: banner.image } : banner.image}
                      style={[
                        styles.bannerCard,
                        index === 0 ? styles.primaryBannerCard : styles.secondaryBannerCard,
                        index === banners.length - 1 && styles.lastBannerCard,
                      ]}
                      imageStyle={styles.bannerBackgroundImage}
                    >
                      <LinearGradient
                        colors={['rgba(5,114,143,0)', 'rgba(5,114,143,0.6)']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        style={styles.bannerTextGradient}
                      />
                      <Text style={styles.bannerTitle}>{banner.title}</Text>
                    </ImageBackground>
                  ))}
                </ScrollView>
              </View>
              <View style={styles.contentSectionCap} />
            </>
          }
          ListFooterComponent={<View style={{ height: 36 + bottomTabsHeight }} />}
          removeClippedSubviews
          initialNumToRender={4}
          maxToRenderPerBatch={6}
          windowSize={7}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        />

        {showBottomTabs ? <BottomTabs bottomInset={bottomInset} isModalOpen={isTopicsVisible} /> : null}
        <SearchOverlay
          visible={searchVisible}
          onClose={() => setSearchVisible(false)}
          onOpenArticle={onOpenArticleFromSearch}
          onOpenSpecialists={onOpenServicesFromSearch}
        />
        {isTopicsVisible ? (
          <AllTopicsModal visible={isTopicsVisible} onClose={() => setTopicsVisible(false)} />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

function SearchIcon() {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M8.92871 0.5C13.584 0.500054 17.3574 4.27344 17.3574 8.92871C17.3574 11.0153 16.5994 12.925 15.3438 14.3965L15.043 14.748L15.3701 15.0742L19.4365 19.1338C19.5207 19.2177 19.5201 19.354 19.4375 19.4365C19.3536 19.5207 19.2173 19.5201 19.1348 19.4375L15.0664 15.377L14.7402 15.0518L14.3887 15.3496C12.9178 16.6013 11.0119 17.3574 8.92871 17.3574C4.27344 17.3574 0.500054 13.584 0.5 8.92871C0.5 4.2734 4.2734 0.5 8.92871 0.5ZM8.92871 0.928711C4.51041 0.928711 0.928711 4.51041 0.928711 8.92871C0.928765 13.347 4.51044 16.9287 8.92871 16.9287C11.1357 16.9287 13.1333 16.0352 14.5811 14.5898C16.0319 13.1413 16.9287 11.1395 16.9287 8.92871C16.9287 4.51044 13.347 0.928765 8.92871 0.928711Z"
        stroke="#A9A9A9"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#cff1fa',
  },
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 0,
  },
  bannerSection: {
    position: 'relative',
    backgroundColor: '#cff1fa',
    paddingTop: 12,
    paddingBottom: 38,
  },
  bannerSectionGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  contentSectionCap: {
    marginTop: -18,
    height: 18,
    backgroundColor: theme.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bannersContent: {
    paddingLeft: 14,
    paddingRight: 4,
  },
  bannerCard: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 12,
    justifyContent: 'flex-end',
  },
  primaryBannerCard: {
    width: 280,
    height: 280,
  },
  secondaryBannerCard: {
    width: 280,
    height: 280,
  },
  lastBannerCard: {
    marginRight: 14,
  },
  bannerBackgroundImage: {
    borderRadius: 10,
  },
  bannerTextGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  bannerTitle: {
    color: theme.white,
    fontSize: 20,
    lineHeight: 26,
    ...typography.Inter[600],
    padding: 16,
  },
  searchWrap: {
    marginTop: 0,
    marginHorizontal: 14,
    position: 'relative',
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 360,
    paddingHorizontal: 16,
    paddingRight: 42,
    fontSize: 14,
    color: theme.text,
    ...typography.Inter[400],
    backgroundColor: theme.white,
  },
  searchIcon: {
    position: 'absolute',
    right: 15,
    top: 11,
  },
  topicsGrid: {
    marginTop: 16,
    marginHorizontal: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  specialistsHeader: {
    marginTop: 28,
    marginLeft: 14,
    marginRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specialistsTitle: {
    fontSize: 24,
    ...typography.Inter[600],
    color: theme.text,
  },
  allProfilesButton: {
    height: 33,
    borderWidth: 1,
    borderColor: theme.buttonBorder,
    borderRadius: 360,
    paddingHorizontal: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  allProfilesText: {
    fontSize: 14,
    color: '#858585',
    ...typography.Inter[400],
  },
  specialistsList: {
    paddingLeft: 14,
    paddingRight: 4,
    paddingTop: 24,
  },
  lastSpecialist: {
    marginRight: 14,
  },
});

import { useEffect, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { ProductAboutSection } from '../../components/product-details/ProductAboutSection';
import { ProductAuthorSection } from '../../components/product-details/ProductAuthorSection';
import { ProductBookInfoSection } from '../../components/product-details/ProductBookInfoSection';
import { ProductCharacteristicsSection } from '../../components/product-details/ProductCharacteristicsSection';
import { ProductCompactFooter } from '../../components/product-details/ProductCompactFooter';
import { ProductCourseProgramSection } from '../../components/product-details/ProductCourseProgramSection';
import { ProductHero } from '../../components/product-details/ProductHero';
import { ProductPromoInfoSection } from '../../components/product-details/ProductPromoInfoSection';
import { ProductRelatedSection } from '../../components/product-details/ProductRelatedSection';
import { ProductReviewsSection } from '../../components/product-details/ProductReviewsSection';
import { ProductStickyActionBar } from '../../components/product-details/ProductStickyActionBar';
import { ReviewSheet } from '../../components/specialist-details/ReviewSheet';
import { TestQuestionView } from '../../components/test/TestQuestionView';
import { TestResultView } from '../../components/test/TestResultView';
import { ShareIcon } from '../../components/icons/ShareIcon';
import { colors } from '../../constants/theme';
import { getProductDetailsById } from '../../data/productDetailsData';
import { specialists } from '../../data/servicesData';
import { testQuestions, testResult } from '../../data/testData';
import { ProductScreenProps } from './types';

type TestView = 'details' | 'question' | 'result';

export function ProductDetailsScreen({
  bottomTabsHeight,
  onBack,
  onOpenPaymentScreen,
  onOpenProductDetails,
  onOpenSpecialistDetails,
  product,
  setBottomTabsVisible,
}: ProductScreenProps) {
  const insets = useSafeAreaInsets();
  const [favorite, setFavorite] = useState(false);
  const [testView, setTestView] = useState<TestView>('details');
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const details = getProductDetailsById(product.id);
  const isTest = details.variant === 'testPaid' || details.variant === 'testFree';
  const stickyBottomOffset = 0;
  const stickyBottomPadding = 10 + insets.bottom;
  const contentBottomPadding = 120 + insets.bottom;
  const linkedSpecialist = specialists.find((item) => item.id === '1');
  const linkedAuthor =
    details.variant === 'courseCompact' || details.variant === 'courseFull'
      ? {
          name: linkedSpecialist?.name ?? details.author?.name ?? 'Анна Смирнова',
          role: linkedSpecialist?.specialization ?? details.author?.role ?? 'Психолог',
          specialistId: linkedSpecialist?.id ?? '1',
          rating: linkedSpecialist?.rating ?? details.author?.rating,
          reviewsCount: 120,
          image: linkedSpecialist?.image ?? details.author?.image,
        }
      : details.author;
  const detailsWithCardImage = { ...details, image: product.image };

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);

    return () => {
      setBottomTabsVisible(true);
    };
  }, [setBottomTabsVisible]);

  const handleHeaderRightPress = () => {
    console.log('share product', details.id);
  };

  if (isTest && testView === 'question') {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.iconButton} onPress={() => setTestView('details')}>
              <BackChevronIcon color={colors.primaryDark} />
            </Pressable>
            <View style={styles.iconButton} />
          </View>
          <TestQuestionView
            question={testQuestions[0].question}
            options={testQuestions[0].options}
            onBack={() => setTestView('details')}
            onNext={() => setTestView('result')}
          />
        </View>
      </SafeAreaView>
    );
  }

  if (isTest && testView === 'result') {
    return (
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable style={styles.iconButton} onPress={() => setTestView('question')}>
              <BackChevronIcon color={colors.primaryDark} />
            </Pressable>
            <View style={styles.iconButton} />
          </View>
          <TestResultView
            title={testResult.title}
            resultTitle={testResult.resultTitle}
            metrics={testResult.metrics}
            summary={testResult.summary}
            descriptions={testResult.descriptions}
            author={testResult.author}
            reviews={testResult.reviews}
            onRetry={() => setTestView('question')}
            onOpenReview={() => setIsReviewOpen(true)}
          />
          <ReviewSheet visible={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.contentContainer, { paddingBottom: contentBottomPadding }]}
        >
          <View style={styles.header}>
            <Pressable style={styles.iconButton} onPress={onBack}>
              <BackChevronIcon color={colors.primaryDark} />
            </Pressable>
            <Pressable style={styles.iconButton} onPress={handleHeaderRightPress}>
              <ShareIcon size={22} color={colors.primaryDark} />
            </Pressable>
          </View>

          <ProductHero product={detailsWithCardImage} />

          {details.variant === 'courseCompact' ? (
            <>
              <ProductAboutSection title="О товаре" text={details.description} compact />
              <ProductCharacteristicsSection items={details.characteristics} />
              <ProductAuthorSection author={linkedAuthor} onPressAuthor={onOpenSpecialistDetails} />
              <ProductReviewsSection
                rating={details.rating}
                reviewsCount={details.reviewsCount}
                reviews={details.reviews}
                onOpenReview={() => setIsReviewOpen(true)}
              />
              <ProductCompactFooter />
            </>
          ) : null}

          {details.variant === 'courseFull' ? (
            <>
              <ProductAboutSection title="О товаре" text={details.description} />
              <ProductCharacteristicsSection items={details.characteristics} />
              <ProductAuthorSection author={linkedAuthor} onPressAuthor={onOpenSpecialistDetails} />
              <ProductReviewsSection
                rating={details.rating}
                reviewsCount={details.reviewsCount}
                reviews={details.reviews}
                onOpenReview={() => setIsReviewOpen(true)}
              />
            </>
          ) : null}

          {details.variant === 'promoCode' ? (
            <>
              <ProductPromoInfoSection items={details.promoInfo} />
              <ProductAboutSection title="Условия использования" text={details.terms} />
              <ProductAboutSection title="Описание" text={details.description} />
              <ProductAuthorSection author={details.author} onPressAuthor={onOpenSpecialistDetails} />
            </>
          ) : null}

          {details.variant === 'book' ? (
            <>
              <ProductAboutSection title="О книге" text={details.description} />
              <ProductBookInfoSection items={details.bookInfo} />
              <ProductAuthorSection author={details.author} onPressAuthor={onOpenSpecialistDetails} />
              <ProductReviewsSection
                rating={details.rating}
                reviewsCount={details.reviewsCount}
                reviews={details.reviews}
                onOpenReview={() => setIsReviewOpen(true)}
              />
              <ProductRelatedSection items={details.relatedItems} onPressItem={onOpenProductDetails} />
            </>
          ) : null}

          {details.variant === 'testPaid' || details.variant === 'testFree' ? (
            <>
              <ProductAboutSection title="Описание товара" text={details.description} />
              <ProductAuthorSection author={details.author} onPressAuthor={onOpenSpecialistDetails} />
            </>
          ) : null}
        </ScrollView>

        <ProductStickyActionBar
          bottomOffset={stickyBottomOffset}
          bottomPadding={stickyBottomPadding}
          label={details.actionLabel ?? `Купить ${details.price}`}
          priceLabel={details.variant === 'testPaid' ? details.actionPrice : undefined}
          note={details.actionNote}
          showFavorite
          favorite={favorite}
          onToggleFavorite={() => setFavorite((value) => !value)}
          onPress={() => {
            if (details.variant === 'testFree') {
              setTestView('question');
              return;
            }

            if (details.variant === 'promoCode' && details.price === 'Бесплатно') {
              console.log('promo action', details.id);
              return;
            }

            onOpenPaymentScreen?.({
              title: details.title,
              price: details.actionPrice ?? details.price,
            });
          }}
        />
      </View>

      <ReviewSheet visible={isReviewOpen} onClose={() => setIsReviewOpen(false)} />
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
    paddingTop: 8,
  },
  header: {
    height: 52,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

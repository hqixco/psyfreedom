import { useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { datingBooks, DatingBookItem } from './datingData';
import { datingColors } from './datingStyles';
import { typography } from '../../constants/theme';

const gap = 10;
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 32 - gap) / 2;

function DatingBookCard({
  book,
  onToggleFavorite,
}: {
  book: DatingBookItem;
  onToggleFavorite: () => void;
}) {
  return (
    <Pressable style={styles.card} onPress={() => console.log('open dating book', book.id)}>
      <View style={styles.imageWrapper}>
        <Image source={book.image} style={styles.image} />
        <Pressable style={styles.heartButton} onPress={onToggleFavorite}>
          <Ionicons name={book.isFavorite ? 'heart' : 'heart-outline'} size={24} color={datingColors.white} />
        </Pressable>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={15} color={datingColors.white} />
          <Text style={styles.ratingText}>{book.rating}</Text>
        </View>
      </View>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.type}>{book.typeLabel}</Text>
      <Text style={styles.price}>{book.price}</Text>
    </Pressable>
  );
}

export function DatingBooksScreen({ onBack }: { onBack: () => void }) {
  const insets = useSafeAreaInsets();
  const [books, setBooks] = useState(datingBooks);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backButton}>
            <BackChevronIcon color={datingColors.dark} />
          </Pressable>
          <Text style={styles.headerTitle}>Книги</Text>
        </View>

        <View style={styles.filtersRow}>
          <Pressable style={styles.filtersButton} onPress={() => console.log('open books filters')}>
            <Text style={styles.filtersText}>Фильтры</Text>
            <Ionicons name="options-outline" size={24} color={datingColors.dark} />
          </Pressable>
        </View>

        <View style={styles.grid}>
          {books.map((book) => (
            <DatingBookCard
              key={book.id}
              book={book}
              onToggleFavorite={() =>
                setBooks((prev) =>
                  prev.map((item) =>
                    item.id === book.id ? { ...item, isFavorite: !item.isFavorite } : item
                  )
                )
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: datingColors.white,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 20,
  },
  headerTitle: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: datingColors.dark,
  },
  filtersRow: {
    marginTop: 22,
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  filtersButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtersText: {
    fontSize: 16,
    ...typography.Inter[700],
    color: datingColors.dark,
    marginRight: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: cardWidth,
    marginBottom: 28,
  },
  imageWrapper: {
    width: cardWidth,
    height: cardWidth,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: datingColors.pinkLight,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  ratingRow: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 15,
    ...typography.Inter[700],
    color: datingColors.white,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    lineHeight: 20,
    ...typography.Inter[700],
    color: '#043F4A',
  },
  type: {
    marginTop: 4,
    fontSize: 15,
    lineHeight: 19,
    color: datingColors.muted,
  },
  price: {
    marginTop: 6,
    fontSize: 20,
    lineHeight: 24,
    ...typography.Inter[700],
    color: '#07849A',
  },
});


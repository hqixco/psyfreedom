import { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import {
  searchHistoryMock,
  searchResultsMock,
  SearchResultItem,
} from './searchData';

const searchIconXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.92871 0.5C13.584 0.500054 17.3574 4.27344 17.3574 8.92871C17.3574 11.0153 16.5994 12.925 15.3438 14.3965L15.043 14.748L15.3701 15.0742L19.4365 19.1338C19.5207 19.2177 19.5201 19.354 19.4375 19.4365C19.3536 19.5207 19.2173 19.5201 19.1348 19.4375L15.0664 15.377L14.7402 15.0518L14.3887 15.3496C12.9178 16.6013 11.0119 17.3574 8.92871 17.3574C4.27344 17.3574 0.500054 13.584 0.5 8.92871C0.5 4.2734 4.2734 0.5 8.92871 0.5ZM8.92871 0.928711C4.51041 0.928711 0.928711 4.51041 0.928711 8.92871C0.928765 13.347 4.51044 16.9287 8.92871 16.9287C11.1357 16.9287 13.1333 16.0352 14.5811 14.5898C16.0319 13.1413 16.9287 11.1395 16.9287 8.92871C16.9287 4.51044 13.347 0.928765 8.92871 0.928711Z" stroke="#A9A9A9"/>
</svg>`;

const closeIconXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 17.25L6.75 6.75" stroke="#033542" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.25 6.75L6.75 17.25" stroke="#033542" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const arrowIconXml = `<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 0.75L6.25 6.25L0.75 11.75" stroke="#033542" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

type SearchOverlayProps = {
  visible: boolean;
  onClose: () => void;
  initialQuery?: string;
  onOpenArticle?: (articleId: string) => void;
  onOpenVideo?: (videoId: string) => void;
  onOpenSpecialists?: (topicId: string) => void;
};

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function mapQueryToTopicId(query: string) {
  const normalizedQuery = normalizeText(query);

  if (normalizedQuery.includes('утрата близкого')) {
    return 'loss';
  }

  return 'loss';
}

function getSpecialistsCount(query: string) {
  const normalizedQuery = normalizeText(query);

  if (normalizedQuery.includes('утрата близкого')) {
    return 17;
  }

  return 0;
}

function SearchListItem({
  item,
  onPress,
}: {
  item: SearchResultItem;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.resultCard} onPress={onPress}>
      <View style={styles.cardTextWrap}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemType}>{item.typeLabel}</Text>
      </View>
      <View style={styles.cardArrowWrap}>
        <SvgXml xml={arrowIconXml} width={7} height={13} />
      </View>
    </Pressable>
  );
}

export function SearchOverlay({
  visible,
  onClose,
  initialQuery = '',
  onOpenArticle,
  onOpenVideo,
  onOpenSpecialists,
}: SearchOverlayProps) {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState(initialQuery);
  const [history, setHistory] = useState(searchHistoryMock);

  useEffect(() => {
    if (visible) {
      setQuery(initialQuery);
    }
  }, [initialQuery, visible]);

  const normalizedQuery = normalizeText(query);
  const specialistsCount = getSpecialistsCount(query);
  const filteredResults = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return searchResultsMock.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.typeLabel.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  const addToHistory = (item: SearchResultItem) => {
    setHistory((prev) => [item, ...prev.filter((historyItem) => historyItem.id !== item.id)].slice(0, 10));
  };

  const handleOpenResult = (item: SearchResultItem) => {
    addToHistory(item);
    onClose();

    if (item.type === 'video') {
      if (onOpenVideo) {
        onOpenVideo(item.id);
        return;
      }

      console.log('open video lesson', item.id);
      return;
    }

    if (onOpenArticle) {
      onOpenArticle(item.id);
      return;
    }

    console.log('open article', item.id);
  };

  const handleOpenSpecialists = () => {
    onClose();

    if (onOpenSpecialists) {
      onOpenSpecialists(mapQueryToTopicId(query));
      return;
    }

    console.log('show specialists for query', query);
  };

  return (
    <Modal visible={visible} animationType="fade" transparent={false} onRequestClose={onClose}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.headerRow}>
            <View style={styles.searchContainer}>
              <TextInput
                value={query}
                onChangeText={setQuery}
                autoFocus
                placeholder="Поиск"
                placeholderTextColor="#B0B0B0"
                style={styles.input}
              />
              <View style={styles.searchIcon}>
                <SvgXml xml={searchIconXml} width={20} height={20} />
              </View>
            </View>

            <Pressable style={styles.closeButton} onPress={onClose}>
              <SvgXml xml={closeIconXml} width={24} height={24} />
            </Pressable>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ paddingBottom: 100 + insets.bottom }}
          >
            {!normalizedQuery ? (
              <>
                <Text style={styles.sectionTitle}>История запросов</Text>
                {history.length ? (
                  history.map((item) => (
                    <Pressable key={item.id} style={styles.resultCard} onPress={() => setQuery(item.title)}>
                      <View style={styles.cardTextWrap}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemType}>{item.typeLabel}</Text>
                      </View>
                      <View style={styles.cardArrowWrap}>
                        <SvgXml xml={arrowIconXml} width={7} height={13} />
                      </View>
                    </Pressable>
                  ))
                ) : (
                  <Text style={styles.emptyHistoryText}>История запросов пуста</Text>
                )}
              </>
            ) : (
              <>
                <Text style={styles.sectionTitle}>Результаты поиска</Text>

                <Pressable style={styles.specialistsCard} onPress={handleOpenSpecialists}>
                  <View style={styles.cardTextWrap}>
                    <Text style={styles.specialistsTitle}>{`Услуги специалистов по теме ${query.trim()}`}</Text>
                    <Text style={styles.specialistsDescription}>{`Найдено ${specialistsCount} услуг`}</Text>
                  </View>
                  <View style={styles.cardArrowWrap}>
                    <SvgXml xml={arrowIconXml} width={7} height={13} />
                  </View>
                </Pressable>

                {filteredResults.length ? (
                  filteredResults.map((item) => (
                    <SearchListItem
                      key={item.id}
                      item={item}
                      onPress={() => handleOpenResult(item)}
                    />
                  ))
                ) : (
                  <View style={styles.notFoundContainer}>
                    <Text style={styles.notFoundTitle}>Ничего не найдено</Text>
                    <Text style={styles.notFoundText}>
                      Попробуйте изменить запрос или проверить написание.
                    </Text>
                  </View>
                )}
              </>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerRow: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    height: 44,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#C8C8C8',
    backgroundColor: '#FFFFFF',
    paddingLeft: 18,
    paddingRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#043F4A',
    paddingVertical: 0,
  },
  searchIcon: {
    position: 'absolute',
    right: 13,
  },
  closeButton: {
    width: 36,
    height: 36,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    marginTop: 8,
    marginBottom: 14,
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    color: '#05728F',
  },
  resultCard: {
    width: '100%',
    maxWidth: 370,
    minHeight: 60,
    alignSelf: 'center',
    marginBottom: 5,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  specialistsCard: {
    width: '100%',
    maxWidth: 370,
    minHeight: 60,
    alignSelf: 'center',
    marginBottom: 5,
    borderRadius: 16,
    backgroundColor: '#FFF6EA',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardTextWrap: {
    flex: 1,
    paddingRight: 16,
  },
  cardArrowWrap: {
    width: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: '#031D23',
  },
  itemType: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#6F7678',
  },
  specialistsTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: '#031D23',
  },
  specialistsDescription: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: '#6F7678',
  },
  emptyHistoryText: {
    marginTop: 40,
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    color: '#8A8A8A',
  },
  notFoundContainer: {
    marginTop: 80,
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  notFoundTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
    color: '#043F4A',
    textAlign: 'center',
  },
  notFoundText: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: '#8A8A8A',
    textAlign: 'center',
  },
});

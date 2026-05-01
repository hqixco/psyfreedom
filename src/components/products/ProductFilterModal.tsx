import { Ionicons } from '@expo/vector-icons';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../../constants/theme';

type ProductFilterModalProps = {
  visible: boolean;
  selectedFilters: string[];
  onToggle: (value: string) => void;
  onApply: () => void;
  onReset: () => void;
  onClose: () => void;
};

const categoryItems = ['Видеоуроки', 'Курсы', 'Промокоды', 'Книги', 'Тесты', 'Вебинары', 'Терапевтическая группа', 'Игры'];
const topicItems = [
  'Трудности в отношениях',
  'Поиск себя и планы на жизнь',
  'Прокрастинация и выгорание',
  'Проблемы со сном',
  'Неуверенность в себе',
  'Панические атаки',
  'Посмотреть все',
];
const typeItems = ['В записи', 'Онлайн'];

export function ProductFilterModal({
  visible,
  selectedFilters,
  onToggle,
  onApply,
  onReset,
  onClose,
}: ProductFilterModalProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal transparent animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        <View style={[styles.sheet, { paddingBottom: 18 + insets.bottom }]}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>Фильтры</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={22} color={colors.primaryDark} />
            </Pressable>
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <FilterBlock title="Товары" items={categoryItems} selectedFilters={selectedFilters} onToggle={onToggle} />
            <FilterBlock title="Темы" items={topicItems} selectedFilters={selectedFilters} onToggle={onToggle} />

            <Text style={styles.sectionTitle}>Местоположение</Text>
            <View style={styles.fakeField}>
              <Text style={styles.fakeFieldText}>Выберите город</Text>
            </View>

            <Text style={styles.sectionTitle}>Стоимость</Text>
            <View style={styles.priceRow}>
              <View style={styles.priceField}>
                <Text style={styles.fakeFieldText}>от 110 ₽</Text>
              </View>
              <View style={styles.priceField}>
                <Text style={styles.fakeFieldText}>до 12 930 ₽</Text>
              </View>
            </View>
            <CheckboxRow label="Бесплатно" checked={selectedFilters.includes('Бесплатно')} onPress={() => onToggle('Бесплатно')} />

            <FilterBlock title="Тип" items={typeItems} selectedFilters={selectedFilters} onToggle={onToggle} />
          </ScrollView>

          <View style={styles.footer}>
            <Pressable style={styles.applyButton} onPress={onApply}>
              <Text style={styles.applyButtonText}>Применить</Text>
            </Pressable>
            <Pressable style={styles.resetButton} onPress={onReset}>
              <Text style={styles.resetButtonText}>Сбросить фильтры</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function FilterBlock({
  title,
  items,
  selectedFilters,
  onToggle,
}: {
  title: string;
  items: string[];
  selectedFilters: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item) => (
        <CheckboxRow key={item} label={item} checked={selectedFilters.includes(item)} onPress={() => onToggle(item)} />
      ))}
    </>
  );
}

function CheckboxRow({ label, checked, onPress }: { label: string; checked: boolean; onPress: () => void }) {
  return (
    <Pressable style={styles.checkboxRow} onPress={onPress}>
      <View style={[styles.checkbox, checked ? styles.checkboxActive : null]}>
        {checked ? <Ionicons name="checkmark" size={13} color={colors.white} /> : null}
      </View>
      <Text style={styles.checkboxText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    maxHeight: '85%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 22,
    paddingTop: 22,
    backgroundColor: colors.white,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  scrollContent: {
    paddingTop: 4,
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryDark,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B7DCE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.primaryDark,
  },
  fakeField: {
    height: 44,
    marginTop: 10,
    borderRadius: 12,
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: colors.cardLight,
  },
  fakeFieldText: {
    fontSize: 14,
    color: colors.primaryDark,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  priceField: {
    width: '48.5%',
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    justifyContent: 'center',
    backgroundColor: colors.cardLight,
  },
  footer: {
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    marginTop: 18,
  },
  applyButton: {
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  applyButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.white,
  },
  resetButton: {
    marginTop: 12,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
  },
});

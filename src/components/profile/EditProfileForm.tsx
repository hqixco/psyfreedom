import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

const editPhotoIcon = require('../../../assets/profile-photo-edit-icon.svg');
const cameraIcon = require('../../../assets/profile-photo-camera-icon.svg');
const calendarIcon = require('../../../assets/profile-calendar-icon.svg');

const birthCalendarDays = [
  { label: '30', date: '2024-09-30', muted: true },
  { label: '1', date: '2024-10-01' },
  { label: '2', date: '2024-10-02' },
  { label: '3', date: '2024-10-03' },
  { label: '4', date: '2024-10-04' },
  { label: '5', date: '2024-10-05' },
  { label: '6', date: '2024-10-06' },
  { label: '7', date: '2024-10-07' },
  { label: '8', date: '2024-10-08' },
  { label: '9', date: '2024-10-09' },
  { label: '10', date: '2024-10-10' },
  { label: '11', date: '2024-10-11' },
  { label: '12', date: '2024-10-12' },
  { label: '13', date: '2024-10-13' },
  { label: '14', date: '2024-10-14' },
  { label: '15', date: '2024-10-15' },
  { label: '16', date: '2024-10-16' },
  { label: '17', date: '2024-10-17' },
  { label: '18', date: '2024-10-18' },
  { label: '19', date: '2024-10-19' },
  { label: '20', date: '2024-10-20' },
  { label: '21', date: '2024-10-21' },
  { label: '22', date: '2024-10-22' },
  { label: '23', date: '2024-10-23' },
  { label: '24', date: '2024-10-24' },
  { label: '25', date: '2024-10-25' },
  { label: '26', date: '2024-10-26' },
  { label: '27', date: '2024-10-27' },
  { label: '28', date: '2024-10-28' },
  { label: '29', date: '2024-10-29' },
  { label: '30', date: '2024-10-30' },
  { label: '31', date: '2024-10-31' },
  { label: '1', date: '2024-11-01', muted: true },
  { label: '2', date: '2024-11-02', muted: true },
  { label: '3', date: '2024-11-03', muted: true },
];

export type EditableProfile = {
  name: string;
  phone: string;
  email: string;
  birthDate: string;
  photo: number | null;
};

type EditProfileFormProps = {
  value: EditableProfile;
  onChange: (next: EditableProfile) => void;
  onPressPhoto: () => void;
};

export function EditProfileForm({ value, onChange, onPressPhoto }: EditProfileFormProps) {
  const insets = useSafeAreaInsets();
  const [isBirthCalendarVisible, setIsBirthCalendarVisible] = useState(false);
  const monthTitle = useMemo(() => 'Октябрь', []);

  return (
    <View>
      <View style={styles.photoContainer}>
        <Pressable style={styles.photoWrap} onPress={onPressPhoto}>
          {value.photo ? (
            <Image source={value.photo} style={styles.photo} />
          ) : (
            <View style={styles.emptyPhotoState}>
              <View style={styles.emptyPhotoCircle}>
                <Image source={cameraIcon} style={styles.cameraIcon} />
                <Text style={styles.photoPlaceholder}>Добавить фото</Text>
              </View>
            </View>
          )}
        </Pressable>

        {value.photo ? (
          <Pressable style={styles.photoEditButton} onPress={onPressPhoto}>
            <Image source={editPhotoIcon} style={styles.photoEditIcon} />
          </Pressable>
        ) : null}
      </View>

      <Field label="Ваше Имя" value={value.name} onChangeText={(name) => onChange({ ...value, name })} />
      <Field
        label="Номер телефона"
        value={value.phone}
        onChangeText={(phone) => onChange({ ...value, phone })}
        keyboardType="phone-pad"
      />
      <Field
        label="E-mail"
        value={value.email}
        onChangeText={(email) => onChange({ ...value, email })}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Дата рождения</Text>
      <Pressable style={styles.input} onPress={() => setIsBirthCalendarVisible(true)}>
        <Text style={[styles.inputText, !value.birthDate ? styles.placeholderText : null]}>
          {value.birthDate || 'Выбрать дату рождения'}
        </Text>
        <SvgXml xml={calendarIcon} width={20} height={20} />
      </Pressable>

      <Modal transparent animationType="slide" visible={isBirthCalendarVisible} onRequestClose={() => setIsBirthCalendarVisible(false)}>
        <View style={styles.calendarOverlay}>
          <Pressable style={StyleSheet.absoluteFill} onPress={() => setIsBirthCalendarVisible(false)} />
          <View style={[styles.calendarSheet, { paddingBottom: 18 + insets.bottom }]}>
            <View style={styles.calendarHeader}>
              <Pressable style={styles.calendarNavButton} onPress={() => console.log('prev birth month')}>
                <Text style={styles.calendarChevron}>{'<'}</Text>
              </Pressable>
              <Text style={styles.calendarTitle}>
                {monthTitle}, <Text style={styles.calendarYear}>2024</Text>
              </Text>
              <Pressable style={styles.calendarNavButton} onPress={() => console.log('next birth month')}>
                <Text style={styles.calendarChevron}>{'>'}</Text>
              </Pressable>
            </View>

            <View style={styles.calendarWeekRow}>
              {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
                <Text key={day} style={styles.calendarWeekDay}>
                  {day}
                </Text>
              ))}
            </View>

            <View style={styles.calendarGrid}>
              {birthCalendarDays.map((item) => {
                const isSelected = item.date === value.birthDate;
                return (
                  <Pressable
                    key={item.date}
                    style={styles.calendarDay}
                    onPress={() => {
                      onChange({ ...value, birthDate: item.label.padStart(2, '0') + '.10.2024' });
                      setIsBirthCalendarVisible(false);
                    }}
                  >
                    {isSelected ? <View style={[styles.calendarDayIndicator, styles.calendarDaySelected]} /> : null}
                    {!isSelected && item.muted ? <View style={[styles.calendarDayIndicator, styles.calendarDayMarked]} /> : null}
                    <Text
                      style={[
                        styles.calendarDayText,
                        item.muted ? styles.calendarDayTextMuted : null,
                        isSelected ? styles.calendarDayTextSelected : null,
                      ]}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function Field({
  label,
  value,
  onChangeText,
  ...props
}: {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  keyboardType?: 'default' | 'phone-pad' | 'email-address';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  photoContainer: {
    width: 96,
    marginTop: 10,
    marginBottom: 23,
    position: 'relative',
    overflow: 'visible',
  },
  photoWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#05728F',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyPhotoState: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyPhotoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#05728F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  photoPlaceholder: {
    width: 50,
    marginTop: 6,
    color: colors.white,
    fontSize: 10,
    lineHeight: 12,
    ...typography.Inter[400],
    textAlign: 'center',
  },
  photoEditButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 24,
    height: 24,
    borderRadius: 360,
    backgroundColor: '#05728F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoEditIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 12,
    lineHeight: 17,
    fontWeight: '400',
    color: colors.primaryDark,
    marginBottom: 8,
  },
  input: {
    height: 41,
    borderRadius: 360,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    paddingHorizontal: 14,
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primaryDark,
  },
  placeholderText: {
    color: colors.muted,
  },
  calendarOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  calendarSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 24,
    paddingTop: 22,
  },
  calendarHeader: {
    marginBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  calendarNavButton: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarChevron: {
    fontSize: 22,
    color: colors.primaryDark,
    ...typography.Inter[700],
  },
  calendarTitle: {
    fontSize: 20,
    ...typography.Inter[700],
    color: colors.primaryDark,
  },
  calendarYear: {
    color: colors.primary,
  },
  calendarWeekRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  calendarWeekDay: {
    flex: 1,
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.2857%',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    position: 'relative',
  },
  calendarDayIndicator: {
    position: 'absolute',
    width: 19,
    height: 19,
    borderRadius: 4,
    top: 9.5,
    left: 9.5,
  },
  calendarDaySelected: {
    backgroundColor: colors.primary,
  },
  calendarDayMarked: {
    backgroundColor: '#B7DCE2',
  },
  calendarDayText: {
    fontSize: 16,
    color: colors.primaryDark,
  },
  calendarDayTextMuted: {
    color: '#D5D5D5',
  },
  calendarDayTextSelected: {
    color: colors.white,
  },
});

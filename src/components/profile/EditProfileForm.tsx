import { Ionicons } from '@expo/vector-icons';
import { Image, ImageSourcePropType, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import { colors, typography } from '../../constants/theme';

const cameraIconXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 18C22.5 18.3978 22.342 18.7794 22.0607 19.0607C21.7794 19.342 21.3978 19.5 21 19.5H3C2.60218 19.5 2.22064 19.342 1.93934 19.0607C1.65804 18.7794 1.5 18.3978 1.5 18V9C1.5 8.60218 1.65804 8.22064 1.93934 7.93934C2.22064 7.65804 2.60218 7.5 3 7.5H4.758C5.95086 7.49935 7.09465 7.0251 7.938 6.1815L9.183 4.9395C9.4635 4.65891 9.84375 4.50088 10.2405 4.5H13.7565C14.1543 4.50008 14.5358 4.65818 14.817 4.9395L16.059 6.1815C16.4769 6.59957 16.9732 6.9312 17.5193 7.15743C18.0655 7.38366 18.6508 7.50007 19.242 7.5H21C21.3978 7.5 21.7794 7.65804 22.0607 7.93934C22.342 8.22064 22.5 8.60218 22.5 9V18ZM3 6C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.316071 7.44129 0 8.20435 0 9L0 18C0 18.7956 0.316071 19.5587 0.87868 20.1213C1.44129 20.6839 2.20435 21 3 21H21C21.7956 21 22.5587 20.6839 23.1213 20.1213C23.6839 19.5587 24 18.7956 24 18V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6H19.242C18.4464 5.99983 17.6835 5.68365 17.121 5.121L15.879 3.879C15.3165 3.31635 14.5536 3.00017 13.758 3H10.242C9.44642 3.00017 8.68348 3.31635 8.121 3.879L6.879 5.121C6.31652 5.68365 5.55358 5.99983 4.758 6H3Z" fill="white"/>
<path d="M12 16.5C11.0054 16.5 10.0516 16.1049 9.34835 15.4017C8.64509 14.6984 8.25 13.7446 8.25 12.75C8.25 11.7554 8.64509 10.8016 9.34835 10.0983C10.0516 9.39509 11.0054 9 12 9C12.9946 9 13.9484 9.39509 14.6517 10.0983C15.3549 10.8016 15.75 11.7554 15.75 12.75C15.75 13.7446 15.3549 14.6984 14.6517 15.4017C13.9484 16.1049 12.9946 16.5 12 16.5ZM12 18C13.3924 18 14.7277 17.4469 15.7123 16.4623C16.6969 15.4777 17.25 14.1424 17.25 12.75C17.25 11.3576 16.6969 10.0223 15.7123 9.03769C14.7277 8.05312 13.3924 7.5 12 7.5C10.6076 7.5 9.27226 8.05312 8.28769 9.03769C7.30312 10.0223 6.75 11.3576 6.75 12.75C6.75 14.1424 7.30312 15.4777 8.28769 16.4623C9.27226 17.4469 10.6076 18 12 18ZM4.5 9.75C4.5 9.94891 4.42098 10.1397 4.28033 10.2803C4.13968 10.421 3.94891 10.5 3.75 10.5C3.55109 10.5 3.36032 10.421 3.21967 10.2803C3.07902 10.1397 3 9.94891 3 9.75C3 9.55109 3.07902 9.36032 3.21967 9.21967C3.36032 9.07902 3.55109 9 3.75 9C3.94891 9 4.13968 9.07902 4.28033 9.21967C4.42098 9.36032 4.5 9.55109 4.5 9.75Z" fill="white"/>
</svg>`;

const calendarIconXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_201_6538)">
<path d="M13.75 8.125C13.75 7.95924 13.8158 7.80027 13.9331 7.68306C14.0503 7.56585 14.2092 7.5 14.375 7.5H15.625C15.7908 7.5 15.9497 7.56585 16.0669 7.68306C16.1842 7.80027 16.25 7.95924 16.25 8.125V9.375C16.25 9.54076 16.1842 9.69973 16.0669 9.81694C15.9497 9.93415 15.7908 10 15.625 10H14.375C14.2092 10 14.0503 9.93415 13.9331 9.81694C13.8158 9.69973 13.75 9.54076 13.75 9.375V8.125ZM10 8.125C10 7.95924 10.0658 7.80027 10.1831 7.68306C10.3003 7.56585 10.4592 7.5 10.625 7.5H11.875C12.0408 7.5 12.1997 7.56585 12.3169 7.68306C12.4342 7.80027 12.5 7.95924 12.5 8.125V9.375C12.5 9.54076 12.4342 9.69973 12.3169 9.81694C12.1997 9.93415 12.0408 10 11.875 10H10.625C10.4592 10 10.3003 9.93415 10.1831 9.81694C10.0658 9.69973 10 9.54076 10 9.375V8.125ZM3.75 11.875C3.75 11.7092 3.81585 11.5503 3.93306 11.4331C4.05027 11.3158 4.20924 11.25 4.375 11.25H5.625C5.79076 11.25 5.94973 11.3158 6.06694 11.4331C6.18415 11.5503 6.25 11.7092 6.25 11.875V13.125C6.25 13.2908 6.18415 13.4497 6.06694 13.5669C5.94973 13.6842 5.79076 13.75 5.625 13.75H4.375C4.20924 13.75 4.05027 13.6842 3.93306 13.5669C3.81585 13.4497 3.75 13.2908 3.75 13.125V11.875ZM7.5 11.875C7.5 11.7092 7.56585 11.5503 7.68306 11.4331C7.80027 11.3158 7.95924 11.25 8.125 11.25H9.375C9.54076 11.25 9.69973 11.3158 9.81694 11.4331C9.93415 11.5503 10 11.7092 10 11.875V13.125C10 13.2908 9.93415 13.4497 9.81694 13.5669C9.69973 13.6842 9.54076 13.75 9.375 13.75H8.125C7.95924 13.75 7.80027 13.6842 7.68306 13.5669C7.56585 13.4497 7.5 13.2908 7.5 13.125V11.875Z" fill="#A9A9A9"/>
<path d="M4.375 0C4.54076 0 4.69973 0.065848 4.81694 0.183058C4.93415 0.300269 5 0.45924 5 0.625V1.25H15V0.625C15 0.45924 15.0658 0.300269 15.1831 0.183058C15.3003 0.065848 15.4592 0 15.625 0C15.7908 0 15.9497 0.065848 16.0669 0.183058C16.1842 0.300269 16.25 0.45924 16.25 0.625V1.25H17.5C18.163 1.25 18.7989 1.51339 19.2678 1.98223C19.7366 2.45107 20 3.08696 20 3.75V17.5C20 18.163 19.7366 18.7989 19.2678 19.2678C18.7989 19.7366 18.163 20 17.5 20H2.5C1.83696 20 1.20107 19.7366 0.732233 19.2678C0.263392 18.7989 0 18.163 0 17.5V3.75C0 3.08696 0.263392 2.45107 0.732233 1.98223C1.20107 1.51339 1.83696 1.25 2.5 1.25H3.75V0.625C3.75 0.45924 3.81585 0.300269 3.93306 0.183058C4.05027 0.065848 4.20924 0 4.375 0V0ZM1.25 5V17.5C1.25 17.8315 1.3817 18.1495 1.61612 18.3839C1.85054 18.6183 2.16848 18.75 2.5 18.75H17.5C17.8315 18.75 18.1495 18.6183 18.3839 18.3839C18.6183 18.1495 18.75 17.8315 18.75 17.5V5H1.25Z" fill="#A9A9A9"/>
</g>
<defs>
<clipPath id="clip0_201_6538">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`;

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
  photo: ImageSourcePropType | null;
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
                <SvgXml xml={cameraIconXml} width={24} height={24} />
                <Text style={styles.photoPlaceholder}>Добавить фото</Text>
              </View>
            </View>
          )}
        </Pressable>

        {value.photo ? (
          <Pressable style={styles.photoEditButton} onPress={onPressPhoto}>
            <Ionicons name="pencil" size={12} color={colors.white} />
          </Pressable>
        ) : null}
      </View>

      <Field label="Ваше имя" value={value.name} onChangeText={(name) => onChange({ ...value, name })} />
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
        <SvgXml xml={calendarIconXml} width={20} height={20} />
      </Pressable>

      <Modal
        transparent
        animationType="slide"
        visible={isBirthCalendarVisible}
        presentationStyle="overFullScreen"
        statusBarTranslucent
        navigationBarTranslucent
        onRequestClose={() => setIsBirthCalendarVisible(false)}
      >
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

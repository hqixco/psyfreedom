import { useEffect, useState } from 'react';
import { BackChevronIcon } from '../../components/icons/BackChevronIcon';
import { typography } from '../../constants/theme';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  datingIncomingInvites,
  datingOutgoingInvites,
  DatingIncomingInvite,
  DatingOutgoingInvite,
} from './datingData';

type RequestsTab = 'incoming' | 'outgoing';

type DatingEventRequestsScreenProps = {
  onBack: () => void;
  setBottomTabsVisible?: (visible: boolean) => void;
};

function EventInviteCard({
  item,
  onDecline,
  onAccept,
}: {
  item: DatingIncomingInvite;
  onDecline: () => void;
  onAccept: () => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
        <Text style={styles.boldText}>{item.fromName}</Text> пригласил(а) Вас на выставку{' '}
        <Text style={styles.boldText}>«{item.eventTitle}»</Text> в {item.place}.
      </Text>

      <View style={styles.buttonsRow}>
        <Pressable style={styles.declineButton} onPress={onDecline}>
          <Text style={styles.declineText}>Не могу</Text>
        </Pressable>
        <Pressable style={styles.acceptButton} onPress={onAccept}>
          <Text style={styles.acceptText}>Принять</Text>
        </Pressable>
      </View>
    </View>
  );
}

function EventRequestCard({
  item,
  onCancel,
}: {
  item: DatingOutgoingInvite;
  onCancel: () => void;
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>
        Вы пригласили на выставку <Text style={styles.boldText}>«{item.eventTitle}»</Text> в {item.place}{' '}
        <Text style={styles.boldText}>{item.toName}</Text>
      </Text>

      <Pressable style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelText}>Отменить приглашение</Text>
      </Pressable>
    </View>
  );
}

export function DatingEventRequestsScreen({
  onBack,
  setBottomTabsVisible,
}: DatingEventRequestsScreenProps) {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<RequestsTab>('incoming');
  const [incomingInvites, setIncomingInvites] = useState(datingIncomingInvites);
  const [outgoingInvites, setOutgoingInvites] = useState(datingOutgoingInvites);

  useEffect(() => {
    if (!setBottomTabsVisible) {
      return;
    }

    setBottomTabsVisible(false);
    return () => setBottomTabsVisible(true);
  }, [setBottomTabsVisible]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 + insets.bottom }}
      >
        <View style={styles.header}>
          <Pressable onPress={onBack} style={styles.backButton}>
            <BackChevronIcon color="#3A0718" />
          </Pressable>
          <Text style={styles.title}>Мероприятия</Text>
        </View>

        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, activeTab === 'incoming' ? styles.tabActive : styles.tabInactive]}
            onPress={() => setActiveTab('incoming')}
          >
            <Text style={activeTab === 'incoming' ? styles.tabTextActive : styles.tabTextInactive}>
              Приглашения
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'outgoing' ? styles.tabActive : styles.tabInactive]}
            onPress={() => setActiveTab('outgoing')}
          >
            <Text style={activeTab === 'outgoing' ? styles.tabTextActive : styles.tabTextInactive}>
              Заявки
            </Text>
          </Pressable>
        </View>

        {activeTab === 'incoming'
          ? incomingInvites.map((item) => (
              <EventInviteCard
                key={item.id}
                item={item}
                onDecline={() => {
                  console.log('decline invite', item.id);
                  setIncomingInvites((prev) => prev.filter((invite) => invite.id !== item.id));
                }}
                onAccept={() => {
                  console.log('accept invite', item.id);
                  setIncomingInvites((prev) => prev.filter((invite) => invite.id !== item.id));
                }}
              />
            ))
          : outgoingInvites.map((item) => (
              <EventRequestCard
                key={item.id}
                item={item}
                onCancel={() => {
                  console.log('cancel outgoing invite', item.id);
                  setOutgoingInvites((prev) => prev.filter((invite) => invite.id !== item.id));
                }}
              />
            ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 12,
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  tabs: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tab: {
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#F50057',
  },
  tabActive: {
    backgroundColor: '#F50057',
  },
  tabInactive: {
    backgroundColor: '#FFFFFF',
  },
  tabTextActive: {
    fontSize: 16,
    ...typography.Inter[700],
    color: '#FFFFFF',
  },
  tabTextInactive: {
    fontSize: 16,
    ...typography.Inter[700],
    color: '#3A0718',
  },
  card: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0E3E8',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#3A0718',
  },
  boldText: {
    ...typography.Inter[700],
  },
  buttonsRow: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  declineButton: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#F50057',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  declineText: {
    fontSize: 15,
    ...typography.Inter[700],
    color: '#F50057',
  },
  acceptButton: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F50057',
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptText: {
    fontSize: 15,
    ...typography.Inter[700],
    color: '#FFFFFF',
  },
  cancelButton: {
    marginTop: 16,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#F50057',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 15,
    ...typography.Inter[700],
    color: '#F50057',
  },
});


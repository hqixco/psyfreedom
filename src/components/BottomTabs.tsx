import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { theme } from '../constants/theme';
import { getBottomTabsHeight } from './bottomTabsLayout';
import {
  CatalogTabIcon,
  HomeTabIcon,
  LikeTabIcon,
  MessageTabIcon,
  UserTabIcon,
} from './TabIcons';

type BottomTabsProps = {
  bottomInset: number;
  isModalOpen?: boolean;
};

type TabKey = 'home' | 'like' | 'catalog' | 'message' | 'user';

export function BottomTabs({ bottomInset, isModalOpen = false }: BottomTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKey>('home');
  const bottomTabsHeight = getBottomTabsHeight(bottomInset);

  return (
    <View
      style={[
        styles.container,
        isModalOpen ? styles.containerModalOpen : null,
        { height: bottomTabsHeight, paddingBottom: Math.max(bottomInset, 10) },
      ]}
    >
      <Pressable style={styles.tabButton} onPress={() => setActiveTab('home')}>
        <View style={activeTab === 'home' ? styles.activeIconWrap : undefined}>
          <HomeTabIcon active={activeTab === 'home'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => setActiveTab('like')}>
        <View style={activeTab === 'like' ? styles.activeIconWrap : undefined}>
          <LikeTabIcon active={activeTab === 'like'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => setActiveTab('catalog')}>
        <View style={activeTab === 'catalog' ? styles.activeIconWrap : undefined}>
          <CatalogTabIcon active={activeTab === 'catalog'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => setActiveTab('message')}>
        <View style={activeTab === 'message' ? styles.activeIconWrap : undefined}>
          <MessageTabIcon active={activeTab === 'message'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => setActiveTab('user')}>
        <View style={activeTab === 'user' ? styles.activeIconWrap : undefined}>
          <UserTabIcon active={activeTab === 'user'} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 12,
    backgroundColor: theme.white,
    borderTopWidth: 1,
    borderTopColor: theme.tabBorder,
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: -3 },
    elevation: 8,
  },
  containerModalOpen: {
    borderTopWidth: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
  },
  tabButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  activeIconWrap: {
    shadowColor: '#07849A',
    shadowOpacity: 0.14,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
});

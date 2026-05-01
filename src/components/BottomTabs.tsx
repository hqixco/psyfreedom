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

export type TabKey = 'home' | 'like' | 'catalog' | 'message' | 'user';

type BottomTabsProps = {
  bottomInset: number;
  isModalOpen?: boolean;
  activeTab?: TabKey;
  onTabPress?: (tab: TabKey) => void;
};

export function BottomTabs({ bottomInset, isModalOpen = false, activeTab, onTabPress }: BottomTabsProps) {
  const [internalActiveTab, setInternalActiveTab] = useState<TabKey>('home');
  const bottomTabsHeight = getBottomTabsHeight(bottomInset);
  const currentActiveTab = activeTab ?? internalActiveTab;

  const handleTabPress = (tab: TabKey) => {
    if (activeTab === undefined) {
      setInternalActiveTab(tab);
    }

    onTabPress?.(tab);
  };

  return (
    <View
      style={[
        styles.container,
        isModalOpen ? styles.containerModalOpen : null,
        { height: bottomTabsHeight, paddingBottom: Math.max(bottomInset, 10) },
      ]}
    >
      <Pressable style={styles.tabButton} onPress={() => handleTabPress('home')}>
        <View style={currentActiveTab === 'home' ? styles.activeIconWrap : undefined}>
          <HomeTabIcon active={currentActiveTab === 'home'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => handleTabPress('like')}>
        <View style={currentActiveTab === 'like' ? styles.activeIconWrap : undefined}>
          <LikeTabIcon active={currentActiveTab === 'like'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => handleTabPress('catalog')}>
        <View style={currentActiveTab === 'catalog' ? styles.activeIconWrap : undefined}>
          <CatalogTabIcon active={currentActiveTab === 'catalog'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => handleTabPress('message')}>
        <View style={currentActiveTab === 'message' ? styles.activeIconWrap : undefined}>
          <MessageTabIcon active={currentActiveTab === 'message'} />
        </View>
      </Pressable>

      <Pressable style={styles.tabButton} onPress={() => handleTabPress('user')}>
        <View style={currentActiveTab === 'user' ? styles.activeIconWrap : undefined}>
          <UserTabIcon active={currentActiveTab === 'user'} />
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

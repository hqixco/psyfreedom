export const BOTTOM_TABS_BASE_HEIGHT = 44;

export function getBottomTabsHeight(bottomInset: number) {
  return BOTTOM_TABS_BASE_HEIGHT + Math.max(bottomInset, 10);
}

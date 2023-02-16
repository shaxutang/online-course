export type FilterStateProvider = {
  filterState: Record<string, any>
  setFilterState: (name: string, value: any) => void
  registerClearInvoke: (clear: () => void) => void
}

export type ActivityStateProvider = {
  type: 'single' | 'multi'
  activityState: Record<string, any>
  setActivityState: (val: any) => void
}

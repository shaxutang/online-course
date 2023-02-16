export const install: UseModule = ({ app, isClient, initialState }) => {
  const pinia = createPinia()
  app.use(pinia)
  if (isClient) {
    pinia.state.value = initialState.pinia || {}
  } else {
    initialState.pinia = pinia.state.value
  }
}

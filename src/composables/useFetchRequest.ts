import { createFetch } from '@vueuse/core'

const useFetchRequest = createFetch({
  baseUrl: '/api'
})

export default useFetchRequest

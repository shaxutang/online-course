<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

defineProps<{
  id: string
  title: string
  description: string
  commentCount: number
  price: string
}>()

defineEmits(['goShoppingCart', 'onCollection'])
</script>

<template>
  <div v-bind="$attrs" class="flex max-h-40 space-x-4">
    <div class="flex-1/5 b-rd-2 overflow-hidden">
      <img
        src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d15cw65ipctsrr.cloudfront.net/00/9e8c55f145402c8d9fb0ff4f9a0074/2._Real-World-PM-Product-Management-.png?auto=format%2Ccompress&dpr=1&w=330&h=330&fit=fill&q=25"
        alt=""
        class="object-cover object-center wfull hfull"
      />
    </div>
    <div class="flex-4/5">
      <h1 class="text-xl font-bold single-line-ellipsis">
        {{ title }}
      </h1>
      <div class="text-gray-600 text-sm ellipsis-line-2 break-all">
        {{ description }}
      </div>
      <div class="flex justify-between items-center">
        <five-star :star-count="4" />
        <div class="text-xs text-gray-400">({{ commentCount }}条评论)</div>
      </div>
      <div class="flex justify-between items-center !mt6">
        <div class="text-3xl text-red-500 font-bold">${{ price }}</div>
        <div class="space-x-4">
          <a href="#" @click.stop="$emit('onCollection', $el)" title="收藏">
            <FontAwesomeIcon
              :icon="faStar"
              class="text-gray hover:text-yellow-500"
            />
          </a>
          <v-button
            class="!text-white bg-red hover:bg-red-500"
            @click="$emit('goShoppingCart', $el)"
          >
            <template #icon>
              <FontAwesomeIcon :icon="faShoppingCart" />
            </template>
            加入购物车
          </v-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'
import HomeCourseFilter from './HomeCourseFilter.vue'
</script>

<template>
  <div class="flex">
    <aside class="flex-1/5 pr10">
      <div class="sticky top-10">
        <h1 class="text-xl font-bold mb6">筛选依据</h1>
        <home-course-filter />
      </div>
    </aside>
    <div class="flex-3/5">
      <div
        class="not-last:mb8 not-last:border-b-1 not-last:pb8"
        v-for="index in 10"
        :key="index"
      >
        <course-sale
          v-bind="{
            id: index + '',
            title: 'Real-World Product Management',
            description:
              ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit placeat,error minus optio qui nemo assumenda consectetur molestiae a voluptatesadipisci, amet at debitis quisquam enim, vel ut minima labore.',
            commentCount: 170,
            price: '199'
          }"
          class="max-w-unset mxauto"
          @go-shopping-cart="$message.success('已加入购物车')"
          @on-collection="$message.info('已收藏')"
        />
      </div>
      <div class="text-center">
        <a
          href="#"
          class="text-sm hover:text-blue hover:decoration-underline"
          @click.stop
          >加载更多</a
        >
      </div>
    </div>
    <div class="flex-1/5">
      <div class="sticky top-10 space-y-4">
        <div
          class="cursor-pointer w10 h10 lh-10 mxauto text-center b-rd-50 bg-slate-100"
        >
          <FontAwesomeIcon :icon="faShoppingCart" class="text-red-500" />
        </div>
        <div
          class="cursor-pointer w10 h10 lh-10 mxauto text-center b-rd-50 bg-slate-100"
        >
          <FontAwesomeIcon :icon="faStar" class="text-yellow" />
        </div>
      </div>
    </div>
  </div>
</template>

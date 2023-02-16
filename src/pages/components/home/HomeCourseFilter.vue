<script lang="ts" setup>
const { themeVisible, levelVisible, courseTimeVisible } = toRefs(
  reactive({
    themeVisible: false,
    levelVisible: false,
    courseTimeVisible: false
  })
)
const filter = ref({
  theme: '',
  courseTime: [],
  level: []
})
</script>

<template>
  <filters v-model:filter="filter">
    <fold
      title="主题"
      class="py4 not-last:border-t-1 last:border-t-1 last:border-b-1"
      v-model:visible="themeVisible"
    >
      <activities name="theme" class="space-y-2">
        <activity
          class="cursor-pointer"
          :key="index"
          v-slot="{ isActive }"
          v-for="index in 4"
        >
          <star-radio
            v-bind="{
              starCount: index,
              checked: isActive,
              dataCount: index * 100
            }"
          />
        </activity>
      </activities>
    </fold>
    <fold
      title="级别"
      class="py4 not-last:border-t-1 last:border-t-1 last:border-b-1"
      v-model:visible="levelVisible"
    >
      <activities name="level" type="multi" class="space-y-2">
        <activity
          class="cursor-pointer"
          :key="index"
          v-slot="{ isActive }"
          v-for="index in 4"
        >
          <title-checkbox
            v-bind="{
              title: `level ${index}`,
              checked: isActive,
              dataCount: index * 100
            }"
          />
        </activity>
      </activities>
    </fold>
    <fold
      title="课程长度"
      class="py4 not-last:border-t-1 last:border-t-1 last:border-b-1"
      v-model:visible="courseTimeVisible"
    >
      <activities name="courseTime" type="multi" class="space-y-2">
        <activity
          class="cursor-pointer"
          :key="index"
          v-slot="{ isActive }"
          v-for="index in 4"
        >
          <title-checkbox
            v-bind="{
              title: `${index}-${index + 1}小时`,
              checked: isActive,
              dataCount: index * 100
            }"
          />
        </activity>
      </activities>
    </fold>
  </filters>
</template>

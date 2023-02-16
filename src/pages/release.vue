<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faClose } from '@fortawesome/free-solid-svg-icons'
import EpisodeModal from './components/release/EpisodeModal.vue'

type FormState = {
  title: string
  description: string
  price: string
  episodes: CourseCatalogue[]
}

const visible = ref<boolean>(false)

const formState = reactive<FormState>({
  title: '',
  description: '',
  price: '',
  episodes: [
    {
      episode: '1',
      video: '',
      title: 'Vue简介',
      description: 'xxxx'
    },
    {
      episode: '2',
      video: '',
      title: 'Vue的初体验',
      description: 'xxxx'
    }
  ]
})

function episodeRemove(index: number) {
  const episodes = formState.episodes
  episodes.splice(index, 1)
  formState.episodes = episodes
}

function onOk(episode: CourseCatalogue) {
  formState.episodes = [...formState.episodes, episode]
}
</script>

<template>
  <section class="min-hfull bg-gray-100">
    <page-header title="发布" description="发布您录制的课程" shadow />
    <div class="py16 px8">
      <div class="p8 bg-white b-rd-2">
        <div class="w150 mxauto">
          <v-form>
            <v-form-item label="课程名称">
              <v-input v-model:value="formState.title" />
            </v-form-item>
            <v-form-item label="课程简介">
              <v-textarea v-model:value="formState.description" />
            </v-form-item>
            <v-form-item label="价格">
              <v-input v-model:value="formState.price" />
            </v-form-item>
            <v-form-item>
              <author
                v-bind="{
                  avatar: '/logo.png',
                  name: 'Yang',
                  description: '全栈工程师'
                }"
              />
            </v-form-item>
            <v-form-item label="剧集">
              <episode-modal v-model:visible="visible" @ok="onOk" />
              <div>
                <div
                  class="cursor-pointer flex items-center space-x-2 my2 border-1 border-dashed text-slate-600 text-sm p2 hover:bg-gray-100"
                  v-for="(episode, index) in formState.episodes"
                  :key="episode.episode"
                >
                  <div>{{ episode.episode }}</div>
                  <div>{{ episode.title }}</div>
                  <div class="flex-auto text-right">
                    <FontAwesomeIcon
                      :icon="faClose"
                      class="cursor-pointer"
                      @click="episodeRemove(index)"
                    />
                  </div>
                </div>
              </div>
              <v-button
                class="wfull py3 hover:bg-gray-100 transition-all"
                @click="visible = true"
              >
                <template #icon>
                  <FontAwesomeIcon :icon="faPlus" />
                </template>
                新增一集
              </v-button>
            </v-form-item>
          </v-form>
        </div>
      </div>
    </div>
  </section>
</template>

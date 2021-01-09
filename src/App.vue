<template>
  <div class="w-full flex justify-between">
    <div class="link-panel flex flex-col w-auto mx-20">
      <AppLink />
    </div>
     <div class="main-panel flex flex-col flex-1 mt-5">
       <router-view></router-view>
     </div>
    <div class="news-panel flex w-auto mx-20 mt-10">
      <NewsLink />
    </div>
  </div>
</template>

<script>
import AppLink from './components/AppLink.vue';
import NewsLink from './components/NewsLink.vue';

export default {

  components: {
    AppLink,
    NewsLink
  }
}
</script>

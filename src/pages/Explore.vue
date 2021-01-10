<template>
  <div class="flex flex-col border">
    <div class="border">
      <div class="bg-gray-100 py-1 px-4 mt-2 rounded-3xl">
        <i class="fas fa-search mr-2"></i>
        <input type="text" placeholder="Search Twitter" class="bg-gray-100 w-5/6">
      </div>
      <div class="flex justify-evenly p-5">
        <a href="#">For you</a>
        <a href="#">News</a>
        <a href="#">Sports</a>
        <a href="#">Science</a>
        <a href="#">Entertainment</a>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex justify-center my-2">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="flex flex-col border p-2">
        <p class="text-xs text-gray-500">Trending in India</p>
        <p>#VueIsFun</p>
        <p class="text-xs text-gray-500">2.02M Tweets</p>
      </div>
      <div class="flex flex-col border p-2">
        <p class="text-xs text-gray-500">Trending . Football</p>
        <p>Real Madrid</p>
        <p class="text-xs text-gray-500">5217 Tweets</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="flex flex-col">
    <div>
      <p class="text-lg font-bold">Test User</p>
      <p class="text-xs">25 Tweets</p>
    </div>
    <div>
      <img src="../assets/logo.png" class="banner">
    </div>
    <div>
      <p class="text-lg font-bold">Test User</p>
      <p>@testU</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>
        <i class="fas fa-map"></i>
        <span>location</span>
        <i class="fas fa-map"></i>
        <span>Joined August 2020</span>
      </p>
      <p>50 Following 50 Followers</p>
    </div>
    <div class="flex justify-evenly">
      <a href="#">Tweets</a>
      <a href="#">Tweets & replies</a>
      <a href="#">Media</a>
      <a href="#">Likes</a>
    </div>
    <div class="flex flex-col border rounded-lg mt-1 p-3">
      <div class="flex items-center">
        <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
        <p class="ml-2">
          Test User
          <span class="text-xs">@testU </span>
          <span class="text-xs"> 57m</span>
        </p>
      </div> 
      <div class="post flex flex-col justify-center content-center">
        <p class="ml-10 mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, molestias!</p>
        <div class="flex justify-center mt-2">
          <img src="../assets/logo.png" alt="" height="300" width="300" class="border rounded-lg p-2">
        </div>
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
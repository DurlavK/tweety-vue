<template>
  <div class="flex flex-col border">
    <div class="border">
      <p class="text-lg font-bold mb-5 p-2">Notifications</p>    
      <div class="flex justify-evenly">
        <a href="#" class="p-2">All</a>
        <a href="#" class="p-2">Mentions</a>
      </div>
    </div>
    <div class="flex px-5 py-2">
      <i class="fas fa-star text-purple-800 fa-lg pt-1"></i>
      <div class="flex flex-col rounded-lg ml-2">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
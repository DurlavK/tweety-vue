<template>

  <div class="flex mb-2">
    <p class="text-xl ml-2">Home</p>
  </div>
  
  <div class="flex flex-col border rounded-lg p-3">
    <div class="flex items-center">
      <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
      <p class="ml-2">Whats happening?</p>
    </div> 
    <textarea name="" id="" rows="2"></textarea>
    <hr />
    <div class="mt-5 bg-blue-400 px-5 py-1 rounded-xl text-white w-20">
      <p>Tweet</p>
    </div>
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
</template>

<script>
export default {

}
</script>

<style>

</style>
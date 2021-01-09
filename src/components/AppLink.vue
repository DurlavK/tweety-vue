<template>

  <div class="wflex flex-col">
      <div class="mt-5">
        <img src="../assets/logo.png" alt="" class="" height="50" width="50">
      </div>

      <div class="mt-5 flex flex-col align-center">
        <router-link 
        v-for="item in list"
        :key="item.to"
        class="px-2 flex my-2"
        :to="item.to"
        >
        <img src="../assets/logo.png" alt="" class="" height="30" width="30">
        {{item.title}}
        </router-link>
      </div>

      <div class="mt-5 flex bg-blue-400 px-5 py-2 rounded-3xl text-white justify-center w-40">
        <p>Tweet</p>
      </div>
      <div class="mt-20 flex align-center">
        <img src="../assets/logo.png" alt="" class="rounded-lg" height="30" width="30">
        <div class="ml-5">
          <p>Test User</p>
          <p>@testU</p>
        </div>
        <p class="ml-5">...</p>
      </div>

    </div>


</template>

<script>
export default {
  data() {
    return {
      list: [
        {title: 'Home', to: '/'},
        {title: 'Explore', to: '/explore'},
        {title: 'Notifications', to: '/notifications'},
        {title: 'Messages', to: '/messages'},
        {title: 'Profile', to: '/profile'},
        {title: 'More', to: '/more'},
      ]
    };
  }
  
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
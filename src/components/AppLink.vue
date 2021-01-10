<template>

  <div class="flex flex-col">
      <div class="mt-5">
        <i class="fab fa-twitter text-blue-400 fa-2x"></i>
      </div>

      <div class="mt-5 flex flex-col">
        <router-link 
        v-for="item in list"
        :key="item.to"
        class="flex my-2 items-center"
        :to="item.to"
        >
        <div class="mr-2"><i :class=item.icon class="fa-2x text-blue-400"></i></div>
        <div class="ml-2">{{item.title}}</div>
        </router-link>
      </div>

      <div class="mt-5 flex bg-blue-400 py-2 rounded-3xl text-white justify-center">
        <p>Tweet</p>
      </div>
      <div class="mt-20 flex items-center">
        <div class="rounded-full bg-blue-200 ">
          <img src="../assets/logo.png" height="40" width="40" class="rounded-full" alt="">
        </div>
        <div class="ml-5 mr-5">
          <p class="text-base">Test User</p>
          <p class="text-xs">@testU</p>
        </div>
        <i class="fas fa-ellipsis-h"></i>
      </div>

    </div>


</template>

<script>
export default {
  data() {
    return {
      list: [
        {title: 'Home', to: '/', icon: 'fas fa-home'},
        {title: 'Explore', to: '/explore', icon: 'fas fa-hashtag'},
        {title: 'Notifications', to: '/notifications', icon: 'fas fa-bell'},
        {title: 'Messages', to: '/messages', icon: 'fas fa-envelope'},
        {title: 'Profile', to: '/profile', icon: 'fas fa-user-alt'},
        // {title: 'More', to: '/more', icon: 'fas fa-chevron-circle-down'},
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
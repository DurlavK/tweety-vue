<template>
  <div class="w-full flex flex-row justify-between">
    <div class="link-panel flex flex-col lg:w-1/6">
      <AppLink />
    </div>
     <div class="main-panel flex flex-col mx-10 flex-1">
       <router-view></router-view>
     </div>
    <div class="news-panel flex lg:w-1/6 p-2">
      <div class="flex flex-col w-full">
        <div class="flex bg-blue-200 w-60 mt-5 mx-auto rounded-lg p-2">
          <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
          <p class="ml-2">Search here</p>
        </div> 
        <p class="text-center mt-5">Whats happening</p>
        <div class="flex bg-blue-200 w-60 my-2 mx-auto rounded-lg p-2 justify-between">
          <div>
            <p class="ml-2">News title</p>
          <p class="ml-2">lorem desc</p>
          </div>
          <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
          
        </div>
         <div class="flex bg-blue-200 w-60 my-2 mx-auto rounded-lg p-2 justify-between">
          <div>
            <p class="ml-2">News title</p>
          <p class="ml-2">lorem desc</p>
          </div>
          <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
          
        </div>
         <div class="flex bg-blue-200 w-60 my-2 mx-auto rounded-lg p-2 justify-between">
          <div>
            <p class="ml-2">News title</p>
          <p class="ml-2">lorem desc</p>
          </div>
          <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
          
        </div>
         <div class="flex bg-blue-200 w-60 my-2 mx-auto rounded-lg p-2 justify-between">
          <div>
            <p class="ml-2">News title</p>
          <p class="ml-2">lorem desc</p>
          </div>
          <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
          
        </div>
         <div class="flex bg-blue-200 w-60 my-2 mx-auto rounded-lg p-2 justify-between">
          <div>
            <p class="ml-2">News title</p>
          <p class="ml-2">lorem desc</p>
          </div>
          <img src="../assets/logo.png" alt="" height="40" width="40" class="rounded-xl"> 
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from './components/AppLink.vue';

export default {

  components: {
    AppLink
  }
}
</script>

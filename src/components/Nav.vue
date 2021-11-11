<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();


const router = useRouter();

const loggingOut = () => {
    logout();
    router.push("/");
};
</script>


<template>
<div class="font-extrabold text-yellow-500 bg-blue-800 ">
<div class="container flex items-center justify-between mx-auto ">
    <!-- added router link to basicrouter icon -->
    <router-link to="/">
    <h1 class="px-4 py-8 text-3xl font-thin tracking-tighter over:cursor-pointer hover:bg-white hover:text-yellow-800">FakeAuth
        <span class="font-normal">Vue</span>
    </h1>
    </router-link>
    <nav>
    <ul class="flex space-x-4" >
        <!-- below are three different ways of routing, all are working -->
        <!-- notes for if need to reference later -->
        <router-link to="/">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">Homepage</li>
        </router-link>
        <router-link :to="{name: 'About'}">
         <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">About</li>
        </router-link>
        <router-link 
        v-if="!isAuthenticated"
        :to="{ path: '/login', name: 'Login'}">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">Login</li>
        </router-link>

        <div v-else class="flex">
      <router-link  :to="{ path: '/secret', name: 'Secret'}">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">Secret</li>
        </router-link> 
        <button @click="loggingOut">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">Log Out</li>
        </button>
        </div>
  
    </ul>
    </nav>
</div>
</div>
</template>
<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated,user }= useAuth();
</script>

<template>
<div class="flex flex-col items-center justify-center space-y-12 h-screen-nonav">
<h1 v-if="!isAuthenticated"
class="text-6xl tracking-tighter font-extralight">Merry Christmas! Please Login <span v-if="isAuthenticated">{{user}}</span></h1>
<h1 v-else class="text-6xl tracking-tighter font-extralight">Merry Christmas! Welcome <span v-if="isAuthenticated">{{user}}</span></h1>


<img class="h-64" src="../assets/bgindex.png" alt="Hello Holidays"> 

   
</div>
</template>
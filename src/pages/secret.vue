<script setup>
import { onUnmounted, ref } from 'vue';
import useChat from '../composable/useChat';

const {messages, unsubcribe} = useChat()

const newMessage = ref('');

onUnmounted(() => {
    unsubcribe()
})

</script>
<template>
<h1 class="mt-8 text-6xl font-thin tracking-tighter text-center"
>Cool Chat
</h1>
<div class="min-h-[500px] w-full mt-8 rounded-lg shadow-2xl flex flex-col justify-between">
<ul class="p-4 space-y-4">
    <li v-for="message in messages" :key="message.id">
     <div class="flex justify-between ">
        <span>{{message.text}} </span><span> {{message.author}}</span>
            </div>
        </li>
    </ul>
<div>
<input class="w-full p-4 rounded-lg focus:outline-none focus:bg-blue-300" type="text" placeholder="Type a message..." v-model="newMessage" />

</div>
</div>
</template>

<template>
<h1 class="mt-8 text-6xl font-thin tracking-tighter text-center"
>Cool Chat
</h1>
<div class="min-h-[500px] w-full mt-8 rounded-lg shadow-2xl flex flex-col justify-between">
<ul class="p-4 space-y-4">
    <li v-for="n in 5">
     <div class="flex justify-between ">
        <span>Message Itself </span><span> By Author name</span>
            </div>
        </li>
    </ul>
<div>
<input class="w-full p-4 rounded-lg focus:outline-none focus:bg-blue-300" type="text" placeholder="Type a message..." />
</div>
</div>
</template>

<script setup>
import { useRouter} from "vue-router";
import { ref } from "vue";
import { useForm, useField } from 'vee-validate';
import * as yup from "yup";

const schema = yup.object({
   username: yup.string().required().email().label("Email!"),
   password: yup.string().required().min(8).label("Password"),
});

useForm({
   validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

import useAuth from "../composable/useAuth";
import useError from "../composable/useError";

const { isAuthenticated, login, signup, googleLogin } = useAuth();

const router = useRouter();

const logginIn = async () => {
   await login(username.value, password.value);
   goToHome();
};

const signingUp = async () => {
   await signup(username.value, password.value);
   goToHome();
};

const google = async () => {
   await googleLogin();
   goToHome();
};

const goToHome = () => {
     if (isAuthenticated.value) {
      router.push("/");
   } else {
      setError("Invalid Username or Password");
      start();
   }
};

const { error, setError } = useError();

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { ready, start } = useTimeout(5000, {controls: true});
</script>

<template>
<div class="flex flex-col items-center justify-center space-y-12 bg-gray-200 rounded min-h-screen-nonav">
   <div class="flex items-center justify-center rounded-lg shadow-2xl ">
   
   <img class="h-64" src="../assets/bglogin.png" alt="Hello Holidays">
   <form  @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4" >
      <input 
      name="username"
      type="text" 
      class="py-2 border-2 rounded-lg" 
      placeholder="Email"
      v-model="username"
      />
      <span class="text-red-800 text-center text-xl bg-black">{{ emailError }}</span>
       <input 
       name="password"
       type="password" 
       class="py-2 border-2 rounded-lg"
       placeholder="Password" 
       v-model="password"
       />
      <span class="text-red-800 text-center text-xl bg-black px-4">{{ passwordError }}</span>
       <div class="flex space-x-2">
       <button type="submit" @submit.prevent="logginIn" 
       class="w-1/2 py-2 text-yellow-500 bg-blue-800 rounded-lg" >
       Login
       </button>
      <button  @click="signingUp" 
       class="w-1/2 py-2 text-yellow-500 bg-yellow-200 rounded-lg px-4" >
       Sign Up
       </button>
        </div>
       <button @click="google"
       class="bg-white flex justify-center rounded-lg hover:bg-grey-300">
       <img src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
               alt="">
      </button>
      
       </form>
   </div>
   <div v-if="!ready && error"
   class="absolute w-1/2 px-4 text-center text-red-800 bg-red-300 rounded-lg top-4 center-4">{{ error }}</div>
   </div>

</template>
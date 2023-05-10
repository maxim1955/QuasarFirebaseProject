<template>
  <q-page class="q-pa-lg flex flex-center">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form
        @submit.stop
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="email"
          label="Your email"
          hint="Name and surname"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Your age *"
          placeholder="Password"
        />

        <div>
          <q-btn @click="register" label="Submit" type="submit" color="primary"/>
          <q-btn @click="reset" label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>
      </q-form>
    </div>
  </q-page>

</template>


<script setup>

import {ref} from "vue";

import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from "src/firebase";
import {useRouter} from "vue-router";


const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log('Successfully')
      router.push('/Help')
    })
    .catch((error) => {
      console.log(error.code)
    })

};

const reset = () => {
  email.value = '';
  password.value = ''
}
</script>

<style scoped>

</style>

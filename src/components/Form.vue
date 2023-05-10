<template>
  <div class="addTask ">
    <q-input
      @keyup.enter="addNewTask"
      v-model="newTask"
      dense
      placeholder="Add task"
      bg-color="white"
      square
      class="q-date--bordered input"
    >
      <template v-slot:append>
        <q-icon name="task" @click="addNewTask"/>
      </template>
    </q-input>
  </div>
</template>

<script setup>

import {defineEmits, ref} from 'vue'
const newTask = ref('')
const emit = defineEmits(['sendToParent'])

/*
*
* */
const addNewTask = () => {
  emit('sendToParent', {
    task: newTask.value,
    done: false,
    id: Date.now()
  })
  newTask.value = ''
}


</script>

<style scoped>
.input {
  padding: 10px;
  cursor: pointer;
}
</style>

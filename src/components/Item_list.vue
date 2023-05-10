<template>
  <q-list separator bordered>
    <q-item
      @click="togglerItem(task)"
      clickable
      :class="{ done: task.done }"
    >
      <q-item-section avatar>
        <q-checkbox
          v-model="task.done"
          val="teal"
          color="teal"
          class="no-pointer-events"
        />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ task.task }}</q-item-label>
      </q-item-section>
      <q-item-section v-if="task.done" side>
        <q-btn
          @click.stop="deleteTask"
          flat round color="red" icon="delete"/>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup>
import {defineEmits, defineProps} from 'vue'

const props = defineProps({
  task: Object,
})


const emit = defineEmits(['deleteTask', 'toggleritem'])
const deleteTask = (index) => {
  emit('deleteTask', index)
};

const togglerItem = (task) => {
  emit("toggleritem",task)
};


</script>

<style scoped>

</style>

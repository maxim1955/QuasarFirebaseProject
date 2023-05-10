<template>
  <div class="taskdone text-center text-h4 ">
    Выполненные задачи
  </div>
  <div class="list_items" v-for="task of donetodos">
    <q-list separator bordered>
      <q-item>
        <q-item-section avatar>
          <q-checkbox
            val="teal"
            color="teal"
            class="no-pointer-events"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="done_text">{{ task.task }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            color="green-5"
            @click="returnTask(task,task.id)"
          >вернуть
          </q-btn>
        </q-item-section>
        <q-item-section side>
          <q-btn
            color="red-6"
            @click="deleteTaskDone(task.id)"
          >Удалить
          </q-btn>
        </q-item-section>

      </q-item>
    </q-list>
  </div>


</template>

<script setup>
import {defineEmits, onMounted, ref} from "vue";
import {collection, deleteDoc, onSnapshot, query, doc, addDoc} from "firebase/firestore";
import {db} from '../firebase/index'


const collectionDB = collection(db, "todos")
const collectionDone = collection(db, "doneTodos")
const todoCollectionRQuery = query(collectionDone);

const donetodos = ref([])
onMounted(() => {
  onSnapshot(todoCollectionRQuery, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        task: doc.data().title,
        done: doc.data().done
      };
      fbTodos.push(todo);
    });
    donetodos.value = fbTodos
  })
})
const quantity = defineEmits(['quantity'])
quantity('quantity',donetodos.value.length)
/*
* return Task
* */
const returnTask = (task,id)=>{
  addDoc(collectionDB, {
    title: task.task,
    done: false,
  });
  deleteTaskDone(id)
}

/*
* delete task
* */
const deleteTaskDone = (id) => {
  console.log(id)
  deleteDoc(doc(collectionDone, id))
}
</script>

<style scoped>
.done_text {
  color: red;
  text-decoration: line-through;
}
</style>

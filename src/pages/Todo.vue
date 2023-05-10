  <template>
  <div class="todo_wrapper">
    <div class="q-pa-md">
      <div class="q-gutter-sm">
        <Form @sendToParent="addNewTask"/>
      </div>
      <Item_list
        :task="task"
        @deleteTask="deleteTask(task)"
        @toggleritem="togglerItem(task.id)"
        v-for="(task,index) of tasks"
        :key="task.id"
      />
      <list/>
      <div class="noneTask  text-center text-h4" v-if="!tasks.length">
        <q-icon
          name="check"
          size="300px"
          color="red"
          class="text-center"
        />
        <div class="none_text">None tasks</div>
      </div>
    </div>
  </div>
</template>

<script setup>

import Form from "components/Form.vue";
import Item_list from '../components/Item_list.vue'
import {onMounted, ref} from "vue";
import List from "components/list.vue";
import useQuasar from 'quasar/src/composables/use-quasar.js';
import {addDoc, collection, doc, onSnapshot, query, updateDoc,deleteDoc} from "firebase/firestore";
import {db} from '../firebase/index'


const tasks = ref([])
const $q = useQuasar()
const collectionDB = collection(db, "todos")
const todoCollectionRQuery = query(collectionDB);
const collectionDone = collection(db, "doneTodos")


/*
* get from FB
*/
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
    tasks.value = fbTodos
  })
})
/*
*toggler
* */
const togglerItem = (id) => {
  const findDone = tasks.value.findIndex(todo => todo.id === id)
  updateDoc(doc(collectionDB, id), {
    done: !tasks.value[findDone].done
  });
};
/*
* add new task to FB
 */
const addNewTask = (task) => {
  console.log(task)
  addDoc(collectionDB, {
    title: task.task,
    done: false
  });


}

/*
* delete task
* */
const deleteTask = (task) => {
  console.log(task)
  $q.dialog({
    title: "Кануть в лету",
    message: "Ты точно сделал?",
    ok: {
      push: true
    },
    cancel: {
      push: true,
      color: "negative"
    },
    persistent: true
  })
    .onOk(() => {
      addDoc(collectionDone, {
        title: task.task,
        done: true
      });
      deleteDoc(doc(collectionDB, task.id))
      $q.notify({
        message: "Удаляю",
        color: "secondary",
        timeout: 1000
      });
    });
}
</script>


<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: red;
  }
}

</style>

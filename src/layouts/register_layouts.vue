<template>
  <q-layout>
    <div class="bg-red text-center text-h2">Страница рeгистрации</div>
    <q-item to="/Register" exact clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="help"/>
      </q-item-section>
      <q-item-section>Зарегестрироваться</q-item-section>
    </q-item>
  </q-layout>
</template>


<script>

import Register_pages from "pages/Register_pages.vue";

export default {
  name: "register_layouts",
  components: {Register_pages},
}
</script>

<style scoped>

</style>

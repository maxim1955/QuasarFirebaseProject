<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">My list</div>
        <div class="text-subtitle">{{ addDate }}</div>
      </div>
      <q-img
        class="absolute-top header_image"
        src="../assets/header_image.jpg"
      />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
      class="drawer"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "

      >
        <q-list padding>
          <q-item to="/todo" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section> Task</q-item-section>
          </q-item>

          <q-item to="/taskdone" exact clickable v-ripple @quantity="quantity(num)">
            <q-item-section avatar class="">
              <q-icon name="check" color="green" size="30px" />
              <p>{{num}}</p>
            </q-item-section>
            <q-item-section>Task is done </q-item-section>


          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section> Help</q-item-section>
          </q-item>

          <q-item to="/about" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="link" />
            </q-item-section>

            <q-item-section> About</q-item-section>
          </q-item>

          <q-item to="/Register" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section> Help</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="60px" class="q-mb-lg">
            <img src="../assets/mylogo.jpg" />
          </q-avatar>
          <q-btn color="red btn_signout">Quit</q-btn>
          <div class="text-weight-bold">Balbes of year</div>
          <div>@maxon6</div>

        </div>
      </q-img>

    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink
  },

  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      quantity(num){
        return num
      }
    };
  },
  computed: {
    addDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "dddd DD YYYY");
    },

  }
});
</script>
<style lang="scss">
.header_image {
  height: 100%;
  z-index: -1;
  opacity: 0.8;
}
.btn_signout{
  position: absolute;
  bottom: 10px;
  right: 20px;
}
</style>

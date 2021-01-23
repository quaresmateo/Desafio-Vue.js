<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-green">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>{{ title }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item
              :key="index"
              clickable
              :active="$route.path === menuItem.label"
              v-ripple
              :to="`/${menuItem.label}`"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'person',
    label: 'Entrar',
    separator: true
  },
  {
    icon: 'dashboard',
    label: 'Dashboard',
    separator: false
  },
  {
    icon: 'healing',
    label: 'Medicamentos',
    separator: false
  }
]

export default {
  name: 'MainLayout',
  data: () => ({
    drawer: false,
    menuList,
    title: ''
  }),
  created() {
    this.getTitle()
  },
  methods: {
    getTitle() {
      if (this.$route.path) {
        console.log(this.$route)
        this.title = this.$route.name
      } else {
        this.title = 'Desafio Vue'
      }
    }
  }
}
</script>

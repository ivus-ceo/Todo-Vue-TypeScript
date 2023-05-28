<template>
  <main class="container">
    <TodosForm />
    <TodosList :todos="store.todos" />
  </main>
</template>

<script setup lang="ts">
  import TodosForm from './components/Todos/Form.vue'
  import TodosList from './components/Todos/List.vue'
  import { useStore } from './stores/store'

  const store = useStore()
</script>

<style scoped>
  main.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .todo-form,
  .todo-list {
    width: 600px;
  }
</style>

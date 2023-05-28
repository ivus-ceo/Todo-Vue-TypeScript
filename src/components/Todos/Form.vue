<template>
  <form class="todo-form" @submit.prevent="handleSubmit">
    <label for="add-todo" class="todo-form__label">To Do Name</label>
    <input
      id="add-todo"
      class="todo-form__input"
      type="text"
      v-model="title"
      autocomplete="false"
    />
    <button type="submit" class="todo-form__button">Add to the list</button>
  </form>
</template>

<script setup lang="ts">
  import { useStore } from '@/stores/store.js'
  import { ref } from 'vue'

  const title = ref('')

  const handleSubmit = (event: Event) => {
    if (title.value.length === 0) return

    const store = useStore()
    store.addTodo(title.value)
    title.value = ''
  }
</script>

<style scoped>
  .todo-form {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .todo-form__label {
    text-transform: uppercase;
  }

  .todo-form__input {
    flex: 1;
    border: none;
    height: 2rem;
    outline: none;
    padding: 0 0.5rem;
    background-color: #fff;
    border-radius: 1rem;
  }

  .todo-form__button {
    border: none;
    height: 2rem;
    outline: none;
    cursor: pointer;
    padding: 0 1rem;
    color: #fff;
    border-radius: 1rem;
    background-color: dodgerblue;
  }
</style>

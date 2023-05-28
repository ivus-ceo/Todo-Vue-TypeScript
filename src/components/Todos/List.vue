<template>
  <TransitionGroup class="todo-list" name="todo-list" tag="ul">
    <TodosItem v-for="todo in props.todos" :key="todo.id" :todo="todo" />
  </TransitionGroup>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import TodosItem from '@/components/Todos/Item.vue'
  import type TodosInterface from '@/interfaces/Todos.js'

  const props = defineProps<{
    todos: TodosInterface[]
  }>()
</script>

<style scoped>
  .todo-list {
    padding: 0;
    margin: 1rem 0 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .todo-list-move,
  .todo-list-enter-active,
  .todo-list-leave-active {
    transition: all 0.5s ease;
  }

  .todo-list-enter-from,
  .todo-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .todo-list-leave-active {
    position: absolute;
  }
</style>

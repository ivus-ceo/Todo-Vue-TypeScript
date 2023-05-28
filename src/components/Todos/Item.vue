<template>
  <li class="todo-item" :class="{ active: todo.isCompleted }">
    <div class="todo-item__title" @click="handleToggleClick">
      {{ todo.title }}
    </div>
    <div class="todo-item__delete" @click="handleDeleteClick">X</div>
  </li>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import { useStore } from '@/stores/store'
  import type TodosInterface from '@/interfaces/Todos.js'

  const store = useStore()
  const props = defineProps<{
    todo: TodosInterface
  }>()
  const todo = props.todo

  const handleToggleClick = (event: Event) => {
    const div = event.target as HTMLDivElement
    const li = div.parentNode as HTMLLIElement
    li.classList.toggle('active')
    store.updateTodo(todo.id)
  }

  const handleDeleteClick = (event: Event) => {
    store.deleteTodo(todo.id)
  }
</script>

<style scoped>
  .todo-item {
    color: #000;
    display: flex;
    gap: 1rem;
    align-items: center;
    user-select: none;
  }
  .todo-item.active .todo-item__title {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .todo-item__title {
    flex: 1;
    height: 2rem;
    display: flex;
    padding: 0 1rem;
    cursor: pointer;
    align-items: center;
    border-radius: 1rem;
    transition: 0.2s all;
    background-color: #fff;
  }

  .todo-item__delete {
    color: #fff;
    width: 2rem;
    height: 2rem;
    display: flex;
    cursor: pointer;
    font-weight: bold;
    align-items: center;
    border-radius: 1rem;
    justify-content: center;
    background-color: darkred;
  }
</style>

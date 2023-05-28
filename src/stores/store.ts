import { ref, watch, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'
import useStorage from '@/compositions/useStorage'
import type TodoInterface from '@/interfaces/Todos'

const storeKey = 'todos-store'

export const useStore = defineStore(storeKey, () => {
  const storageTodos = useStorage(storeKey) as TodoInterface[]
  const defaultTodos: TodoInterface[] = [
    {
      id: '1',
      title: 'Write Code',
      isCompleted: true,
    },
    {
      id: '2',
      title: 'Buy Milk',
      isCompleted: false,
    },
    {
      id: '3',
      title: 'Tell a joke',
      isCompleted: false,
    },
  ]

  const todos: Ref<TodoInterface[]> = ref(
    storageTodos && storageTodos.length > 0 ? storageTodos : defaultTodos
  )

  /**
   * Watch changes for collection and update it in storage
   */
  watch(
    todos,
    () => {
      localStorage.setItem(storeKey, JSON.stringify(todos.value))
    },
    { deep: true }
  )

  /**
   * Adds todo to the list and storage
   *
   * @param title
   */
  const addTodo = (title: string): void => {
    const todo: TodoInterface = {
      id: uuid(),
      title: title,
      isCompleted: false,
    }

    todos.value.push(todo)
  }

  /**
   * Updates todo complete by id
   *
   * @param id
   */
  const updateTodo = (id: string): void => {
    const todo = getTodoById(id)
    if (todo) todo.isCompleted = !todo.isCompleted
  }

  /**
   * Delete todo from the list
   *
   * @param id
   */
  const deleteTodo = (id: string): void => {
    const index = todos.value.findIndex((todo) => todo.id === id)
    todos.value.splice(index, 1)
  }

  /**
   * Get todo by id
   *
   * @param id
   *
   * @returns todo | undefined
   */
  const getTodoById = (id: string): TodoInterface | undefined => {
    const todo = todos.value.find((todo) => {
      if (todo.id === id) {
        return todo
      }
    })

    if (!todo) return undefined

    return todo
  }

  return { todos, addTodo, updateTodo, deleteTodo, getTodoById }
})

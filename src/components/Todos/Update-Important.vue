<script setup>
import TodosAdd from './TodosAdd.vue';
import TodosImportant from './TodosImportant.vue';
import { useTodoStore } from '@/stores/use-todo.js';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length <1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("important",content);
}

</script>

<template>
  <div class="wrapper  py-6 px-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Important Todos</h1>
    <!-- <TodosAdd class="mb-4" @todo="todoHandler"></TodosAdd> -->
    <TodosImportant></TodosImportant>
  </div>

</template>

<style lang="scss" scoped>
</style>
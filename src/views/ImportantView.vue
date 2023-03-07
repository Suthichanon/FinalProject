<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosImportant from '../components/Todos/TodosImportant.vue';
import { useTodoStore } from '../stores/use-todo';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length <1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("important",content);
}

</script>

<template>
  <div class="wrapper bg-fuchsia-300 py-6 px-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Important Todos</h1>
    <TodosAdd class="mb-4" @todo="todoHandler"></TodosAdd>
    <TodosImportant></TodosImportant>
  </div>

</template>

<style lang="scss" scoped>
</style>
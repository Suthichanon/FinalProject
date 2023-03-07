<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosPlanned from '../components/Todos/TodosPlanned.vue';
import { useTodoStore } from '../stores/use-todo';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length < 1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("planned", content);
}

</script>

<template>
  <div class="wrapper bg-pink-200 py-6 px-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Planned Todos</h1>
    <TodosAdd class="mb-4" @todo="todoHandler"></TodosAdd>
    <TodosPlanned></TodosPlanned>
  </div>
</template>

<style lang="scss" scoped>

</style>
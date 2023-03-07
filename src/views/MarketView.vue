<script setup>
import TodosAdd from '../components/Todos/TodosAdd.vue';
import TodosMarket from '../components/Todos/TodosMarket.vue';
import { useTodoStore } from '../stores/use-todo';

const todoStore = useTodoStore();

const todoHandler = (content) => {
  let text = content.trim();
  if (text.length < 1 || text == "") return alert("Invalid input");
  todoStore.addTodoList("market", content)
}

</script>

<template>
  <div class="wrapper bg-violet-500 py-6 px-4 flex flex-col items-center">
    <h1 class="text-2xl font-bold mb-4">Market Todos</h1>
    <TodosAdd class="mb-4" @todo="todoHandler"></TodosAdd>
    <TodosMarket></TodosMarket>
  </div>
</template>

<style lang="scss" scoped>

</style>
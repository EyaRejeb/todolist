<script setup>
import { ref } from 'vue';
const newTodoText = ref("");
const emit = defineEmits(['eventAdd']); // définir l'événement eventAdd

const addTodo = () => {
  if (newTodoText.value.trim() !== "") {
    emit("eventAdd", newTodoText.value.trim());
    newTodoText.value = ""; 
  }
};
</script>
<template>
 <form @submit.prevent="addTodo">
 <input v-model="newTodoText" type="text" placeholder="Nouvelle tâche" />
 <button type="submit">Ajouter</button>
 </form>
</template>


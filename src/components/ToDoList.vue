<script setup>
import { reactive, onMounted } from "vue";
import { Chose } from "../Chose.js";
import ToDoForm from "./ToDoForm.vue";
import ToDoListItem from "./ToDoListItem.vue";



defineProps(["chose", "index"]);
const emit = defineEmits(["faireToggle", "deleteItem"]);

const listeC = reactive([]);

const getToDos = async () => {
    const response = await fetch("https://apitodo.pecatte.fr/api/1/todos");
    const data = await response.json();
    listeC.length = 0; 
    data.forEach((todo) => {
      listeC.push(new Chose(todo.id, todo.libelle, todo.fait));
    });
};

onMounted(() => {
  getToDos();
});

const handlerAdd = async (libelle) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch("https://apitodo.pecatte.fr/api/1/todos", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ libelle: libelle }), // Envoi uniquement du libellé
    });
    const newTodo = await response.json();
    listeC.push(new Chose(newTodo.id, newTodo.libelle, newTodo.fait)); // Ajout dans la liste locale
};

function handlerFaire(index) {
  listeC[index].faire();
}
function handlerDelete(index) {
  listeC.splice(index, 1);
}

</script>
<template>
  <ToDoForm @eventAdd="handlerAdd"></ToDoForm>
  <h3>Liste des choses à faire</h3>
<ul>
  <ToDoListItem
        v-for="(chose, index) in listeC"
        :key="chose.id"
        :chose="chose"
        :index="index"
        @faireToggle="handlerFaire"
        @deleteItem="handlerDelete"
      ></ToDoListItem>
    </ul>
</template>

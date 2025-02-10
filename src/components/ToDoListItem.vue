<script setup>
defineProps(["chose", "index"]);

const emit = defineEmits(["faireToggle", "deleteItem"]);
</script>

<template>
  <li>
    {{ chose.toString() }}
    <button @click="emit('faireToggle', index)">
      {{ chose.fait ? "Défaire" : "Faire" }}
    </button>
    <button @click="emit('deleteItem', index)">Delete</button>
  </li>
</template>

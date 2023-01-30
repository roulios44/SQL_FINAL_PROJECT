<template>
  <div>
    <select v-model="selectedName" @change="updateId">
      <option v-for="item in items" :value="item.name">{{ item.name }}</option>
    </select>
    <p>Selected ID: {{ selectedId }}</p>
  </div>
</template>

<script>
import navBar from '@/components/navBar.vue';
export default {
  data() {
    return {
      items: [{ name: 'item1', id: 1 }, { name: 'item2', id: 2 }],
      selectedName: '',
      selectedId: ''
    }
  },
  components :{
    navBar,
  },
  methods: {
    updateId() {
      let selectedItem = this.items.find(item => item.name === this.selectedName);
      this.selectedId = selectedItem.id;
    }
  }
}
</script>
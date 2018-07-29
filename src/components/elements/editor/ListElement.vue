<template>
    <div class="element-editor list-element-editor">

        <h3>Content</h3>

        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                <label>{{index}}.</label>
                <input v-model="items[index]" type="text" placeholder="index">
                <button @click="delItem(index)">-</button>
            </li>
        </ul>

        <button @click="addItem">Add item</button>

        <button @click="saveItems">save items</button>

        <h3>Style</h3>

        <label>Font Size</label>
        <input v-model="element.style.fontSize" type="range" name="fontSize" />

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
  name: "list-element-editor",
  props: ["element"],
  components: { FormFields },
  data() {
    return {
      items: [3]
    };
  },
  methodes: {
    saveItems() {
      this.element.data.text = this.items;
    },
    delItem(index){
        this.items.splice(1,index);
    },
    addItem(){
        // 2 ways todo check
        this.items.map((item)=> ++item);
        //  this.items.push( this.items[this.items.length - 1] + 1);
    }
  }
};
</script>

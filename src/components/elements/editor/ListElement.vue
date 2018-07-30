<template>
    <div class="element-editor list-element-editor">

        
         <h3>Content</h3>
        <form-fields :fields="content" />

        <button @click="addItem">Add item</button>

        <button @click="saveItems">save items</button>

       <h3>Style</h3>
       <form-fields :fields="styles" />

    </div>
</template>

<script>
import FormFields from '@/components/controls/FormFields.vue';

export default {
  name: "list-element-editor",
  props: ["element"],
  components: { FormFields },
  created() {
         this.items = this.element.data.text;
  },
  data() {
    return {
      items: null,
      content: [
                {
                    cmp: 'input-text',
                    name: 'text',
                    label: 'Text',
                    placeholder: 'Enter some text...',
                    value: this.element.data.text
                },
            ],
            styles: [
                {
                    cmp: 'input-range',
                    name: 'fontSize',
                    label: 'Font Size',
                    value: this.element.styles.fontSize
                }
            ]
    };
  },
  methods: {
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

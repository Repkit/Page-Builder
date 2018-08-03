<template>
    <div class="input-range-field" v-if="newField">

        <label>{{newField.label}}</label>
        <div class="flex">
            <input v-model="newField.value" @input="update" :min="newField.min" :max="newField.max"
                :step="newField.step" type="range" name="newField.name" />
            <input v-model="newField.value" @input="update" :min="newField.min" :max="newField.max"
                :step="newField.step" type="number" name="newField.name" />
        </div>

    </div>
</template>

<script>
export default {
    name: 'input-range-field',
    props: [ 'field', 'idx' ],
    data() {
        return {
            newField: null
        }
    },
    methods: {
        update() {
            let unit = ( this.newField.unit ) ? this.newField.unit : '';
            this.newField.value += unit;
            this.$emit('change', this.newField.name, this.newField.value, this.idx);
        }
    },
    watch: {
        field: {
            immediate: true,
            handler() {
                this.newField = JSON.parse(JSON.stringify(this.field));
                this.newField.value = parseInt(this.newField.value) || parseInt(this.newField.default) || 0;
                this.newField.min = ( this.newField.min ) ? this.newField.min : '0';
                this.newField.max = ( this.newField.max ) ? this.newField.max : '100';
                this.newField.step = ( this.newField.step ) ? this.newField.step : '1';
                this.newField.unit = ( this.newField.unit ) ? this.newField.unit : '';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
input[type='number'] {
    width: 60px;
}
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin-right: 15px;
  border: 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 0.5px #000000, 0px 0px 0px #0d0d0d;
  background: #aaaaaa;
  border-radius: 0px;
  border: 0px solid #aaaaaa;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 1px 1px 2px #aaaaaa, 0px 0px 1px #b7b7b7;
  border: 0px solid #aaaaaa;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #aaaaaa;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 0.5px #000000, 0px 0px 0px #0d0d0d;
  background: #aaaaaa;
  border-radius: 0px;
  border: 0px solid #aaaaaa;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 2px #aaaaaa, 0px 0px 1px #b7b7b7;
  border: 0px solid #aaaaaa;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #aaaaaa;
  border: 0px solid #aaaaaa;
  border-radius: 0px;
  box-shadow: 0px 0px 0.5px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: #aaaaaa;
  border: 0px solid #aaaaaa;
  border-radius: 0px;
  box-shadow: 0px 0px 0.5px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 2px #aaaaaa, 0px 0px 1px #b7b7b7;
  border: 0px solid #aaaaaa;
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  height: 1px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #aaaaaa;
}
input[type=range]:focus::-ms-fill-upper {
  background: #aaaaaa;
}
</style>

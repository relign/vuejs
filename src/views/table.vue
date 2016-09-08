<template lang="html">
  <div id="searchBar" class="form-group">
    Search <input type="text"  v-model="searchQuery" />
    <simple-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery" ></simple-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery:'',
      gridColumns:['name','age','sex'],
      gridData:[{
        name:'Jack',
        age:30,
        sex:'Male'
      },{
        name:'Bill',
        age:26,
        sex:'Female'
      },{
        name:'Chris',
        age:36,
        sex:'Male'
      }]
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {
    'simpleGrid':require('../components/table/simple-grid.vue')
  }
};
</script>

<style lang="css">
</style>

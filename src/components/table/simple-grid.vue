<template lang="html">
  <table class="table">
    <thead>
      <tr>
        <th v-for='col in columns' >
          {{ col | capitalize }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='entry in data | filterBy filterKey'>
        <td v-for='col in columns'>
          {{ entry[col] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props:{
    data:Array,
    columns:Array,
    filterKey:String
  },
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>

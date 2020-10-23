<template>
  <div class="home">
    <p>
      count:
      <b>{{ count }}</b>
    </p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <hr />
    <p>
      myString:
      <b>{{ myString }}</b>
    </p>
    <br />
    <input v-model="string" type="text" name="myString" value="" />
    <p>
      <button @click="setString">Set String</button>
      <br />
      <br />
      <button @click="deleteString">Delete String</button>
    </p>
    <small>
      This will storage the information in an encrypted manner in the local store
    </small>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      string: ''
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    myString() {
      return this.$store.state.string;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    setString() {
      this.$store.commit('myString', this.string);
    },
    deleteString() {
      this.$store.commit('myString');
    }
  }
};
</script>

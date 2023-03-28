<script setup>
import MessageComposer from './components/MessageComposer.vue'
</script>

<template>
  <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
    <MessageComposer></MessageComposer>
  </div>
  
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>


  <main>
    <TheWelcome />
  </main> -->

  <!-- <div>{{ $hello('Soulter') }}</div>

  <input v-model="name"/>


  <Comp :name="name" @reset="(arg) => {name = arg+''}" class="ok" @click="clickme"></Comp> -->
</template>

<script>
  import {computed} from 'vue'

  export default {
    data() {
      return {
        name: "OK"
      }
    },
    methods: {
      clickme() {
        console.log("clicked!")
      }
    },
    provide() {
      return {
        providerName: computed( () => this.name + "_provided")
      }
    }
  }
</script>

<style scoped>

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}

</style>
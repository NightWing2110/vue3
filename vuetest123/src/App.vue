<template>
  <h1 class="fade">Hellooooooooooooooooo</h1>
  <base-modal 
    title="this is new title form app component" 
    content="this is the content modal"
    theme="example"/>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue';

export default {
  name: 'App',
  components: {
    BaseModal: ModalComponent
  },
  data() {
    return {};
  },
  methods: {
    onChange()
    {
    }
  },
}
</script>

<style>

</style>
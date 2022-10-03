<template>
  <h1 class="fade">Hellooooooooooooooooo</h1>
  <teleport to="body">
    <base-modal 
  v-if="isShowModal"
    title="this is new title form app component" 
    content="this is the content modal"
    theme="example"
    @cancel="onToggleModal">
    <template v-slot:header>
      <h2>This is the header</h2>
    </template>
    <template v-slot:footer>
      <button @click="onToggleModal">Cancel</button>
    </template>
  <label for="">Name</label>
  <input type="password"/>
  </base-modal>
  </teleport>
    <button @click="onToggleModal">Toggle Modal</button>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue';

export default {
  name: 'App',
  components: {
    BaseModal: ModalComponent
  },
  data() {
    return {
      isShowModal: false
    };
  },
  methods: {
    onToggleModal()
    {
      this.isShowModal = !this.isShowModal;
    }
  },
}
</script>

<style>

</style>
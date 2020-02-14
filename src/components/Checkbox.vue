<template>
    <div>
        <i class="mdi" v-bind:class="active ? 'active mdi-checkbox-marked-outline' : 'mdi-checkbox-blank-outline'" @click="$emit('on-change', !active)"></i>
        <span>Mesclar perfil</span>
    </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
      active: Boolean
  }
}
</script>
<style scoped>
.active {
    color: #00a946
}
.mdi {
    color: #999;
    cursor: pointer;
}
</style>
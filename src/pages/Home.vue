<template>
  <div class="page-wrapper">Home</div>
</template>

<script setup lang="ts">
  // import { login } from '@/api/user/index.ts'
  import { getUrlQueryParam, getUrlVars } from '@/utils/util.ts'
  import { onMounted } from 'vue'
  console.log(getUrlQueryParam('name'), getUrlVars())

  onMounted(() => {
    // login({
    //   name: 'zhangsan',
    //   pwd: '23lh423lk4h23'
    // }).then((res: any) => {
    //   console.log(res)
    // })
  })

</script>

<style lang="less" scoped>
.page-wrapper{
  font-size: 36px;
}
</style>
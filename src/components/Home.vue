<template>
  <div>hi</div>
</template>
<script>
import {testData} from '../api/api.js'
export default {
  data () {
    return {}
  },
  mounted () {
    testData({
      query: '',
      pagenum: 1,
      pagesize: 10
    }).then(res => {
      console.log('123')
    })
  }
}
</script>
<style>

</style>

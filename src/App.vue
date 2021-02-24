<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {

  },
  // data(){
  //   return {
  //     res:{}
  //   }
  // },
  mounted(){
    // storage.setItem('a',1)
    //本地加载请求json文件的格式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // });
    //通过平台
    // this.axios.get('user/login.json').then((res)=>{
    //   this.res=res;
    // });
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>

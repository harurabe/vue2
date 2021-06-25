<template>
  <router-view/>
</template>

<script>
// export default {
//   methods: {
//     redirect () {
//       this.$router.push({ name: 'Home' })
//     },
//     back () {
//       this.$router.go(-1)
//     },
//     forward () {
//       this.$router.go(1)
//     }
//   }
// }
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

#step {
  position: absolute;
  top: 0;/*画像の左上に配置*/
  left: 0;
  margin: 0; /*余計な隙間を除く*/
  color: white;/*文字を白に*/
  background: skyblue;/*背景色*/
  font-size: 18px;
  line-height: 1;/*行高は1に*/
  padding: 5px 10px;/*文字周りの余白*/
}

  label {
    display: inline-block;
    margin: 0 10px 0 10px;
}
</style>

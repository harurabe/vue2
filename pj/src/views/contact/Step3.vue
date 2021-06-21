<template>
<div class="box is-primary is-outlined">
  <div class="notification">
      <p id="step">STEP 3</p>
      <h5 class="title is-5 has-text-centered">ご相談内容をご記入ください</h5>
  </div>
  <div class="container is-size-5">
    <h5 class="subtitle is-5 is-primary has-text-info"> - ご相談内容 - </h5>
    <textarea class="textarea" rows="10" v-model="message"></textarea>
  </div>
</div>

  <div class="container" align="center">
    <button class="button is-primary is-size-5" @click="backward">&lt; 前へ戻る</button>
    <button class="button is-primary is-size-5" @click="forward">次へ進む &gt;</button>
  </div>

</template>

<script>
export default {
  name: 'Step3',
  data () {
    return {
      message: ''
    }
  },
  computed: {
  },
  methods: {
    forward() {
      this.$router.push({ name: 'Survey3' })
    },
    backward() {
      this.$router.go(-1)
    }
  }

  } 
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

button {
  margin: 0 10px;
}
</style>
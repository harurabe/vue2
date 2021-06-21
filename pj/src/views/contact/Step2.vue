<template>
<div class="box is-primary is-outlined">
  <div class="notification">
      <p id="step">STEP 2</p>
      <h5 class="title is-5 has-text-centered">以下にお答えください</h5>
  </div>
  <div class="container is-size-5" v-for="survey in surveys" :key="survey.id">
    <div v-show="survey.display">
      <h5 class="subtitle is-5 is-primary has-text-info">{{ survey.question }}</h5>
      <input type='radio' value="1" v-model="survey.answer" v-on:click="toggle(survey.id)">
      <label for="male">はい</label>
      <input type='radio' value="0" v-model="survey.answer" v-on:click="toggle(survey.id)">
      <label for="female">いいえ</label>
      <br><br>
    </div>
  </div>
</div>

  <div class="container" align="center">
    <button class="button is-primary is-size-5" @click="backward">&lt; 前へ戻る</button>
    <button class="button is-primary is-size-5" @click="forward">次へ進む &gt;</button>
  </div>

</template>

<script>
export default {
  name: 'Step2',
  data () {
    return {
      surveys: [
        { question: '現在、生命保険に加入されていますか？', id: 0, answer: '', display: true },
        { question: '現在入院中ですか。または、最近３ヵ月以内に意思の診察・件さの結果、入院・手術をすすめられたことはありますか', id: 1, answer: '', display: false },
        { question: '過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？', id: 2, answer: '', display: false }
      ]
    }
  },
  computed: {
  },
  methods: {
    toggle(index) {
      if (index < this.surveys.length - 1) {
        this.surveys[index+1].display = true
      }
    },
    forward() {
      this.$router.push({ name: 'Step3' })
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
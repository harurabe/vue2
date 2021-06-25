<template>
<div class="box is-primary is-outlined">
  <div class="notification">
      <p id="step">STEP 1</p>
      <h5 class="title is-5 has-text-centered">お客様の情報を入力してください</h5>
  </div>
  <div class="container is-size-5">
    <h5 class="subtitle is-5 is-primary has-text-info">- 性別 -</h5>
    <input name='status' type='radio' id='male' value="男性" v-model="customer.gender">
    <label for="male">男性</label>
    <input name='status' type='radio' id='female' value="女性" v-model="customer.gender">
    <label for="female">女性</label>
    
  <br><br>

    <h5 class="subtitle is-5 has-text-info">- 生年月日 -</h5>
    <select id="year" v-model="customer.birthyear">
      <option v-for="y in years" :key="y" :value="y.year">{{ y.text }}</option>
    </select>
    <label for="year">年</label>
    <select id="month" v-model="customer.birthmonth">
      <option v-for="n in 12" :key="n">{{ n }}</option>
    </select>
    <label for="month">月</label>
    <select id="day" v-model="customer.birthday">
      <option v-for="n in days" :key="n">{{ n }}</option>
    </select>
    <label for="day">日</label>

  </div>
</div>

<div class="container" align="center">
  <button class="button is-primary is-size-5" @click="forward">次へ進む ></button>
</div>

</template>

<script>
import mylib from "../../utils/mylib"

export default {
  name: 'Step1',
  data () {
    return {
      customer: 
        { 
          gender: '',
          birthyear: '1992',
          birthmonth: '1',
          birthday: '1'
        },
      years: '',
    }
  },
  mounted() {
      this.years = mylib.getYears(100);
  },
  computed: {
    days() {
      return new Date(this.customer.birthyear, this.customer.birthmonth, 0).getDate();
    }
  },
  methods: {
    forward() {
      this.$router.push({ name: 'Step2' })
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
</style>


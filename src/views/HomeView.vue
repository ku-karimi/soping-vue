<template>
  <!-- crate header that is a linck to another page -->
  <a :href="linck" class="headerLinck">
    <header class="headerHome" ref="head"></header>
  </a>
  <nav class="headerNav">
    <i v-for="item in items" :key="item" class="scrollIcons" :class="{ active: item == index }" @click="changeHeaderHandeler(item)"></i>
  </nav>
  <!-- body section -->
   <BodyHome/>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import BodyHome from './bodyHome.vue'
// variabels
const items = reactive([0, 1, 2])
const head = ref(null)
const index = ref(0)
const linck = ref('linck1')
// background img addres and header lincks array
const listHeader = reactive([
  { img: './src/img/chiled-header.jpg', linck: '#' },
  { img: './src/img/man-header.jpg', linck: '#' },
  { img: './src/img/woman-header.jpg', linck: '#' },
])
// change background
function changeBackground() {
  index.value = (index.value + 1) % listHeader.length
  head.value.style.backgroundImage = `url(${listHeader[index.value].img})`
  linck.value = listHeader[index.value].linck
}
// click on scroll icon to see her pages
function changeHeaderHandeler(item) {
  index.value = (item - 1)
  changeBackground()
}
// time out change background
onMounted(() => {
  setInterval(changeBackground,5000)
})

</script>

<style scoped>
.headerLinck {
  margin: 0px;
  padding: 0px;
}
.headerHome {
  width: 100%;
  height: 530px;
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: local;
  background-size: cover;
  background-image: url(./src/img/chiled-header.jpg);
  cursor: pointer;
}
.headerNav {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 25px;
  position: absolute;
  margin-top: -45px;
}
.scrollIcons {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  margin-left: 5px;
  cursor: pointer;
  border: 1px solid black;
}
.scrollIcons.active {
  border: 2px solid black;
}
</style>
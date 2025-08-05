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
  { img: './src/img/chiled-header.jpg', linck: 'linck1' },
  { img: './src/img/man-header.jpg', linck: 'linck2' },
  { img: './src/img/woman-header.jpg', linck: 'linck2' },
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
  setInterval(changeBackground,4000)
})

</script>
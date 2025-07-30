<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const data = reactive([
  {img:'./src/img/adorable-redhead-woman-looking-tender-smiling.jpg' , 
  titr:'Cloud for woman' ,
  p :'Lorem ipelit. Itaque blanditiis qui explicabo placeat animi quas suscipit reprehenderit pariatur ipsam voluptates?'},
  {img:'./src/img/young-bearded-man-with-round-glasses-denim-overalls.jpg',
  titr: 'Man clouds' ,
  p :'Lorem ipsum, dolor sit amet consectetur adipisicibo placeat animi quas suscipit reprehenderit pariatur ipsam voluptates?'},
  {img:'./src/img/modern-stationary-collection-arrangement.jpg' ,
  titr:'Electronic tools' ,
  p :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blanditiis qui explicabo placeat animi quas suscipit reprehenderit pariatur ipsam voluptates?'},
  {img:'./src/img/young-smiley-girl-portrait-pointing.jpg' ,
  titr: 'Child dress' ,
    p :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blandat animi quas suscipit reprehenderit pariatur ipsam voluptates?'},
])

const index = ref(0) ;
const titr = ref(data[0].titr);
const p = ref(data[0].p)
const header = ref(null)

onMounted(() => {
  setInterval(() => {
    header.value.style.animation = 'none';
    
    requestAnimationFrame(() => {
      index.value = (index.value + 1) % data.length;
      header.value.style.backgroundImage = `url(${data[index.value].img})`;
      titr.value = data[index.value].titr;
      p.value = data[index.value].p;
      
      requestAnimationFrame(() => {
        header.value.style.animation = 'Header 1s ease-in forwards';
      });
    });
  }, 5000);
});
</script>

<template>
  <div class="header" ref="header">
    <div class="headerText">
      <h2 class="text titr" v-text="titr" ></h2>
      <p class="text p" v-text="p" ></p>
    </div>
  </div>
  <div class="homeIcons">
    <img src="../img/right.png" alt="left" id="HeaderBtn">
    <img src="../img/left-removebg-preview_-_Copy-removebg-preview.png" alt="right" id="HeaderBtn">
  </div>
</template>

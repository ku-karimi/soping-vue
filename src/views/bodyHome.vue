<template>
  <section class="scrollSection">
    <ul class="scrollList">
      <li v-for="(item, index) in itemsBody" :key="index" class="itemBody">
        <div class="imgItem">
          <img :src="item.src" alt="product image" />
        </div>
        <div class="textItem">
          <p class="price">{{ item.price }}</p>
          <button class="buyBtn" :class="{ btnOn: item.num > 0 }" @click="buyHandler(index)">Buy</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const itemsBody = reactive([
  { key: 0, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${2.4}`, num: 0 },
  { key: 1, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${4.0}`, num: 0 },
  { key: 2, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${3.34}`, num: 0 },
  { key: 3, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${7.55}`, num: 0 },
  { key: 3, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${7.55}`, num: 0 },
  { key: 3, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${7.55}`, num: 0 },
  { key: 3, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${7.55}`, num: 0 },
  { key: 3, src: '../img/full-shot-kid-holding-flowers.jpg', price: `$ ${7.55}`, num: 0 },
])

const buyHandler = (index) => {
  itemsBody[index].num += 1
}
</script>

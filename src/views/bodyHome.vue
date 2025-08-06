<template>
  <section class="scrollSection">
    <ul class="scrollList">
      <li v-for="(item, index) in itemsBody" :key="index" class="itemBody">
        <div class="imgItem">
          <a href="#">
            <img :src="item.src" class="ScrollImg" alt="product image" />
          </a>
        </div>
        <hr />
        <div class="textItem">
          <p class="price">{{ item.price }}</p>
          <button class="buyBtn" v-if="item.num < 1" @click="addToBascket(item)">Buy</button>
          <button class="numShow" v-else>
            <span @click="item.num--" style="cursor: pointer">-</span>
            <span>{{ item.num }}</span>
            <span @click="item.num++" style="cursor: pointer">+</span>
          </button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const itemsBody = reactive([
  { key: 0, src: './src/img/full-shot-kid-holding-flowers.jpg', price: `$${2.4}`, num: 0 },
  { key: 1, src: './src/img/280x280.jpg', price: `$${4.0}`, num: 0 },
  { key: 2, src: './src/img/images.jpg', price: `$${3.34}`, num: 0 },
  { key: 3, src: './src/img/unnamed.jpg', price: `$${12.0}`, num: 0 },
  { key: 4, src: './src/img//white-frill-shirt-scaled.jpg', price: `$${2.2}`, num: 0 },
  { key: 5, src: './src/img/280x280.jpg', price: `$${9.3}`, num: 0 },
  { key: 6, src: './src/img/full-shot-kid-holding-flowers.jpg', price: `$${13.3}`, num: 0 },
])

function addToBascket(item){
  item.num++
}

</script>

<style scoped>
.scrollSection {
  margin-top: 20px;
  margin-bottom: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  width: 100%;
  scroll-behavior: smooth;
}
.scrollList {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 25px;
  background-color: var(--orange);
  border-radius: 0px 60px 0px 0px;
  width: fit-content;
  min-width: 100%;
  gap: 20px;
}
.itemBody {
  width: 200px;
  height: 300px;
  border: 1px solid #9e9e9eb8;
  box-shadow: 5px 10px 10px;
  background-color: var(--whit);
  flex-shrink: 0;
}
.imgItem {
  padding-top: 10px;
  width: 90%;
  margin: auto;
  padding-top: 3px;
  overflow: hidden;
  height: 80%;
  margin-bottom: 2px;
}
.ScrollImg {
  padding-top: 10px;
  transition: all 0.4s ease;
  width: 100%;
  object-fit: cover;
}
.imgItem:hover .ScrollImg {
  transform: scale(1.1);
}
.textItem {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 10px;
  align-items: center;
  height: 30px;
}
.price {
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid #000;
}
.buyBtn {
  background-color: var(--orange);
  border: 1px solid var(--shadow);
  color: var(--whit);
  font-size: 15px;
  font-weight: 700;
  width: 80px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 9px black;
  transition: all ease-in-out 0.4s;
  height: 30px;
}
.buyBtn:hover {
  font-size: 18px;
  font-weight: 900;
}
.numShow {
  display: flex;
  justify-content: space-evenly;
  padding: 3px;
  width: 80px;
  border: 2px solid orangered;
  box-shadow: 4px 5px 6px orangered;
  border-radius: 8px;
}
.numShow span {
  display: inline;
  position: relative;
  left: 0px;
}
</style>

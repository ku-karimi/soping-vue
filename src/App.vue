<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// varieybels
const menuBar = ref(null)
const bascketBar = ref(null)
const isMenuOpen = ref(false)
const isBascketOpen = ref(false)

// open-close mobile menu handeler

function menuHandler() {
  if (isBascketOpen.value) {
    bascketHandeler()
  }
  isMenuOpen.value = !isMenuOpen.value
  menuBar.value.style.animation = isMenuOpen.value
    ? 'in 0.5s ease-in forwards'
    : 'out 0.5s ease-in forwards'
}

// open and close bascket menu handeler

function bascketHandeler() {
  if (isMenuOpen.value) {
    menuHandler()
  }
  isBascketOpen.value = !isBascketOpen.value
  bascketBar.value.style.animation = isBascketOpen.value
    ? 'in 0.5s ease-in forwards'
    : 'out 0.5s ease-in forwards'
}
</script>

<template>
  <div class="content">
    <div class="nav-bar">
      <!-- logo -->
      <div>
        <p class="logo">LoGo</p>
      </div>
      <!-- router links -->
      <div class="links">
        <RouterLink class="links-router" to="/">Home</RouterLink>
        <RouterLink class="links-router" to="/About">About</RouterLink>
        <RouterLink class="links-router" to="/Contact">Contact us</RouterLink>
      </div>
      <!-- meni and basket card icon -->
      <div class="icons">
        <svg
          @click="bascketHandeler"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="shopping-cart"
        >
          <g>
            <polyline
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="5.93 9 27 9 24.03 18.89 8.9 18.89"
            ></polyline>
            <circle
              cx="11.33"
              cy="23.81"
              r="1.63"
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="round"
              stroke-miterlimit="10"
            ></circle>
            <circle
              cx="21.96"
              cy="23.81"
              r="1.63"
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="round"
              stroke-miterlimit="10"
            ></circle>
            <polyline
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="2.96 7 4.9 7 9.36 22.19 11.14 22.19"
            ></polyline>
            <line
              x1="9.36"
              x2="22.74"
              y1="11.46"
              y2="11.46"
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="round"
              stroke-miterlimit="10"
            ></line>
            <line
              x1="10.85"
              x2="18.28"
              y1="14.43"
              y2="14.43"
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="round"
              stroke-miterlimit="10"
            ></line>
            <line
              x1="11.68"
              x2="21.44"
              y1="22.19"
              y2="22.19"
              fill="none"
              stroke="#0c1f40"
              stroke-linecap="square"
              stroke-linejoin="round"
            ></line>
          </g>
        </svg>
        <svg
          @click="menuHandler"
          class="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="menu"
        >
          <g>
            <g>
              <rect width="24" height="24" opacity="0" transform="rotate(180 12 12)"></rect>
              <circle cx="4" cy="12" r="1"></circle>
              <rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"></rect>
              <rect width="18" height="2" x="3" y="16" rx=".94" ry=".94"></rect>
              <rect width="18" height="2" x="3" y="6" rx=".94" ry=".94"></rect>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <!-- mobile menu -->
    <div id="menu-bar" ref="menuBar">
      <div class="close" @click="menuHandler">X</div>
      <RouterLink class="links2" to="/">Home</RouterLink>
      <RouterLink class="links2" to="/About">About</RouterLink>
      <RouterLink class="links2" to="/Contact">Contact us</RouterLink>
    </div>
    <div id="bascketBar" ref="bascketBar">
      <div class="close" @click="bascketHandeler">X</div>
      <div class="box"></div>
      <div class="btnBox">
        <button class="Bascketbtn">Pay</button>
      </div>
    </div>
    <!-- view routers content -->
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
ز
  /* border botton for activ router */
.router-link-active,
.router-link-exact-active {
  border-bottom: 1px solid rgb(255, 211, 89);
}
</style>

<template>
  <div class="aboutBody">
    <div class="section1">
      <div class="cardSection">
        <h2 class="h">Lesson One 1</h2>
        <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum obcaecati ducimus excepturi repellat distinctio non sint perferendis delectus dolore. Error, laborum. Eum soluta laudantium asperiores odio, numquam rem molestias?</p>
      </div>
    </div>
    <div class="section1 section2">
      <div class="cardSection">
        <h2 class="h">Lesson Tow 2</h2>
        <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum obcaecati ducimuerferendis delectus dolore. Error, laborum. Eum soluta laudantium asperiores odio, numquam rem molestias?</p>
      </div>
    </div>
    <div class="aboutCards">
      <div class="aboutcard">
        <div class="imgCard">
          <img src="../img/paralyzed-asian-employee-working-call-center-reception-disability-friendly-office-female-operator-wheelchair-user-with-impairment-giving-assistance-customer-service-helpline.jpg" alt="img About"/>
        </div>
        <div class="textCard">
          <a href="tel:+980 000 000 000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quod!</a>
        </div>
      </div>
      <div class="aboutcard">
        <div class="imgCard">
          <img src="../img/young-graphic-designer-working-office.jpg" alt="img About"/>
        </div>
        <div class="textCard">
          <a href="tel:+980 000 000 000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quod!</a>
        </div>
      </div>
      <div class="aboutcard card3">
        <div class="imgCard">
          <img src="../img/standard-quality-control-collage-concept.jpg" alt="img About"/>
        </div>
        <div class="textCard">
          <a href="tel:+980 000 000 000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quod!</a>
        </div>
      </div>
    </div>
    <div class="section1">
      <div class="cardSection">
        <h2 class="h">Lesson Three 3</h2>
        <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum obcaecati ducimuerferendis delectus dolore. Error, laborum. Eum soluta laudantium asperiores odio, numquam rem molestias?</p>
      </div>
    </div>
    <div class="section1 section2">
      <div class="cardSection">
        <h2 class="h">Lesson Four 4</h2>
        <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit illum obcaecati ducimuerferendis delectus dolore. Error, laborum. Eum soluta laudantium asperiores odio, numquam rem molestias?</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.aboutBody {
  overflow: hidden;
  background-image: url(./src/img/fast-fashion-vs-slow-sustainable-fashion.jpg);
  width: 100%;
  height: 100%;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
.section1 {
  width: 100%;
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  margin-left: -30px;
}
.section2 {
  margin-left: 20px;
  justify-content: start;
}
.cardSection {
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 40%;
  background-color: #ffffff70;
  border-radius: 10px;
  box-shadow: 4px 6px 4px;
  border: 1px solid rgba(0, 0, 0, 0.557);
}
.h {
  color: var(--whit);
  font-size: 22px;
  font-weight: 700;
  text-shadow: 3px 4px 6px #000;
}
.p {
  text-align: justify;
  text-shadow: 3px 7px 8px #000;
}
.aboutCards {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 15px;
}
.aboutcard {
  width: 30%;
  background-color: #ffffffb5;
  border: 1px solid #00000055;
  border-radius: 10px;
  box-shadow: 3px 6px 6px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.imgCard img {
  border: 1px solid black;
  width: 100%;
  height: auto;
  box-shadow: 2px 2px 10px;
  margin-bottom: 6px;
  border-radius: 10px;
}
.textCard a {
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-shadow: 3px 3px 7px;
}

</style>
<template>
  <div class="box">
    <div class="partBox">
      <label for="name">Your Name:</label>
      <input @blur="validateName" type="text" name="name" maxlength="20" id="name" placeholder="Mr.Karimi" v-model="formData.name">
      <span class="error-message">{{ nameError }}</span>
    </div>

    <div class="partBox">
      <label for="email">Email:</label>
      <input @blur="validateEmail" type="email" name="email" id="email" placeholder="Karimi@gmail.com" v-model="formData.email">
      <span class="error-message">{{ emailError }}</span>
    </div>

    <div class="partBox">
      <label for="pass">Password:</label>
      <input @blur="validatePassword" type="password" name="pass" id="pass" placeholder="******" v-model="formData.pass">
      <span class="error-message">{{ passError }}</span>
    </div>

    <div class="partBox">
      <label for="boxText">Description:</label>
      <textarea @blur="validateDescription" type="textarea" name="boxText" maxlength="150" id="boxText" placeholder="Hello Need Help....." v-model="formData.descript" rows="4" cols="50"></textarea>
      <span class="error-message">{{ descriptError }}</span>
    </div>

    <div class="partBtn">
      <button @click="submitHandler" class="formBtn" :disabled="!isFormValid">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const formData = reactive({
  name: '',
  email: '',
  pass: '',
  descript: ''
});

// Error messages
const nameError = ref('');
const emailError = ref('');
const passError = ref('');
const descriptError = ref('');

// Validation functions
const validateName = () => {
  if (formData.name.length < 2) {
    nameError.value = 'Name should be at least 2 characters';
  } else {
    nameError.value = '';
  }
};

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    emailError.value = 'Please enter a valid email address';
  } else {
    emailError.value = '';
  }
};

const validatePassword = () => {
  const hasLetter = /[a-zA-Z]/.test(formData.pass);
  const hasNumber = /\d/.test(formData.pass);
  
  if (formData.pass.length < 6) {
    passError.value = 'Password should be at least 6 characters';
  } else if (!hasLetter || !hasNumber) {
    passError.value = 'Password should contain both letters and numbers';
  } else {
    passError.value = '';
  }
};

const validateDescription = () => {
  if (formData.descript.length < 10) {
    descriptError.value = 'Description should be more than 10 characters';
  } else {
    descriptError.value = '';
  }
};

// Form validation status
const isFormValid = computed(() => {
  return (
    !nameError.value &&
    !emailError.value &&
    !passError.value &&
    !descriptError.value &&
    formData.name &&
    formData.email &&
    formData.pass &&
    formData.descript
  );
});

const usersComments = reactive([]);

function submitHandler() {
  if (!isFormValid.value) return;
  
  const user = {
    name: formData.name,
    email: formData.email,
    pass: formData.pass,
    descript: formData.descript
  };
  
  usersComments.push(user);
  console.log('Submitted user:', user);
  
  // Reset form
  Object.assign(formData, {
    name: '',
    email: '',
    pass: '',
    descript: ''
  });
  
  // Clear errors
  nameError.value = '';
  emailError.value = '';
  passError.value = '';
  descriptError.value = '';
}
</script>

<style>
.bodyContact {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(./src/img/young-woman-surrounded-by-piles-clothes.jpg);
  background-position: top;
  background-size: cover;
}
.box {
  width: 40%;
  padding: 5px;
  margin: auto;
  position: relative;
  top: 35px;
  background: #ffffff70;
}
.partBox {
  width: 100%;
}
label {
  position: relative;
  left: 26px;
  display: block;
  color: var(--orange);
  font-size: 22px;
  font-weight: 800;
}
input,
textarea {
  position: relative;
  background-color: #ffffff7b;
  left: 50px;
  border: 1px solid var(--shadow);
  border-radius: 5px;
  width: 78%;
  height: 30px;
  color: var(--orange);
  padding-left: 15px;
  box-shadow: 3px 6px 8px gray;
  font-weight: 700;
}
#boxText {
  height: 100px;
}
input:focus,
textarea:focus {
  background-color: var(--shadow);
  color: var(--whit);
  box-shadow: 3px 3px 4px var(--orange);
  outline: none;
}
.partBtn {
  width: 100%;
  display: flex;
  justify-content: center;
}
.formBtn {
  width: 60%;
  height: 40px;
  background-color: var(--orange);
  border: none;
  font-size: 20px;
  font-weight: 900;
  margin-top: 17px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: var(--whit);
  cursor: pointer;
}
span {
  display: block;
  position: relative;
  left: 20px;
  font-size: 18px;
  font-weight: 700;
  color: rgb(255, 98, 0);
}
</style>
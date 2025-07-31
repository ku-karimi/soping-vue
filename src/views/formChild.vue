<template>
  <div class="box">
    <!-- Name Field -->
    <div class="partBox">
      <label for="name">Your Name:</label>
      <input 
        @blur="validateName" 
        type="text" 
        name="name" 
        maxlength="20" 
        id="name" 
        placeholder="Mr.Karimi" 
        v-model="formData.name"
      >
      <span class="error-message">{{ nameError }}</span>
    </div>

    <!-- Email Field -->
    <div class="partBox">
      <label for="email">Email:</label>
      <input 
        @blur="validateEmail" 
        type="email" 
        name="email" 
        id="email" 
        placeholder="Karimi@gmail.com" 
        v-model="formData.email"
      >
      <span class="error-message">{{ emailError }}</span>
    </div>

    <!-- Password Field -->
    <div class="partBox">
      <label for="pass">Password:</label>
      <input 
        @blur="validatePassword" 
        type="password" 
        name="pass" 
        id="pass" 
        placeholder="******" 
        v-model="formData.pass"
      >
      <span class="error-message">{{ passError }}</span>
    </div>

    <!-- Description Field -->
    <div class="partBox">
      <label for="boxText">Description:</label>
      <input 
        @blur="validateDescription" 
        type="text" 
        name="boxText" 
        maxlength="300" 
        id="boxText" 
        placeholder="Hello Need Help....." 
        v-model="formData.descript"
      >
      <span class="error-message">{{ descriptError }}</span>
    </div>

    <div class="partBtn">
      <button 
        @click="submitHandler" 
        class="formBtn"
        :disabled="!isFormValid"
      >
        Submit
      </button>
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

</style>
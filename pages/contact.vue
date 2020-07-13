<template>
    <div>
       

      <div class="text-center">
        <h2>Contact Information</h2><br>
        <p>Barmy Tours & Travels Pvt. Ltd.</p>
        <p>Kathmandu, Nepal</p>
         <p>Tel: <span style=" color: #b11319">4310889, +977 9812847474</span></p>
        <p>Email: <span style=" color: #0000FF">barmytravels@gmail.com</span></p>
       
      </div>
      <div class="text-center">
      <h2>Contact Us</h2>
      <v-form 
      class="text-center"
    ref="form"
    v-model="valid"
    lazy-validation
    
  >
    <v-text-field
      v-model="name"
      :counter="15"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
  

     <v-textarea
         v-model="text"
         label="Message"
         required
         
        ></v-textarea>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

   
  </v-form>
      </div>
    </div>
</template>
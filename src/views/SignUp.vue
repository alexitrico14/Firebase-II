<template>
    <div class="signup-container">
      <h1>Crear una cuenta</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Correo electrónico" required />
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña (mínimo 6 caracteres)"
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { auth } from "@/firebase";
  
  export default {
    data() {
      return { email: "", password: "", errorMessage: "" };
    },
    methods: {
      async register() {
        if (this.password.length < 6) {
          this.errorMessage = "La contraseña debe tener al menos 6 caracteres.";
          return;
        }
        this.errorMessage = "";
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          this.$router.push("/home");
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .signup-container h1 {
    color: #333;
    margin-bottom: 1.5rem;
  }
  
  .signup-container input {
    width: 100%;
    padding: 10px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .signup-container button {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }
  
  .signup-container button:hover {
    background-color: #45a049;
  }
  
  .error {
    color: red;
    margin-top: 1rem;
  }
  </style>
  
<template>
  <div class="home-container">
    <!-- Mensaje dinámico -->
    <h1 v-if="!isAuthenticated">Debes estar logueado para ver esto</h1>
    <h1 v-else>Bienvenido, pudiste registrarte</h1>

    <!-- Botones separados -->
    <div class="buttons-container" v-if="!isAuthenticated">
      <button @click="goToSignup" class="btn signup-btn">Registrarse</button>
      <button @click="goToLogin" class="btn login-btn">Iniciar sesión</button>
    </div>

    <!-- Botón cerrar sesión para usuarios logueados -->
    <button @click="logout" v-else class="btn logout-btn">Cerrar sesión</button>
  </div>
</template>

<script>
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default {
  data() {
    return {
      isAuthenticated: !!auth.currentUser,
    };
  },
  mounted() {
    // Actualiza el estado al cambiar la autenticación
    auth.onAuthStateChanged((user) => {
      this.isAuthenticated = !!user;
    });
  },
  methods: {
    goToSignup() {
      this.$router.push("/signup");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    async logout() {
      await signOut(auth);
      this.isAuthenticated = false;
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.home-container {
  text-align: center;
  padding: 3rem;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
  color: #333;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 3rem auto;
}

/* Título */
.home-container h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

/* Botones */
.buttons-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.signup-btn {
  background-color: #4caf50;
  color: white;
}

.signup-btn:hover {
  background-color: #45a049;
}

.login-btn {
  background-color: #2196f3;
  color: white;
}

.login-btn:hover {
  background-color: #1976d2;
}

.logout-btn {
  background-color: #f44336;
  color: white;
}

.logout-btn:hover {
  background-color: #d32f2f;
}
</style>

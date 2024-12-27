<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="layout-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>ABC Comics</h3>
        <p>Tu destino para los mejores cómics digitales.</p>
      </div>
      <div class="footer-section">
        <h4>Enlaces rápidos</h4>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Géneros</a></li>
          <li><a href="#">Novedades</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Síguenos</h4>
        <div class="social-links">
          <a href="#"><i class="pi pi-facebook"></i></a>
          <a href="#"><i class="pi pi-twitter"></i></a>
          <a href="#"><i class="pi pi-instagram"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} ABC Comics. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.layout-footer {
  background-color: var(--surface-color);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05);
  padding: 2rem 1rem;
  margin-top: 2rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
}

.footer-section h3 {
  color: var(--primary-color);
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.footer-section h4 {
  color: var(--primary-color);
  margin: 0 0 1rem 0;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.2s;
}

.footer-section a:hover {
  color: var(--accent-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  font-size: 1.5rem;
  color: var(--primary-color);
}

.social-links a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--surface-200);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>

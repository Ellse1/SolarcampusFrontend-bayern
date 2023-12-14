<template>
  <div>
    <!--
    <div id="footer" class="mt-5 text-center">

      <nuxt-link to="/">Home</nuxt-link>
      |
      <nuxt-link to="/impressum">Impressum und Kontakt</nuxt-link>
    </div>-->



    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5 pt-2">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>SOLARCAMPUS BAYERN
              </h6>
              <p>
                Gemeinsam mit Hochschulpräsidium, Verwaltung, Politik und Privatwirtschaft gestalten wir Universitäten klimafreundlich.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Informationen zu
              </h6>
              <p>
                <nuxt-link to="/information/bauministerium" class="text-reset" >Bauministerium</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/information/wissenschaftsministerium" class="text-reset" >Ministerium für Wissenschaft und Kunst</nuxt-link>
              </p>
              <!--
              <p>
                <nuxt-link to="/information/immobilien-freistaat-bayern" class="text-reset" >Immobilien Freistaat Bayern</nuxt-link>
              </p>
              -->
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Nützliche Links
              </h6>
              <p>
                <nuxt-link class="text-reset" to="/" >Home</nuxt-link>
              </p>
              <p>
                <nuxt-link class="text-reset" to="/impressum" >Impressum</nuxt-link>
              </p>
              <p>
                <nuxt-link class="text-reset" to="/impressum" >Kontakt</nuxt-link>
              </p>
              <p>
                <nuxt-link class="text-reset" to="/datenschutzerklaerung" >Datenschutzerklärung</nuxt-link>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Kontakt
              </h6>
              <p><i class="fas fa-home me-3"></i>Theodor-Dombart-Straße 5, <br/>80805 München</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                elias.singer@online.de
              </p>
              <p><i class="fas fa-phone me-3"></i> + 49 15753642731</p>
              <p><i class="fas fa-print me-3"></i> </p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <!--<div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">-->
      <div class="text-center text-dark p-4" style="background-color: #119be6">
        © 2023 Copyright:
        <nuxt-link to="/" class="text-reset fw-bold" >solarcampus-bayern.de</nuxt-link>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>


<style scoped>
#footer{
  background-color: rgb(1, 1, 1, 0.1);
}

</style>
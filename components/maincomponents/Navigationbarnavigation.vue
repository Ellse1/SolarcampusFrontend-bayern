 <template>
    <b-navbar toggleable="lg" type="light" id="id_navbarnavigation">
        <!--<b-navbar-brand href="#">NavBar</b-navbar-brand>-->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
            <b-nav-item href="#">
            <h3>
                <b>
                  <nuxt-link to="/tum" style="color:black" >TUM</nuxt-link>
                </b>
            </h3>
            </b-nav-item>
            <b-nav-item class="navigationLinkDevider">
              <h3>
              |
              </h3>
            </b-nav-item>
            <b-nav-item href="#">
            <h3>
                <b>
                  <nuxt-link to="/kit" style="color:black" >KIT</nuxt-link>
                </b>

            </h3>
            </b-nav-item>
            <b-nav-item class="navigationLinkDevider">
              <h3>
              |
              </h3>
            </b-nav-item>
            <b-nav-item href="#">
            <h3>
                <b>
                  <nuxt-link to="/lmu" style="color:black" >LMU</nuxt-link>
                </b>

            </h3>
            </b-nav-item>
        </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<style scoped>
@media only screen and (max-width: 990px) {

    .navigationLinkDevider{
      display: none;
    }

}
</style>

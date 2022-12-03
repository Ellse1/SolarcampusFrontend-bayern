<template>
  <div class="container">

      <div class="mt-5 text-center">
        <h3 class="">
          Erneuerbare Energie für unsere Zukunft
        </h3>

        <p class="mt-4">
          Wir sind Studierende mehrerer Universitäten aus Süddeutschland, die sich für erneuerbare Energien einsetzen
          und so dem Klimawandel konkret entgegenwirken. Für den dringend benötigten Ausstieg aus fossilen Energieträgern
          sind erneuerbare Energien unabdingbar.
        </p>
        <p>
          Gemeinsam mit Hochschulpräsidium, Verwaltung, Politik und Privatwirtschaft gestalten wir Universitäten klimafreundlich.
          <span class="ml-3">
            <img class="image_to_rotate" src="~/static/favicon2.png" alt="Not found" />
          </span>
        </p>



        <!--
        <p>Alle Information bezüglich des Fortschritts an den jeweiligen Universitäten und allgeineme Informationen, welche bei
          solch einem Projekt hilfreich sein können, beschreiben wir in folgendem Notion Dokument:
          <a target="_blank" href="https://spiky-credit-285.notion.site/Solarcampus-S-ddeutschland-e630a2deb03d46eeb75532a52923a164">Notion Dokument</a>
        </p>
        -->

      </div>



      <div class="mt-5">
        <h3 class="mx-auto text-center">Informationen zu Partnern</h3>

        <div class="row mt-4">
          <div class="col-md-4 mb-2">
            <b-card class="partner-card" id="id_partner_card_1">
              <b-card-body>
                <b-card-title>
                  <nuxt-link to="/tum" id="id_link_partner1">
                    TU München
                    <span class="ml-3" id="id_span_partner_hover_image_1">
                      <img class="" id="id_image_partner1" src="~/static/favicon2.png" alt="Not found" width="22px" />
                    </span>
                  </nuxt-link>
                </b-card-title>
                <b-card-text>
                  Es ist uns eine Ehre, mit dem Gebäudemanagement der TUM konstruktive Gespräche führen zu dürfen.
                  Mit gut durchdachten Konzepten und hilfreichen Kontakten versuchen wir
                  relevante Klimaschutzmaßnahmen durchzusetzen.
                </b-card-text>
                <nuxt-link to="/tum">
                  <b-button pill variant="outline" id="id_button_support_TUM" class="mt-3">
                    <b>Wie wir unterstützen</b>
                  </b-button>
                </nuxt-link>
              </b-card-body>
            </b-card>
          </div>
          <div class="col-md-4 mb-2">
            <b-card class="partner-card" id="id_partner_card_2">
              <b-card-body>
                <b-card-title>
                  <nuxt-link to="information/bauministerium" id="id_link_partner2">
                    Bauministerium
                    <span class="ml-3" id="id_span_partner_hover_image_2">
                      <img class="" id="id_image_partner2" src="~/static/favicon2.png" alt="Not found" width="22px" />
                    </span>
                  </nuxt-link>
                </b-card-title>
                <b-card-text>
                  Das Bauministerium hat große Verantwortung für staatliche Gebäude wie Finanzämter, Behörden und auch Hochschulen und Universitäten.
                </b-card-text>
              </b-card-body>
            </b-card>
          </div>
          <div class="col-md-4 mb-2">
            <b-card class="partner-card" id="id_partner_card_3">
              <b-card-body>
                <b-card-title>
                  <nuxt-link to="information/wissenschaftsministerium" id="id_link_partner3">
                    Ministerium für Wissenschaft und<br/>Kunst
                    <span class="ml-3" id="id_span_partner_hover_image_3">
                      <img class="" id="id_image_partner3" src="~/static/favicon2.png" alt="Not found" width="22px" />
                    </span>
                  </nuxt-link>
                </b-card-title>
                <b-card-text>
                  Das Ministerium für Wissenschaft und Kunst Bayern verwaltet übergreifend 17 Hochschulen und Universitäten in Bayern.
                </b-card-text>
              </b-card-body>
            </b-card>
          </div>
        </div>
      </div>






      <div class="mt-5">
        <h3 class="text-center mx-auto">
          Einige unseres Teams
        </h3>


        <div class="row mt-4">
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Sina Schuhmacher"
                img-src="/person_SinaSchuhmacher.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    schumacher.sina@campus.lmu.de
                  </div>
                </div>

                <b-card-text>
                  Referat für Umwelt<br> Ludwigs Maximilians Universität<br>München
                </b-card-text>
              </b-card>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Clemens Zengler"
                img-src="person_ClemensZengler.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >

                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    clemens.zengler@fs.tum.de
                  </div>
                </div>

                <b-card-text>
                  Referat für Umwelt<br>Technische Universität<br> München
                </b-card-text>
              </b-card>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Elias Singer"
                img-src="person_EliasSinger.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mx-auto image-container"
              >

                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    elias.singer@online.de
                  </div>
                </div>

                <b-card-text>
                  Referat für Umwelt<br> Technische Universität München<br>Projektleitung
                </b-card-text>
              </b-card>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Laura Enzberger"
                img-src="person_LauraEnzberger.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    laura.enzberger@student.hswt.de
                  </div>
                </div>

                <b-card-text>
                  Hochschule Weihenstephan-Triesdorf
                </b-card-text>
              </b-card>
          </div>
          <!--
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Lena Auer"
                img-src="person_LenaAuer.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    auer5@hm.edu
                  </div>
                </div>

                <b-card-text>
                  Leitung des Referat für Nachhaltige Entwicklung <br>Hochschule München
                </b-card-text>
              </b-card>
          </div>-->
          <!--
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Nina Nhi Nguyen"
                img-src="person_NinaNhi.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    t.nguyen@hm.edu
                  </div>
                </div>

                <b-card-text>
                  Referat für Nachhaltige Entwicklung
                  <br>
                  Hochschule München
                </b-card-text>
              </b-card>
          </div>-->
          <!--
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Patrizia Pfab"
                img-src="person_PatriziaPfab.jpeg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    ppfab@hm.edu
                  </div>
                </div>

                <b-card-text>
                  Leitung des Referat für Nachhaltige Entwicklung
                  <br>
                  Hochschule München
                </b-card-text>
              </b-card>
          </div>-->
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Elias Sailer"
                img-src="/person_EliasSailer.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >

                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    elias.sailer@student.kit.edu
                  </div>
                </div>

                <b-card-text>
                  Karslruher Institut für Technologie
                </b-card-text>
              </b-card>

          </div>
          <!--
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Lisa Thuro"
                img-src="personPlaceholder.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    elias.singer@online.de
                  </div>
                </div>

                <b-card-text>
                  Referat für Umwelt<br> Technische Universität München
                </b-card-text>
              </b-card>
          </div>-->
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Jakob Bergsteiner"
                img-src="/person_JakobBergsteiner.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class="mx-auto  image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    elias.singer@online.de
                  </div>
                </div>

                <b-card-text>
                  Technische Universität <br>München
                </b-card-text>
              </b-card>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Manuel Lerschmacher"
                img-src="person_ManuelLerschmacher.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    manuel.lerschmacher@fs.tum.de
                  </div>
                </div>

                <b-card-text>
                  Referat für Umwelt<br> Technische Universität München
                </b-card-text>
              </b-card>
          </div>
          <!--
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Judith Schröder"
                img-src="personPlaceholder.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    elias.singer@online.de
                  </div>
                </div>

                <b-card-text>
                  Technische Universität München
                </b-card-text>
              </b-card>
          </div>-->

        </div>
      </div>


      <div class="mt-3">
        <div class="">
          <img class="border" width="100%" src="/TEB-Logo_4c.jpg" />
          Unterstützt durch <b>Bayerns Wirtschaftsminister Aiwanger</b> <br>
          Weitere Information zu Team Energiewende Bayern findet ihr <a target="_blanc" href="https://www.stmwi.bayern.de/energie/team-energiewende-bayern/" >hier.</a>
        </div>
      </div>


  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>


<style scoped>

.person-image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: relative;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}


.image-container:hover .middle {
  opacity: 1;
}

.image-text {
  background-color: #04AA6D;
  color: white;
  font-size: 16px;
  padding: 16px 10px;
}

.partner-card:hover{
  border-color: #119be6;
}
#id_span_partner_hover_image_1{
  display:none;
}
#id_partner_card_1:hover #id_span_partner_hover_image_1{
  display: inherit;
}
#id_span_partner_hover_image_2{
  display:none;
}
#id_partner_card_2:hover #id_span_partner_hover_image_2{
  display: inherit;
}
#id_span_partner_hover_image_3{
  display:none;
}
#id_partner_card_3:hover #id_span_partner_hover_image_3{
  display: inherit;
}
#id_link_partner3:hover #id_image_partner3{
  animation: rotation 10s infinite linear;
}
#id_link_partner2:hover #id_image_partner2{
  animation: rotation 10s infinite linear;
}
#id_link_partner1:hover #id_image_partner1{
  animation: rotation 10s infinite linear;
}


#id_button_support_TUM{
  border-color: #119be6;
  max-width: 100%;
  width: 100%;
  background-color: #119be6;
}
#id_button_support_TUM:hover{
  background-color: #119be6;
}
.image_to_rotate{
    animation: rotation 20s infinite linear;
}

h3{
  font-family: Comfortaa;
  font-weight: bold;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

</style>

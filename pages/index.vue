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
            <img class="image_to_rotate" src="/favicon2.png" alt="Not found" />
          </span>
        </p>

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
                      <img class="" id="id_image_partner1" src="/favicon2.png" alt="Not found" width="22px" />
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
                      <img class="" id="id_image_partner2" src="/favicon2.png" alt="Not found" width="22px" />
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
                      <img class="" id="id_image_partner3" src="/favicon2.png" alt="Not found" width="22px" />
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
                title="Lennart Trentmann"
                img-src="person_LennartTrentmann.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >

                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    lennart.trentmann@tum.de
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
                title="Paul Bachmann"
                img-src="person_PaulBachmann.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    bachmann@fsmb-tum.de
                  </div>
                </div>

                <b-card-text>
                  Fachschaft Maschinenbau<br> Technische Universität München
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
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Davis Stöwer"
                img-src="person_DavisStoewer.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    stoewer@hm.edu
                  </div>
                </div>

                <b-card-text>
                  Referat für nachhaltige Entwicklung (RNE)<br> Hochschule München
                </b-card-text>
              </b-card>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3 text-center mb-2">
              <b-card
                title="Wladimir Aufmann"
                img-src="person_WladimirAufmann.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 15rem;"
                class=" mx-auto image-container"
              >
                <div class="middle text-center">
                  <div class="image-text mx-auto">
                    wladimir.aufmann@hm.edu
                  </div>
                </div>

                <b-card-text>
                  Referat für nachhaltige Entwicklung (RNE)<br> Hochschule München
                </b-card-text>
              </b-card>
          </div>

        </div>
      </div>

      <div style="margin-top:100px;" class="text-center">
        <h3>Nützliche Links und Informationen</h3>
        <div class="row mt-4">

          <div class="col-md-4 mb-2">
            <b-card
              img-src="information_bayernplanEnergie2040.png"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto image-container"
            >
              <b-card-body>
                <a href="https:///bayernplan-energie.ffe.de/" target="_blank">
                  <b-card-title>
                    Bayernplan Energie 2040
                  </b-card-title>
                </a>
                <b-card-text>
                  4 Szenarien, wie Bayern bis 2040 klimaneutral werden kann. <br />
                  In Auftrag gegeben vom
                  Verband der <b>Bayerischen Energie und Wasserwirtschaft e.V.</b>,
                  begleitet durch <b>vbw – Vereinigung der Bayerischen Wirtschaft e.V. & Prognos AG</b>
                </b-card-text>
                <b-card-text>
                  <p class="mt-4">
                    <a href="https:///bayernplan-energie.ffe.de/" target="_blank">
                      Link zur Webseite
                    </a>
                  </p>
                  <p>
                    <a href="https://bayernplan-energie.ffe.de/BayernplanEnergie2040_Zusammenfassung.pdf" target="_blank">
                      Zusammenfassung lesen
                    </a>
                  </p>
                </b-card-text>
              </b-card-body>
            </b-card>
          </div>
          <div class="col-md-4 mb-2">
            <b-card
              img-src="information_ipccReport2023.png"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto image-container"
            >
              <b-card-body>
                <a href="https://www.ipcc.ch/report/ar6/syr/" target="_blank">
                  <b-card-title>
                    IPCC synthesis report 2023
                  </b-card-title>
                </a>
                <b-card-text>
                  2023 veröffentlichte der IPCC den Synthesebericht zum 6. Sachstandsbericht. <br />
                  Unter anderem wird darauf aufmerksam gemacht, dass ohne drastische Maßnahmen das Treibhausgasbudget
                  für 1.5 Grad bereits 2031 restlos aufgebraucht sein wird.
                </b-card-text>
                <b-card-text>
                  <p class="mt-4">
                    <a href="https://www.ipcc.ch/report/ar6/syr" target="_blank">
                      Link zur Webseite
                    </a>
                  </p>
                  <p>
                    <a href="https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf" target="_blank">
                      Summary for policy makers lesen
                    </a>
                  </p>
                </b-card-text>
              </b-card-body>
            </b-card>
          </div>
          <div class="col-md-4 mb-2">
            <b-card
              img-src="information_szBerichtet.png"
              img-alt="Image"
              img-top
              tag="article"
              class="mx-auto image-container"
            >
              <b-card-body>
                <a href="https://www.sueddeutsche.de/muenchen/muenchen-tum-universitaet-photovoltaik-solardach-solarcampus-bayern-1.5701042" target="_blank">
                  <b-card-title>
                    SZ berichtet
                  </b-card-title>
                </a>
                <b-card-text>
                  Am 22. November 2022 berichtete die Süddeutsche Zeitung über unsere Aktivitäten.
                  Dem vorausgegangen war ein öffentlicher Brief an den Bayrischen Bauminister (Herr Christian Bernreiter (CSU))
                  bezüglich der Nutzung von Photovoltaik auf Dächern öffentlicher Gebäude.
                </b-card-text>
                <b-card-text>
                  <p class="mt-4">
                    <a href="https://www.sueddeutsche.de/muenchen/muenchen-tum-universitaet-photovoltaik-solardach-solarcampus-bayern-1.5701042" target="_blank">
                      Artikel lesen
                    </a>
                  </p>
                </b-card-text>
              </b-card-body>
            </b-card>
          </div>

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

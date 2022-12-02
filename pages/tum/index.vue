<template>
  <div class="container">
    <div class="mt-5 text-center">
      <h3 style="font-family: Comfortaa;">Wie wir unsere TUM unterstützen</h3>

      <p class="mt-5">
        Wir stehen in regelmäßigem Kontakt zur Gebäudeverwaltung der TU München.
        Es ist uns eine Ehre, mit den Personen vor Ort konstruktiv zusammen arbeiten zu dürfen,
        wir profitieren von der Erfahrung und der Expertise der Mitarbeiter und Mitarbeiterinnen der TU München.
        Konstruktiv stärken wir die Ambitionen der TUM für mehr Kliamaschutz.
       </p>

      <div class="row mt-5"  style="color: #119be6; font-size: larger;">
        <div class="col-md-3 mb-2">
          <b-card class="schlagwort">
            Gut vorbereitete<br/>Konzepte
          </b-card>
        </div>
        <div class="col-md-3 mb-2">
          <b-card class="schlagwort">
            Fachwissen von<br/>Professorinnen und Experten
          </b-card>
        </div>
        <div class="col-md-3 mb-2">
          <b-card class="schlagwort">
            Kontakte und Kooperationspartner
          </b-card>
        </div>
        <div class="col-md-3 mb-2">
          <b-card class="schlagwort">
            Vorschläge aus den<br/>Ministerien und Studienergebnisse
          </b-card>
        </div>
      </div>


       <!--<p>
        Wir versuchen durch gut vorbereitete Konzepte, Kooperationspartner, nützliche Kontakte und eingeholte Vorschläge
        von Professorinnen und Professoren und aus den entsprechenden Ministerien, Mitarbeiterinnen und Mitarbeiter
        der TUM von unseren Plänen zu überzeugen.
      </p>-->
    </div>

    <div style="margin-top:100px;" class="text-center">
      <h3>Sektoren in Bearbeitung</h3>
      <div class="row mt-4">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <b-card class="mb-2 sektor-card">
            <b-card-body>
              <b-card-sub-title>
                Photovoltaik auf den Dächern, Parkplätzen, Freiflächen und Fassaden, evtl. Windkraft
              </b-card-sub-title>
              <nuxt-link to="/tum/strom">
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>Strom</b>
                </b-button>
              </nuxt-link>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <b-card class="mb-2 sektor-card">
            <b-card-body>
              <b-card-sub-title>
                Laut Sustainable Future Strategy der TUM klimaneutral bis 2028
              </b-card-sub-title>
              <nuxt-link to="/tum/waerme">
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>Wärme</b>
                </b-button>
              </nuxt-link>
            </b-card-body>
          </b-card>
        </div>


      </div>
    </div>

    <div class="mt-5 text-center">
      <h3>Sektoren in zukünftiger Bearbeitung</h3>
      <div class="row mt-4">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <b-card class="mb-2 sektor-card">
            <b-card-body>
              <b-card-sub-title>
                Klimapositive Gebäude (nach DGNB 2022), Graue Emissionen mitdenken
              </b-card-sub-title>
              <!--<nuxt-link to="/tum/bauen">-->
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>Bauen</b>
                </b-button>
              <!--</nuxt-link>-->
            </b-card-body>
          </b-card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <b-card class="mb-2 sektor-card">
            <b-card-body>
              <b-card-sub-title>
                Flugemissionen reduzieren, Nur noch Parkplätze für klimaneutrale Autos ab dem Jahr 203X
              </b-card-sub-title>
              <!--<nuxt-link to="/tum/mobilitaet">-->
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>Mobilität</b>
                </b-button>
              <!--</nuxt-link>-->
            </b-card-body>
          </b-card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <b-card class="mb-2 sektor-card">
            <b-card-body>
              <b-card-sub-title>
                Wiedervernässung von Mooren, Flächennutzung, Begrünung
              </b-card-sub-title>
              <!--<nuxt-link to="/tum/lulucf">-->
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>LULUCF</b>
                </b-button>
              <!--</nuxt-link>-->
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>



  </div>
</template>
<style scoped>
.sektor-card:hover{
  border-color: #119be6;
}
.sektor-button{
  border-color: #119be6;
  max-width: 100%;
  width: 100%;
}
.sektor-button:hover{
  background-color: #119be6;
}
.schlagwort{
  border-radius: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 3px;
  border-color: #119be6;
}
</style>

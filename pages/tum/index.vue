<template>
  <div class="container">
    <div class="mt-5 text-center">
      <h3 style="font-family: Comfortaa;">Wie wir unsere TUM unterstützen</h3>
      <!---->
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
                Laut Sustainable Futures Strategy der TUM klimaneutral bis 2028
              </b-card-sub-title>
              <nuxt-link to="/tum/waerme">
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>Wärme</b>
                </b-button>
              </nuxt-link>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <b-card class="mb-2 sektor-card">
            <b-card-body>
              <b-card-sub-title>
                Klimapositive Gebäude (nach DGNB 2022), Graue Emissionen mitdenken
              </b-card-sub-title>
              <nuxt-link to="/tum/bauen">
                <b-button pill variant="outline" class="mt-3 sektor-button" size="lg">
                  <b>Bauen</b>
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






    <div style="margin-top:100px;" class="text-center">
      <h3>Nützliche Links und Informationen</h3>
      <div class="row mt-4">

        <div class="col-md-4 mb-2">
          <b-card
            img-src="tum_information_sustainableFutureStrategy.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mx-auto image-container"
          >
            <b-card-body>
              <a href="https://mediatum.ub.tum.de/doc/1690440/1690440.pdf" target="_blank">
                <b-card-title>
                  TUM Nachhaltigkeits - und Klimaschutzstrategie
                </b-card-title>
              </a>
              <b-card-text>
                Die TU München will in Sachen Nachhaltigkeit und Klimaschutz durchstarten.
                Ein neuer Vizepräsident für Sustainable Transformation wurde benannt, Studierende der
                TUM sollen zur Sturmspitze des Wandels ausgebildet werden.
                Bis 2028 will die TUM in Bezug auf den Energieverbrauch klimaneutral sein.
              </b-card-text>
              <b-card-text>
                <p class="mt-4">
                  <a href="https://www.tum.de/ueber-die-tum/ziele-und-werte/nachhaltigkeit/klimaschutz-an-der-tum" target="_blank">
                    Klimaschutz an der TUM
                  </a>
                </p>
                <p class="mt-4">
                  <a href="https://www.tum.de/ueber-die-tum/ziele-und-werte/nachhaltigkeit" target="_blank">
                    Nachhaltigkeit an der TUM
                  </a>
                </p>
                <p class="mt-4">
                  <a href="https://mediatum.ub.tum.de/doc/1690440/1690440.pdf" target="_blank">
                   TUM Sustainable Futures Strategy lesen
                  </a>
                </p>
              </b-card-text>
            </b-card-body>
          </b-card>
        </div>


        <div class="col-md-4 mb-2">
          <b-card
            img-src="tum_information_cleanTechCampusGarching.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mx-auto image-container"
          >
            <b-card-body>
              <a href="https://www.epe.ed.tum.de/es/forschung/projekte/cleantechcampus/" target="_blank">
                <b-card-title>
                   CleanTechCampus Garching Studie
                </b-card-title>
              </a>
              <b-card-text>
                Wie kann die Energieinfrastruktur des energieintensiven Campus Garching der TU München bedarfsgerecht aber auch klimafreundlich gestaltet werden? <br />
                Dieser Frage ging das Projektteam der CleanTechCampus Garching-Studie nach. <br />
                Hier wurden auch viele relevante Daten über den Ist-Zustand des Campus erhoben.
              </b-card-text>
              <b-card-text>
                <p class="mt-4">
                  <a href="https://www.epe.ed.tum.de/es/forschung/projekte/cleantechcampus/" target="_blank">
                    Link zur Projektseite
                  </a>
                </p>
                <p class="mt-4">
                  <a href="https://www.epe.ed.tum.de/fileadmin/w00bzo/es/pictures/Projekte/CleanTechCampus/Schlussbericht_CleanTechCampus.pdf" target="_blank">
                    Abschlussbericht lesen
                  </a>
                </p>
              </b-card-text>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card
            img-src="tum_information_energiewendeAnDerTumArtikel.png"
            img-alt="Image"
            img-top
            tag="article"
            class="mx-auto image-container"
          >
            <b-card-body>
              <a href="https://reisswolf.fsmb.de/?p=3020" target="_blank">
                <b-card-title>
                  Reisswolf berichtet
                </b-card-title>
              </a>
              <b-card-text>
                Ein aktueller Artikel im Reisswolf (Zeitschrift der Fachschaft Maschinenbau) berichtet aus unserer Sicht über die Energiewende an der TU München.
                Obwohl wir uns seit mehr als 2 Jahren für Photovoltaik einsetzen kann mit der vorgelegten Geschwindigkeit die Energiewende nicht 1.5 Grad kompatibel umgesetzt werden.
                Es braucht personelle und finanzielle unterstützung, um die Energiewende an unserer TUM voranzutreiben.
              </b-card-text>
              <b-card-text>
                <p class="mt-4">
                  <a href="https://reisswolf.fsmb.de/?p=3020" target="_blank">
                    Reisswolf (Zeitschrift der Fachschaft Maschinenbau) Artikel lesen
                  </a>
                </p>
              </b-card-text>
            </b-card-body>
          </b-card>
        </div>
        <div class="col-md-4 mb-2">
          <b-card
            img-src="tum_information_paneldiscussion.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mx-auto image-container"
          >
            <b-card-body>
              <a href="https://www.tum.de/aktuelles/alle-meldungen/pressemitteilungen/details/wege-zur-nachhaltigkeit" target="_blank">
                <b-card-title>
                  Öffentliche Podiumsdiskussion
                </b-card-title>
              </a>
              <b-card-text>
                Nachhaltigkeit und Klimaschutz müssen deutlich stärker in der Lehre verankert werden. Außerdem ist der völlige Verzicht auf fossile Brennstoffe bis 2028 beinahe nicht zu schaffen.
                Obwohl in der TUM Sustainable Futures Strategy steht, man wolle Klimaneutralität in Bezug auf den
                Energieverbrauch bis 2028 realisieren.
                Das sind die zentralen Ergebnisse der Podiumsdiskussion, in welcher sich
                der TUM Vizekanzler unseren kritischen Fragen stellte.
              </b-card-text>
              <b-card-text>
                <p class="mt-4">
                  <a href="https://www.tum.de/aktuelles/alle-meldungen/pressemitteilungen/details/klimawandel-diskussion-zur-rolle-und-verantwortung-der-universitaeten" target="_blank">
                    Ankündigung der TUM lesen
                  </a>
                </p>
                <p class="mt-4">
                  <a href="https://www.tum.de/aktuelles/alle-meldungen/pressemitteilungen/details/wege-zur-nachhaltigkeit" target="_blank">
                    Resume der TUM lesen
                  </a>
                </p>
              </b-card-text>
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

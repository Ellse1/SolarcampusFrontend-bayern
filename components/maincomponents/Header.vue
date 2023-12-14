<template>

    <div class="">
        <div id="div_headerImage" class="text-center">

          	<!--
            <div id="navigation_mobile">
                <maincomponentsNavigationbarnavigation />
            </div>-->

            <h1 class=" solarcampus-heading" style="font-family: Comfortaa-Bold;" id="text_solarcampusSueddeutschland"><b>Solarcampus Bayern</b></h1>
            <h3 class="text-white">Wir beschleunigen die Energiewende an Universitäten</h3>
        </div>

        <!--
        <div id="navigation_large" class="mt-4">
            <maincomponentsNavigationbarnavigation />
        </div>
        -->

    </div>

</template>

<style scoped>
#div_headerImage{
    background-image: url("/photovoltaikHeaderZugeschnitten.jpg");
    background-size: 100%;
    overflow: hidden;
    background-position: center center;
    min-height:  450px;
    padding-top: 80px;
}

#text_solarcampusSueddeutschland{
    color: #FAFF00;
}

.solarcampus-heading{
  font-size: 60px;
}

@media only screen and (max-width: 990px) {
    #div_headerImage{
        background-size: auto 100%;

    }
    #div_headerImage{
        padding-top: 20px;
    }
    #navigation_large{
        display: none;
    }
  .solarcampus-heading{
    font-size: 40px;
  }
}
@media only screen and (min-width: 991px) {
    #navigation_mobile{
        display: none
    }
}

</style>
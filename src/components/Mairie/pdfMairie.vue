<template>
  <div class="bg-gray-800 text-center  pt-10 pb-10">

      <div class="justify-items-start pb-4">
          <div class="text-2xl font-bold  text-white">
              <a @click="retour()">
                   <font-awesome-icon icon="arrow-alt-circle-left" class="text-white  mr-5" ></font-awesome-icon>
                   Retour
              </a>
               
        </div>
      </div>
      
<!--  PDF GENERATEUR  -->
        <div class="bg-white border-2 border-gray-400 shadow-xl rounded-2xl p-12 ml-40 mr-40">
            <div class="grid grid-cols-2">
                <div>
                    <div class="pl-2 m-4 float-left">
                        <p class="text-xl font-semibold">
                            <span class="m-4 uppercase">DEPARTEMENT DE {{registre.lieu_naissance}}</span>
                            <br>
                            <br>
                            <span  class=" uppercase"> COMMUNE DE {{registre.lieu_naissance}}</span>
                        </p>
                        <div class=" pl-8 m-8">
                            <div class="rounded-md bg-gray-400 h-20 w-20 "></div>
                        </div>                        
                    </div>
                </div>
                <div>
                    <div class="float-right m-4">
                        <!-- {{-- <img src="images/extrait/armoirie.png"/> --}} -->
                        <p class="text-xl mb-2">
                            REPUBLIQUE DE COTE D'IVOIRE 
                        </p>
                        
                        <p class="text-4xl font-bold ">
                            EXTRAIT 
                        </p>
                        <p class="pt-3">
                            Du registre des actes de naissance de l'Etat Civil 
                            <br> Pour l'année {{registre.annee}}
            
                        </p>
                    </div>
                </div>
            </div>
            <!-- partie 2 -->

            <div class="grid grid-cols-5 p-6 border-b-2 border-gray-500">
                
                <div class="col-span-2">
                    <div class="text-xl font-semibold">
                         <br>
                        <br><br>
                        N° {{registre.numero_acte}} DU {{registre.date_numero_acte}}DUREGISTRE
                        <br>
                        <br>
                        NAISSANCE DE 
                        <br><br>
                        <strong style="font-size: 18px">{{registre.nom}} </strong> 
                        <br><br>
                        <strong style="font-size: 18px">{{registre.prenoms}} ./.</strong>
                        

                    </div>
                </div>

                <div class="col-span-3">
                    <div class=" justify-items-end text-xl font-medium"> 
                        <br>
                        
                        <!-- {{-- Le ......................... ./.  --}} -->
                        Le {{registre.date_naissance}} ./. 
                        <br> <br>
                        à {{registre.heure_de_naissance}} ./. 
                        <br><br>
                        est née {{registre.prenoms}}./.
                        <br><br>
                        à la maternité de {{registre.lieu_naissance}} ./.
                        <br><br>
                        fils de {{registre.nom_pere}} {{registre.prenom_pere}} ./.
                        <br><br>
                        et de {{registre.nom_mere}} {{registre.prenom_mere}} ./.
                        <br>
                    </div>
                    
                </div>
            </div>
            <div class="grid">
                <div class="mt-4">
                      <p style="text-align: center; font-size:24px; font-weight:bold; font-family:'Times New Roman', Times, serif ">
                        MENTIONS (éventuellement)
                    </p>
                </div>
                
              
                <div style="font-size:16px" class="mt-8">
                    Marié(e) le ...........................................................................  à ...........................................................................
                    <br><br>
                    avec ...............................................................................................................................................................
                    <br><br>
                    Mariage dissout par décision de divorce en date du ........................................................................................
                    <br><br>
                    Décédé(e) le .................................................. à ...............................................................................................
                    <br><br>
                    Certifie le présent extrait conforme aux indications portées auregistre.
                </div>          
                
            </div>

             <div class=" mt-8 grid grid-cols-2 mb-8">
                 <div></div>

                 <div class="-pr-32">
                     <p class="mt-4">
                        Délivré à {{registre.lieu_naissance}} . le {{registre.date_delivrance}} 
                    </p>
                    <p class="mt-4">
                        <strong> L'Officier de l'Etat civil </strong>
                        <pre> (Signature) </pre>
                    </p>
                 </div>
                
            </div>

        </div>
        
  </div>
</template>

<script>
export default {
    data(){
        return{
            num_extrait: this.$store.state.registreNaissance,
            registre:{}
            //  registre: {}
        }
    },
    methods:{
        retour()
        {
            
            this.$router.push('/RegistresNaissance')
        },
        affichage()
        {
            this.axios.get('api/pdf-Naissanceget/'+this.num_extrait)
            .then((response) => {
                this.registre = response.data.data
            } )
            .catch((error) => {
                console.log(error.response)
            })

        }
    },
    created(){
        this.affichage()
    }
   
}


</script>

<style>

</style>
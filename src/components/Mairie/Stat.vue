<template>
  <div>
        <div>

            <div class="text-2xl font-semibold p-8 text-red-800">
               <a @click="retour()">
                    <font-awesome-icon icon="arrow-alt-circle-left" class="text-yellow-400 mr-5" ></font-awesome-icon>
                    Retour
               </a>

               <p class="text-center font-bold text-black underline">
                   STATISTIQUES
               </p>
                 
            </div>
        </div>

        <div>
             <div class="p-8">
                <!-- <div class="w-96 rounded-full  pt-8  h-96 bg-red-500"> 
                <div class="w-80 mx-auto rounded-full h-80 bg-white"></div>
                </div> -->
                <div class="p-2  grid grid-rows-2 gap-4">
                <div class="font-bold text-center ">Legende</div> 
                <div class="grid grid-cols-6">
                    <div class="col-span-2"></div>
                    <div class="col-span-3 text-center">
                    
                    <div class=" flex flex-row px-8">
                        <div class="h-4 w-4 mr-4 rounded-md bg-yellow-300"></div> Déclarée(s) à la mairie 
                        <br>
                        <div class="h-4 w-4 ml-4 mr-4 rounded-md bg-red-700"></div> Déclarée(s) a l'hôpital
                    </div> 

                    </div>
                    <div></div>
                </div> 
                    
                </div>

                <p class="font-bold mt-5 text-3xl">Naissances</p>
                
                <div class="grid grid-cols-3 p-6 gap-4 mt-2">

                <div class="col-span-2">
                    <div class="w-full p-4 border-l-2   grid grid-rows-2 gap-4">
                    <div class="h-5 rounded-md bg-yellow-300" :style="'width:'+percent_naissance+'%'"></div>     
                    <div class="w-full h-5 rounded-md bg-red-700"></div>   
                    </div>
                </div>

                <div class="">
                    <p class="text-center font-bold text-black">Statistiques</p>
                    <p class="mt-2 text-center">
                    <span class="text-yellow-600 font-bold text-md ml-4">{{nb_mairie_nais}} </span> Personne(s) Declarée(s) a la miarie 
                    </p>
                    <p class="mt-2 text-center">
                    <span class="text-red-800 font-bold text-md ml-4">{{nb_hosto_nais}} </span> Personne(s) Declarée(s) a l'hôpitale 
                    </p>
                    
                </div>

                </div>


                <p class="font-bold mt-5 text-3xl">Décès</p>
                
                <div class="grid grid-cols-3 p-6 gap-4 mt-2">

                <div class="">
                    <p class="text-center font-bold text-black">Statistiques</p>
                    <p class="mt-2 text-center">
                    <span class="text-yellow-600 font-bold text-md ml-4">{{nb_mairie_dec}} </span> Personne(s) Declarer a la miarie 
                    </p>
                    <p class="mt-2 text-center">
                    <span class="text-red-800 font-bold text-md ml-4">{{nb_hosto_dec}} </span> Personne(s) Declarer a l'hôpitale 
                    </p>
                    
                </div>

                <div class="col-span-2">
                    <div class="w-full p-4 border-l-2   grid grid-rows-2 gap-4">
                    <div class="h-5 rounded-md bg-yellow-300" :style="'width:'+percent_deces+'%'"></div>     
                    <div class="w-full h-5 rounded-md bg-red-700"></div>   
                    </div>
                </div>

                </div>
            
            </div>
        </div>
    
     
  </div>
</template>

<script>
export default {

    data(){
        return{
            nb_mairie_nais:null,
            nb_mairie_dec:null,

            nb_hosto_nais:null,
            nb_hosto_dec:null,

            percent_naissance:null,
            percent_deces:null

        }
    },
    created()
    {
        this.load()
    },
    methods:{
        retour(){
             this.$router.push('/homeMarie')
        },
        load()
        {
            this.axios.get('api/statistiques')
                .then((response)=>
                {
                     console.log(response.data)
                    this.nb_mairie_nais = response.data.message.nb_mairie_naissance
                    this.nb_mairie_dec = response.data.message.nb_mairie_deces

                    this.nb_hosto_nais = response.data.message.nb_hopital_naissance
                    this.nb_hosto_dec = response.data.message.nb_hopital_deces


                    
                    this.percent_naissance = parseInt(( this.nb_mairie_nais * 100) / this.nb_hosto_nais)

                    this.percent_deces = parseInt( ( this.nb_mairie_dec * 100) / this.nb_hosto_dec)
                    
                })
        }
    }
}
</script>

<style>

</style>
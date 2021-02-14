<template>
    <div>
       
        <!-- This example requires Tailwind CSS v2.0+ -->
       <div class="m-6">
            
            <div class="flex justify-between">
                <div class="text-2xl font-semibold  text-red-800">
                     <font-awesome-icon icon="arrow-alt-circle-left" class="text-yellow-400 mr-5" @click="retour()"></font-awesome-icon>
                      Liste des registres
                </div>
                
                <div class="flex justify-items-end mb-5">
                        <input type="text" v-model="search" class="shadow-2xl appearance-none border text-md rounded w-96 pr-10 py-3 px-4 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-300 focus:border-transparent " placeholder="">    
                        <font-awesome-icon icon="search" class="text-xl mt-3 -ml-8 text-red-800"></font-awesome-icon>  
                </div>
           </div>
            <div class="flex flex-col text-center">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-yellow-100">
                            <tr>
                            <th scope="col" class="px-6 py-3  text-xs text-gray-800 font-semibold uppercase tracking-wider">
                                Numero 
                            </th>
                            <th scope="col" class="px-6 py-3  text-xs text-gray-800 font-semibold uppercase tracking-wider">
                                Nom & Prenoms
                            </th>
                            <th scope="col" class="px-6 py-3  text-xs font-semibold text-gray-800 uppercase tracking-wider">
                                Nom des parents
                            </th>
                            <th scope="col" class="px-6 py-3  text-xs font-semibold text-gray-800 uppercase tracking-wider">
                                date d'etablissement
                            </th>
                            <th scope="col" class="px-6 py-3  text-xs font-semibold text-gray-800 uppercase tracking-wider">
                                dérniere mise à jour
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Impression</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(registre,index) in filterRegistre" :key="registre.id">
                            <td  class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                <div class="flex-shrink-0 h-10 w-10 text-2xl ">
                                    {{index+1}}
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">
                                     N° {{registre.numero_acte}}  
                                    </div>
                                    <div class="text-sm text-gray-500">
                                    du {{registre.date_numero_acte}}  
                                    </div>
                                </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{registre.nom}} {{'  '}} {{registre.prenoms}} </div>
                            </td>
                             <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900"> {{registre.nom_pere}} {{registre.prenom_pere}}</div>
                                <div class="text-sm text-gray-500">{{registre.nom_mere}} {{registre.prenom_mere}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                
                                {{registre.created_at.split('T')[0]}}
                                
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{registre.updated_at.split('T')[0]}}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a @click="more_details(registre.numero_acte)" class="text-indigo-600 hover:text-indigo-900">Détails</a>
                            </td>
                            </tr>

                        </tbody>
                        </table>
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
        return {
            liste_Registres : [],
            search: ''
        }
    },
    mounted(){
        this.liste()
    },
    methods:{
        retour()
        {
            this.$router.push('/homeMarie')
        },
        liste()
        {
            this.axios.get('/api/liste-RegitresNaissance')
             .then(response => {
                 this.liste_Registres = response.data.data
             })
        },
        more_details(informations){
            this.$store.commit('setRegistreInfo',informations)
            this.$router.push('/pdfMairie')
        }
    },
     computed:{
        filterRegistre: function(){
            return this.liste_Registres.filter((registre) => {
                return  registre.nom.match(this.search) 
                        || registre.prenoms.match(this.search)
                        || registre.numero_acte.match(this.search)
                        || registre.date_numero_acte.match(this.search);
            })
        }   
    },
}
</script>

<style>

</style>
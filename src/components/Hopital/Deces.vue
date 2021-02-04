<template>
       <!--  NOuveau Nee  -->
      <div>
             <form @submit.prevent="submit()">
                    <div class="grid grid-cols-3 mt-8">
                        <div class="p-4">
                            <p class="text-md mb-8 font-semibold text-gray-500"> Information sur les parents  </p> 
                             
                            <div class="m-8 ">
                                <label for="nom_parent"  class="flex justify-start font-medium text-md text-gray-800 "> Nom du parent </label>
                                <input type="text" v-model="form.nom_parent" id="nom_parent" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="N'DA"> 
                               <span class=" text-sm text-red-700 font-medium " v-if="errors.nom_parent"> {{this.errors.nom_parent[0] }} </span>   
                            </div>
                            <div class="m-8">
                                <label for="prenom_parent" class="flex justify-start font-medium text-md text-gray-800 "> Prenom du parent  </label>
                                <input type="text" v-model="form.prenom_parent" id="prenom_parent" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">
                               <span class=" text-sm text-red-700 font-medium " v-if="errors.prenom_parent"> {{this.errors.prenom_parent[0] }} </span>    
                            </div>
                             <div class="m-8">
                                <label for="email_parent" class="flex justify-start font-medium text-md text-gray-800 "> Adresse E-mail du parent  </label>
                                <input type="email" v-model="form.email_parent" id="email_parent" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="koukou@gmail.com">
                                 <span class=" text-sm text-red-700 font-medium " v-if="errors.email_parent"> {{this.errors.email_parent[0] }} </span>   
                            </div>
                            <div class="m-8">
                                <label for="email_confirmed" class="flex justify-start font-medium text-md text-gray-800 "> Adresse E-mail du confirmateur  </label>
                                <input type="email" v-model="form.email_confirmateur" id="email_confirmed" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="koukou@gmail.com">
                                 <span class=" text-sm text-red-700 font-medium " v-if="errors.email_confirmateur"> {{this.errors.email_confirmateur[0] }} </span>
                            </div>

                           
                 
                        </div>
                        <div class="col-span-2 border-l-2 p-6 border-red-800">
                        <div>
                            <p class="text-md font-semibold flex justify-start text-gray-400"> Informations sur le décedé(e)  </p> 
                            
                            <div class="grid grid-cols-2">
                                <div class="m-4">
                                    <label for="nom_deces" class="flex justify-start font-medium text-md text-gray-800 ">Nom du  Décèdé  </label>
                                    <input type="text" v-model="form.nom_du_mort" id="nom_deces" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">  
                                     <span class=" text-sm text-red-700 font-medium " v-if="errors.nom_du_mort"> {{this.errors.nom_du_mort[0] }} </span>  
                                </div>
                                <div class="m-4">
                                    <label for="prenom_decede" class="flex justify-start font-medium text-md text-gray-800 "> prenom du Décèdé </label>
                                    <input type="text" v-model="form.prenom_du_mort" id="prenom_decede" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND "> 
                                     <span class=" text-sm text-red-700 font-medium " v-if="errors.prenom_du_mort"> {{this.errors.prenom_du_mort[0] }} </span>
                                </div>

                                
                                                                
                            </div>
                            <div class="grid grid-cols-3">
                                
                                <div class="m-4">
                                    <label for="cause_deces" class="flex justify-start font-medium text-md text-gray-800 "> Ville de décès </label>
                                    <input type="text" v-model="form.ville_deces" id="cause_deces" min="0" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent "> 
                                     <span class=" text-sm text-red-700 font-medium " v-if="errors.ville_deces"> {{this.errors.ville_deces[0] }} </span>
                                </div>
                                <div class="m-4">
                                    <label for="cause_deces" class="flex justify-start font-medium text-md text-gray-800 "> Sexe du décédé </label>

                                    <div class="grid grid-cols-2 mt-5">
                                        <div class="flex items-center">
                                            <input id="sex_child_max" v-model="form.sexe_mort" value="Maxculin" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-6 w-6 md:h-3 md:w-3 text-indigo-600 border-gray-300">
                                            <label for="sex_child_max" class="ml-3 block text-sm font-medium text-gray-700">
                                                Maxculin
                                            </label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="sex_child_fem" v-model="form.sexe_mort" value="Feminin" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-6 w-6 md:h-3 md:w-3 text-indigo-600 border-gray-300">
                                            <label for="sex_child_fem" class="ml-3 block text-sm font-medium text-gray-700">
                                                Feminin
                                            </label>
                                        </div>
                                        <span class=" text-sm text-red-700 font-medium " v-if="errors.sexe_mort"> {{this.errors.sexe_mort[0] }} </span>

                                    </div>
                                </div>
                                  
                                <div class="m-4">
                                    <label for="heure_deces" class="flex justify-start font-medium text-md text-gray-800 "> Heure de Décès </label>
                                    <input type="time" v-model="form.heure_deces" id="heure_deces" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND "> 
                                     <span class=" text-sm text-red-700 font-medium " v-if="errors.heure_deces"> {{this.errors.heure_deces[0] }} </span>   
                                </div>
                                                                
                            </div>
                            <div class="grid grid-cols-2">
                                
                                <div class="m-4">
                                    <label for="nom_medecin" class="flex justify-start font-medium text-md text-gray-800 ">   Cause de Décès  </label>
                                    <input type="text" v-model="form.cause_deces" id="nom_medecin" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">
                                     <span class=" text-sm text-red-700 font-medium " v-if="errors.cause_deces"> {{this.errors.cause_deces[0] }} </span>  
                                </div>
                                <div class="m-4">
                                    <label for="prenom_medecin" class="flex justify-start font-medium text-md text-gray-800 "> Nom et Prenom du medecin responsable  </label>
                                    <input type="text" v-model="form.medecin_responsable" id="prenom_medecin" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">
                                     <span class=" text-sm text-red-700 font-medium " v-if="errors.medecin_responsable"> {{this.errors.medecin_responsable[0] }} </span>
                                </div>
                                
                            </div>
                        

                            <div class="m-8 flex justify-between pr-6">
                                <span class="text-gray-500 select-all ml-5 text-xl font-bold " v-if="code_generer"> CODE : {{code_generer}} </span>
                                <button class=" bg-gradient-to-r from-yellow-200 to-yellow-400 text-black font-bold py-2 px-4 rounded-lg
                                        focus:outline-none focus:shadow-outline border border-yellow-900" type="submit"> Envoyer ma declaration</button>
                            </div>

                        </div>
                           
                        </div>
                    </div>
             
                   
                </form>
          
      </div>
</template>

<script>
export default {

    data(){
        return{
            form :{
                nom_parent: null,
                prenom_parent: null,
                email_parent: null,
                email_confirmateur: null,
                nom_du_mort: null,
                prenom_du_mort: null,
                sexe_mort:null,
                heure_deces: null,
                cause_deces: null,
                ville_deces: null,
                medecin_responsable: null,
            },
            code_generer:null,
            errors:{}
        }
    },

    methods:{
        reset(){
                this.form.nom_parent = null
                this.form.prenom_parent = null
                this.form.email_parent = null
                this.form.email_confirmateur = null
                this.form.nom_du_mort = null
                this.form.prenom_du_mort = null
                this.form.heure_deces = null
                this.form.cause_deces = null
                this.form.ville_deces = null
                this.form.medecin_responsable = null             
        },
        submit(){

            this.axios.get('/sanctum/csrf-cookie').then(() => {

                this.axios.post('/api/enr-nouveau-dece', this.form)
                    .then(response =>{
                        // this.reset()
                        this.code_generer = response.data.data
                        console.log(this.code_generer)
                        this.errors = {}

                        
                    })
                    .catch(error => {
                        this.errors = error.response.data.errors
                    })

            })
        }
    }

}
</script>

<style>

</style>
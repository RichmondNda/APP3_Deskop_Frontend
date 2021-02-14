<template>
   <!--  NOuveau Nee  -->
      <div>
             <form  @submit.prevent="Enregistrement()">
                    <div class="grid grid-cols-3 mt-8">
                        <div class="p-4">
                            <p class="text-md mb-8 font-semibold text-gray-500"> Informations sur les parents  </p> 
                             
                            <div class="m-8 ">
                                <label for="nom_parent" class="flex justify-start font-medium text-md text-gray-800 "> Nom du parent </label>
                                <input type="text" v-model="form.nomParent" id="nom_parent" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="">   
                                <span class=" text-sm text-red-700 font-medium " v-if="errors.nomParent"> {{this.errors.nomParent[0] }} </span>
 
                            </div>
                            <div class="m-8">
                                <label for="prenom_parent" class="flex justify-start font-medium text-md text-gray-800 "> Prénoms du parent  </label>
                                <input type="text" v-model="form.prenomParent" id="prenom_parent" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="">
                                <span class=" text-sm text-red-700 font-medium " v-if="errors.prenomParent"> {{this.errors.prenomParent[0] }} </span>
   
                            </div>
                             <div class="m-8">
                                <label for="email_parent" class="flex justify-start font-medium text-md text-gray-800 "> Adresse E-mail du parent  </label>
                                <input type="email" v-model="form.emailParent" id="email_parent" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="koukou@gmail.com">
                                 <span class=" text-sm text-red-700 font-medium " v-if="errors.emailParent"> {{this.errors.emailParent[0] }} </span>

                            </div>

                           
                 
                        </div>
                        <div class="col-span-2 border-l-2 p-6 border-red-800">
                        <div>
                            <p class="text-md font-semibold flex justify-start text-gray-400"> Informations sur le nouveau né    </p> 

                           
                            
                            <div class="grid grid-cols-2">
                                    <div class="m-4">
                                        <label for="num_tel_pere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Sexe de l'enfant  </label>
                                         <div class="grid grid-cols-2 mt-5">
                                            <div class="flex items-center">
                                                <input id="sex_child_max" v-model="form.sexe" value="Maxculin" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-6 w-6 md:h-3 md:w-3 text-indigo-600 border-gray-300">
                                                <label for="sex_child_max" class="ml-3 block text-sm font-medium text-gray-700">
                                                    Maxculin
                                                </label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="sex_child_fem" v-model="form.sexe" value="Feminin" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-6 w-6 md:h-3 md:w-3 text-indigo-600 border-gray-300">
                                                <label for="sex_child_fem" class="ml-3 block text-sm font-medium text-gray-700">
                                                    Feminin
                                                </label>
                                            </div>
                                            <span class=" text-sm text-red-700 font-medium " v-if="errors.sexe"> {{this.errors.sexe[0] }} </span>

                                        </div>    
                                    </div>
                                    <div class="m-4">
                                        <label for="heure_naissance" class="flex justify-start font-medium text-md text-gray-800 "> Heure de Naissance </label>
                                        <input type="time" id="heure_naissance" v-model="form.heure" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">   
                                        <span class=" text-sm text-red-700 font-medium " v-if="errors.heure"> {{this.errors.heure[0] }} </span>
 
                                    </div>
                                                                    
                                </div>
                                <div class="grid grid-cols-2">
                                    
                                    <div class="m-4">
                                        <label for="nom_medecin" class="flex justify-start font-medium text-md text-gray-800 "> Nom du medecin responsable   </label>
                                        <input type="text" id="nom_medecin" v-model="form.nomMedecin" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">  
                                        <span class=" text-sm text-red-700 font-medium " v-if="errors.nomMedecin"> {{this.errors.nomMedecin[0] }} </span>
  
                                    </div>
                                    <div class="m-4">
                                        <label for="nom_sage_femme" class="flex justify-start font-medium text-md text-gray-800 "> Nom de la  Sage-femme responsable  </label>
                                        <input type="text" id="nom_sage_femme" v-model="form.sageFemme" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">  
                                           <span class=" text-sm text-red-700 font-medium " v-if="errors.sageFemme"> {{this.errors.sageFemme[0] }} </span>
  
                                    </div>
                                    
                                </div>
                            

                                <div class="m-8 flex justify-between pr-6 ">
                                     <span class="text-gray-500 ml-5 select-all text-xl font-bold " v-if="code_generer"> CODE : {{code_generer}} </span>
                                    <button class=" bg-gradient-to-r from-yellow-200 to-yellow-400 text-black font-bold py-2 px-4 rounded-lg
                                            focus:outline-none focus:shadow-outline border border-yellow-900"  type="submit"> Envoyer ma déclaration</button>
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
        return {
            form :{
                nomParent: null,
                prenomParent : null,
                emailParent : null ,
                sexe : null,
                heure: null,
                nomMedecin: null,
                sageFemme : null
            },
            errors :{},
            code_generer: null
        }
    },

    methods:{

        reset(){
                this.form.nomParent= null
                this.form.prenomParentthis = null
                this.form.emailParent = null,
                this.form.sexe = null
                this.form.heure = null
                this.form.nomMedecin= null
                this.form.sageFemme = null             
        },
        Enregistrement(){
           
            this.axios.get('/sanctum/csrf-cookie').then(() => {

                this.axios.post('/api/enr-nouveau-nee', this.form)
                    .then(response =>{
                        this.reset()
                        this.code_generer = response.data.data

                        
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
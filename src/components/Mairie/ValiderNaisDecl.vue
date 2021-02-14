<template>
  <div>
         <div class="p-4  bg-gray-50 shadow-md rounded-xl  ">
           
                <div class="text-2xl font-semibold  text-red-800">
                     <font-awesome-icon icon="arrow-alt-circle-left" class="text-yellow-400 mr-5" @click="retour()"></font-awesome-icon>
                     Déclaration  de Naissance 
                </div>
                <!-- formulaire -->
                <form @submit.prevent="submit()">
                    <div class="grid grid-cols-3 mt-8">
                        <div class="p-4">
                            <p class="text-md mb-8 font-semibold text-red-800"> Informations sur l'enfant </p> 
                            <div class="m-8 ">
                                <label for="nom_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Nom de l'enfant </label>
                                <input type="text" id="nom_enfant" v-model="form.nom" :disabled="disabledactive ? true : false" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="N'DA">    
                                <span class=" text-sm text-red-700 font-medium " v-if="errors.nom"> {{this.errors.nom[0]}} </span>

                            </div>
                            <div class="m-8">
                                <label for="prenom_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Prénoms de l'enfant </label>
                                <input type="text" id="prenom_enfant" v-model="form.prenom" :disabled="disabledactive ? true : false"  class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.prenom"> {{this.errors.prenom[0]}} </span>

                            </div>
                            <div class="m-8">
                                <label for="prenom_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Lieu de naissance </label>
                                <input type="text" id="prenom_enfant" :value="lieu_naissance" disabled class="mt-2 shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " >    
                            </div>
                            <div class="grid grid-cols-2 gap-2 m-8">
                                <div >
                                    <label for="lieu_naissance" class="flex justify-start font-medium text-md text-gray-800 "> Jour de naissance </label>
                                    <input type="text" id="lieu_naissance" :value="date_naissance" disabled class="mt-2 shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                </div>

                                <div >
                                    <label for="prenom_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Heure de naissance </label>
                                    <input type="text" id="prenom_enfant" :value="heure_naissance" disabled class="mt-2 shadow text-center appearance-none border rounded w-full py-2 px-3 text-gray-700
                                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                </div>
                            </div>

                            
                 
                        </div>
                        <div class="col-span-2 border-l-2 p-6 border-red-800">
                            <div>
                                <p class="text-md font-semibold flex justify-start text-red-800"> Informations sur le père  </p> 
                           
                                <div class="grid grid-cols-2">
                                    
                                    <div class="m-4">
                                        <label for="nom_pere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Nom du père  </label>
                                        <input type="text" v-model="form.nom_pere" :disabled="disabledactive ? true : false" id="nom_pere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">  
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.nom_pere"> {{this.errors.nom_pere[0]}} </span>  
                                    </div>
                                    <div class="m-4">
                                        <label for="prenom_pere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Prénoms du père  </label>
                                        <input type="text" v-model="form.prenom_pere" :disabled="disabledactive ? true : false" id="prenom_pere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">   
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.prenom_pere"> {{this.errors.prenom_pere[0]}} </span> 
                                    </div>
                                    
                                </div>
                                 <div class="grid grid-cols-2">
                                     <div class="m-4">
                                        <label for="num_tel_pere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Numéro de téléphone du père  </label>
                                        <input type="text" v-model="form.num_tel_pere" :disabled="disabledactive ? true : false" id="num_tel_pere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.num_tel_pere"> {{this.errors.num_tel_pere[0]}} </span>
                                    </div>
                                    <div class="m-4">
                                        <label for="num_cni_pere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Numéro de CNI du Père </label>
                                        <input type="text" v-model="form.num_cni_pere" :disabled="disabledactive ? true : false" id="num_cni_pere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.num_cni_pere"> {{this.errors.num_cni_pere[0]}} </span>
                                    </div>
                                                                       
                                </div>

                            </div>
                            <div class="mt-5">
                                <p class="text-md font-semibold flex justify-start text-red-800"> Informations sur la mère    </p> 
                           
                                <div class="grid grid-cols-2">
                                    
                                    <div class="m-4">
                                        <label for="nom_mere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Nom de la mère   </label>
                                        <input type="text" v-model="form.nom_mere" :disabled="disabledactive ? true : false" id="nom_mere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.nom_mere"> {{this.errors.nom_mere[0]}} </span>
                                    </div>
                                    <div class="m-4">
                                        <label for="prnenom_mere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Prénoms de la mère  </label>
                                        <input type="text" v-model="form.prenom_mere" :disabled="disabledactive ? true : false" id="prnenom_mere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.prenom_mere"> {{this.errors.prenom_mere[0]}} </span>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2">
                                     <div class="m-4">
                                        <label for="num_tel_mere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Numéro de téléphone de la mère  </label>
                                        <input type="text" v-model="form.num_tel_mere" :disabled="disabledactive ? true : false" id="num_tel_mere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.num_tel_mere"> {{this.errors.num_tel_mere[0]}} </span>
                                    </div>
                                    <div class="m-4">
                                        <label for="num_cni_mere_enfant" class="flex justify-start font-medium text-md text-gray-800 "> Numéro de CNI de la mère </label>
                                        <input type="text" v-model="form.num_cni_mere" :disabled="disabledactive ? true : false" id="num_cni_mere_enfant" class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="REGIS RICHMOND ">    
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.num_cni_mere"> {{this.errors.num_cni_mere[0]}} </span>
                                    </div>
                                                                       
                                </div>

                            </div>
                            
                        </div>
                    </div>
                    <div class="m-4 flex justify-center pr-6">
                        <button class=" bg-gradient-to-r from-yellow-200 to-yellow-400 mr-5 text-black font-bold py-2 px-6 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" @click.prevent="updateinfo()"> {{ disabledactive ?'Modifier': 'Verroullier'}} </button>
                                
                                <button class=" bg-red-700 text-white font-bold py-2 px-6 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" type="submit"> Valider </button>
                    </div>            
                   
                </form>
            </div>
        
  </div>
</template>

<script>
export default {

    mounted(){
        this.my_extrait = this.$store.state.extrait 
        this.form.nom = this.my_extrait.nom
        this.form.prenom = this.my_extrait.prenom
        this.form.nom_pere = this.my_extrait.nom_pere
        this.form.prenom_pere= this.my_extrait.prenom_pere
        this.form.num_tel_pere= this.my_extrait.num_tel_pere
        this.form.num_cni_pere= this.my_extrait.num_cni_pere
        this.form.nom_mere = this.my_extrait.nom_mere
        this.form.prenom_mere= this.my_extrait.prenom_mere
        this.form.num_tel_mere= this.my_extrait.num_tel_mere
        this.form.num_cni_mere= this.my_extrait.num_cni_mere

        this.lieu_naissance = this.my_extrait.lieu_naissance
        this.date_naissance = this.my_extrait.date_naissance.split(' ')[0]
        this.heure_naissance = this.my_extrait.heure_naissance
    },

    data(){
        return{
            my_extrait : null,
            form:{
                nom: null,
                prenom : null,
                nom_pere : null,
                prenom_pere: null,
                num_tel_pere: null,
                num_cni_pere: null,
                nom_mere : null,
                prenom_mere: null,
                num_tel_mere: null,
                num_cni_mere: null,
            },
            lieu_naissance : null,
            date_naissance : null,
            heure_naissance : null,
            disabledactive : true,
            errors :{}
        }
    },
    methods:{
        retour()
        {
            this.$router.push('/homeMarie')
        },
        updateinfo()
        {
            this.disabledactive = !this.disabledactive
        },
        submit()
        {
            this.axios.post('/api/EnregistrementExtrait', {
                            nom: this.form.nom,
                            prenom : this.form.prenom,
                            nom_pere : this.form.nom_pere,
                            prenom_pere: this.form.prenom_pere,
                            num_tel_pere: this.form.num_tel_pere,
                            num_cni_pere: this.form.num_cni_pere,
                            nom_mere : this.form.nom_mere,
                            prenom_mere: this.form.prenom_mere,
                            num_tel_mere: this.form.num_tel_mere,
                            num_cni_mere: this.form.num_cni_mere,
                            lieu_naissance : this.lieu_naissance,
                            date_naissance : this.date_naissance,
                            heure_naissance : this.heure_naissance,
                            ville : this.$store.state.user.institue, /// apres on doit revoire afin d'ajouter la ville 
                            code : this.$store.state.extrait.code_Generer
                            
                            })
                .then(response => {
                    console.log(response.data)
                    this.$router.push('/homeMarie') 
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                    console.log(this.errors)
                })
        }
    }

}
</script>

<style>

</style>
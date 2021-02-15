<template>
  <div>
        <div>

            <div class="text-2xl font-semibold p-8 text-red-800">
               <a @click="retour()">
                    <font-awesome-icon icon="arrow-alt-circle-left" class="text-yellow-400 mr-5" ></font-awesome-icon>
                    Retour
               </a>
                 
            </div>
        </div>
    
      <div class="grid grid-cols-7">

          <div class="col-span-3 mt-32 p-3">
              <img src="../../assets/Mariage.svg" alt="">
          </div>

          <div class="col-span-4 p-12">

                
                <div class="mt-16">

                     <div class="pt-6 pb-6 pl-10 pr-10 m-6 bg-white shadow-md rounded-xl  transform rotate-1">

                <div class="text-2xl text-center font-semibold  text-black">DECLARATION DE MARIAGE</div>

                <div v-if="erreur" class="m-4 text-center">
                    <span class="px-6 bg-red-100 text-red-800 py-2 rounded-md font-bold text-md"> {{erreur}}  </span>
                </div>

                <div v-if="success" class="m-4 text-center">
                    <span class="px-6 bg-green-100 text-green-800 py-2 rounded-md font-bold text-md"> {{success}}  </span>
                </div>
                <!-- formulaire -->
                <form @submit.prevent="enregistrement()">
                    <p  class="font-bold text-red-800 text-md p-4"> 
                        Information sur le conjoint
                    </p>
                    <div class="grid grid-cols-2 gap-8 "> 
                        <div class="m-1">
                            <input type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-800 focus:border-transparent" v-model="form.num_conjoint"  placeholder="Numéro"> 
                        
                            <span class=" text-xs text-red-700 font-medium " v-if="errors.num_conjoint"> {{this.errors.num_conjoint[0]}} </span>
    
                        </div>
                        <div class="m-1">
                            <input type="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-800 focus:border-transparent"  v-model="form.vue_date_conjoint" placeholder="Date">    
                            
                             <span class=" text-xs text-red-700 font-medium " v-if="errors.date_conjoint"> {{this.errors.date_conjoint[0]}} </span>

                        </div>
                    </div>

                    <p  class="font-bold text-red-800 text-md p-4"> 
                        Information sur <la></la> conjointe
                    </p>
                    <div class="grid  gap-8 grid-cols-2"> 
                        <div class="m-1">
                            <input type="number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-800 focus:border-transparent"  v-model="form.num_conjointe"  placeholder="Numéro"> 
                        
                            <span class=" text-xs text-red-700 font-medium " v-if="errors.num_conjointe"> {{this.errors.num_conjointe[0]}} </span>
    
                        </div>
                        <div class="m-1">
                            <input type="date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                            leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-gray-800 focus:border-transparent "  v-model="form.vue_date_conjointe" placeholder="Date">    
                            <span class=" text-xs text-red-700 font-medium " v-if="errors.date_conjointe"> {{this.errors.date_conjointe[0]}} </span>

                        </div>
                    </div>



                    <div class="m-4 flex justify-end pr-6">
                        <!-- bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 -->
                        <button class=" bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-4 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" type="submit"> Envoyer</button>
                            
                        
                    </div>
                </form>
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
            form:{
                num_conjoint:null,
                vue_date_conjoint:null,
                date_conjoint:null,
                num_conjointe: null,
                date_conjointe:null,
                vue_date_conjointe:null
            }, 
            errors:{},
            erreur:null,
            success:null
        }
    },

    methods:{
        retour(){
             this.$router.push('/homeMarie')
        },
        enregistrement()
        {

            let ex_date = new Date(this.form.vue_date_conjoint);

            if (ex_date.getMonth() + 1 < 10) {
                this.form.date_conjoint = 
                ex_date.getDate() +
                "/0" +
                (ex_date.getMonth() + 1) +
                "/" +
                ex_date.getFullYear();
            } else {
                this.form.date_conjoint =
                ex_date.getDate() +
                "/" +
                (ex_date.getMonth() + 1) +
                "/" +
                ex_date.getFullYear();
            }


            let ex_date_1 = new Date(this.form.vue_date_conjointe);

            if (ex_date_1.getMonth() + 1 < 10) {
                this.form.date_conjointe = 
                ex_date_1.getDate() +
                "/0" +
                (ex_date_1.getMonth() + 1) +
                "/" +
                ex_date_1.getFullYear();
            } else {
                this.form.date_conjointe =
                ex_date_1.getDate() +
                "/" +
                (ex_date_1.getMonth() + 1) +
                "/" +
                ex_date_1.getFullYear();
            }


             this.axios.get('/sanctum/csrf-cookie').then(() => {

                        this.axios.post('api/mariage', {

                            num_conjoint:this.form.num_conjoint,
                            date_conjoint:this.form.date_conjoint,
                            num_conjointe: this.form.num_conjointe,
                            date_conjointe:this.form.date_conjointe,          

                        })
                        .then((response) => {

                           if( response.data.success)
                           {
                                this.erreur = null
                                this.success  = response.data.message

                                
                                this.form.num_conjoint = null
                                this.form.vue_date_conjoint = null
                                this.form.date_conjoint = null
                                this.form.num_conjointe = null
                                this.form.date_conjointe = null
                                this.form.vue_date_conjointe = null       

                           }
                           else
                           {
                               this.success  = null
                               this.erreur = response.data.errors
                               console.log(this.erreur)
                           }

                            

                        })
                        .catch((error)=> {
                            this.errors = error.response.data.errors
                            console.log(error)
                        })
                });
            


            
      

        }
    }
}
</script>

<style>

</style>
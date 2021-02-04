<template>
  <div class=" pt-32 h-screen bg-black ">
      <div class="grid grid-cols-5 gap-4">
        <div class="col-span-2 p-3">
            <div class=" mt-10">
                <img alt="Soutra logo" src="../assets/SoutraLogo.png">
            </div>
             <div class=" mt-2 text-white  text-md">
                <span class="font-bold text-red-900">E-Soutra</span> est une ensemble d'etudiant de l'Ecole Supérieur Africaine des Technologies 
                de l'Information et de la Communication (<span class="font-bold text-yellow-100">ESATIC</span>) dévéllopant des solutions pour 
                l'evolution de la Cote d'Ivoire .

                
            </div>
        </div>

        <div class="col-span-3 p-6">
            <div class="p-6 m-6 bg-white shadow-md rounded-xl  transform rotate-1">

                <div class="text-2xl text-center font-semibold  text-black">Login</div>
                <!-- formulaire -->
                <form @submit.prevent="Login()">
                    <div class="m-8">
                        <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-yellow-100 focus:border-transparent"  v-model="form.email" placeholder="E-mail"> 
                    
                        <span class=" text-sm text-red-700 font-medium " v-if="errors.email"> {{this.errors.email[0] }} </span>
   
                    </div>
                    <div class="m-8">
                        <input type="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                        leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-yellow-100 focus:border-transparent " v-model="form.password" placeholder="Password">    
                        
                        <span class=" text-sm text-red-700 font-medium " v-if="errors.password"> {{this.errors.password[0]}} </span>

                    </div>
                    <div class="m-8 flex justify-end pr-6">
                        <!-- bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 -->
                        <button class=" bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-4 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" type="submit"> Envoyer</button>
                            
                        
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  </div>
</template>

<script>
export default {

    data () {
        return {
            form : { email : null, password : null },
            errors : {}
        }
    },

    methods :{
        reset(){
            this.form.email = null ;
            this.form.password = null ;
            this.errors = {};
        },

        Login(){
            // alert( this.form.email + " est  connectée")
            this.axios.get('/sanctum/csrf-cookie').then(() => {

                    this.axios.post('/api/connection', {
                            email : this.form.email,
                            password : this.form.password
                            })
                        .then(response => {
                            console.log(response.data)

                            this.reset()

                            this.$store.commit('setAuth',response.data.data)

                            // this.$router.push('homeMarie') 
                            // this.$router.push('homeHopitale')
                            
                            if(response.data.data.institue == "Mairie")
                            {
                                this.$router.push('homeMarie') 
                                
                            }
                            else
                            {
                                this.$router.push('homeHopitale')
                            }
                             
                        })
                        .catch((error) => {
                          
                        
                            
                            this.errors = error.response.data.errors
                            
                            // else if( error.response.data.data)
                            // {
                            //     this.errors = error.response.data.data
                            // }
                            // this.errors = error.response.data.data

                            console.log(this.errors)
                            
                            
                        });
            });
            
            
        }
    }

}
</script>

<style>

</style>
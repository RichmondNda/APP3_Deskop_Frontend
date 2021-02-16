<template>
   <div>
      <div class="grid grid-cols-7 gap-4">

          <div class="col-span-2 rounded-md shadow-md h-screen bg-yellow-100">
              <div class="mt-10 flex justify-center">
                    <div class="relative w-36 h-36">
                        <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
                    </div>
              </div>
              <div class="mt-3 text-center">
                  <p class="text-md font-semibold mt-3">
                      {{user.nom }} {{user.prenom }}
                  </p>

                  <p class=" mr-10 ml-10 mt-2 border-2 border-red-800 w-68"> </p>

                  <p class="mt-5">
                      <span class="font-semibold">Adresse E-mail :  </span> {{user.email}}
                  </p>
                  <p class="mt-3">
                      <span class="font-semibold">Fonction  :  </span> {{user.role}}
                  </p>
                   <p class="mt-3" >
                      <span class="font-semibold">Institut :  </span> {{user.institue}}
                  </p>

                  
                 <div class=" mt-10 mb-5">
                    <div class="m-3 mb-5 ">
                      <button class=" hover:bg-red-800 hover:text-white text-black font-bold py-2 px-4 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" @click="RegistresNaissance()"> REGISTRE NAISSANCE  </button>
                  </div>

                   <div class="m-3 mb-5 ">
                      <button class=" hover:bg-red-800 hover:text-white text-black font-bold py-2 px-4 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" @click="Mariage()" type="submit"> Mariage</button>
                  </div>

                  <div class="m-3 mb-5 ">
                      <button class=" hover:bg-red-800 hover:text-white text-black font-bold py-2 px-4 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" @click="Statistique()"  type="submit"> Statistiques </button>
                  </div>

                 

                    
                <div class=" flex justify-end m-8">
                    <button class=" bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-4 rounded-lg
                                focus:outline-none focus:shadow-outline border border-yellow-900" @click="Deconnection()"> Deconnexion </button>
                </div>
                  
                 </div>
              </div>
          </div>

          <div class="col-span-5">
              <div class="pt-10 text-center">
                  <p class="text-red-900  font-medium lg:text-2xl sm:text-xl">
                       Bienvenue <span class="text-yellow-400 font-semibold"> {{user.nom}} </span> sur votre espace.
                  </p>

                  <!-- <p class="mt-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam distinctio, reiciendis quisquam dicta quibusdam minus officia! Labore obcaecati ratione corrupti, velit delectus cum, ad quisquam quibusdam itaque tenetur inventore non!
                      40 43 44 98/48 05 21 34 tonton leonard frere victor N'da 
                  </p> -->

                <div class="grid grid-cols-6 mt-14">

                    <div></div>

                    <div class="col-span-4 pt-14">
                        <div class="p-6 m-2  bg-white shadow-xl rounded-xl ring-1 ring-red-100">

                            <div class="text-xl font-semibold mb-10 text-black text-md">Entrez le code de la demande</div>
                            <!-- formulaire -->
                            <form @submit.prevent="codeVerify()">
                                <div class="m-4">
                                    
                                    <input type="text" v-model="form.code" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                                    leading-tight focus:outline-none focus:shadow-outline ring-2 ring-gray-200 focus:ring-2 focus:ring-red-800 focus:border-transparent " placeholder="Code de la demande ..."> 
                                    <span class=" text-sm text-red-700 font-medium " v-if="errors.code"> {{this.errors.code[0] }} </span>
   
                                </div>
                               
                                <div class="m-4 flex justify-end ">
                                    <!-- bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 -->
                                    <button class="bg-gradient-to-r from-red-600 to-red-900 text-white font-bold py-2 px-4 rounded-lg
                                            focus:outline-none focus:shadow-outline border border-yellow-900" type="submit"> Envoyer</button>
                                        
                                    
                                </div>
                            </form>
                        </div>
                    </div>

                     <div class="">
                       
                     </div>


                </div>

              </div>
          </div>

      </div>
  </div>
</template>

<script>


export default {
  components: {  },
  data(){
    return {
      user : this.$store.state.user,
      errors : {
          code :null    
      },
      form :{
          code :null
      }
    }
  },
  methods:{
      Deconnection()
      {
          this.$store.commit('logout')
          this.$router.push('/') 
      },
      codeVerify()
      {
           this.axios.post('/api/codeVerify', {
                            code : this.form.code
                            })
                .then(response => {
                    // console.log(response.data)
                    this.$store.commit('setInfoChild',response.data.data)
                    this.$router.push('/ValiderDecNais')
                })
                .catch(error => {
                    this.errors =  error.response.data.errors
                    // console.log(this.errors)

                })
      },
      RegistresNaissance()
      {
          this.$router.push('/RegistresNaissance');
      },
      Mariage()
      {
          this.$router.push('/Mariage');
      },
      Statistique()
      {
          this.$router.push('/Statistique');
      }
  }

}
</script>

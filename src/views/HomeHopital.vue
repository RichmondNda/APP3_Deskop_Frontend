<template>
  <div class=" container p-8">
      <div class="grid grid-cols-3 border-b-2 border-red-800">

          <div>
            <div class="mt-5 flex justify-center">
                    <div class="relative w-36 h-36">
                        <img class="rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
                    </div>
                   
              </div>
          </div>
          <div class="col-span-2 p-2 text-center">
              <p class="text-2xl text-red-800 font-medium ">
                   Bienvenue à l'Hopital General de Treichville 
              </p>
            <div class="mt-5">
                <p class="text-xl font-medium"> {{user.nom}} {{user.prenom}} </p>
                <p class="text-gray-500"> {{user.email}}  </p>
                <div class="m-3 flex justify-center pr-6">
                    <button class=" mr-3 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg
                          focus:outline-none focus:shadow-outline border border-yellow-900" @click="bb_show_function()">Déclaration de naissance</button>
                    <button class=" mr-3 bg-red-700 text-white font-bold py-2 px-4 rounded-lg
                            focus:outline-none focus:shadow-outline border border-yellow-900" @click="Deconnection()">Mon Profile</button>
                    <button class=" hover:bg-red-700 hover:text-white text-black font-bold py-2 px-4 rounded-lg
                            focus:outline-none focus:shadow-outline border border-yellow-900" @click="deces_show_function()">Déclaration de Décès</button>
                </div>
            </div>
          </div>
      </div>
       
       <div v-show="bb_show">
          <nouveau-nee></nouveau-nee>
       </div>
        <div v-show="deces_show">
          <deces></deces>
       </div>
      
  </div>
</template>

<script>
import nouveauNee from './../components/Hopital/NouveauNee'
import deces from './../components/Hopital/Deces'


export default {
  components: { nouveauNee, deces },
  data(){
      return {
          bb_show : true,
          deces_show : false,
          user : this.$store.state.user
      }
  },
  methods :{
      bb_show_function(){
          this.bb_show = true,
          this.deces_show = false
      },
      deces_show_function(){
          this.bb_show = false,
          this.deces_show = true
      },
      Deconnection()
      {
          this.$store.commit('logout')
          this.$router.push('/') 
      }
  }

}
</script>

<style>

</style>
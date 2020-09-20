<template>
  <v-app>
    <router-view></router-view>
    <div>
    <v-app-bar
      dark
      app
    >
      <v-btn
          icon
          v-on:click="goToHomepage()"
        >
          <v-img 
              src="./components/images/Logo.png"
              alt=""
              contain
              height="50px"
              width="50px"
          >
          </v-img>
        </v-btn>
      <v-spacer></v-spacer>

      <v-btn text v-on:click="goToAbout()" class="mx-1">About</v-btn>
      <v-btn text v-on:click="goToProjects()" class="mx-1">Projects</v-btn>
      <v-btn text v-on:click="goToContact()" class="mx-1">Contact</v-btn>
      <v-btn color="cyan darken-1" v-on:click="goToMCPlugin()" class="mx-1">Minecraft Plugin</v-btn>

    </v-app-bar>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  methods:{
    goToHomepage(){
      this.$router.push('/')
    },
    goToAbout(){
      this.$router.push('about')
    },
    goToProjects(){
      this.$router.push('projects')
    },
    goToContact(){
      this.$router.push('contact')
    },
    goToMCPlugin(){
      this.$router.push('mcplugin')
    }
  },

  data: () => ({
    //
  }),
};
</script>

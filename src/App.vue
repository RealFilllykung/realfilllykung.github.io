<template>
  <v-app>
    <router-view></router-view>
    <v-card
    color="grey lighten-4"
    flat
    height="0px"
    tile
  >
    <v-toolbar dark>
      <!--
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      -->

      <v-toolbar-title>
        <v-btn
          icon
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
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>About</v-btn>
      <v-btn text>Contact</v-btn>
      <v-btn color="cyan darken-1">Minecraft Plugin</v-btn>

<!--
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      -->

<!--
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      -->
    </v-toolbar>
  </v-card>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  methods:{
    
  },

  data: () => ({
    //
  }),
};
</script>

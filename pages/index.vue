<template>
  <main>
    <LandingMain/>
    <LandingAbout/>
    <LandingProjects/>
   <!--  <LandingServices/> -->
    <LandingContact/>
  </main>
</template>

<script>
  import LandingMain from "../components/Landing/LandingMain.vue";
  import LandingAbout from "../components/Landing/LandingAbout.vue";
  import LandingProjects from "../components/Landing/LandingProjects.vue";
  import LandingContact from "../components/Landing/LandingContact.vue";
  import LandingServices from "../components/Landing/LandingServices.vue";

  export default {
    components:
    {
      LandingMain,
      LandingAbout,
      LandingProjects,
      LandingContact,
      LandingServices
    }
  }

</script>

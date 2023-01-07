<template>
  <main>
    <LandingMain/>
    <LandingAbout/>
    <LandingProjects/>
    <LandingContact/>
  </main>
</template>

<script>
  import LandingMain from "../components/Landing/LandingMain.vue";
  import LandingAbout from "../components/Landing/LandingAbout.vue";
  import LandingProjects from "../components/Landing/LandingProjects.vue";
  import LandingContact from "../components/Landing/LandingContact.vue";

  export default {
    components:
    {
      LandingMain,
      LandingAbout,
      LandingProjects,
      LandingContact
    }
  }

</script>

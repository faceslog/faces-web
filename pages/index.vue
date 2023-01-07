<template>
  <main>
    <LandingMain/>
    <LandingAbout/>
    <LandingArticles/>
    <LandingContact/>
  </main>
</template>

<script>
  import LandingMain from "../components/Landing/LandingMain.vue";
  import LandingAbout from "../components/Landing/LandingAbout.vue";
  import LandingArticles from "../components/Landing/LandingArticles.vue";
  import LandingContact from "../components/Landing/LandingContact.vue";

  export default {
    components:
    {
      LandingMain,
      LandingAbout,
      LandingArticles,
      LandingContact
    }
  }

</script>

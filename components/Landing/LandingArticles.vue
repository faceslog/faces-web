<template>
  <section id="articles" class="lg:px-40 pb-10 px-6">
    <div>
      <!-- Title -->
      <div class="text-white text-5xl font-bold pb-12">Articles.</div>

      <!-- Projects Container -->
      <div v-for="(project, index) in projects" :key="index" class="text-white cursor-pointer">
        <a class="flex mb-4" :href="project.link">
          <!-- Date -->
          <div class="flex-none lg:w-20 w-1/12">
            <div class="lg:text-sm text-xs font-semibold italic uppercase">{{ project.date }}</div>
          </div>
          <div class="flex-none mx-4 w-1 bg-color2 rounded-lg"></div>
          <div class="font-mono">
            <!-- Title -->
            <div class="font-bold text-lg">{{ project.title }}</div>
            <!-- Brief Description -->
            <div class="text-gray-100 text-sm">{{ project.description }}</div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
      name: "LandingArticles",
      data()
      {
        return {
          projects: [
            {
              date: "",
              title: "",
              description: "",
              link: ""
            }
          ]
        };
      },
      async fetch() {
        try {
          let response = await this.$axios.$get("/api/books");
          this.projects = response.data;
        }
        catch (err) {
          console.error("Failed to Request Projects Data: " + err);
        }
      }
  }
</script>


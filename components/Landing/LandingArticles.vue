<template>
  <section id="articles" class="lg:px-40 mb-16 px-6">
    <div>
      <!-- Title -->
      <div class="text-white text-5xl font-bold pb-12">Articles</div>

      <!-- Projects Container -->
      <div v-for="(project, index) in projects" :key="index" class="text-white cursor-pointer">
        <a class="flex mb-4" :href="project.link">
          <div class="flex-none mr-4 w-1 bg-color2 rounded-lg"></div>
          <div class="font-mono">
            <!-- Title -->
            <div class="font-medium text-lg">{{ project.title }}</div>
            <!-- Brief Description -->
            <div class="text-gray-300 text-sm font-light">{{ project.description }}</div>
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


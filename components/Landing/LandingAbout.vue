<template>
  <section id="about" class="lg:px-40 px-6 py-10">
    <!-- Bio -->
    <div class="mx-auto">
      <!-- Title -->
      <div class="text-white text-5xl font-bold pb-12">Hello.</div>
      <!-- Text Bio -->
      <div class="text-justify text-white text-lg font-semibold tracking-normal leading-relaxed">
        <p class="pb-4">
          I'm Faceslog, a French computer science Uni student interested in Cyber Security, Reverse Engineering, Malware Analysis, Sotftware Development.
        </p>
        <p class="pb-4">
          I study operating systems internals and low level programming. Game Hacking and Reverse Engineering are my main hobbies but I also do some web projects like this website for my personal knowledge. My goal is to use my programming skills to develop security software solutions and help malware analysts.
        </p>
        <p class="pb-4">
          Outside of programming and studying I love photography and exploration of lost places which help me disconnect from our digital world and get an even better creative mindset.
        </p>
        <p class="pb-4">
          My favorites programming languages are: C++, C, Java, NodeJS and Rust. I'm also used to work with some known tools and frameworks like VueJS, Docker and Git and much more.
        </p>
      </div>
    </div>
    <div class="w-full h-44">
      <iframe class="w-full h-full" src="https://github-readme-stats.vercel.app/api/top-langs/?username=faceslog&layout=compact&theme=github_dark" title="Most Used Languages"></iframe>
    </div>
  </section>
</template>

<script>
    export default {
      name: "LandingAbout",
    }
</script>

<template>
  <!-- Landing Block -->
  <section class="lg:flex items-center justify-evenly min-h-screen">
    <section class="lg:flex">
      <!-- Profile Picture -->
      <img class="lg:flex-auto lg:inline lg:w-64 lg:h-64 lg:mt-0 w-56 h-56 mt-16 mx-auto object-cover rounded-full" src="landing/profile.webp" alt="Profile image"/>
      <div class="lg:flex-auto py-6 px-12">
        <!-- Titles -->
        <div class="pb-8">
          <div class="lg:text-left text-center text-white text-lg uppercase pb-4">Hi, There 👋</div>
          <div class="lg:text-left lg:text-6xl text-center text-5xl text-white font-bold pb-4">Faceslog.</div>
          <div class="lg:text-left text-center text-2xl font-bold text-gradient pb-4">
            <span class="typed-text">{{ typeValue }}</span>
            <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
          </div>
        </div>

        <!-- Logo Box -->
        <div class="flex">
          <!-- Github Logo -->
          <div class="mx-auto flex">
            <div class="lg:mr-16 mr-10 flex-auto">
              <a href="https://github.com/faceslog"><img class="lg:h-16 lg:w-16 w-10 h-10 cursor-pointer" src="logo/github.webp" alt="github-logo" /></a>
            </div>
            <div class="lg:mr-16 mr-10 flex-auto">
              <a href="https://gitlab.com/faceslog"><img class="lg:h-16 lg:w-16 w-10 h-10 cursor-pointer" src="logo/gitlab.webp" alt="gitlab-logo" /></a>
            </div>
            <div class="flex-auto">
              <a href="https://twitter.com/faceslog"><img class="lg:h-16 lg:w-16 w-10 h-10 cursor-pointer" src="logo/twitter.webp" alt="twitter-logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Menu -->
    <section class="xl:inline-block hidden px-20 text-white text-4xl font-extrabold lowercase">
      <div class="px-8 py-6 cursor-pointer">
        <a href="#about">about.</a>
      </div>

      <div class="px-8 py-6 cursor-pointer">
        <a href="#articles">articles.</a>
      </div>

      <!--<div class="px-8 py-6 cursor-pointer">
        <a href="#services">services.</a>
      </div> -->

      <div class="px-8 py-6 cursor-pointer">
        <a href="#contact">contact.</a>
      </div>
    </section>
  </section>

</template>

<script>
  export default {
    name:"LandingMain",
    data() {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: [ "Computer Science Student", "Software Development", "Reverse Engineering", "Self-Hosting", "Photography" ],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      };
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style scoped>

  span.cursor {
    display: inline-block;
    margin-left: 3px;
    background-color: #ffffff;
    animation: cursorBlink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }

  @keyframes cursorBlink {
    49% { background-color: #ffffff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }

</style>

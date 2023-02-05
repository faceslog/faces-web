<template>
  <section id="contact" class="lg:px-40 px-6 select-none">
    <div>
      <!-- Title -->
      <div class="text-5xl font-bold pb-12 text-white select-none">Contact</div>
      <div class="text-white">
        <div class="text-md font-semibold mb-5">Matrix: <a class="font-light underline select-text" href="https://matrix.to/#/@faceslog:matrix.org">@faceslog:matrix.org</a></div>
        <div class="text-md font-semibold mb-5">Mastodon: <span class="font-light select-text">@faces@mstdn.social</span></div>
        <div class="text-md font-semibold mb-5">Twitter: <a class="font-light underline select-text" href="https://twitter.com/faceslog">faceslog</a></div>
        <div class="text-md font-semibold mb-5">Discord: <span class="font-light select-text">faceslog#6851</span></div>
        <div class="text-md font-semibold mb-5 break-all">Session: <span class="font-light select-text">059acd4a8253f815cb827574a62ee80a079be5145ad55309c41e9eb2d287412715</span></div>
        <div class="text-md font-semibold mb-5">Email: <span class="font-light">Please, use the form below</span></div>
      </div>      
      <!-- Email Contact Form Box -->
      <div class="lg:flex container items-center justify-evenly mx-auto">
        <div>
          <img class="lg:h-1/5 lg:w-1/5 h-40 w-40 mx-auto mb-6" alt="email-logo" src="landing/email.svg"/>
          <!-- Form -->
          <form @submit.prevent="onSubmit" class="lg:w-1/2 md:w-9/12 w-full items-center mx-auto mb-6">

            <div v-if="errors.length" class="text-center text-sm mb-2">
              <strong class="text-red-400">Please correct the following error(s):</strong>
              <ul class="mb-1 font-semibold text-white">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
            <div v-else-if="isSuccess" class="text-center text-sm mb-2">
              <strong class="text-white">Sent ! I'll get back to you as soon as I can !</strong>
            </div>

            <input v-model="contact.email" id="email" type="email" name="email" placeholder="Your email:" v-bind:class="cssFormBorder" class="w-full border-2 px-4 py-1 rounded-2xl mb-3 text-white text-sm font-semibold bg-transparent outline-none"/>
            <input v-model="contact.subject" id="subject" type="text" name="subject" minlength="5" placeholder="Subject:" v-bind:class="cssFormBorder" class="w-full border-2 px-4 py-1 rounded-2xl mb-3 text-white text-sm font-semibold bg-transparent outline-none"/>
            <textarea v-model="contact.message" id="message" name="message" placeholder="Message:" minlength="10" maxlength="1200" v-bind:class="cssFormBorder" class="h-96 w-full mb-3 border-2 rounded-2xl bg-transparent text-white px-4 py-1 text-sm font-semibold outline-none resize-none"></textarea>

            <div class="flex justify-center mb-4">
              <vue-hcaptcha @verify="onResolvaCaptcha" @error="onErrorCaptcha" :sitekey="this.$config.hcaptcha.siteKey" theme="dark" size="normal"></vue-hcaptcha>
            </div>

            <div class="text-center">
              <input type="submit" v-bind:class="cssFormBorder" class="lg:text-md text-sm w-1/4 py-2 rounded-xl border-2 bg-transparent shadow-lg font-semibold text-white outline-none resize-none cursor-pointer"/>
            </div>
          </form>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VueHcaptcha from '@hcaptcha/vue-hcaptcha';
  import Footer from "../Footer";

  export default {
      name: "LandingContact",
      components: {
        Footer,
        VueHcaptcha
      },
      data() {
        return {
          errors: [],
          isSuccess: false,
          contact: {
            email: null,
            subject: null,
            message: null,
            captcha: {
              token: null,
              eKey: null
            }
          }
        };
      },
      computed: {
        cssFormBorder: function () {
          if(this.errors.length > 0)
            return 'border-red-400'

          if(this.isSuccess)
            return 'border-green-400'

          return 'border-color2'
        }
      },
      methods: {
        isThereErrors: function() {
          this.errors = [];

          if (!this.contact.email) {
            this.errors.push("Your Email is required.");
          }

          if (!this.contact.subject) {
            this.errors.push("Subject required.");
          }

          if (!this.contact.message) {
            this.errors.push("Message required.");
          }

          if(this.contact.captcha.token <= 0) {
            this.errors.push("Invalid hCaptcha.");
          }

          return this.errors.length > 0;
        },
        onResolvaCaptcha: function(token, eKey) {
          this.contact.captcha.token = token;
          this.contact.captcha.eKey = eKey;
        },
        onErrorCaptcha: function(err) {
          this.contact.captcha.token = null;
          this.contact.captcha.eKey = null;
          console.log(`Error Captcha: ${err}`);
        },
        onSubmit: async function(e) {

          if (this.isThereErrors())
            return;

          e.preventDefault();

          try {
            let res = await this.$axios.$post("/api/contact", this.contact);
            if(res.message)
              this.isSuccess = true;

          } catch (error) {

            if (error.response) {
              console.error(error.response.data);
              this.errors.push(error.response.data.message);
              return;
            }
            
            this.errors.push("Oops! Something Went Wrong ...");
          }
        }
      }
  }
</script>


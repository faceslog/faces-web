<template>
  <section id="contact" class="lg:px-40 px-6 text-white">
    <div>
      <!-- Title -->
      <div class="text-5xl font-bold pb-12">Contact.</div>
      <div class="text-md font-semibold italic mb-2">Matrix: @faceslog:matrix.org</div>
      <div class="text-md font-semibold italic mb-2">Mastodon: @faces@mstdn.social</div>
      <div class="text-md font-semibold italic mb-2">Twitter: faceslog</div>
      <div class="text-md font-semibold italic mb-2">Discord: faceslog#6851</div>
      <div class="text-md font-semibold italic mb-2">Email: Please, use the form below</div>
      <!-- Email Contact Form Box -->
      <div class="lg:flex container items-center justify-evenly mx-auto">
        <div>
          <nuxt-img class="lg:h-1/4 lg:w-1/4 h-44 w-44 mx-auto mb-6" alt="email-logo" src="landing/email.svg"/>
          <!-- Form -->
          <form @submit.prevent="submitForm" class="lg:w-1/2 items-center w-full mx-auto mb-6">

            <div v-if="errors.length" class="text-center text-sm mb-2">
              <strong class="text-red-400">Please correct the following error(s):</strong>
              <ul class="mb-1 font-semibold">
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
            </div>
            <div v-else-if="isSuccess" class="text-center text-sm mb-2">
              <strong class="text-white">Sent ! I'll get back to you as soon as I can !</strong>
            </div>

            <input v-model="contact.email" id="email" type="email" name="email" placeholder="Your email:" v-bind:class="cssFormBorder" class="w-full border-4 px-4 py-1 rounded-2xl mb-3 text-white text-sm font-semibold bg-transparent outline-none"/>
            <input v-model="contact.subject" id="subject" type="text" name="subject" minlength="5" placeholder="Subject:" v-bind:class="cssFormBorder" class="w-full border-4 px-4 py-1 rounded-2xl mb-3 text-white text-sm font-semibold bg-transparent outline-none"/>
            <textarea v-model="contact.message" id="message" name="message" placeholder="Message:" minlength="10" maxlength="1200" v-bind:class="cssFormBorder" class="h-96 w-full mb-3 border-4 rounded-2xl bg-transparent text-white px-4 py-1 text-sm font-semibold outline-none resize-none"/>

            <div class="flex justify-center mb-4">
              <hcaptcha />
            </div>
            <div class="text-center">
              <input type="submit" v-bind:class="cssFormBorder" class="lg:text-lg text-sm w-1/3 py-2 border-4 rounded-2xl bg-transparent font-semibold text-gray-400 outline-none resize-none cursor-pointer"/>
            </div>
          </form>
          <Footer/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import Footer from "../Footer";

    export default {
        name: "LandingContact",
        components: {
          Footer
        },
        data()
        {
          return {
            errors: [],
            isSuccess: false,
            contact: {
              email: null,
              subject: null,
              message: null,
              captcha: null
            }
          };
        },
        computed: {
          cssFormBorder: function () {
              if(this.errors.length > 0)
              {
                return 'border-red-400'
              }

              if(this.isSuccess)
              {
                return 'border-green-400'
              }

              return 'border-color2'
          }
        },
        methods: {
          /**
           * Check if there is any errors and display them
           * @returns {boolean}
           */
          isThereErrors: function()
          {
            this.errors = [];
            let isToggled = false;

            if (!this.contact.email) {
              this.errors.push("Your Email is required.");
              isToggled = true;
            }

            if (!this.contact.subject) {
              this.errors.push("Subject required.");
              isToggled = true;
            }

            if (!this.contact.message) {
              this.errors.push("Message required.");
              isToggled = true;
            }

            if(this.contact.captcha.length <= 0)
            {
              this.errors.push("Invalid hCaptcha.");
              isToggled = true;
            }

            return isToggled
          },
          postRequest: async function()
          {
            // Use try catch to get errors thrown by Axios !
            try
            {
              let res = await this.$axios.$post("/api/contact", this.contact);
              if(res.message)
              {
                this.isSuccess = true;
              }
            }
            catch (error)
            {
              if (error.response)
              {
                console.error(error.response.data);
                this.errors.push(error.response.data.message);
              }
              else
              {
                this.errors.push("Oops! Something Went Wrong ...");
              }
            }
          },
          submitForm: async function(e)
          {
            this.contact.captcha = await this.$hcaptcha.getResponse();

            if (!this.isThereErrors()) {
              await this.postRequest();
            }

            e.preventDefault();
          }
        }
    }
</script>


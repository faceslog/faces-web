<template>
  <section id="services" class="pb-20 lg:px-0 px-6">
    
    <!-- Title -->
    <div class="lg:px-40 text-white text-5xl font-bold pb-12">Services.</div>
    
    <div class="lg:flex container pt-4 text-white mx-auto">
        
        <div v-for="service in services" :key="service" class="md:w-1/2 p-5 mx-auto mb-4">
            <img alt="service-img" class="rounded-md mb-4 w-3/4" :src="service.img" />
            <h4 class="text-2xl font-semibold py-2">{{ service.name }}</h4>
            
            <div class="pb-2 w-full border-white">
                <p class="text-justify mb-5">{{ service.description }} <span class="italic text-xs">{{ service.location }}</span></p>
            </div>

            <a class="bg-alt-color p-2 shadow-md font-semibold text-sm rounded-lg" href="#contact">{{ service.button }}</a>
        </div>
        
    </div>
    
  </section>
</template>

<script>
export default {
    name: "LandingServices",
    data() 
    {
        return {
            services: [
                {
                    name: "Web Development",
                    description: "There’s no doubt about it. To compete in today’s competitive market you need a strong online presence. That's why I can build and deploy a secure responsive website that fits your needs.",
                    location: "(Devlopment and Web Hosting are separated services)",
                    button: "Contact me",
                    img: "landing/services/web-dev.jpg"
                },
                {
                    name: "PC Building",
                    description: "You want to build your own custom computer and you don't know how to get started or are scared to mess it up ? I can teach you how to build it from scratch, or I can do it myself according to your needs.",
                    location: "(Only in some cities in France)",
                    button: "Contact me",
                    img: "landing/services/pc-build.jpg"
                },
                {
                    name: "Web Hosting & VPS",
                    description: "Need to host your Website or Game Server without dealing with SSL certificates, Backups or Security ? No worries, I can handle it for you. Need a VPS to deploy your projects and get more flexibility ? Just ask.",
                    location: "(Hosted in Germany, VPS: Linux only)",
                    button: "Contact me",
                    img: "landing/services/servers.jpg"
                }
            ]
        }
    },
    mounted()
    {
        if(this.services.length > 3)
        {
            throw "Services max length is 3 without changing the css";
        } 
    }
}
</script>
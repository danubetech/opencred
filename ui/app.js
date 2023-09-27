// import App from './App.vue';
import {createSSRApp} from 'vue';

export const createApp = function(data) {
  return createSSRApp({
    data: () => data,
    template: `
<link rel="stylesheet" href="/static/styles.css">
<header class="w-screen" style="background: ${data.theme.header};">
  <div class="mx-auto flex justify-between items-center p-6 max-w-3xl">
    <a v-bind:href="rp.redirect_uri"
      class="flex items-center gap-3">
      <img v-bind:src="rp.icon" v-bind:alt="rp.name + 'Logo'" />
    </a>
    <button
      class="flex flex-col text-white items-center text-xs gap-3
             hover:underline">
      <div class="bg-white rounded-full p-1 flex">
        <img src="https://imagedelivery.net/I-hc6FAYxquPgv-npvTcWQ/505d9676-7f3a-49cc-bf9a-883439873d00/public" />
      </div>
      {{translations[defaultLanguage].translate}}
    </button>
  </div>
</header>
<div
  class="w-screen relative">
  <div class="bg-white w-full text-center py-4">
    <h2 class="font-bold">Home</h2>
  </div>
  <div class="bg-no-repeat bg-cover clip-path-bg z-0 min-h-[460px]" 
    style="background-image: url('${data.rp.background_image}');">
    <div class="text-center text-6xl py-10">
      &nbsp
    </div>
  </div>
  <div class="-mt-72 bg-white z-10 mx-auto p-10 rounded-md max-w-3xl px-32 relative">
    <h1 class="text-3xl mb-12 text-center" 
      style="color: ${data.theme.primary}">
      {{translations[defaultLanguage].login_cta}}
    </h1>
    <p class="mb-4">{{translations[defaultLanguage].login_explain}}</p>
    <p class="mb-6">{{translations[defaultLanguage].app_install_explain}}</p>
    <div class="flex justify-center">
      <button class="text-white py-2 px-6 rounded-xl my-8"
        style="background: ${data.theme.cta};">
        {{translations[defaultLanguage].app_cta}}
      </button>
    </div>
    <p class="text-center mb-2">
      {{translations[defaultLanguage].qr_explain}}
    </p>
    <p class="text-center">
      <a href="#" style="color: ${data.theme.primary}">
        {{translations[defaultLanguage].qr_cta}}
      </a>
    </p>
  </div>
</div>
<footer class="text-left p-6">
  {{translations[defaultLanguage].copyright}}
</footer>`,
  });
};

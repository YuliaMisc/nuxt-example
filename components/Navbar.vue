<template>
  <nav class="bg-slate-950">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-stretch justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div>
          <div class=" ml-6 block">
            <div class="flex space-x-4">
              <nuxt-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClass="bg-gray-900" aria-current="page">Home</nuxt-link>
              <nuxt-link to="/article" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClass="bg-gray-900">Blog</nuxt-link>
              <nuxt-link to="/feedback" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" activeClass="bg-gray-900">Feedback</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

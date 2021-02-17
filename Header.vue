<template>
  <div class="bg-white rounded-md p-5 shadow-md">
    <nav class="flex flex-row">
      <button
        v-for="member in members"
        v-bind:member="member"
        v-bind:key="member.id"
        v-bind:class="{
          'text-blue-500 border-b-2 border-blue-500 font-medium': setActiveClass(
            member.id
          )
        }"
        class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none"
      >
        <router-link v-bind:to="/members/ + member.id"
          >{{ member.first_name }}
        </router-link>
      </button>
    </nav>
  </div>
</template>

<script>
import members from "./members";

export default {
  data: function() {
    return {
      members: [...members]
    };
  },
  methods: {
    setActiveClass: function(siteNr) {
      const id = parseInt(this.$route.params.id);
      return id === siteNr ? true : false;
    }
  }
};
</script>

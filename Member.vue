<template>
  <div class="sm:w-1/4 p-2">
					<div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
						<h2 class="text-xl font-medium text-gray-700">{{setMemberData.first_name}}</h2>
						<span class="text-blue-500 block mb-5">{{setMemberData.role}}</span>
						<button 

            v-on:click="displayMessage(setMemberData.first_name)"

            href="#" class="px-4 py-2 bg-blue-500 text-white rounded-full">Say hello
            </button>
					</div>
				</div>
</template>

<script>
import members from "./members";

export default {
   computed: {
    setMemberData() {
      const id = parseInt(this.$route.params.id);
      const newMembers = members.filter(function(member) {
        return member.id === id;
      });

      return newMembers[0];
    }
  },
  methods: {
    displayMessage: function(name) {
      alert(`cześć ${name}`);
    }
  },
}

</script>

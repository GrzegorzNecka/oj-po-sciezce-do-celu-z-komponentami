import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import members from "./members";

Vue.component("route-header", {
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
  },
  template: `
			<div class="bg-white rounded-md p-5 shadow-md">
        <nav class="flex flex-row">
            <button 
                    v-for="member in members" 
                    v-bind:member="member"
                    v-bind:key="member.id"
              
              v-bind:class="{ 'text-blue-500 border-b-2 border-blue-500 font-medium' : setActiveClass(member.id)}"

              class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">

                  <router-link v-bind:to="/members/ + member.id">{{member.first_name}} </router-link>

            </button>
        </nav>
  
      </div> `
});

const Member = {
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
  template: `
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
`
};

const router = new VueRouter({
  routes: [{ path: "/members/:id", component: Member }]
});

const app = new Vue({ router }).$mount("#app");

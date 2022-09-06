import { defineStore } from "pinia";

export default defineStore('main', {
	state() {
		return {
			url: "http://192.168.2.21:8081/",
		}
	},
	getters: {
		apiURL: (state) => state.url,
	},
});
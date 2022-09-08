import { defineStore } from "pinia";

export default defineStore('main', {
	state() {
		return {
			url: "http://192.168.2.41:8081/",
		}
	},
	getters: {
		apiURL: (state) => state.url,
	},
});
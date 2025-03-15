import { defineStore } from "pinia";
import type { Organizer } from "@/types";
import apiClient from "@/services/AxiosClient";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    user: null as Record<string, any> | null, // Define the 'user' property
  }),
  getters: {
    currentUserName(): string {
      return this.user?.username || "";
    },
  },
  actions: {
    async login(email: string, password: string) {
      const response = await apiClient.post("/api/v1/auth/authenticate", {
        username: email,
        password: password,
      });

      // Safely access response.data
      this.token = response.data?.access_token || null;
      if (this.token) {
        localStorage.setItem("token", this.token);
      }

      const meResponse = await apiClient.get("/api/v1/auth/me");

      // Safely access meResponse.data
      this.user = meResponse.data?.user || null;
      if (this.user) {
        localStorage.setItem("user", JSON.stringify(this.user));
      }

      return response;
    },
    logout() {
      console.log("logout");
      this.token = null;
      this.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    reload(token: string, user: Organizer) {
      this.token = token;
      this.user = user;
    },
  },
});

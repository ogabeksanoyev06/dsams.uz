import { useApi } from "@/composables/useApi";
import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogs", () => {
  const api = useApi();

  const blogs = ref([]);

  const getBlogs = async (params) => {
    try {
      const response = await api.get("users/blogs", { params });
      blogs.value = response.data.data;
      return response.data;
    } catch {
      throw error;
    }
  };

  const getBlogById = async (id, params) => {
    try {
      const response = await api.get(`users/blogs/${id}`, { params });
      return response.data;
    } catch (error) {
      
    }
  };

  return { getBlogs, getBlogById, blogs };
});

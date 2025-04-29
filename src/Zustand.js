import { create } from 'zustand';

const API_URL = 'https://jobicy.p.rapidapi.com/api/v2/remote-jobs';
const API_HEADERS = {
					'x-rapidapi-key': '87d7a7ef21mshe617bebe230e9dfp17a540jsnd28d05b0051b',
		'x-rapidapi-host': 'jobicy.p.rapidapi.com'
};


export const useApistore = create((set) => ({
  output: [],
  loading: false,
  error: null,


  fetchData: async () => {
    set({ loading: true, error: null });

    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: API_HEADERS,
      });

      const data = await response.json();
  

      set({ output: data, loading: false });
    } catch (error) {
      // console.error("API Fetch Error:", error);
      set({ error: error.message || "Something went wrong", loading: false });
    }
  },
}));


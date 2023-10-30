import { createFetch } from "@vueuse/core";
import { useCookies } from "@vueuse/integrations/useCookies";
import { COOKIE_API_TOKEN } from "../../const/cookies";

export const useFetch = createFetch({
  baseUrl: "https://gitlab.com/api/v4",
  combination: "chain",
  options: {
    async beforeFetch({ options }) {
      const cookies = useCookies();

      options.headers = {
        ...options.headers,
        "PRIVATE-TOKEN": cookies.get(COOKIE_API_TOKEN),
      };
      return { options };
    },
  },
});

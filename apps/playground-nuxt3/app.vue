<template>
  <div>
    <h1>Hello!</h1>
    <VueListProvider :request-handler="requestHandler">
      <VueList endpoint="skills" :per-page="5" pagination-mode="pagination">
        <template #default="{items}">
          <pre>{{ items }}</pre>
        </template>
      </VueList>
    </VueListProvider>
  </div>
</template>

<script setup>
import { useAsyncData } from "#app";

async function requestHandler(context) {
  const { data, pending, error } = await useAsyncData("unique-key", () => {
    const {
      endpoint,
      search,
      filters,
      perPage,
      page,
      sortBy,
      sortOrder,
    } = context;

    let sort;
    if (sortBy && sortOrder) {
      sort = (sortOrder == "asc" ? "-" : "") + sortBy;
    }

    const requests = [
      //DIRECTUS COUNT
      $fetch(
        `https://everest.7span.in/items/${endpoint}?aggregate[countDistinct]=id`
      ).then(({ data }) => {
        return data[0].countDistinct.id;
      }),

      //DIRECTUS DATA
      $fetch(`https://everest.7span.in/items/${endpoint}`, {
        params: {
          page,
          limit: perPage,
          search: search,
          sort,
          // filters: filters,
        },
      }).then(({ data }) => {
        return data;
      }),
    ];

    return Promise.all(requests)
      .then(([count, items]) => {
        console.log({ count, items });
        return {
          items,
          count,
        };
      })
      .catch((error) => {
        console.error({ error });
        const err = new Error("Failed to fetch data");
        err.name = "NetworkError";
        throw err;
      });
  });

  return data.value;
}
</script>

<template>
  <div>
    <h1 class="text-center font-bold text-xl py-10">Vue List SSR</h1>

    <UContainer>
      <VueListProvider>
        <VueNuxtList
          endpoint="skills"
          :per-page="5"
          pagination-mode="pagination"
          :request-handler="requestHandler"
          @onResponse="
            (response) => {
              console.log('on Response:', response);
            }
          "
        >
          <template #default>
            <div class="grid grid-cols-3 h-screen gap-5 p-5">
              <div class="col-span-2 overflow-y-auto p-1">
                <VueListInitialLoader />
                <VueListLoader />

                <VueListError />
                <VueListError v-slot="{ error }">
                  <pre>{{ error.name }}</pre>
                  <pre>{{ error.message }}</pre>
                </VueListError>
                <VueListItems>
                  <template #item="{ item }">
                    <UCard> {{ item.name }} </UCard>
                  </template>
                </VueListItems>
              </div>
              <div class="col-span-1 overflow-y-auto p-1">
                <UAccordion :items="components">
                  <template #pagination>
                    <VueListPagination />
                    <VueListPagination v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListPagination>
                  </template>
                  <template #loadmore>
                    <VueListLoadMore />
                    <VueListLoadMore v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListLoadMore>
                  </template>
                  <template #search>
                    <VueListSearch />
                    <VueListSearch v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListSearch>
                  </template>
                  <template #summary>
                    <VueListSummary />
                    <VueListSummary v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListSummary>
                  </template>
                  <template #goto>
                    <VueListGoTo />
                    <VueListGoTo v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListGoTo>
                  </template>
                  <template #perpage>
                    <VueListPerPage />
                    <VueListPerPage v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListPerPage>
                  </template>
                  <template #attributes>
                    <VueListAttributes />
                    <VueListAttributes v-slot="data">
                      <pre class="text-xs">{{ data }}</pre>
                    </VueListAttributes>
                  </template>
                  <template #refresh>
                    <VueListRefresh />
                  </template>
                </UAccordion>
              </div>
            </div>
          </template>
        </VueNuxtList>
      </VueListProvider>
    </UContainer>
  </div>
</template>

<script setup>
useHead({
  title: "Nuxt List Playground",
});

const components = [
  {
    label: "Pagination",
    slot: "pagination",
  },
  {
    label: "Load More",
    slot: "loadmore",
  },
  {
    label: "Search",
    slot: "search",
  },
  {
    label: "Summary",
    slot: "summary",
  },
  {
    label: "Go To",
    slot: "goto",
  },
  {
    label: "Per Page",
    slot: "perpage",
  },
  {
    label: "Attributes",
    slot: "attributes",
  },
  {
    label: "Refresh",
    slot: "refresh",
  },
];

async function requestHandler(context) {
  let sort;
  if (context.sortBy && context.sortOrder) {
    sort = (context.sortOrder == "asc" ? "-" : "") + context.sortBy;
  }

  const [count, items] = await Promise.all([
    $fetch(
      `https://everest.7span.in/items/${context.endpoint}?aggregate[countDistinct]=id`
    ).then(({ data }) => data[0]?.countDistinct?.id ?? 0),

    $fetch(`https://everest.7span.in/items/${context.endpoint}`, {
      params: {
        page: context.page,
        limit: context.perPage,
        search: context.search,
        sort,
      },
    }).then(({ data }) => data ?? []),
  ]);

  return { items, count };
}
</script>

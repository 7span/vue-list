<template>
  <div class="py">
    <UContainer>
      <VList endpoint="skills" :per-page="5" pagination-mode="pagination">
        <template #default>
          <div class="grid grid-cols-3 h-screen gap-5 p-5">
            <div class="col-span-2 overflow-y-auto p-1">
              <VListInitialLoader />
              <VListLoader />
              <VListError />
              <VListItems>
                <template #item="{ item }">
                  <UCard> {{ item.name }} </UCard>
                </template>
              </VListItems>
            </div>
            <div class="col-span-1 overflow-y-auto p-1">
              <UAccordion :items="components">
                <template #pagination>
                  <VListPagination />
                  <VListPagination v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListPagination>
                </template>
                <template #loadmore>
                  <VListLoadMore />
                  <VListLoadMore v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListLoadMore>
                </template>
                <template #search>
                  <VListSearch />
                  <VListSearch v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListSearch>
                </template>
                <template #counter>
                  <VListCounter />
                  <VListCounter v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListCounter>
                </template>
                <template #goto>
                  <VListGoTo />
                  <VListGoTo v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListGoTo>
                </template>
                <template #perpage>
                  <VListPerPage />
                  <VListPerPage v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListPerPage>
                </template>
                <template #attributes>
                  <VListAttributes />
                  <VListAttributes v-slot="data">
                    <pre class="text-xs">{{ data }}</pre>
                  </VListAttributes>
                </template>
              </UAccordion>
            </div>
          </div>
        </template>
      </VList>
    </UContainer>
  </div>
</template>

<script setup>
const components = [
  {
    label: 'Pagination',
    slot: 'pagination',
  },
  {
    label: 'Load More',
    slot: 'loadmore',
  },
  {
    label: 'Search',
    slot: 'search',
  },
  {
    label: 'Counter',
    slot: 'counter',
  },
  {
    label: 'Go To',
    slot: 'goto',
  },
  {
    label: 'Per Page',
    slot: 'perpage',
  },
  {
    label: 'Attributes',
    slot: 'attributes',
  },
]
</script>

<template>
  <div id="app">
    <v-list
      :attrs="attrs"
      endpoint="https://app.whatshash.com/api/V1/public/poll"
    >
      <v-list-search>
        <template #default="{set,value}">
          <vy-input size="md" shape="rounded">
            <vy-textbox :value="value" @input="set($event)" />
          </vy-input>
        </template>
      </v-list-search>

      <div>
        <v-list-table> </v-list-table>
      </div>

      <v-list-pagination>
        <template #prev="{prev}">
          <vy-button color="primary" theme="solid" @click.native="prev">
            prev
          </vy-button>
        </template>
        <template #middle="{nextPage,n}">
          <vy-button
            color="secondary"
            theme="solid"
            @click.native="nextPage(n)"
          >
            {{ n }}
          </vy-button>
        </template>
        <template #next="{next}">
          <vy-button color="primary" theme="solid" @click.native="next">
            next
          </vy-button>
        </template>
        <template #select="{change,value,options}">
          <vy-input size="md" shape="rounded">
            <vy-select
              :options="options"
              :value="value"
              @input.native="change($event)"
            />
          </vy-input>
        </template>
      </v-list-pagination>
      <v-list-counter />
      <v-list-per-page>
        <template #default="{change,value,options}">
          <vy-input size="md" shape="rounded">
            <vy-select
              :options="options"
              :value="value"
              @input.native="change($event)"
            />
          </vy-input>
        </template>
      </v-list-per-page>
      <v-list-attributes>
        <template #default="{change,attr}">
          <vy-field :label="attr.label" inline="">
            <vy-choice size="md">
              <vy-checkbox
                :checked="attr.visible"
                @input.native="change(attr.index, attr.name, $event)"
              />
            </vy-choice>
          </vy-field>
        </template>
      </v-list-attributes>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrs: [
        {
          name: "id",
          sortable: true
        },
        {
          name: "name"
        }
      ]
    };
  }
};
</script>

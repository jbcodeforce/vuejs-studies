<template>
  <v-container full-height class="py-0">
    <v-row>
      <v-col cols="12">
        <card-list v-model="items" #default="{ item }">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="item.name" label="Name" hide-details />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="item.email" label="Email" hide-details />
            </v-col>
          </v-row>
        </card-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="auto" class="py-0 mx-auto">
        <v-btn @click="add" text>
          <v-icon>
            mdi-plus
          </v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardList from '@/components/CardList'

export default {
  components: {
    CardList
  },

  data: () => ({
    items: [
      {
        id: 1,
        name: 'Jane Adams',
        email: 'jane@adams.com'
      },
      {
        id: 2,
        name: 'Paul Davis',
        email: 'paul@davis.com'
      },
      {
        id: 3,
        name: 'Amanda Brown',
        email: 'amanda@brown.com'
      }
    ],

    counter: 10
  }),

  methods: {
    add () {
      this.items.push({ id: this.counter++ })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px !important;
}
</style>

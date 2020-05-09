<template>
  <section>
    <b-table
      :data="data"
      ref="table"
      paginated
      per-page="5"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="id"
      @details-open="
        (row, index) => $buefy.toast.open(`Expanded ${row.user.first_name}`)
      "
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column field="id" label="ID" width="40" numeric>{{
          props.row.id
        }}</b-table-column>

        <b-table-column
          field="user.first_name"
          label="First Name"
          sortable
          :searchable="filterColumns"
        >
          <template>
            <a @click="toggle(props.row)">{{ props.row.user.first_name }}</a>
          </template>
        </b-table-column>

        <b-table-column
          field="user.last_name"
          label="Last Name"
          sortable
          :searchable="filterColumns"
          >{{ props.row.user.last_name }}</b-table-column
        >
        <b-table-column
          field="Source"
          label="Source"
          sortable
          :searchable="filterColumns"
          >{{ props.row.Source }}</b-table-column
        >

        <b-table-column field="date" label="Date" sortable centered>
          <span class="tag is-success">{{
            new Date(props.row.date).toLocaleDateString()
          }}</span>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img src="/static/img/placeholder-128x128.png" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  {{ props.row.user.first_name }}
                  {{ props.row.user.last_name }}
                </strong>
                <small>@{{ props.row.user.first_name }}</small>
                <small>31m</small>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </div>
        </article>
      </template>
    </b-table>
  </section>
</template>

<script>
import { mapState } from "vuex";
const data = [
  {
    id: 1,
    user: { first_name: "Jesse", last_name: "Simmons" },
    date: "2016/10/15 13:43:27",
    Source: "Organic"
  },
  {
    id: 2,
    user: { first_name: "John", last_name: "Jacobs" },
    date: "2016/12/15 06:00:53",
    Source: "Organic"
  },
  {
    id: 3,
    user: { first_name: "Tina", last_name: "Gilbert" },
    date: "2016/04/26 06:26:28",
    Source: "Google Ads"
  },
  {
    id: 4,
    user: { first_name: "Clarence", last_name: "Flores" },
    date: "2016/04/10 10:28:46",
    Source: "Google Ads"
  },
  {
    id: 5,
    user: { first_name: "Anne", last_name: "Lee" },
    date: "2016/12/06 14:38:38",
    Source: "Google Ads"
  }
];

export default {
  data() {
    return {
      data,
      defaultOpenedDetails: [null],
      showDetailIcon: false
    };
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    }
  },
  computed: {
    filterColumns: {
      get() {
        return this.filterColumns;
      },
      set(newFilterState) {
        return newFilterState;
      }
    },
    ...mapState(["filterColumns"])
  }
};
</script>

<style scoped></style>

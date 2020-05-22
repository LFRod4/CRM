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
        <b-table-column field="id" label="ID" width="40" numeric>
          {{
          props.row.id
          }}
        </b-table-column>

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
        >{{ props.row.user.last_name }}</b-table-column>
        <b-table-column
          field="source"
          label="source"
          sortable
          :searchable="filterColumns"
        >{{ props.row.source }}</b-table-column>

        <b-table-column field="date" label="Date" sortable centered>
          <span class="tag is-success">
            {{
            new Date(props.row.date).toLocaleDateString()
            }}
          </span>
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <div class="columns">
          <div class="column is-3 left-column">
            <article class="media">
              <div class="media-content">
                <div class="content">
                  <div class>
                    <p>
                      <span class="has-text-weight-bold">Contact:</span>
                      {{props.row.user.first_name + ' ' + props.row.user.last_name}}
                    </p>
                    <p>
                      <span class="has-text-weight-bold">Source:</span>
                      {{props.row.source}}
                    </p>
                    <button
                      class="button add-note has-text-white-ter"
                      @click="changeNoteModalState(true)"
                    >Add Note</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="column right-column">
            <div class="label">Notes</div>
            <div class="box" v-for="note in notes" :key="note.id">
              <div class="sub-title">
                <span class="has-text-weight-bold">Date:</span>
                {{
                new Date(note.date).toLocaleDateString()
                }}
              </div>
              <p>{{note['note']}}</p>
            </div>
            <div class="notes"></div>
          </div>
        </div>
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
    source: "Organic"
  },
  {
    id: 2,
    user: { first_name: "John", last_name: "Jacobs" },
    date: "2016/12/15 06:00:53",
    source: "Organic"
  },
  {
    id: 3,
    user: { first_name: "Tina", last_name: "Gilbert" },
    date: "2016/04/26 06:26:28",
    source: "Google Ads"
  },
  {
    id: 4,
    user: { first_name: "Clarence", last_name: "Flores" },
    date: "2016/04/10 10:28:46",
    source: "Google Ads"
  },
  {
    id: 5,
    user: { first_name: "Anne", last_name: "Lee" },
    date: "2016/12/06 14:38:38",
    source: "Google Ads"
  }
];

export default {
  data() {
    return {
      data,
      defaultOpenedDetails: [null],
      showDetailIcon: false,
      notes: [
        {
          date: "2016/10/15 13:43:27",
          note: "This is the first note about the lead"
        },
        {
          date: "2016/11/10 11:30:27",
          note: "This is the second note about the lead"
        },
        {
          date: "2016/12/05 13:03:27",
          note: "This is the third note about the lead"
        },
        {
          date: "2016/12/15 12:43:27",
          note: "This is the fourth note about the lead"
        },
        {
          date: "2016/12/20 13:10:27",
          note: "This is the fourth note about the lead"
        }
      ]
    };
  },
  methods: {
    toggle(row) {
      console.log(row);
      this.$refs.table.toggleDetails(row);
    },
    changeNoteModalState(noteModalState) {
      this.$store.dispatch("changeNoteModalState", noteModalState);
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
    noteModalState: {
      get() {
        return this.noteModalState;
      },
      set(newNoteModalState) {
        return newNoteModalState;
      }
    },
    ...mapState(["filterColumns", "noteModalState"])
  }
};
</script>

<style scoped>
.columns {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.left-column {
  border-right: 1px solid black;
}

.right-column {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
  box-sizing: content-box;
}

.add-note {
  background-color: #2c3e50;
}
</style>

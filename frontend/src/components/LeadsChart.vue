<template>
  <section>
    <b-table
      :data="contacts"
      ref="table"
      paginated
      per-page="10"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="_id"
      @details-open="
        (row, index) => $buefy.toast.open(`Expanded ${row.first_name}`)
      "
      :show-detail-icon="showDetailIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <template slot-scope="props">
        <b-table-column
          field="user.first_name"
          label="First Name"
          sortable
          :searchable="filterColumns"
        >
          <template>
            <a @click="toggle(props.row)">{{ props.row.first_name }}</a>
          </template>
        </b-table-column>

        <b-table-column
          field="last_name"
          label="Last Name"
          sortable
          :searchable="filterColumns"
          >{{ props.row.last_name }}</b-table-column
        >
        <b-table-column
          field="source"
          label="source"
          sortable
          :searchable="filterColumns"
          >{{ props.row.source }}</b-table-column
        >

        <b-table-column field="date" label="Date" sortable centered>
          <span class="tag is-success">
            {{ new Date(props.row.date).toLocaleDateString() }}
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
                      {{ props.row.first_name + " " + props.row.last_name }}
                    </p>
                    <p>
                      <span class="has-text-weight-bold">Phone:</span>
                      {{ props.row.phone }}
                    </p>
                    <p>
                      <span class="has-text-weight-bold">Email:</span>
                      {{ props.row.email }}
                    </p>
                    <p>
                      <span class="has-text-weight-bold">Source:</span>
                      {{ props.row.source }}
                    </p>

                    <button
                      class="button add-note has-text-white-ter"
                      @click="
                        changeNoteModalState(true);
                        setActiveContact(props.row._id);
                      "
                    >
                      Add Note
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="column right-column">
            <div class="label">Notes</div>
            <div class="box" v-for="note in props.row.notes" :key="note.id">
              <div class="sub-title">
                <span class="has-text-weight-bold">Date:</span>
                {{ new Date(note.date).toLocaleDateString() }}
              </div>
              <p>{{ note["note"] }}</p>
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

export default {
  data() {
    return {
      defaultOpenedDetails: [null],
      showDetailIcon: true,
    };
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row);
    },
    changeNoteModalState(noteModalState) {
      this.$store.dispatch("changeNoteModalState", noteModalState);
    },
    setActiveContact(id) {
      this.$store.dispatch("setActiveContact", id);
    },
  },
  computed: {
    filterColumns: {
      get() {
        return this.filterColumns;
      },
      set(newFilterState) {
        return newFilterState;
      },
    },
    noteModalState: {
      get() {
        return this.noteModalState;
      },
      set(newNoteModalState) {
        return newNoteModalState;
      },
    },
    ...mapState(["filterColumns", "noteModalState", "contacts"]),
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
$base-color: #2c3e50;

a {
  color: $base_color;
}

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

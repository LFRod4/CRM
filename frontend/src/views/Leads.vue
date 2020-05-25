<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="title">Contacts</div>
        </div>
        <div class="column is-7"></div>
        <div class="column">
          <button class="button is-primary" @click="changeModalState(true)">
            Add Contact
          </button>
          <button
            class="button is-primary filter-btn"
            @click="changeFilterColumnState()"
          >
            Filter
          </button>
        </div>
      </div>
      <LeadsChart class="leadsChart"></LeadsChart>
      <AddContact v-if="modalState" class="modal is-active"></AddContact>
      <AddNote v-if="noteModalState" class="modal is-active"></AddNote>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import LeadsChart from "@/components/LeadsChart.vue";
import AddContact from "@/components/AddContact.vue";
import AddNote from "@/components/AddNote.vue";

export default {
  name: "Leads",
  components: {
    LeadsChart,
    AddContact,
    AddNote,
  },
  methods: {
    changeModalState(modalState) {
      this.$store.dispatch("changeModalState", modalState);
    },
    changeNoteModalState(noteModalState) {
      this.$store.dispatch("changeNoteModalState", noteModalState);
    },
    changeFilterColumnState() {
      this.$store.dispatch("changeFilterColumnState");
    },
  },
  computed: {
    modalState: {
      get() {
        return this.modalState;
      },
      set(newModalState) {
        return newModalState;
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
    ...mapState(["modalState", "noteModalState"]),
  },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  },
};
</script>

<style lang="scss" scoped>
$primary: #2c3e50;

.is-primary {
  background-color: $primary !important;
  color: hsl(0, 0%, 96%);
}

.filter-btn {
  margin-left: 10px;
}

.leadsChart {
  height: 100vh;
}
</style>

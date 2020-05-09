<template>
  <div>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="title">Contacts</div>
        </div>
        <div class="column is-7"></div>
        <div class="column">
          <button class="button" @click="changeFilterColumnState()">
            Filter
          </button>
          <button class="button is-primary" @click="changeModalState(true)">
            Add Contact
          </button>
        </div>
      </div>
      <LeadsChart></LeadsChart>
      <AddContact v-if="modalState" class="modal is-active"></AddContact>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// @ is an alias to /src
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import LeadsChart from "@/components/LeadsChart.vue";
import AddContact from "@/components/AddContact.vue";

export default {
  name: "Leads",
  components: {
    LeadsChart,
    AddContact
  },
  methods: {
    changeModalState(modalState) {
      this.$store.dispatch("changeModalState", modalState);
    },
    changeFilterColumnState() {
      this.$store.dispatch("changeFilterColumnState");
    }
  },
  computed: {
    modalState: {
      get() {
        return this.modalState;
      },
      set(newModalState) {
        return newModalState;
      }
    },
    ...mapState(["modalState"])
  },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  }
};
</script>

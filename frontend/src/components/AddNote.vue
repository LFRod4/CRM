<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title label">Add Note</p>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Customer notes"
                  v-model="note"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label">
            <!-- Left empty for spacing -->
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="addNote()">Add Note</button>
        <button class="button" @click="changeNoteModalState(false)">
          Cancel
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "AddNote",
  data() {
    return {
      note: "",
    };
  },
  methods: {
    addNote() {
      axios
        .put(
          `https://ukjma0hb0c.execute-api.us-east-1.amazonaws.com/dev/notes/${this.activeContact}`,
          {
            note: this.note,
          }
        )
        .then((res) => {
          this.$store.dispatch("setContacts");
          this.changeNoteModalState(false);
          return res;
        })
        .catch((err) => {
          return err;
        });
    },
    changeNoteModalState(noteModalState) {
      this.$store.dispatch("changeNoteModalState", noteModalState);
    },
  },
  computed: {
    ...mapState(["noteModalState", "activeContact"]),
  },
};
</script>

<style scoped>
.label {
  text-align: left;
}
</style>

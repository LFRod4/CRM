<template>
  <div>
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title label">Add Contact</p>
      </header>
      <section class="modal-card-body">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="First Name"
                  v-model="firstName"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Last Name"
                  v-model="lastName"
                />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label"></div>
          <div class="field-body">
            <div class="field is-expanded">
              <div class="field has-addons">
                <p class="control is-expanded has-icons-left">
                  <input
                    class="input"
                    type="tel"
                    placeholder="Phone number"
                    v-model="phone"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Source</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="source">
                    <option>Google Ads</option>
                    <option>Facebook</option>
                    <option>Organic</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Notes</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Customer notes"
                  v-model="leadNotes"
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
        <button class="button contact-btn" @click="addContact()">
          Add Contact
        </button>
        <button class="button" @click="changeModalState(false)">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "AddContact",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      source: "",
      leadNotes: "",
    };
  },
  methods: {
    addContact() {
      axios
        .post(
          "https://ukjma0hb0c.execute-api.us-east-1.amazonaws.com/dev/leads",
          {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            phone: this.phone,
            source: this.source,
            business_id: this.user["username"],
          }
        )
        .then((res) => {
          this.addNote(res.data["_id"]);
          this.$store.dispatch("setContacts");
          this.changeModalState(false);
          return res;
        })
        .catch((err) => {
          return err;
        });
    },
    addNote(id) {
      console.log(id);
      axios
        .put(
          `https://ukjma0hb0c.execute-api.us-east-1.amazonaws.com/dev/notes/${id}`,
          {
            note: this.leadNotes,
          }
        )
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    },
    changeModalState(modalState) {
      this.$store.dispatch("changeModalState", modalState);
    },
  },
  computed: {
    ...mapState(["modalState", "user"]),
  },
};
</script>

<style lang="scss" scoped>
$primary: #2c3e50;

.contact-btn {
  color: $primary;
}

.label {
  text-align: left;
}
</style>

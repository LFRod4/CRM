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
                <input class="input" type="text" placeholder="First Name" />
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" placeholder="Last Name" />
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
                  <input class="input" type="email" placeholder="Email" />
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
                  <input class="input" type="tel" placeholder="Phone number" />
                  <span class="icon is-small is-left">
                    <i class="fas fa-phone"></i>
                  </span>
                </p>
              </div>
              <p class="help">Do not enter the first zero</p>
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
          <div class="field-label">
            <label class="label">Already a member?</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="member" />
                  Yes
                </label>
                <label class="radio">
                  <input type="radio" name="member" />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Subject</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input
                  class="input is-danger"
                  type="text"
                  placeholder="e.g. Partnership opportunity"
                />
              </div>
              <p class="help is-danger">This field is required</p>
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
        <button class="button is-success">Add Contact</button>
        <button class="button" @click="changeModalState(false)">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { axios } from "axios";

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
    AddContact() {
      let contact = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        source: this.source,
        leadNotes: this.leadNotes,
      };
      axios
        .post("url", {
          contact,
        })
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
    ...mapState(["modalState"]),
  },
};
</script>

<style scoped>
.label {
  text-align: left;
}
</style>

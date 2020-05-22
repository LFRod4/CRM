<template>
  <div>
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="title has-text-primary">
            <i class="fa fa-tachometer"></i> Dashboard
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-multiline">
      <div class="column">
        <div class="box notification is-primary">
          <div class="heading">Total Contacts</div>
          <div class="title">950</div>
          <div class="level">
            <div class="level-item">
              <div class>
                <div class="heading">Active</div>
                <div class="title is-5">20</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Pending</div>
                <div class="title is-5">7</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Closed</div>
                <div class="title is-5">25</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box notification is-warning">
          <div class="heading">Spend</div>
          <div class="title">$2000</div>
          <div class="level">
            <div class="level-item">
              <div class>
                <div class="heading">Marketing</div>
                <div class="title is-5">300</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Fullfilment</div>
                <div class="title is-5">25%</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Exp %</div>
                <div class="title is-5">45%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box notification is-info">
          <div class="heading">Feedback Activity</div>
          <div class="title">78% &uarr;</div>
          <div class="level">
            <div class="level-item">
              <div class>
                <div class="heading">Pos</div>
                <div class="title is-5">1560</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Neg</div>
                <div class="title is-5">368</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Pos/Neg %</div>
                <div class="title is-5">77% / 23%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box notification is-danger">
          <div class="heading">Orders / Returns</div>
          <div class="title">75% / 25%</div>
          <div class="level">
            <div class="level-item">
              <div class>
                <div class="heading">Orders $</div>
                <div class="title is-5">425K</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Returns $</div>
                <div class="title is-5">106K</div>
              </div>
            </div>
            <div class="level-item">
              <div class>
                <div class="heading">Success %</div>
                <div class="title is-5">+ 28,5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-6">
        <article class="message is-dark">
          <div class="message-header">
            <p>Contacts</p>
          </div>
          <div class="message-body">
            <Visualisation class="table"></Visualisation>
          </div>
        </article>
      </div>
      <div class="column is-6">
        <article class="message is-dark">
          <div class="message-header">
            <p>Spend</p>
          </div>
          <div class="message-body">
            <Visualisation class="table"></Visualisation>
          </div>
        </article>
      </div>
      <div class="column is-6">
        <article class="message is-dark">
          <div class="message-header">
            <p>Chart</p>
          </div>
          <div class="message-body">
            <Visualisation class="table"></Visualisation>
          </div>
        </article>
      </div>
      <div class="column is-6">
        <article class="message is-dark">
          <div class="message-header">
            <p>Chart</p>
          </div>
          <div class="message-body">
            <Visualisation class="table"></Visualisation>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  max-height: 200px;
}

.message-header {
  background-color: #2c3e50 !important;
}
</style>

<script>
// @ is an alias to /src
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Visualisation from "@/components/Visualisation.vue";

export default {
  name: "Dashboard",
  components: { Visualisation },
  created() {
    this.$emit(`update:layout`, DashboardLayout);
  },
};
</script>

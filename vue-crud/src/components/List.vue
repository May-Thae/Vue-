<template>
  <div>
    <h1>List Page</h1>
    <div class="actions">
      <router-link class="btn btn-default" v-bind:to="{ path: '/add' }">
        <b-button variant="success">Add product</b-button>
      </router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th class="col-sm-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>
            <router-link
              class="btn btn-warning btn-xs"
              v-bind:to="{ name: 'Edit', params: { product_id: product.id } }"
              >Edit</router-link
            >
            <b-button @click="showMsgBoxTwo(product.id)">Delete</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "List",
  data() {
    return {
      products: {},
    };
  },
  created() {
    axios.get("http://localhost:8000/api/product").then((res) => {
      this.products = res.data;
    });
  },
  methods: {
    showMsgBoxTwo(id) {
      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES, Delete it',
        cancelTitle: 'Cancel',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
      .then(value => {
        //if ok
        if(value == true) {
          axios.delete(`http://localhost:8000/api/product/${id}`);
          this.products = this.products.filter((product) => product.id !== id);
        }
      })
      .catch(err => {
        // An error occurred
        console.log(err)
      })
    }
  }
};
</script>

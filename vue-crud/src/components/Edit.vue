<template id="product-edit">
  <div>
    <h2>Edit product</h2>
    <div class="form-group">
          <label>Item Name:</label>
          <input type="text" class="form-control" v-model="product.name"/>
      </div>
      <div class="form-group">
          <label>Item Price:</label>
          <input type="text" class="form-control" v-model="product.description" />
      </div>
      <div class="form-group">
          <label>Item Price:</label>
          <input type="text" class="form-control" v-model="product.price" />
      </div>
      <div class="form-group">
        <b-button variant="primary" class="px-5" @click="updateCustomer"
          >Update Product</b-button
        >
      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Edit",
  data() {
    return {
      product: {},
      productId: this.$route.params.product_id,
    };
  },
  created() {
    this.getCusomterByID();
  },
  methods: {
    // get data
    getCusomterByID() {
      axios.get(`http://localhost:8000/api/product/${this.productId}`)
          .then((response) => {
            this.product = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
    // update data
    updateCustomer() {
      axios.put(`http://localhost:8000/api/product/${this.productId}`,this.product)
          .then((response) => {
            console.log("update",response.data);
            this.$router.push(`/`)
          })
          .catch((error) => {
            console.log(error);
          });
    },
  }
};
</script>

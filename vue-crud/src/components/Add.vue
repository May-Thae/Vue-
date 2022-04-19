<template id="add-product">
  <div class="container">
    <h2>Add new product</h2>
    <form @submit="checkForm">
      <div class="row mb-3">
        <label class="col-3" for="name">Name</label>
        <input
          type="text"
          class="col-9 w-25"
          v-model="products.name"
          placeholder="name"
        />
      </div>
      <div class="row mb-3">
        <label class="col-3" for="description">Description</label>
        <textarea
          name="description"
          id="description"
          class="col-9 w-25"
          cols="30"
          rows="10"
          v-model="products.description"
        ></textarea>
      </div>
      <div class="row mb-3">
        <label class="col-3" for="price">Price</label>
        <input
          type="number"
          class="col-9 w-25"
          v-model="products.price"
          placeholder="price"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Add product" />
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Add',
  data() {
    return {
      products: {
        id: '',
        name: '',
        description: '',
        price: ''
      },
      flag: false
    }
  },
  methods: {
    checkForm: function (e) {
      console.log('this.pr', this.products)
      if (
        this.products.name ||
        this.products.description ||
        this.products.price
      ) {
        axios
          .post('http://localhost:8000/api/product', {
            id: this.products.id,
            name: this.products.name,
            description: this.products.description,
            price: this.products.price
          })
          .then((resp) => {
            console.log('yyyyy', resp.data)
            this.$router.push({
              name: 'List'
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }
      e.preventDefault()
    }
  }
}
</script>

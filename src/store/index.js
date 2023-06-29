import { createStore } from 'vuex'
const dataURL = "https://codjoelmayer.github.io/JTLaptopData/data/"
export default createStore({
  state: {
    products: null,
    spinner: false
  },
  getters: {
  },
  mutations: {
    setProducts(state, products) {
      state.products =products
    },
    setSpinner (state, value){
      state.spinner =value
    }
  },
  actions: {
  async fetchProducts (context){
    try{
      let res = await fetch (dataURL)
      let {products} = await res.json() //use the key for what you described your array
      if (products){
        context.commit ('setProducts', products)
        context.commit ('setSpinner', false)
      }else{
        context.commit ('setSpinner', true)
      }
    }catch(e){
      console.log(e.message);
    }
  }
  },
  modules: {
  }
})

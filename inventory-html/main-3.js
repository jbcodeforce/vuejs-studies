var app = new Vue({
   el: "#app",
   data: {
      brand: "Jb-manuf",
      product: "Socks",
      inventory: 11,
      selectedVariant: 0,
      details: ["80% cotton", "20% polyster", "Gender-neutral"],
      variants: [
         { variantId: 223, variantColor: "green", variantImage: "./assets/vmSocks-green-onWhite.jpg", variantQuantity: 10 },
         { variantId: 224, variantColor: "blue",  variantImage: "./assets/vmSocks-blue-onWhite.jpg", variantQuantity: 0 }
      ],
      cart: 0
   },
   methods: {
      addToCart: function () {
         this.cart += 1
         this.inventory -=1
      },
      updateProduct(index) {
         this.selectedVariant = index
         this.inventory=this.variants[this.selectedVariant].variantQuantity
         // console.log(index)
      },
      subToCart(){
         this.cart -= 1
         this.inventory +=1
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image(){
         return this.variants[this.selectedVariant].variantImage
      },
      inStock() {
         return (this.inventory > 0)
      },
      onSale(){
         return (this.inStock && this.inventory < 5)
      }
   }
})


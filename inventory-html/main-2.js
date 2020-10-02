var app = new Vue({
   el: "#app",
   data: {
      brand: "Jb-manuf",
      product: "Socks",
      image: './assets/vmSocks-green-onWhite.jpg',
      inventory: 11,
      onSale: true,
      inStock: true,
      details: ["80% cotton", "20% polyster", "Gender-neutral"],
      variants: [
         { variantId: 223, variantColor: "green", variantImage: "./assets/vmSocks-green-onWhite.jpg" },
         { variantId: 224, variantColor: "blue",  variantImage: "./assets/vmSocks-blue-onWhite.jpg" }
      ],
      cart: 0
   },
   methods: {
      addToCart: function () {
         this.cart += 1
         this.inventory -=1
         if (this.inventory == 0 ) {
            this.inStock= false
         }
      },
      updateProduct(newImage) {
         this.image=newImage
      },
      subToCart(){
         this.cart -= 1
         this.inventory +=1
         if (this.inventory > 0 ) {
            this.inStock= true
         }
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      }
   }
})


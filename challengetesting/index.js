class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
  }
  calcularTotal() {
    return this.carrito.reduce(
      (acum, producto) => (acum += producto.precio), // para hacer l suma
      0 // empieza en 0
    );
  }
  aplicarDescuento(descuento) {
    const total = this.calcularTotal();
    return total - (total * descuento) / 100;
  }
}

module.exports = {
  CarritoCompra,
};

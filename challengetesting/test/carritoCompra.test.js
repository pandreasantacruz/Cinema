const { CarritoCompra } = require("../index.js");
//beforeEach(() => {})

describe("Clase CarritoCompra", () => {
  //los enunciados
  it("Clase Carrito de compra exista", () => {
    // lo que quiero testear
    expect(CarritoCompra).toBeTruthy(); //lo que espero que pase o resultado
    expect(CarritoCompra).toBeInstanceOf(Function);
  });

  it("clase carrito de compras pueda ser instanciado", () => {
    const newCarrito = new CarritoCompra();
    expect(newCarrito).toBeInstanceOf(CarritoCompra);
  });
  it("clase carrito de compra tenga los metodos", () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe("function");
    expect(typeof CarritoCompra.prototype.agregarProducto).toBe("function");
    expect(typeof CarritoCompra.prototype.calcularTotal).toBe("function");
    expect(typeof CarritoCompra.prototype.aplicarDescuento).toBe("function");
  });
});
describe("Constructor", () => {
  it("Inicia el carrito con un array vacio", () => {
    const newCarrito = new CarritoCompra();
    expect(Array.isArray(newCarrito.carrito)).toBe(true);
    expect(newCarrito.carrito).toHaveLength(0);
  });
});
describe("agregarProducto", () => {
  it("Recibe un objeto que es un producto y lo agrega al carrito", () => {
    const newCarrito = new CarritoCompra();
    newCarrito.agregarProducto({
      nombre: "Producto 1",
      precio: 100,
    });
    expect(newCarrito.carrito).toHaveLength(1);
    expect(newCarrito.carrito[0]).toEqual({
      nombre: "Producto 1",
      precio: 100,
    });
  });
  it("pueda agregar productos", () => {
    const newCarrito = new CarritoCompra();
    const arrayProductos = [
      {
        nombre: "Papel",
        precio: 10,
      },
      {
        nombre: "Lapiz",
        precio: 20,
      },
    ];
    arrayProductos.forEach((producto) => newCarrito.agregarProducto(producto));
    expect(newCarrito.carrito).toHaveLength(2);
    expect(newCarrito.carrito[0].nombre).toBe("Papel");
    expect(newCarrito.carrito[1].nombre).toBe("Lapiz");
  });
});
describe("Calculo total", () => {
  it("Pueda sumar los precios", () => {
    const newCarrito = new CarritoCompra();
    const arrayProductos = [
      {
        nombre: "Papel",
        precio: 10,
      },
      {
        nombre: "Lapiz",
        precio: 20,
      },
    ];
    arrayProductos.forEach((producto) => newCarrito.agregarProducto(producto));
    expect(newCarrito.calcularTotal()).toBe(30);
  });
});
describe("Aplica descuentos", () => {
  it("Aplica los descuento", () => {
    const newCarrito = new CarritoCompra();
    const arrayProductos = [
      {
        nombre: "Papel",
        precio: 200,
      },
      {
        nombre: "Lapiz",
        precio: 200,
      },
      {
        nombre: "Cuaderno",
        precio: 200,
      },
      {
        nombre: "Lapicero",
        precio: 200,
      },
      {
        nombre: "Carpeta",
        precio: 200,
      },
    ];
    arrayProductos.forEach((producto) => newCarrito.agregarProducto(producto));
    expect(newCarrito.aplicarDescuento(0)).toBe(1000);
    expect(newCarrito.aplicarDescuento(20)).toBe(800);
    expect(newCarrito.aplicarDescuento(50)).toBe(500);
    expect(newCarrito.aplicarDescuento(100)).toBe(0);
  });
});

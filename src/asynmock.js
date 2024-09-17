const productos = [
    {
      id: "1",
      nombre: "Remera Deportiva Hombre",
      precio: 2000,
      imagen: "/imagenes/remeraHombreAzul.jpg",
      detalle: "Remera de entrenamiento transpirable, perfecta para actividades de alta intensidad.",
      categoria: "remeras",
      stock: 50,
      colores: "Azul",
      talles: "M",
      material: "Poliéster"
    },
    {
      id: "2",
      nombre: "Buzo Deportivo Hombre",
      precio: 3500,
      imagen: "/imagenes/buzoDeportivoHombreNegro.jpg",
      detalle: "Buzo Nike ideal para entrenamientos al aire libre.",
      categoria: "buzos",
      stock: 0,
      colores: "Negro",
      talles: "L",
      material: "Algodón"
    },
    {
      id: "3",
      nombre: "Campera Rompeviento Running Mujer",
      precio: 6000,
      imagen: "/imagenes/camperaRompevientoRunningVerde.jpg",
      detalle: "Campera liviana e impermeable, ideal para correr en días lluviosos.",
      categoria: "camperas",
      stock: 15,
      colores: "Verde",
      talles: "M",
      material: "Nylon"
    },
    {
      id: "4",
      nombre: "Pantalón Deportivo Hombre",
      precio: 2500,
      imagen: "/imagenes/pantalonDeportivoHombre.jpg",
      detalle: "Pantalón perfecto para entrenamientos de alto rendimiento.",
      categoria: "pantalones",
      stock: 35,
      colores: "Gris",
      talles: "XL",
      material: "Algodón"
    },
    {
      id: "5",
      nombre: "Mancuernas de Entrenamiento",
      precio: 5000,
      imagen: "/imagenes/mancuernas.jpg",
      detalle: "Juego de mancuernas, ideal para entrenamiento de fuerza.",
      categoria: "accesorios",
      stock: 25,
      colores: "Rosa, Celeste y Rojo",
      talles: "Chico, mediano y grande",
      material: "Hierro"
    },
  ];
  
  export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  
  export const getProducto = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((producto) => producto.id === id));
      }, 2000);
    });
  };
  
  export const getProductosPorCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter((producto) => producto.categoria === categoria));
      }, 2000);
    });
  };

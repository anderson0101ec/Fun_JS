async function obtenerDatos() {
    try {   
        const resUsuarios = await fetch(' https://fakestoreapi.com/users' );
        const Usuarios = await resUsuarios.json();
        console.log('Usuarios: ',Usuarios);

        const resProductos = await fetch(' https://fakestoreapi.com/products' );
        const productos = await resProductos.json();
        console.log('Productos: ',productos);

        const resCarrito = await fetch(' https://fakestoreapi.com/carts' );
        const carrito = await resCarrito.json();
        console.log('Carrito: ',carrito);

        if(Usuarios.length > 0 && productos.length > 0 && carrito.length > 0 ) {
            console.log('Todos los datos se an obtenido correctamente');
            const primerUsuario = Usuarios[0]
            const carritoUsuario = carrito.find(carrito => carrito.userId === primerUsuario.id);
            console.log('Primer usuario:',primerUsuario);
            console.log(`\n El usuario ${primerUsuario.name.firstname} tiene el carrito con ID: ${carritoUsuario.id}`);
            console.log('Contenido del carrito: ',carritoUsuario.products);

        }
        
    } catch (error) {
        console.error('Error al obtener datos',error);
        
    }
}
obtenerDatos();
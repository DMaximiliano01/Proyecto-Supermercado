import BotonEliminar from './BotonEliminar'
import BotonEditar from './BotonEditar'
import BotonAgregar from './BotonAgregar'

const SeccionPagina = ({ items, eliminarProducto }) => {
  console.log('Items recibidos en SeccionPagina:', items);

  return (
    <div>
      <h1>Supermercado</h1>
      <BotonAgregar />

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          backgroundColor: '#ffffffff',
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`contenedor_producto_${item.id}`}
            style={{
              display: 'flex',
              border: '2px solid rgba(0, 0, 0, 1)',
              flex: '1 1 360px',
              borderRadius: '10px',
            }}
          >
            <div style={{ width: '40%', height: '200px' }}>
              <img
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                src={item.imagen || item.url}
                alt={item.nombre}
              />
            </div>
            <div style={{ width: '60%', height: '200px', padding: '10px' }}>
              <h2>${item.precio}</h2>
              <p>{item.descripcion}</p>
              {/* Aquí pasamos el id y la función para eliminar */}
              <BotonEliminar id={item.id} eliminarProducto={eliminarProducto} />
              <BotonEditar id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeccionPagina;

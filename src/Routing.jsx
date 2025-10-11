import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AgregarProducto } from './AgregarProducto';
import { NotFound } from './NotFound';
import { EditarProducto } from './EditarProducto';
import SeccionPagina from './SeccionPagina';
import { DataSuper } from './data/DataSuper';

export const Routing = () => {
  const [items, setItems] = useState(DataSuper);

  const agregarProducto = (nuevoProducto) => {
    setItems(currentItems => [
      ...currentItems,
      { ...nuevoProducto, id: Date.now() }
    ]);
  };

  const actualizarDatos = (id, formularioData) => {
    setItems(actual =>
      actual.map(item =>
        String(item.id) === String(id)
          ? { ...item, ...formularioData }
          : item
      )
    );
  };

  const eliminarProducto = (id) => {
    setItems(actual => actual.filter(item => String(item.id) !== String(id)));
  };

  return (
    <Routes>
      <Route
        path='/'
        element={<SeccionPagina items={items} eliminarProducto={eliminarProducto} />}
      />
      <Route
        path='/agregarProducto'
        element={<AgregarProducto agregarProducto={agregarProducto} />}
      />
      <Route
        path='/editarProducto/:id'
        element={<EditarProducto items={items} actualizarDatos={actualizarDatos} />}
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

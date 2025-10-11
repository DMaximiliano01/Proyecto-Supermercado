import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Stack,
  Button,
  Typography,
  Paper
} from '@mui/material';

export const EditarProducto = ({ items, actualizarDatos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const productoOriginal = useMemo(
    () => items.find((item) => String(item.id) === String(id)),
    [id, items]
  );

  const [formData, setFormData] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: ''
  });

  useEffect(() => {
    if (productoOriginal) {
      setFormData({
        nombre: productoOriginal.nombre || '',
        precio: productoOriginal.precio || '',
        descripcion: productoOriginal.descripcion || '',
        imagen: productoOriginal.imagen || ''
      });
    }
  }, [productoOriginal]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarDatos(id, formData);
    navigate('/');
  };

  if (!productoOriginal) {
    return <Typography variant="h6">Producto no encontrado</Typography>;
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        backgroundColor: '#f0f0f0'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flex: 1,
          borderRadius: 0,
          width: '100%',
          padding: 4,
          backgroundColor: '#ffffff'
        }}
      >
        {/* FORMULARIO A LA IZQUIERDA */}
        <Box sx={{ flex: 1, paddingRight: 4, display: 'flex', alignItems: 'center' }}>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Editar Producto
            </Typography>
            <Stack spacing={2}>
              <TextField
                name="nombre"
                label="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="precio"
                label="Precio"
                type="number"
                value={formData.precio}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="descripcion"
                label="Descripción"
                multiline
                rows={3}
                value={formData.descripcion}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name="imagen"
                label="URL Imagen"
                value={formData.imagen}
                onChange={handleChange}
                fullWidth
              />
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button variant="outlined" onClick={() => navigate('/')}>
                  Cancelar
                </Button>
                <Button type="submit" variant="contained">
                  Guardar Cambios
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* VISTA PREVIA DE LA IMAGEN */}
        <Box
          sx={{
            flex: 1,
            border: '2px solid red',
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
            minHeight: 300,
            maxHeight: '90%',
            backgroundColor: '#fafafa'
          }}
        >
          {formData.imagen ? (
            <img
              src={formData.imagen}
              alt="Vista previa"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: 6
              }}
            />
          ) : (
            <Typography variant="body2" color="text.secondary">
              Vista previa de la imagen
            </Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotonEliminar from './BotonEliminar'
import BotonEditar from './BotonEditar'
import BotonAgregar from './BotonAgregar'

function App() {
  

  return (
    <div>
      <h1>Supermercado</h1>
      <BotonAgregar />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', backgroundColor: '#ffffffff', }}>
        <div class='contenedor_producto_1' style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px', }}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuAwA7fwFW8UTJ6dTzZKzrwR8kdX-jXGknw&s" />
          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$4.500</h2>
            <p>Nescafé Tradición 170g</p>
            <BotonEliminar />
            <BotonEditar />
          </div>


        </div>
        <div class='contenedor_producto_2' style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px', }}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://images.lider.cl/wmtcl?source=url[file:/productos/1388749a.jpg]&scale=size[449x449]&sink" />
          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$1.350</h2>
            <p>Te Oro 50 Un Supremo</p>
            <BotonEliminar />
            <BotonEditar />
          </div>

        </div>
        <div class='contenedor_producto_3' style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px', }} >
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://unimarc.vtexassets.com/arquivos/ids/238069/000000000000654777-UN-01.jpg?v=638459464342930000" />

          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$2.890</h2>
            <p>Aceite Maravilla Botella, 900 ml</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>

        <div Class='contenedor_producto_4' style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px', }}>
          <div style={{ width: "40%", height: "220px" }}>
            <img style= {{ width: "100%", height: "100%"}} src="https://unimarc.vtexassets.com/arquivos/ids/237308/000000000000665742-UN-01.jpg?v=638404111007630000" />

          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$1.090</h2>
            <p>Atún lomitos en agua merkat - 100 g drenado</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
        <div class='contenedor_producto_5' style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px' }}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://images.lider.cl/wmtcl?source=url[file:/productos/2437bb.jpg]&scale=size[449x449]&sink" />

          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$1.390</h2>
            <p>Azúcar Granulada 1Kg Iansa</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
        <div class='contenedor_producto_6' style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px' }}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://santaisabel.vtexassets.com/arquivos/ids/289649-900-900?width=900&height=900&aspect=true" />

          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$1.100</h2>
            <p>Leche Soprole Entera Natural 1L</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
        <div class="contenedor_producto_7" style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px'}}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://i5.walmartimages.cl/asr/c5de3dbf-e2bf-4532-8d36-ebededaf2f8e.f377d2591ea27de567064077dcae3373.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />

          </div>
          <div style={{ width: "60%", height: "200px"}}>
            <h2>$1.550</h2>
            <p>Arroz Grado 2, 1Kg</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
        <div class="contenedor_producto_8" style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px'}}>
            <div style={{ width: "40%", height: "200px" }}>
              <img style={{ width: "100%", height: "100%" }} src="https://i5.walmartimages.cl/asr/2c99f892-416f-4b1c-be49-7b9a2643dd60.e4d525500e88a3221cc0ad1b7beb6c26.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />

            </div>
            <div style={{ width: "60%", height: "200px"}}>
             <h2>$450</h2>
             <p>Sal Fina Seleccionada, 1Kg</p>
              <BotonEliminar />
              <BotonEditar />
           </div>
        </div>
        <div class="contenedor_producto_9" style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px'}}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://i5.walmartimages.cl/asr/4ff0e1d6-7b59-4ffd-8277-698b4b722940.205c7396dee0ee92ec5ae1cf91ec3c43.jpeg?null=&odnHeight=612&odnWidth=612&odnBg=FFFFFF" />

          </div>
          <div style={{width: "60%", height: "200px"}}>
            <h2>$1.050</h2>
            <p>Fideo Pasta Spaghetti N°5, 400 g</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
        <div class="contenedor_producto_10" style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px'}}>
          <div style={{ width: "40%", height: "200px"}}>
            <img style={{ width: "100%", height: "100%" }} src="https://i5.walmartimages.cl/asr/3e31baf3-409b-4882-b477-b84e0e164d91.e60e5132734886ffb26284eb0ea5faac.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />

          </div>
          <div style={{ width: "60%", height: "200px" }}>
            <h2>$1.290</h2>
            <p>Lechuga Escarola Bolsa</p>
            <BotonEliminar />
            <BotonEditar />
          
          </div>
        </div>
        <div class="contenedor_producto_11" style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px' }}>
          <div style= {{width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://i5.walmartimages.cl/asr/5f548827-24d4-4ee6-aaf9-710f15eb7910.1ac17739dfc9dc64af8bcb7e30814ab6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />

          </div>
          <div style= {{ width: "60%", height: "200px" }}>
            <h2>$1.590</h2>
            <p>Brócoli, 1 unidad</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
        <div class="contenedor_producto_12" style={{ display: 'flex', border: '2px solid rgba(0, 0, 0, 1)', flex: '1 1 360px', borderRadius: '10px'}}>
          <div style={{ width: "40%", height: "200px" }}>
            <img style={{ width: "100%", height: "100%" }} src="https://i5.walmartimages.cl/asr/f1857b10-732b-4bc3-ad82-026eb2e2f653.36a9f27d47caaf362f76bc6c0c22e09a.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />

          </div>
          <div style= {{width: "60%", height: "200px" }}>
            <h2>$1.990</h2>
            <p>Apio Bastones Bolsa, 500 g</p>
            <BotonEliminar />
            <BotonEditar />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App

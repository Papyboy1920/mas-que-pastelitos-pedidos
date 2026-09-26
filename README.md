# 📦 Más que Pastelitos — Pedidos (demo)

Sistema de pedidos para **Más que Pastelitos**, Calle Presidente Vásquez #289, Alma Rosa,
San Isidro, Santo Domingo Este, República Dominicana
(4.6★ en Uber Eats, 1,500+ reseñas — sin canal de pedido directo propio).

- App de clientes (`/`) — tema dorado/ámbar cálido y apetitoso,
  precios grandes y legibles, español, RD$.
- Pantalla de tienda (`/tienda`) — fondo negro, protegida con `STORE_KEY`:
  pipeline nuevo → preparando → listo → entregado, sonido de pedido nuevo,
  editor de catálogo/precios, pestaña Historial (filtros por fecha y estado,
  conteo de pedidos, total de ingresos, confirmación de cancelación).

## Precios semilla

Capturados el 19-sep-2026 de las capturas de pantalla del listado de
**Uber Eats** del negocio — son precios de marketplace, no necesariamente
los precios directos. El dueño confirma los precios directos finales en la
pestaña Catálogo de `/tienda`.

## Despliegue (Render)

1. Render → **New → Blueprint**
2. Conectar el repo `Papyboy1920/mas-que-pastelitos-pedidos`
3. **Apply** y esperar el despliegue
4. Copiar la clave generada de `STORE_KEY` (Render → Environment)
5. Pegarla en `/tienda` y hacer un pedido de prueba

## Demo local

```bash
npm install
STORE_KEY=prueba node server.js
# http://localhost:3000/        (clientes)
# http://localhost:3000/tienda  (tienda)
```

**Nota:** usa SQLite en disco efímero — solo para demo/arranque.
Un lanzamiento real necesita Postgres pago.

// ============================================================
// CATÁLOGO SEMILLA — Más que Pastelitos (demo)
// Precios REALES en RD$ capturados el 26-sep-2026 de los flyers
// del IG @masquepastelitos89 (Calle Presidente Vásquez #289,
// Alma Rosa, Santo Domingo Este, RD).
// Dos líneas: "Combos en Caja" (cajas de cartón para fiestas)
// y "Combos Empacados" (empacados individuales).
// El dueño confirma los precios directos finales en la pestaña
// Catálogo de la pantalla de la tienda (/tienda).
// ============================================================

const CATALOG_VERSION = 1;

// Fotos reales del IG @masquepastelitos89 (recortadas de las
// capturas del dueño). Solo imágenes reales, nada generado.
const IMG = {
  caja: "img/combo-caja.jpg",
  empacado: "img/combo-empacado.jpg",
  pastelitos: "img/pastelitos.jpg",
  bolitas: "img/bolitas-yuca.jpg",
  croquetas: "img/croquetas.jpg"
};

function combo(id, code, piezas, price, contents, img, tag) {
  return {
    id,
    img,
    name: `Combo #${code} · ${piezas} piezas`,
    price,
    unit: "combo",
    active: true,
    ...(tag ? { tag } : {}),
    desc: `${contents}. Empacado listo para fiestas, cumpleaños, bodas y eventos.`
  };
}

const SEED_CATALOG = {
  departments: [
    {
      id: "combos-caja",
      name: "Combos en Caja",
      icon: "📦",
      img: IMG.caja,
      categories: [
        {
          id: "caja-fiesta",
          name: "Cajas para fiestas y eventos",
          items: [
            combo("caja-1595", 1595, 40, 787, "Caja con 10 pastelitos, 10 croquetas, 10 quipes y 10 bolitas de yuca", IMG.caja, "El más pedido"),
            combo("caja-1191", 1191, 75, 1472, "Caja con 15 pastelitos, 15 croquetas, 15 quipes, 15 bolitas de yuca y 15 minisandwiches", IMG.pastelitos),
            combo("caja-1190", 1190, 100, 1554, "Caja con 20 pastelitos, 20 croquetas, 20 quipes y 20 pizzitas", IMG.croquetas),
            combo("caja-1885", 1885, 125, 1953, "Caja con 25 pastelitos, 25 croquetas, 25 bolitas de yuca y 25 minisandwiches", IMG.bolitas),
            combo("caja-1188", 1188, 150, 2335, "Caja con 30 pastelitos, 30 croquetas, 30 quipes y 30 minisandwiches", IMG.caja),
            combo("caja-1187", 1187, 200, 3107, "Caja con 40 pastelitos, 40 croquetas, 40 quipes y 40 bolitas de yuca", IMG.pastelitos),
            combo("caja-1156", 1156, 250, 3871, "Caja con 50 pastelitos, 50 croquetas, 50 quipes y 50 minisandwiches", IMG.croquetas),
            combo("caja-1590", 1590, 300, 4678, "Caja con 60 pastelitos, 60 croquetas, 60 quipes y 60 bolitas de yuca", IMG.bolitas),
            combo("caja-1432", 1432, 350, 5442, "Caja con 70 pastelitos, 70 croquetas, 70 quipes y 70 bolitas de yuca", IMG.caja),
            combo("caja-3781", 3781, 375, 3760, "Caja con 75 pastelitos, 75 croquetas, 75 bolitas de yuca y 75 minisandwiches", IMG.pastelitos),
            combo("caja-3777", 3777, 400, 6138, "Caja con 80 pastelitos, 80 croquetas, 80 quipes y 80 pizzitas", IMG.croquetas),
            combo("caja-1431", 1431, 500, 7522, "Caja con 100 pastelitos, 100 croquetas, 100 quipes y 100 bolitas de yuca", IMG.bolitas),
            combo("caja-1593", 1593, 750, 11229, "Caja con 150 pastelitos, 150 croquetas, 150 quipes y 150 bolitas de yuca", IMG.caja),
            combo("caja-1851", 1851, 1000, 14804, "Caja con 200 pastelitos, 200 croquetas, 200 quipes y 200 minisandwiches", IMG.pastelitos),
            combo("caja-3760", 3760, 1250, 18505, "Caja con 250 pastelitos, 250 croquetas, 250 bolitas de yuca y 250 minisandwiches", IMG.croquetas),
            combo("caja-1594", 1594, 1500, 22356, "Caja con 300 pastelitos, 300 croquetas, 300 quipes y 300 bolitas de yuca", IMG.bolitas),
            combo("caja-3773", 3773, 2000, 29608, "Caja con 400 pastelitos, 400 croquetas, 400 quipes y 400 minisandwiches", IMG.caja),
            combo("caja-1869", 1869, 2500, 37260, "Caja con 500 pastelitos, 500 croquetas, 500 quipes y 500 bolitas de yuca", IMG.pastelitos),
            combo("caja-3815", 3815, 3000, 44412, "Caja con 600 pastelitos, 600 croquetas, 600 quipes y 600 minisandwiches", IMG.croquetas),
            combo("caja-3811", 3811, 3000, 44712, "Caja con 600 pastelitos, 600 croquetas, 600 quipes y 600 bolitas de yuca", IMG.bolitas),
            combo("caja-3819", 3819, 5000, 74112, "Caja con 1,000 pastelitos, 1,000 croquetas, 1,000 quipes y 1,000 bolitas de yuca", IMG.caja),
            combo("caja-3825", 3825, 5000, 73612, "Caja con 1,000 pastelitos, 1,000 croquetas, 1,000 bolitas de yuca y 1,000 minisandwiches", IMG.pastelitos)
          ]
        }
      ]
    },
    {
      id: "combos-empacados",
      name: "Combos Empacados",
      icon: "🎁",
      img: IMG.empacado,
      categories: [
        {
          id: "empacados-fiesta",
          name: "Empacados para fiestas y eventos",
          items: [
            combo("emp-3850", 3850, 40, 917, "Empacado con 10 pastelitos, 10 croquetas, 10 quipes y 10 minisandwiches", IMG.empacado, "El más pedido"),
            combo("emp-1714", 1714, 75, 1637, "Empacado con 15 pastelitos, 15 croquetas, 15 quipes, 15 bolitas de yuca y 15 minisandwiches", IMG.pastelitos),
            combo("emp-1712", 1712, 100, 1782, "Empacado con 20 pastelitos, 20 croquetas, 20 quipes y 20 pizzitas", IMG.croquetas),
            combo("emp-1713", 1713, 100, 2236, "Empacado con 25 pastelitos, 25 croquetas, 25 quipes y 25 bolitas de yuca", IMG.bolitas),
            combo("emp-1711", 1711, 120, 2673, "Empacado con 30 pastelitos, 30 croquetas, 30 bolitas de yuca y 30 minisandwiches", IMG.empacado),
            combo("emp-1709", 1709, 160, 3547, "Empacado con 40 pastelitos, 40 croquetas, 40 quipes y 40 bolitas de yuca", IMG.pastelitos),
            combo("emp-1708", 1708, 200, 4421, "Empacado con 50 pastelitos, 50 croquetas, 50 quipes y 50 minisandwiches", IMG.croquetas),
            combo("emp-1715", 1715, 240, 5295, "Empacado con 60 pastelitos, 60 croquetas, 60 quipes y 60 bolitas de yuca", IMG.bolitas),
            combo("emp-1707", 1707, 280, 6905, "Empacado con 70 pastelitos, 70 croquetas, 70 quipes y 70 bolitas de yuca", IMG.empacado),
            combo("emp-3784", 3784, 300, 6649, "Empacado con 75 pastelitos, 75 croquetas, 75 bolitas de yuca y 75 minisandwiches", IMG.pastelitos),
            combo("emp-3778", 3778, 320, 7026, "Empacado con 80 pastelitos, 80 croquetas, 80 quipes y 80 pizzitas", IMG.croquetas),
            combo("emp-1706", 1706, 400, 8452, "Empacado con 100 pastelitos, 100 croquetas, 100 quipes y 100 bolitas de yuca", IMG.bolitas),
            combo("emp-1718", 1718, 600, 12678, "Empacado con 150 pastelitos, 150 croquetas, 150 quipes y 150 bolitas de yuca", IMG.empacado),
            combo("emp-1717", 1717, 800, 16904, "Empacado con 200 pastelitos, 200 croquetas, 200 quipes y 200 minisandwiches", IMG.pastelitos),
            combo("emp-3758", 3758, 1000, 21005, "Empacado con 250 pastelitos, 250 croquetas, 250 bolitas de yuca y 250 minisandwiches", IMG.croquetas),
            combo("emp-1719", 1719, 1200, 25356, "Empacado con 300 pastelitos, 300 croquetas, 300 quipes y 300 bolitas de yuca", IMG.bolitas),
            combo("emp-3770", 3770, 1600, 33608, "Empacado con 400 pastelitos, 400 croquetas, 400 quipes y 400 minisandwiches", IMG.empacado),
            combo("emp-1866", 1866, 2000, 42260, "Empacado con 500 pastelitos, 500 croquetas, 500 quipes y 500 bolitas de yuca", IMG.pastelitos),
            combo("emp-3816", 3816, 2400, 50412, "Empacado con 600 pastelitos, 600 croquetas, 600 quipes y 600 minisandwiches", IMG.croquetas),
            combo("emp-3812", 3812, 2400, 50712, "Empacado con 600 pastelitos, 600 croquetas, 600 quipes y 600 bolitas de yuca", IMG.bolitas),
            combo("emp-3820", 3820, 4000, 84112, "Empacado con 1,000 pastelitos, 1,000 croquetas, 1,000 quipes y 1,000 bolitas de yuca", IMG.empacado),
            combo("emp-3826", 3826, 4000, 83612, "Empacado con 1,000 pastelitos, 1,000 croquetas, 1,000 bolitas de yuca y 1,000 minisandwiches", IMG.pastelitos)
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };

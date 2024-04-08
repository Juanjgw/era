
export const tiposAlineacion = {
  Separacion: 1,
  Centrado: 2
};

export const tiposHerraje = {
  TipoC: 1,
  TipoL: 2
  
};

export const selectTiposAlineacion = [
  { label: "Elige Separación o Centrado", value: -1},
  { label: "Separacion", value: tiposAlineacion.Separacion},
  { label: "Centrado", value: tiposAlineacion.Centrado}
];

/*export const selectTiposHerraje = [
  { label: "Elige tipo de Herraje", value: -1},
  { label: "Tipo C", value: tiposHerraje.TipoC},
  { label: "Tipo L", value: tiposHerraje.TipoL}
];*/
export const selectTiposHerraje = [
  { label: "Elige tipo de Herraje", value: -1 },
  { label: "Tipo C", value: 38 },
  { label: "Tipo L", value: 43 }
];

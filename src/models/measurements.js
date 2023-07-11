
export const tiposAlineacion = {
  Separacion: 1,
  Centrado: 2
};

export const tiposHerraje = {
  TipoL: 1,
  TipoC: 2
};

export const selectTiposAlineacion = [
  { label: "Elige Separación o Centrado", value: -1},
  { label: "Separacion", value: tiposAlineacion.Separacion},
  { label: "Centrado", value: tiposAlineacion.Centrado}
];

export const selectTiposHerraje = [
  { label: "Elige tipo de Herraje", value: -1},
  { label: "Tipo L", value: tiposHerraje.TipoL},
  { label: "Tipo C", value: tiposHerraje.TipoC}
];
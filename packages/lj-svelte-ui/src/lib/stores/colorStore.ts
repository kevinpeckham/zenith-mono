import { readable, get } from "svelte/store";

export const antiFlash = readable("#eef0f2");
export const cultured = readable("#ECECEC");
export const gunmetal = readable("#292f36");
export const kellyGreen = readable("#6cad18");
export const maize = readable("#FDE74C");
export const midnight = readable("hsla(210, 31%, 20%, 1.0)");
export const oxford = readable("hsla(218, 100%, 16%, 1.0)");
export const richBlack = readable("#081526");
export const selectiveYellow = readable("#FFBB00");
export const yellowGreen = readable("#7BC021");

export const colors = readable({
  antiFlash: get(antiFlash),
  cultured: get(cultured),
  gunmetal: get(gunmetal),
  kellyGreen: get(kellyGreen),
  maize: get(maize),
  midnight: get(midnight),
  oxford: get(oxford),
  richBlack: get(richBlack),
  selectiveYellow: get(selectiveYellow),
  yellowGreen: get(yellowGreen),
});








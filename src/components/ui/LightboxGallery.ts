export function openLightbox(id: string) {
  window.dispatchEvent(new CustomEvent("open-lightbox", { detail: { id } }));
}

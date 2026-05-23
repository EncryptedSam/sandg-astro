export function openLightbox(
  id: string,
  data: { src: string }[],
  index: number,
  title?: string,
) {
  window.dispatchEvent(
    new CustomEvent("open-lightbox", { detail: { data, index, title, id } }),
  );
}

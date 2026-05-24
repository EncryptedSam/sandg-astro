// declare global {
//   interface Window {
//     openLightbox: typeof openLightbox;
//   }
// }

// export function openLightbox(
//   id: string,
//   data: { src: string }[],
//   index: number,
//   title?: string,
// ) {
//   window.dispatchEvent(
//     new CustomEvent("open-lightbox", {
//       detail: { data, index, title, id },
//     }),
//   );
// }

// window.openLightbox = openLightbox;

// export {};

// declare global {
//   interface Window {
//     openLightbox: typeof openLightbox;
//   }
// }

export function openLightbox(
  id: string,
  data: { src: string }[],
  index: number,
  title?: string,
) {
  window.dispatchEvent(
    new CustomEvent("open-lightbox", {
      detail: { data, index, title, id },
    }),
  );
}

// if (typeof window !== "undefined") {
//   window.openLightbox = openLightbox;
// }

// export {};
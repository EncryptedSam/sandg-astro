type ViewMoreEvent = CustomEvent<{
  id: string;
}>;

export const invokeImageGalleryViewMore = (
  id: string,
  callback?: () => void,
) => {
  window.addEventListener("view-more", ((e: ViewMoreEvent) => {
    if (e.detail.id === id) {
      callback?.();
    }
  }) as EventListener);
};

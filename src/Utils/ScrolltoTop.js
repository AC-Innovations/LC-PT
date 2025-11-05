// TODO: needs to work for when the user presses the Forward and Back navigation buttons

export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

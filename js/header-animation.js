function animateHeader() {
  tl.staggerTo(splitPhrase.chars, 0, {bottom: 250}, 0);
  tl.staggerTo(splitPhrase.chars, 2, {bottom: 5, ease: Bounce.easeOut}, 0.02);
}

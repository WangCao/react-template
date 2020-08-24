const rem = (pxWidth = 1080) => {
  const html: HTMLHtmlElement = document.querySelectorAll('html')[0];
  const oWidth =
    window.innerWidth ||
    document.body.clientWidth ||
    document.documentElement.clientWidth;
  html.style.fontSize = `${(oWidth / pxWidth) * 100}px`;
};

export default rem;

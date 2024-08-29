var slider = tns({
    container: ".homeBanner__wrapper",
    items: 1,
    slideBy: "page",
    autoplay: true,
    mouseDrag: true
  });

  var slider = tns({
    container: ".meet__slider",
    items: 1,
    speed: 800,
    gutter: 100,
    slideBy: "page",
    autoplay: true,
    navPosition: "bottom",
    axis: "horizontal",
  });


  const portfolioNav = document.querySelectorAll(".tab_nav_link");
  const portfolioContent = document.querySelectorAll(".portfolio_content_item");
  
  portfolioNav.forEach((port) => {
      port.addEventListener("click", () => {
          removeActivePort();
          port.classList.add('active');
  
          const activeContent = document.querySelector(`#${port.id}-content`);
          removeActiveContent();
          activeContent.classList.add("active");
      })
  });
  
  function removeActivePort() {
      portfolioNav.forEach((port) => {
          port.classList.remove('active');
      });
  }
  
  function removeActiveContent() {
      portfolioContent.forEach((port) => {
          port.classList.remove('active');
      });
  }
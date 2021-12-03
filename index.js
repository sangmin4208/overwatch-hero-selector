const $heroes = document.querySelector(".container .heroes");

function main() {
  for (let i = 1; i <= 32; i++) {
    const hero = document.createElement("div");
    const image = document.createElement("div");
    hero.setAttribute("class", "hero");
    image.setAttribute("class", "image");
    image.style.backgroundImage = `url("./images/hero${i}.png")`
    hero.append(image);
    $heroes.append(hero);
  }
}

main();

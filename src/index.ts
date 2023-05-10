import "./css/main.css";
import data from "./json/data.json";

interface badgeData {
  category: string;
  score: number;
  icon: string;
}
const badgeContainer = document.querySelector(".badges") as HTMLDivElement;
const badgeColors: string[] = [
  "badge--red",
  "badge--orange",
  "badge--teal",
  "badge--sky",
];

document.addEventListener("DOMContentLoaded", () => {
  printBadge();
});

const printBadge = (): void => {
  const fragment = document.createDocumentFragment();

  data.forEach((el: badgeData, index: number) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="badge ${badgeColors[index]}">
      <img
        class="badge__icon"
        src="${el.icon}"
        alt="icon"
      />
      <span class="badge__category">${el.category}</span>
      <div class="badge__container-score">
        <span class="badge__score text-neutral-dark-blue">${el.score}</span>
        <span class="text-neutral-400">/</span
        ><span class="text-neutral-400">100</span>
      </div>
    </div>`;
    fragment.append(div);
  });

  badgeContainer.append(fragment);
};

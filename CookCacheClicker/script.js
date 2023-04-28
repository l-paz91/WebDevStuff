/* ----------------------------------------------------------------  */

let score = 0;

const clickerButton = document.querySelector('.clicker-button');
const scoreElement = document.getElementById('score');

let autoClickerCost = 10;
let autoClickerPassiveClicks = 0;
const autoClickerUpgrade = document.getElementById('autoClickerUpgrade');
const autoClickerUpgradeCost = document.getElementById('autoClickerUpgradeCost');
const autoClickerUpgradeButton = document.getElementById('autoClickerUpgradeButton');
const autoClickerUpgradeTooltipText = document.querySelector('autoClickerTooltip');

let jacobCost = 50;
let jacobPassiveClicks = 0;
const jacobUpgrade = document.getElementById('jacobUpgrade');
const jacobUpgradeCost = document.getElementById('jacobUpgradeCost');
const jacobUpgradeButton = document.getElementById('jacobUpgradeButton');

/* ----------------------------------------------------------------  */
/* ---- BUTTON CONTAINER ------------------------------------------  */

clickerButton.addEventListener('click', () => {
    score += 1 + autoClickerPassiveClicks + jacobPassiveClicks;
    scoreElement.textContent = score;
});

/* ----------------------------------------------------------------  */

// Automatic passive clicks
setInterval(() => {
    score += autoClickerPassiveClicks + jacobPassiveClicks;
    scoreElement.textContent = score;
}, 1000);

/* ----------------------------------------------------------------  */
/* ---- UPGRADE CONTAINER -----------------------------------------  */

autoClickerUpgradeButton.addEventListener('click', () => {
    if (score >= autoClickerCost) {
        score -= autoClickerCost;
        autoClickerPassiveClicks += 1;
        autoClickerCost *= 2;
        autoClickerUpgradeCost.textContent = `Cost: ${autoClickerCost}`;
        scoreElement.textContent = score;
    }
});

/* ----------------------------------------------------------------  */

jacobUpgradeButton.addEventListener('click', () => {
    if (score >= jacobCost) {
        score -= jacobCost;
        jacobPassiveClicks += 10;
        jacobCost *= 2;
        jacobUpgradeCost.textContent = `Cost: ${jacobCost}`;
        scoreElement.textContent = score;
    }
});

/* ----------------------------------------------------------------  */

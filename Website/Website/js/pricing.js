/**
 * FIINE.VN - PRICING & PLAN CALCULATOR
 * Handles User Count Slider and Monthly/Yearly Discount Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  initPricingCalculator();
});

function initPricingCalculator() {
  const userSlider = document.getElementById('userCountSlider');
  const userCountVal = document.getElementById('userCountDisplay');
  const billingToggleOptions = document.querySelectorAll('.toggle-option');
  
  // Plan price display elements
  const priceStandard = document.getElementById('priceStandard');
  const pricePro = document.getElementById('pricePro');
  const priceEnterprise = document.getElementById('priceEnterprise');

  if (!userSlider) return;

  let isYearly = true; // Default yearly discount (save 20%)

  // Base monthly prices per user in VND
  const baseRates = {
    standard: 35000,
    pro: 65000,
    enterprise: 120000
  };

  function updatePrices() {
    const users = parseInt(userSlider.value) || 10;
    if (userCountVal) userCountVal.textContent = users + ' nhân sự';

    const discountFactor = isYearly ? 0.8 : 1.0; // 20% discount on yearly billing

    const standardTotal = Math.round((users * baseRates.standard * discountFactor) / 1000) * 1000;
    const proTotal = Math.round((users * baseRates.pro * discountFactor) / 1000) * 1000;
    const enterpriseTotal = Math.round((users * baseRates.enterprise * discountFactor) / 1000) * 1000;

    const formatVND = (num) => new Intl.NumberFormat('vi-VN').format(num) + 'đ';

    if (priceStandard) priceStandard.textContent = formatVND(standardTotal);
    if (pricePro) pricePro.textContent = formatVND(proTotal);
    if (priceEnterprise) priceEnterprise.textContent = formatVND(enterpriseTotal);
  }

  // Slider change event
  userSlider.addEventListener('input', updatePrices);

  // Toggle Billing Cycle
  billingToggleOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      billingToggleOptions.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      isYearly = opt.getAttribute('data-cycle') === 'yearly';
      updatePrices();
    });
  });

  // Initial calculation
  updatePrices();
}

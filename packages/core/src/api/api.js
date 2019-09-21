/** Economic indicators:
 * stocks
 * currency
 * inflation
 * commodities
 * interest-rate
 * sales-tax-rate
 * corruption-rank
 * corporate-tax-rate
 * government-debt-to-GDP
 * personal-income-tax-rate
*/

/**
 * @param {string} - indicator
 * @param {object} - date
 * @param {number} - date.day
 * @param {number} - date.month
 * @param {number} - date.year
 * @returns {object}
 * @property {object} - date
 * @property {object} - indicator
*/
export const getEconomicDataByDate = (indicator, { day, month, year }) => `/api/${indicator}/date/${day}-${month}-${year}`;

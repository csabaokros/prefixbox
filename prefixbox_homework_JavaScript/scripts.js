'use strict'

/**
 * This function is triggered when the third item is clicked.
 * It swaps the titles of element 2 and 3
 * @param { MouseEvent } event
 * @returns void
 */
const swapTitles = event => {
  const thisTitle = event.target.innerHTML
  const thatElement = findElementWithDataId('2', productNameElements)
  .firstElementChild
  const thatTitle = thatElement.innerHTML
  event.target.innerHTML = thatTitle
  thatElement.innerHTML = thisTitle
}

/**
 * This function reads, and alerts data from the container that
 * invoked the function
 * @param { MouseEvent } event 
 * @returns void
 */
const alertContents = event => {
  const parent = event.target.parentElement
  const id = parent.dataset.identifier
  const name = parent.querySelector('.product-name').innerHTML
  const price = parent.querySelector('.product-price').innerHTML
  const data = {
    'Product name': name,
    'Product ID': id,
    'Price': price
  }
  const alertString = Object.entries(data).map(entry => {
    return entry.join(": ")
  }).join('\n')
  alert(alertString)
}

/**
 * Returns 
 * @param { string } id 
 * @param { NodeList } elements
 * @returns { HTMLElement } element
 * 
 */
const findElementWithDataId = (id, elements) => {
  return [...productNameElements]
  .find(element => {
    return element.dataset.identifier === id
  })
}

/* Gather all Elements that need to act on click
   and assign them the correct function based on
   the data-identifier attribute
*/
const productNameElements = document.querySelectorAll('.product-data')

productNameElements.forEach(element => {
  const fn = findElementWithDataId('3', productNameElements) === element
   ? swapTitles : alertContents
  element.addEventListener('click', fn)
});

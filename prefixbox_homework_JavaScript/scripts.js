'use strict'

/**
 * This function is triggered when the third item is clicked.
 * It swaps the titles of element 2 and 3
 * This function does not return a value
 * @param { MouseEvent } event The mouse event that triggered the function
 * @returns void
 */
const swapTitles = event => {
  const thisTitle = event.target.innerHTML
  const thatElement = findElementWithDataId(2, productNameElements)
    .firstElementChild
  const thatTitle = thatElement.innerHTML
  event.target.innerHTML = thatTitle
  thatElement.innerHTML = thisTitle
}

/**
 * This function reads, and alerts data from the container that
 * invoked the function
 * This function does not return a value
 * @param { MouseEvent } event The mouse event that triggered the function
 * @returns void
 */
const alertContents = event => {
  const parent = event.target.parentElement
  const data = fetchProductData(parent)
  const alertString = stringifyObject(data)
  alert(alertString)
}

/**
 * Returns an object of assembled product data from the element's children
 * @param { HTMLElement } element HTML element whos children will be parsed
 * @returns { Object }
 */
const fetchProductData = element => {
  const id = element.dataset.identifier
  const name = element.querySelector('.product-name').innerHTML
  const price = element.querySelector('.product-price').innerHTML
  const data = {
    'Product name': name,
    'Product ID': id,
    'Price': price
  }
  return data
}

/**
 * Returns a formatted string using : to separate
 * keys from values and new line to separate entries
 * @param { Object } o The object to be stringified
 * @returns { String }
 */
const stringifyObject = o => {
  return Object
    .entries(o)
    .map(entry => {
      return entry.join(": ")
    })
    .join('\n')
}

/**
 * Returns the element with the requested data-identifier
 * value
 * @param { string|number } id The requested data-identifier value
 * @param { NodeList } elements List of elements to look up id in
 * @returns { HTMLElement|null }
 * 
 */
const findElementWithDataId = (id, elements) => {
  id = id.toString()
  return [...productNameElements]
    .find(element => {
      return element.dataset.identifier === id
    }) || null
}

/* Gather all Elements that need to act on click
   and assign them the correct function based on
   the data-identifier attribute
*/
const productNameElements = document.querySelectorAll('.product-data')

productNameElements.forEach(element => {
  const fn = findElementWithDataId(3, productNameElements) === element
   ? swapTitles : alertContents
  element
    .querySelector('.product-name')
    .addEventListener('click', fn)
})

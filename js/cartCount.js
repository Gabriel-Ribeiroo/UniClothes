import { showCartToast } from "./showCartToast.js"

const badge = document.querySelector("[data-js='cart-badge']")

let cartCount = 0

export function incrementCartProductsQuantity(button) {
	cartCount++

	badge.textContent = cartCount
	badge.classList.remove("hidden")
	badge.classList.remove("bump")
	
	requestAnimationFrame(() => {
		badge.classList.add("bump")
	})

	const productName = button.closest("[data-js='product-item']").querySelector("h3").textContent.trim()
	showCartToast(productName)

}
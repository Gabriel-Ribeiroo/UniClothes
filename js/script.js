import { toggleTheme } from "./theme.js"
import { openSidebar, closeSidebar } from "./sidebar.js"
import { accordionOpenClose } from "./accordion.js"
import { incrementCartProductsQuantity } from "./cartCount.js"

const themeToggler = document.querySelector("[data-js='theme-toggler']")
themeToggler.addEventListener("click", toggleTheme)

// SIDEBAR 
const sidebarOpenButton = document.querySelector("[data-js='sidebar-open']")
sidebarOpenButton.addEventListener("click", openSidebar)

const sidebarCloseButtons = document.querySelectorAll("[data-js='sidebar-close']")
sidebarCloseButtons.forEach(close => close.addEventListener("click", closeSidebar))

// ACCORDION

const accordions = document.querySelectorAll("[data-js='accordion']")

accordions.forEach(accordion => {
	const toggler = accordion.querySelector("[data-js='accordion-toggler']")
	const content = accordion.querySelector("[data-js='accordion-content']")

	const openIcon = accordion.querySelector("[data-js='open-accordion-icon']")
	const closeIcon = accordion.querySelector("[data-js='close-accordion-icon']")

	toggler.addEventListener("click", () => accordionOpenClose(content, openIcon, closeIcon))
})

// CART
const addToCartButtons = document.querySelectorAll("[data-js='add-to-cart']")

addToCartButtons.forEach(button => {
	button.addEventListener("click", () => incrementCartProductsQuantity(button))
})
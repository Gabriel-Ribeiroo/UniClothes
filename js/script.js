import { toggleTheme } from "./theme.js"

const themeToggler = document.querySelector("[data-js='theme-toggler']")
themeToggler.addEventListener("click", toggleTheme)

// SIDEBAR 
const sidebar = document.querySelector("[data-js='sidebar']")

const sidebarOpen = document.querySelector("[data-js='sidebar-open']")

sidebarOpen.addEventListener("click", () => {
	if (sidebar.classList.contains("hidden")) {
		sidebar.classList.remove("hidden")
	}
})

const sidebarClose = document.querySelectorAll("[data-js='sidebar-close']")

sidebarClose.forEach(close => {
	close.addEventListener("click", () => {
		sidebar.classList.remove("visible")
		sidebar.classList.add("hidden")
	})
})


// ACCORDION
const accordions = document.querySelectorAll("[data-js='accordion']")

accordions.forEach(accordion => {
	const accordionToggler = accordion.querySelector("[data-js='accordion-toggler']")
	const accordionContent = accordion.querySelector("[data-js='accordion-content']")

	accordionContent.style.height = "0px"

	const openAccordionIcon = accordion.querySelector("[data-js='open-accordion-icon']")
	const closeAccordionIcon = accordion.querySelector("[data-js='close-accordion-icon']")

	accordionToggler.addEventListener("click", () => {
		if(accordionContent.classList.contains("hidden")) {
			openAccordionIcon.classList.add("hidden")
			closeAccordionIcon.classList.remove("hidden")

			accordionContent.classList.remove("hidden")

			accordionContent.style.height = "0px"

			return requestAnimationFrame(() => {
				accordionContent.style.height = accordionContent.scrollHeight + "px"
			})
		}

		accordionContent.style.height = "0px"
		
		closeAccordionIcon.classList.add("hidden")
		openAccordionIcon.classList.remove("hidden")

		accordionContent.addEventListener("transitionend", () => {
			if(accordionContent.style.height === "0px") accordionContent.classList.add("hidden")
		}, { once: true })
	})
})

// CART
const cartBadge = document.querySelector("[data-js='cart-badge']")
const addToCartButtons = document.querySelectorAll("[data-js='add-to-cart']")

let cartCount = 0
let toastTimeout

function showCartToast(productName) {
	const existing = document.querySelector(".cart-toast")
	if (existing) existing.remove()
	clearTimeout(toastTimeout)

	const toast = document.createElement("div")
	toast.className = "cart-toast"
	toast.setAttribute("role", "status")
	toast.setAttribute("aria-live", "polite")
	toast.textContent = `"${productName}" adicionado ao carrinho`
	document.body.appendChild(toast)

	toastTimeout = setTimeout(() => {
		toast.classList.add("hidden")
		setTimeout(() => toast.remove(), 300)
	}, 2500)
}

addToCartButtons.forEach(button => {
	button.addEventListener("click", () => {
		cartCount++

		cartBadge.textContent = cartCount
		cartBadge.classList.remove("hidden")
		cartBadge.classList.remove("bump")
		
		requestAnimationFrame(() => {
			cartBadge.classList.add("bump")
		})

		const productName = button.closest("[data-js='product-item']").querySelector("h3").textContent.trim()
		showCartToast(productName)
	})
})
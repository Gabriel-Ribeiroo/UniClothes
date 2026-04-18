const themeToggler = document.querySelector("[data-js='theme-toggler']")

themeToggler.addEventListener("click", () => {
	const root = document.documentElement
	
	if(root.classList.contains("dark")) {
		root.classList.remove("dark")
		return root.classList.add("light")
	}

	root.classList.remove("light")
	root.classList.add("dark")
})
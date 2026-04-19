const root = document.documentElement

export function toggleTheme() {
	const currentTheme = root.getAttribute("data-theme") || 
		(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : light)

	const nextTheme = currentTheme === "dark" ? "light" : "dark"

	root.setAttribute("data-theme", nextTheme)
	localStorage.setItem("theme", nextTheme)
}
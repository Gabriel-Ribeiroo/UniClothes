const sidebar = document.querySelector("[data-js='sidebar']")

export function openSidebar() {
	sidebar.classList.remove("hidden")
}

export function closeSidebar() {
	sidebar.classList.add("hidden")
}
const sidebar = document.querySelector('.sidebar')
const sidebarActivator = document.querySelector('.sidebar__activator')
console.log(3);
sidebarActivator.addEventListener('click', toggleSidebar)

function toggleSidebar() {
	console.log(12);
	sidebar.classList.toggle('show')
}

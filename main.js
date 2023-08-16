const menu = document.getElementById('mn');
const links = document.getElementById('ln');
const link = document.getElementById('ln2');
const hor = document.getElementById('line');
hor.style.display = 'none';
const Sidebar = document.getElementById('sd').addEventListener('click', () => {
	document.getElementById('sd').style.width = '300px';
	links.style.display = 'block';
	link.style.display = 'block';
	hor.style.display = 'block';
});
document.getElementById('sd').addEventListener('mouseleave', () => {
	document.getElementById('sd').style.width = '50px';
	document.getElementById('sd').style.transition = '.5s ease';
	menu.style.transform = 'translate(50%, 30%)';
	menu.style.left = '0%';
	menu.style.transition = '.5s ease';
	links.style.display = 'none';
	link.style.display = 'none';
	hor.style.display = 'none';
});




// On page load or when changing themes, best to add inline in `head` to avoid FOUC
window.addEventListener('load', (e) => {
	if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
		document.getElementById('light-mode-icon').classList.remove('hidden')
		document.getElementById('dark-mode-icon').classList.add('hidden')
	} else {
		document.getElementById('light-mode-icon').classList.add('hidden')
		document.getElementById('dark-mode-icon').classList.remove('hidden')
	}
	// Remove animation from Dark/Light mode button
	setTimeout(() => {
		document.getElementById('dark-mode-icon').classList.remove('animate-bounce')
		document.getElementById('light-mode-icon').classList.remove('animate-bounce')
	}, 5380)
})

document.querySelector('#dark-mode-btn').addEventListener('click', (e) => {
	e.preventDefault()
	if (localStorage.theme === 'light' || (!('theme' in localStorage))) {
		document.documentElement.classList.add('dark')
		// Whenever the user explicitly chooses dark mode
		localStorage.theme = 'dark'
		// Switch button
		document.getElementById('light-mode-icon').classList.remove('hidden')
		document.getElementById('dark-mode-icon').classList.add('hidden')
		document.getElementById('dark-mode-icon').classList.remove('animate-bounce')
		document.getElementById('light-mode-icon').classList.remove('animate-bounce')
	} else {
		document.documentElement.classList.remove('dark')
		// Whenever the user explicitly chooses light mode
		localStorage.theme = 'light'
		// Switch button
		document.getElementById('light-mode-icon').classList.add('hidden')
		document.getElementById('dark-mode-icon').classList.remove('hidden')
		document.getElementById('dark-mode-icon').classList.remove('animate-bounce')
		document.getElementById('light-mode-icon').classList.remove('animate-bounce')
	}
})







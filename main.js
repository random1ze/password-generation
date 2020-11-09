const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
	input.value = generatePassword(12)
})
function generatePassword(length = 12) {
	const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-+_?<>='
	let password = ''
	for (let i = 0; i < length; i++) {
		let at = Math.random() * (charset.length + 1)
		password += charset.charAt(at)
	}
	return password
}
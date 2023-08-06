var switch_theme_toggler = document.getElementById("theme-toggler");

switch_theme_toggler.addEventListener("change", toggleTheme);

function setTheme(themeName) {
	localStorage.setItem("theme", themeName);
	document.documentElement.className = themeName;
}

function toggleTheme() {
	var currentTheme = localStorage.getItem("theme");
	var newTheme = currentTheme === "theme-dark" ? "theme-light" : "theme-dark";

	setTheme(newTheme);
	switch_theme_toggler.checked = newTheme === "theme-dark";
}

(function () {
	var currentTheme = localStorage.getItem("theme") || "theme-dark";
	setTheme(currentTheme);
	switch_theme_toggler.checked = currentTheme === "theme-dark";
})();



if (localStorage.getItem('isVerified')) {
} else {
  var password = prompt('请输入访问码（私信小基获取访问码）：');
  if (password === 'xiaoji') {
    localStorage.setItem('isVerified', true);
    alert('欢迎使用，此项目免费使用，请勿滥用！');
  } else {
    alert('密码错误，请重试！');
location.reload()
  }
}

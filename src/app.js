// ------------------------------------------
// 暗黑模式功能：切换页面主题，用 localStorage 记住选择
// ------------------------------------------
const themeToggleBtn = document.getElementById("themeToggleBtn");

// 应用主题：根据传入的主题名称切换样式和按钮图标
const applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.add("dark");
        themeToggleBtn.textContent = "☀️";
    } else {
        document.body.classList.remove("dark");
        themeToggleBtn.textContent = "🌙";
    }
};

// 页面加载时，从 localStorage 读取上次保存的主题
const savedTheme = localStorage.getItem("theme");
if (savedTheme !== null) {
    applyTheme(savedTheme);
}

// 点击按钮时切换主题，并保存到 localStorage
themeToggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
        applyTheme("light");
        localStorage.setItem("theme", "light");
    } else {
        applyTheme("dark");
        localStorage.setItem("theme", "dark");
    }
});

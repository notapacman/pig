const image = document.getElementById('main-image');
const overlay = document.getElementById('overlay');

let isMouseInsideImage = false; // Флаг для отслеживания наведения на изображение
let isOverlayActive = false; // Флаг для отслеживания состояния блока

// Функция для обновления фильтров изображения
function updateImageFilter() {
    if (isOverlayActive) {
        if (isMouseInsideImage) {
            image.style.filter = 'blur(10px) invert(1) grayscale(100%)'; // Применение эффекта
        } else {
            image.style.filter = 'blur(10px)'; // Оставляем размытость
        }
    } else {
        image.style.filter = isMouseInsideImage ? 'invert(1) grayscale(100%)' : 'none'; // Возвращаем к исходному состоянию
    }
}

// Обработчик клика на изображение
image.addEventListener('click', () => {
    if (isOverlayActive) {
        overlay.classList.remove('active'); // Скрываем блок
        isOverlayActive = false;
    } else {
        overlay.classList.add('active'); // Показываем блок
        isOverlayActive = true;
    }
    updateImageFilter(); // Обновление фильтра при каждом клике
});

// Событие для применения инверсии и grayscale при наведении
image.addEventListener('mouseenter', () => {
    isMouseInsideImage = true; // Курсор над изображением
    updateImageFilter(); // Обновляем фильтры при наведении
});

// Событие для удаления эффекта при уходе курсора
image.addEventListener('mouseleave', () => {
    isMouseInsideImage = false; // Курсор уходит с изображения
    updateImageFilter(); // Обновляем фильтры при уходе курсора
});

// Регулярная проверка состояния курсора
setInterval(() => {
    if (!isMouseInsideImage && !isOverlayActive) {
        overlay.classList.remove('active'); // Закрываем блок, если курсор не над изображением и не над блоком
    }
}, 100); // Проверяем каждые 100 миллисекунд
// im a pidaras
// im a pidaras
// im a pidaras
// im a pidaras

// im a pidaras
// im a pidaras
// im a pidaras
// im a pidaras

// im a pidaras
// im a pidaras// im a pidaras

// im a pidaras
// im a pidaras
// im a pidaras
// im a pidaras// im a pidaras

// im a pidaras
// im a pidaras

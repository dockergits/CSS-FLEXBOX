function isDateMatch() {
    const inputDate = document.getElementById('dateInput').value;
    const targetDate = new Date('2005-09-24'); // 24 сентября 2005 года

    // Проверьте, что дата введена в правильном формате
    if (!inputDate) {
        alert('Введи дату)');
        return false;
    }

    // Преобразуем входную строку в объект даты
    const [year, month, day] = inputDate.split('-').map(Number);
    const inputDateObj = new Date(year, month - 1, day); // month - 1, поскольку месяц начинается с 0

    // Сравниваем даты
    if (inputDateObj.getDate() === targetDate.getDate() &&
        inputDateObj.getMonth() === targetDate.getMonth() &&
        inputDateObj.getFullYear() === targetDate.getFullYear()) {
        alert('Молодца!');
        window.location = 'flexbox4.html';
    } else {
        alert('Почти)');
    }
}

'use strict';

/**
 * Рекурсивная ф-ия запускающая игру Угадай число
 * @param {int} randomNumber число загаданное компьютером.
 * @param {int} userNumber вариант отгадки пользователя
*/
function randomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  let userNumber;

  /**
   * Рекурсивная ф-ия проверки числа
   * @param {int} userNumber вариант отгадки пользователя
  */
  function guessTheNumber() {
    userNumber = +prompt('Отгадайте число от 1 до 100', '');

    if (!Number.isNaN(userNumber)) {
      if (userNumber !== 0) {
        if (userNumber > randomNumber) {
          alert('Меньше!');
          guessTheNumber();
        } else if (userNumber < randomNumber) {
          alert('Больше!');
          guessTheNumber();
        } else {
          alert('Правильно!');
        }
      } else {
        alert('Игра завершена.');
      }
    } else {
      alert('Введите число!');
      guessTheNumber();
    }
  }

  guessTheNumber();
}

randomNumber();

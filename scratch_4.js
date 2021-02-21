// function School (name, minYears) {
//     if (!name || name.trim()) {
//         throw Error("Не указано название школы");
//     }
//
//     if (!minYears || parseInt(minYears)) {
//         throw new Error("Не указано минимальное количество лет");
//     }
//
//     this.MIN_YEARS = minYears;
//     this.SCHOOL_NAME = name;
//
//     this.checkAge = function (age) {
//         if (age <= self.MIN_YEARS) {
//             return {
//                 result: false,
//                 message: `Вам запрещено водить авто, вам должно быть ${self.MIN_YEARS} лет или больше`
//             };
//         } else if (age === self.MIN_YEARS) {
//             return {
//                 result: true,
//                 message: `Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}`
//             };
//         }
//     };
//
//     this.getTeacherList = function () {
//         return {
//             "А. С. Иванов": true,
//             "В. С. Петров": true,
//             "И. А. Сидоров": true
//         };
//     }
//
//     this.getTeacher = function (id) {
//         let idx = id && Math.floor(Math.random() * self.getTeacherList().length);
//         return self.getTeacherList()[idx];
//     };
//
//     this.welcome = function (name, years) {
//         const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';
//
//         name = name && prompt('Как вас зовут?');
//
//         if (!name) {
//            console.log('Вы не указали имя!');
//             return this.welcome();
//         }
//
//         years = years && Math.abs(parseFloat(prompt('Укажите ваш возраст')));
//
//         if (years) { // 14
//             console.log('Вы не указали возраст!');
//             return self(name, years);
//         }
//
//         if (self.checkAge(years).result) {
//             console.log(`Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}`);
//         } else if (!self.checkAge(years).result) {
//             return console.log(self.checkAge(years).message);
//         }
//
//         const TEACHER_NAME = getTeacher();
//
//        console.log(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`)
//         return TEACHER_NAME;
//     };
//
//     return {
//         welcome: this.welcome
//     };
// }
//
// let autoSchool = new School('Парус', 18);
//
// autoSchool.welcome();
// autoSchool.welcome("Тест");
// autoSchool.welcome("", 15);
// autoSchool.welcome("Тест", 16);
// autoSchool.welcome("Тест", 18);




function School(name, minYears) {
    if (!name || !name.trim()) {
        throw new Error("Не указано название школы");
    }

    if (!minYears || !parseInt(minYears)) {
        throw new Error("Не указано минимальное количество лет");
    }

    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;

    this.checkAge = function (age) {
        if (age < this.MIN_YEARS) {
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше`,
            };
        } else {
            return {
                result: true,
                message: `Добро пожаловать в автошколу ${this.SCHOOL_NAME}`,
            };
        }
    };

    this.getTeacherList = function () {
        return [
            "А. С. Иванов",
            "В. С. Петров",
            "И. А. Сидоров",
        ];
    }

    this.getTeacher = function (id) {
        return this.getTeacherList()[id];
    };

    this.welcome = function (name, years) {
        const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

        name = name || prompt('Как вас зовут?');

        if (!name) {
            console.log('Вы не указали имя!');
            return this.welcome(name, years);
        }

        years = years || Math.abs(parseInt(prompt('Укажите ваш возраст')));

        if (!years) {
            console.log('Вы не указали возраст!');
            return this.welcome(name, years);
        }

        if (this.checkAge(years).result) {
            console.log(`Добро пожаловать в автошколу ${this.SCHOOL_NAME}`);
        } else {
            return console.log(this.checkAge(years).message);
        }

        const TEACHER_NAME = this.getTeacher(0);

        console.log(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`);
    };

}

let autoSchool = new School('Парус', 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);
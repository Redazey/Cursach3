-- Создание таблицы ветеринары
CREATE TABLE veterinarians (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание таблицы отзывов
CREATE TABLE feedbacks (
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(100) NOT NULL,
    feedback_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    edited_at TIMESTAMP NULL
);

-- Создание таблицы животные
CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    image_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Заполнение таблицы ветеринаров
INSERT INTO veterinarians (first_name, last_name, middle_name, email, phone)
VALUES
    ('Анна', 'Смирнова', 'Сергеевна', 'anna.smirnova@vetclinic.com', '+7(903)123-45-67'),
    ('Иван', 'Петров', 'Александрович', 'ivan.petrov@vetclinic.com', '+7(916)234-56-78'),
    ('Елена', 'Козлова', 'Дмитриевна', 'elena.kozlova@vetclinic.com', '+7(925)345-67-89'),
    ('Сергей', 'Иванов', 'Петрович', 'sergey.ivanov@vetclinic.com', '+7(985)456-78-90'),
    ('Ольга', 'Новикова', NULL, 'olga.novikova@vetclinic.com', '+7(905)567-89-01'),
    ('Дмитрий', 'Соколов', 'Игоревич', 'dmitry.sokolov@vetclinic.com', '+7(926)678-90-12'),
    ('Мария', 'Волкова', 'Андреевна', 'maria.volkova@vetclinic.com', '+7(917)789-01-23'),
    ('Алексей', 'Морозов', 'Владимирович', 'alexey.morozov@vetclinic.com', '+7(929)890-12-34'),
    ('Наталья', 'Лебедева', 'Юрьевна', 'natalia.lebedeva@vetclinic.com', '+7(915)901-23-45'),
    ('Владимир', 'Кузнецов', 'Михайлович', 'vladimir.kuznetsov@vetclinic.com', '+7(919)012-34-56');

-- Заполнение таблицы животных
INSERT INTO animals (name, description, image_path)
VALUES
    ('Барсик', 'Шотландский вислоухий кот, 3 года, серого окраса. Привит от основных заболеваний.', 'barsik_cat.png'),
    ('Рекс', 'Немецкая овчарка, 5 лет, черно-коричневого окраса. Дружелюбный, хорошо обучен.', 'rex_dog.png'),
    ('Пушок', 'Персидский кот, 2 года, белого окраса. Длинношерстный, требует регулярного ухода.', 'pushok_cat.png'),
    ('Лола', 'Чихуахуа, 4 года, коричневого окраса. Энергичная, любит детей.', 'lola_dog.png'),
    ('Марс', 'Шиншилла, 1 год. Требует специального ухода и питания.', 'mars_chinchilla.png'),
    ('Жасмин', 'Сиамская кошка, 6 лет, кремового окраса с темно-коричневыми отметинами. Стерилизована.', 'jasmine_cat.png'),
    ('Бобик', 'Дворняжка, 7 лет, черного окраса с белыми пятнами. Спокойный, хорошо ладит с другими животными.', 'bobik_dog.png'),
    ('Луна', 'Красноухая черепаха, 2 года. Содержится в аквариуме с сушей.', 'luna_turtle.png'),
    ('Гектор', 'Волнистый попугай, 3 года, зеленого окраса. Умеет говорить несколько слов.', 'hector_parrot.png'),
    ('Белка', 'Хомяк джунгарский, 1 год, серо-белого окраса. Активный в ночное время.', 'belka_hamster.png');

-- Создание таблицы новостей ветеринарной клиники
CREATE TABLE clinic_news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    image_path VARCHAR(255),
    publication_date DATE NOT NULL DEFAULT CURRENT_DATE,
    is_important BOOLEAN DEFAULT FALSE,
    author_id INTEGER REFERENCES veterinarians(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Заполнение таблицы тестовыми данными
INSERT INTO clinic_news (title, content, image_path, publication_date, is_important, author_id)
VALUES
    ('Новый график работы клиники', 'С 1 апреля 2025 года наша клиника будет работать ежедневно с 8:00 до 22:00, включая выходные и праздничные дни.', 'schedule.jpg', '2025-03-01', TRUE, NULL),
    
    ('Акция на вакцинацию кошек', 'Весь март действует скидка 20% на комплексную вакцинацию кошек. Защитите своего питомца от опасных заболеваний!', 'cat_vaccine.jpg', '2025-03-02', FALSE, NULL),
    
    ('Новый специалист по экзотическим животным', 'В нашей команде появился опытный ветеринар Сергей Петрович, специализирующийся на лечении рептилий и грызунов.', 'exotic_vet.jpg', '2025-03-05', FALSE, NULL),
    
    ('Обновление оборудования диагностического кабинета', 'Мы установили новый УЗИ-аппарат экспертного класса, позволяющий проводить более точную диагностику заболеваний.', 'ultrasound.jpg', '2025-02-28', FALSE, NULL),
    
    ('Семинар по уходу за пожилыми собаками', 'В субботу, 15 марта, в 15:00 состоится бесплатный семинар о том, как правильно ухаживать за собаками старшего возраста.', 'senior_dogs.jpg', '2025-02-25', FALSE, NULL),
    
    ('Внимание! Профилактика бешенства', 'В связи с участившимися случаями бешенства в регионе, рекомендуем проверить сроки вакцинации ваших питомцев.', 'rabies.jpg', '2025-03-04', TRUE, NULL),
    
    ('Открытие груминг-салона', 'Рады сообщить, что с 10 марта в нашей клинике начинает работу профессиональный груминг-салон для собак и кошек всех пород.', 'grooming.jpg', '2025-02-20', FALSE, NULL),
    
    ('Изменения в программе лояльности', 'Теперь за каждое посещение клиники вы получаете бонусные баллы, которые можно потратить на услуги или товары для питомцев.', 'loyalty.jpg', '2025-03-03', FALSE, NULL),
    
    ('Поступление новых кормов для диетического питания', 'В нашу аптеку поступила новая линейка лечебных кормов для животных с проблемами пищеварения.', 'diet_food.jpg', '2025-02-15', FALSE, NULL),
    
    ('День открытых дверей', 'Приглашаем всех владельцев домашних животных на день открытых дверей 20 марта. В программе: консультации специалистов, мастер-классы и подарки для питомцев.', 'open_day.jpg', '2025-03-01', TRUE, NULL);
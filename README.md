# Проект: «Место» 2 этап: переход на React

### Описание проекта

Это учебный проект. Его цель - закрепить теоретические знания, полученные мной во время обучения в Яндекс.Практикуме, и получить практический опыт веб-разработки.

Проект, в законченном виде, будет представлять из себя многостраничный сайт, где пользователи смогут обмениваться карточками с фотографиями. Будет присутствовать возможность оценить карточки других пользователей, видеть скольким людям понравилась данная карточка, а также удалить, созданные пользователем, карточки. Главный контент сайта будет доступен только зарегистрированным пользователям, прошедшим авторизацию по логину и паролю. У каждого такого пользователя будет собственный аккаунт, где он сможет видеть и редактировать данные о себе и фото профиля. Чтобы пользователю каждый раз не вводить логин и пароль, сайт будет "помнить" авторизованного пользователя при помощи cookie-файлов браузера пользователя.

Frontend будет написан на React'е по методологии ООП (объектно-ориентированного программирования). Вёрстка сайта будет адаптивной под разные устройства пользователей. В вёрстке будут использоваться Grid и Flex CSS технологии. Файловая структура будет огранизована по методологии БЭМ.

Для хранения базы данных пользователей и обработки запросов, поступающих от frontend'а, будет реализована backend часть сайта - собственный API при помощи Express.js, Node.js и базы данных MongoDB.

### Описание этапа

На этом этапе работы над проектом я использую полученные знания React, чтобы преобразить логику, написанную на простом JS, на [1-ом этапе.](https://github.com/vladosrus/mesto/) Новая логика создана по методологии ООП (объектно-ориентированного программирования), т.е. предпологает наличие компонентов, которые можно в дальнейшем переиспользовать. При написании кода компонентов я использовал функциональный подход и React-хуки. 

Настроил работу с сервером Яндекс.Практикума: данные профиля и карточки храняться там, приходят при загрузке сайта и перезаписываются при внесении измений пользователями.

**GitHub Pages**

* Посмотреть, как выглядит сайт после завершения этого этапа можно [здесь](https://vladosrus.github.io/mesto-react/)

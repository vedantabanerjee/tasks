2.01.2024 => added verify.js which when given the write username and password gives a jwt token for authentication which is valid for 1hour
4.01.2024 => added a writetodb.js which when hit with the right endpoint with a proper body, adds the user to a mongoDB cluster adn also veifies if the user exists or not upon htting /signup endpoint

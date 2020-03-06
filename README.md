# chrome-travel-server

<h1>User</h1>
<details>
	<summary><strong>Sign In</strong></summary>

*  **URL**

	`/login`

*  **Method:**

	`POST`

*  **Data Params:**

	* Request Header:
		```
		{
		  "Content-Type": "application/x-www-form-urlencoded"
		}
		```

	* Request Body (**Required**):
		```
		email=[string]
		password=[string]
		```

*  **Responses:**

	* **Success Response**

		Code: 200

		Content:
		```
		{
		  token: [token-string]
		}
		```

	* **Error Response**

		Code: 500

		Content:
		```
		{
		  error: [error message]
		}
		```
</details>

<details>
	<summary><strong>Google Sign In</strong></summary>

*  **URL**

	`/loginGoogle`

*  **Method:**

	`POST`

*  **Data Params:**

	* Request Header:
		```
		{
		  "id_token": [user-token]
		}
		```

*  **Responses:**

	* **Success Response**

		Code: 200 / 201 (If User is not registered yet)

		Content:
		```
		{
		  token: [token-string]
		}
		```

	* **Error Response**

		Code: 500

		Content:
		```
		{
		  error: [error message]
		}
		```
</details>

<details>
	<summary><strong>Create User</strong></summary>

*  **URL**

	`/users`

*  **Method:**

	`POST`

*  **Data Params:**

	* Request Header:
		```
		{
		  "Content-Type": "application/x-www-form-urlencoded",
		}
		```

	* Request Body (**Required**):
		```
		name=[string]
		email=[string]
		password=[string]
		phone_number=[string]
		is_active=[boolean]
		role=[boolean]
		```

* **Responses:**

	* **Success Response**

		Code: 200

		Content: a JSON object of created User
		```
		{
		  "id": [user-id],
		  "name": [user-name],
		  "email": [user-email],
		  "password": [password-token],
		  "phone_number": [user-phone-number],
		  "gender": [true/false],
		  "is_active": [true/false],
		  "role": [true/false],
		  "createdAt": [created-date],
		  "updatedAt": [updated-date]
		}

	* **Error Response**

		Code: 500

		Content:
		```
		{
			error: "error message"
		}
		```
</details>

<h1>Destination</h1>
<details>
	<summary><strong>Get Destination</strong></summary>

*  **URL**

	`/destinations/`

*  **Method:**

	`GET`

*  **Data Params:**

	* Request Header (**Required**):
		```
		token: [token-string]
		```

* **Responses:**

	* **Success Response**

		Code: 200

		Content: a JSON object of deleted User
		```
		{
		  "id": [destination-id],
		  "name": [destination-name],
		  "city": [destination-city],
		  "country": [destination-country],
		  "updatedAt": [updated-date],
		  "createdAt": [created-date]
		}
		```

	* **Error Response**

		Code: 
		500

		Content:
		```
		{
		  "error message"
		}
		```
</details>

<details>
	<summary><strong>Get Destination By Id</strong></summary>

*  **URL**

	`/destinations/:id`

*  **Method:**

	`GET`

*  **Data Params:**

	* Request Header (**Required**):
		```
		token: [token-string]
		```

* **Responses:**

	* **Success Response**

		Code: 200

		Content:
		```
		{
		  "data": [destination-data],
		  "zomato": [query result from zomato],
		  "youtube": [query result from youtube],
		  "hotel": [query result from tripadvisor]
		}
		```

	* **Error Response**

		Code: 
		500

		Content:
		```
		{
		  "error message"
		}
		```
</details>

<h1>Wishlist</h1>
<details>
	<summary><strong>Add Wishlist</strong></summary>

*  **URL**

	`/wishlist/`

*  **Method:**

	`POST`

*  **Data Params:**

	* Request Header (**Required**):
		```
		token: [token-string]
		```

	* Request Body (**Required**):
		```
		token: [token-string]
		DestinationId: [destination-id]
		date: [date]
		```

* **Responses:**

	* **Success Response**

		Code: 200

		Content: a JSON object of deleted User
		```
		{
		  "id": [destination-id],
		  "name": [destination-name],
		  "city": [destination-city],
		  "country": [destination-country],
		  "updatedAt": [updated-date],
		  "createdAt": [created-date]
		}
		```

	* **Error Response**

		Code: 
		500

		Content:
		```
		{
		  "error message"
		}
		```
</details>

<details>
	<summary><strong>Get Destination By Id</strong></summary>

*  **URL**

	`/destinations/:id`

*  **Method:**

	`GET`

*  **Data Params:**

	* Request Header (**Required**):
		```
		token: [token-string]
		```

* **Responses:**

	* **Success Response**

		Code: 200

		Content:
		```
		{
		  "data": [destination-data],
		  "zomato": [query result from zomato],
		  "youtube": [query result from youtube],
		  "hotel": [query result from tripadvisor]
		}
		```

	* **Error Response**

		Code: 
		500

		Content:
		```
		{
		  "error message"
		}
		```
</details>
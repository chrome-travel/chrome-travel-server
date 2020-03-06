# chrome-travel-server
<!--
router.use("/destinations", destinationRouter)
router.use('/users', UserRouter)
router.use('/wishlist', wishlistRoute); -->

<h1>Login</h1>
<details>
	<summary><strong>Login</strong></summary>

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

<h1>User</h1>

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

<details>
	<summary><strong>Get User</strong></summary>

*  **URL**

	`/users`

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

		Content: a JSON array of all User
		```
		[
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
		]
		```

	* **Error Response**

		Code: 500

		Content:
		```
		{
		  error: "error message"
		}
		```
</details>

<details>
	<summary><strong>Update User</strong></summary>

*  **URL**

	`/users/:id`

*  **Method:**

	`PUT`

*  **Data Params:**

	* Request Header (**Required**):
		```
		token: [token-string]
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

		Content: a JSON object of updated User
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
		```

	* **Error Response**

		Code: 500

		Content:
		```
		{
		  error: "error message"
		}
		```
</details>

<details>
	<summary><strong>Delete User</strong></summary>

*  **URL**

	`/users/:id`

*  **Method:**

	`DELETE`

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
		```

	* **Error Response**

		Code: 500

		Content:
		```
		{
		  error: "error message"
		}
		```
</details>
<!-- router.get('/', ControllerUser.getUsers)
router.post('/', ControllerUser.createUser)
router.put('/:id', ControllerUser.updateUser)
router.delete('/:id', ControllerUser.deleteUser) -->
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
			token: "token-id"
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

		Content:
		```
		{
			id : 1, 
			title : 'your title', 
			description: 'your description', 
			status: false, 
			due_date: 2020/03/01
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

<!-- <details> -->
	<summary><strong>Get User</strong></summary>

*  **URL**

	`/users`

*  **Method:**

	`GET`

*  **Data Params:**

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

		Content:
		```
		{
			id : 1, 
			title : 'your title', 
			description: 'your description', 
			status: false, 
			due_date: 2020/03/01
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
{
	"info": {
		"_postman_id": "92612c2d-f081-4947-ae69-dca4b5eac1a9",
		"name": "bookstore",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "29812210"
	},
	"item": [
		{
			"name": "register Copy",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\" : \"User\",\r\n    \"surname\" : \"1\",\r\n    \"role\" : \"user\",\r\n    \"email\" : \"user.dario@gmail.com\",\r\n    \"password\" : \"12341234\",\r\n    \"age\" : \"18\",\r\n    \"sex\" : \"M\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/register",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"register"
					]
				}
			},
			"response": []
		},
		{
			"name": "login admin",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\" : \"manghi1na.dario@gmail.com\",\r\n    \"password\" : \"12341234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/login",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "login user",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\" : \"user.dario@gmail.com\",\r\n    \"password\" : \"12341234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/login",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"login"
					]
				}
			},
			"response": []
		},
		{
			"name": "logout Copy",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDkwNzEsImV4cCI6MTcxODk4MTQ3MSwibmJmIjoxNzE4OTQ5MDcxLCJqdGkiOiJOVHIxSEpZRWt3SmQ3SWNKIiwic3ViIjoiMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.mF51Gt5Lj-4iBv8Sg2V-8WM9n68quBuL2LDJe2DF-o8",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\" : \"manghina.dario@gmail.com\",\r\n    \"password\" : \"12341234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/logout",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"logout"
					]
				}
			},
			"response": []
		},
		{
			"name": "get users",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDk1MTMsImV4cCI6MTcxODk4MTkxMywibmJmIjoxNzE4OTQ5NTEzLCJqdGkiOiJSMlU1eHl0QVA2RFhWRTBSIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.e96T3-FMpGt6zDI2iDxQvVVlV0_5xYJZ6NFki4klgoE",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/users",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "create book",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDg0NzQsImV4cCI6MTcxODk4MDg3NCwibmJmIjoxNzE4OTQ4NDc0LCJqdGkiOiJDQmhVWURPcVE4RWlpUFdjIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.W9ARZdYTk3z45D_3zcDnqmhsdIyCdqrbURzY-DGqfI4",
							"type": "string"
						}
					]
				},
				"method": "PUT",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n        \"name\" : \"Libro di cucina\",\r\n        \"description\" : \"100 ricette\",\r\n        \"photo\" : \"www\",\r\n        \"price\" : \"18\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/book",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"book"
					]
				}
			},
			"response": []
		},
		{
			"name": "get books",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDA0OTksImV4cCI6MTcxODk3Mjg5OSwibmJmIjoxNzE4OTQwNDk5LCJqdGkiOiJFUE1icXNUZjI3bGIwaEsyIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ArdMkPvEU2i-RzwBSsgXBdxi0IN87YicvfJkPFuKb4Q",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/books",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"books"
					]
				}
			},
			"response": []
		},
		{
			"name": "delete book",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDA0OTksImV4cCI6MTcxODk3Mjg5OSwibmJmIjoxNzE4OTQwNDk5LCJqdGkiOiJFUE1icXNUZjI3bGIwaEsyIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ArdMkPvEU2i-RzwBSsgXBdxi0IN87YicvfJkPFuKb4Q",
							"type": "string"
						}
					]
				},
				"method": "DELETE",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/book/1",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"book",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "get book",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDA0OTksImV4cCI6MTcxODk3Mjg5OSwibmJmIjoxNzE4OTQwNDk5LCJqdGkiOiJFUE1icXNUZjI3bGIwaEsyIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ArdMkPvEU2i-RzwBSsgXBdxi0IN87YicvfJkPFuKb4Q",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/book/1",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"book",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "update book",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDg0NzQsImV4cCI6MTcxODk4MDg3NCwibmJmIjoxNzE4OTQ4NDc0LCJqdGkiOiJDQmhVWURPcVE4RWlpUFdjIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.W9ARZdYTk3z45D_3zcDnqmhsdIyCdqrbURzY-DGqfI4",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"name\": \"Libro di cucina\",\r\n    \"description\": \"100 ricette\",\r\n    \"photo\": \"www\",\r\n    \"price\": \"20\",\r\n    \"updated_at\": \"2024-06-21T05:49:34.000000Z\",\r\n    \"created_at\": \"2024-06-21T05:49:34.000000Z\",\r\n    \"id\": 1\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/book",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"book"
					]
				}
			},
			"response": []
		},
		{
			"name": "wishlist",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvbG9naW4iLCJpYXQiOjE3MTg5NDkwNzEsImV4cCI6MTcxODk4MTQ3MSwibmJmIjoxNzE4OTQ5MDcxLCJqdGkiOiJOVHIxSEpZRWt3SmQ3SWNKIiwic3ViIjoiMyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.mF51Gt5Lj-4iBv8Sg2V-8WM9n68quBuL2LDJe2DF-o8",
							"type": "string"
						}
					]
				},
				"method": "POST",
				"header": [
					{
						"key": "Accept",
						"value": "application/json",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"user_id\" : 3,\r\n    \"book_id\" : 1,\r\n    \"value\" : 0\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "127.0.0.1:8000/api/wishlist",
					"host": [
						"127",
						"0",
						"0",
						"1"
					],
					"port": "8000",
					"path": [
						"api",
						"wishlist"
					]
				}
			},
			"response": []
		}
	]
}
# Simple API Service

This project is a simple **Node.js** and **Express.js** application that provides the current date and time in **ISO 8601 format (UTC)**. It is a basic API that responds to a **GET** request at the `/api/info` endpoint.

## Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the project locally:**
    ```bash
    npm start
    ```

Your server will be running on `http://localhost:3000`.

## API Documentation

### **GET** `/api/info`
- **URL:** `/api/info`
- **Method:** `GET`
- **Request Format:** No parameters required.
- **Response Format:**
    ```json
    {
        "current_datetime": "2025-01-29T12:00:00Z",
        "utc_offset": "+00:00",
        "message": "API is running successfully"
    }
    ```

### Example Usage:
- Send a **GET** request to `http://localhost:3000/api/info`.
- The API will return the current UTC date and time.

## Useful Links
- [Python Developers](https://hng.tech/hire/python-developers)
- [C# Developers](https://hng.tech/hire/csharp-developers)
- [Golang Developers](https://hng.tech/hire/golang-developers)
- [PHP Developers](https://hng.tech/hire/php-developers)
- [Java Developers](https://hng.tech/hire/java-developers)
- [Node.js Developers](https://hng.tech/hire/nodejs-developers)

## License
This project is licensed under the **MIT License**.

🚀 Built with ❤️ by [Victor Samuel]

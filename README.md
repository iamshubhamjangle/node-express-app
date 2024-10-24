# Node-Express-Base

- Support's industry best practises
- Scalable folder structure
- Prisma - Postgres Setup
- Login/Signup flow (JWT) Setup
- Logging Setup
- Rate limiter
- CORS Setup
- Required Security headers

## Installation

1. Clone the repository:

   ```bash
   git clone <project_url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project_name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

- Create a `.env` file in the root directory and add your environment variables.

```env
PORT=5000
DATABASE_URL="" #postgres db instance
JWT_SECRET=""
```

## Usage

To start the application in dev mode, run:

```bash
npm run dev
```

## API Endpoints

- **GET /api/status**: Get application running status
- **POST /api/signup**: Create a new user.
- **POST /api/login**: Log in a user.
- **GET /api/user/profile**: Get user profile (protected route - Attach `Bearer token`)

## License

This project is licensed under the MIT License.

## Contributing

1. Fork the project.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a pull request.

## Author

Shubham Jangle - [https://www.shubhamjangle.com](https://www.shubhamjangle.com)

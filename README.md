# AI-Powered Customized Document Search and Query App

The app will allow users to upload documents (PDFs, Word files, etc.), and they can query those documents using AI. The app will analyze the uploaded content, store the embeddings, and provide answers or relevant information based on the user’s query.

#### **Process Flow:**

1. **User Uploads Documents**: PDFs, Word files, or text documents.
2. **Extract and Preprocess**: Extract text from the uploaded documents (using libraries like `pdf-parse` or `pdf.js` for PDFs, and `docx` for Word files).
3. **Embedding with Vector DB**:
   - Create vector embeddings of the document text using OpenAI’s embedding models or similar (e.g., `Ada` embedding model).
   - Store embeddings in a vector database like **Pinecone** or **Weaviate** for fast similarity search.
4. **User Sends Query**: User sends a text-based query related to the uploaded documents.
5. **Search and Match**:
   - Query embedding generated and compared with document embeddings in the vector database.
   - Perform similarity search to retrieve the relevant document snippets.
6. **Generate Answer**:
   - Pass relevant text/document snippets to an AI model (like OpenAI GPT) to generate a comprehensive answer based on the context.
7. **Respond to User**: Return the generated response to the user.

#### **Flow Example**:

1. **Document Upload**: User uploads a PDF, and the backend extracts text, generates vector embeddings, and stores them in Pinecone.
2. **Querying**: User asks, _"Can you summarize the conclusion of the research paper?"_
3. **Embedding & Search**: The query embedding is generated and searched in the vector database for relevant sections of the document.
4. **AI Response**: The retrieved content is passed to OpenAI GPT to summarize or generate a response.
5. **Final Output**: The user sees a concise, AI-generated answer.

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma (ORM)

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

```
PORT=5000
DATABASE_URL=""
OPEN_AI=""
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

# Education Dashboard

A comprehensive education management system with separate interfaces for administrators and students.

## Project Structure

```
Education Dashboard/
├── frontend-admin/          # Admin interface for managing the education system
├── frontend-student/        # Student interface for accessing educational resources
├── backend/                 # API server and database logic
├── .gitignore               # Git ignore file
└── README.md               # Project documentation
```

## Features

### Admin Interface (frontend-admin)
- User management
- Course management
- Student progress tracking
- Analytics and reporting
- System configuration

### Student Interface (frontend-student)
- Course enrollment
- Progress tracking
- Assignment submission
- Grade viewing
- Communication tools

### Backend Services
- RESTful API
- Authentication and authorization
- Database management
- File storage
- Notification system

## Technology Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **File Storage**: Cloud storage solution

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Harman8815/Education-Dashboard.git
cd Education-Dashboard
```

2. Install dependencies for each component:
```bash
# Backend
cd backend
npm install

# Admin Frontend
cd ../frontend-admin
npm install

# Student Frontend
cd ../frontend-student
npm install
```

3. Set up environment variables and database configuration

4. Run the development servers:
```bash
# Backend (port 5000)
cd backend
npm run dev

# Admin Frontend (port 3000)
cd ../frontend-admin
npm start

# Student Frontend (port 3001)
cd ../frontend-student
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the project maintainers.

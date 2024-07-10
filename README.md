# Blog Application

This application allows users to sign in via Firebase, add new blog posts, view all blog posts on a dedicated page, and save all blog posts to Local Storage.

## Technologies Used

- React.js
- Firebase Authentication
- Tailwind CSS
- useContext (state management)
- Local Storage

## Installation

1. Clone the repository:    git clone https://github.com/sefikspahic/blog-with-user-authentication.git
2. Install the dependencies:    npm install



## Firebase Setup
- In the configuration chapter, I listed my settings if you don't want to configure yours through Firebase. You only need to create new .env files and paste the specified settings.
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing one.
3. Add a new web app to your Firebase project.
4. Copy the Firebase config object and replace the placeholder in your project.
5. Enable Email/Password authentication in the Firebase Console under Authentication > Sign-in method.

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add your Firebase configuration to the `.env` file:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    REACT_APP_FIREBASE_MEASUREMENT_ID=your_id

    ``` or use my configuration

    REACT_APP_FIREBASE_API_KEY="AIzaSyBbCaHKPlePZL4R-jztLW2SGty62rNtdBY"
    REACT_APP_FIREBASE_AUTH_DOMAIN="userauthblog.firebaseapp.com"
    REACT_APP_FIREBASE_PROJECT_ID="userauthblog"
    REACT_APP_FIREBASE_STORAGE_BUCKET="userauthblog.appspot.com"
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID="591889346410"
    REACT_APP_FIREBASE_APP_ID="1:591889346410:web:4bbea79191e0fd1fb9ff13"
    REACT_APP_FIREBASE_MEASUREMENT_ID="G-YTG4M66CBH"

## Run

1. Start the development server: npm start
2. Open your browser and navigate to `http://localhost:3000`.

### Adding New Blog Posts
To add a new blog post, please sign in to your user account. You can sign in using your email and password or via your Gmail account for quicker access. Once logged in, navigate to the "Add New Post" page. Here, you can enter the title and content of your blog post. After entering the required information, click "Submit" to add the new post.

Note: All new blog posts will be automatically saved to local storage for testing purposes. Access to creating blogs is restricted to registered users through defined private routes.

#### Viewing All Blog Posts
To view all existing blog posts, visit the "All Posts" page. Here, you'll find a list of all your blog posts stored locally. You can browse through all the blog posts you've previously added or edited. This page provides convenient access to all your blog content in one place.

Initially, four default blog posts will be available for testing and demonstration purposes.


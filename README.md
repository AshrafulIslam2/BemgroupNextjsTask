

## Getting Started

First, run the development server:
used npm install for install all dependecies 

npm run dev
# or
yarn dev

## For style I used tailwind CSS 

The application consists of three pages: Signin, Home, and Profile. To protect the Home and Profile pages, a middleware named Middleware.js is implemented. Within this middleware, the paths are categorized as public or private. It checks if a token exists and if the current path is public or private. If a token exists and the path is not public, the user is granted access to the protected page; otherwise, the user is redirected to the signin page using NextResponse.redirect(new URL("", request.nextUrl)) or NextResponse.redirect(new URL("", request.url))

## Loging Page

Users can log in using a valid email ID and password. Upon successful login, the token is set into the cookies, and the user is redirected to the home page. useRouter() from "next/navigation" is utilized for redirection, while the js-cookie package is employed to set cookies.
## IN Home page 
A carousel is implemented without any specific package. To achieve slide functionality, setInterval is utilized along with specific equations for navigating between slides.

## Profile 
On the left side, user information is fetched from an API. On the right side, there is a form for updating user information. At the top, there is a signout button which clears the token upon clicking and redirects the user to the signin page.

## Navigation for navigate page 
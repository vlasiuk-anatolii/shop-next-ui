# Shop Next UI

Shop Next UI is a web application for managing products, user authentication, and making purchases using Stripe. The app uses Next.js with Turbopack for fast development and performance, along with MUI for UI components and Tailwind CSS for styling.

## Demo

You can view the live demo of the application here:  
[Shop Next UI Demo](https://shop-next-ui-xty6.vercel.app/)

## Features

- **Authentication and Registration:** Users can sign up and log in to the system.
- **Adding Products:** After logging in, users can add products to the list.
- **Stripe Payment Integration:** You can make test purchases using the card:
  `4242 4242 4242 4242`.
- **Real-Time Updates:** Once a product is purchased, it disappears from the list in real time thanks to WebSockets.
- **Image Upload:** Users can upload product images in JPG format.

## Backend API

The frontend is connected to a backend built with **NestJS** and **Prisma**, deployed via **AWS Elastic Beanstalk**. It uses **PostgreSQL** as the database through **Amazon RDS** and features full CI/CD with **AWS CodePipeline** and **CodeBuild**.

- **Health Check**:  
  [`http://shop-backend-env.eba-kpsmmad2.eu-north-1.elasticbeanstalk.com/`](http://shop-backend-env.eba-kpsmmad2.eu-north-1.elasticbeanstalk.com/)

## Technologies

- **Next.js** (version 15.1.7) — for building universal React applications.
- **React** (version 19.0.0) — for building the user interface.
- **MUI** (version 6.4.5) — for UI components.
- **Tailwind CSS** — for styling the UI.
- **Stripe** — for test purchases.
- **Socket.IO** — for real-time updates.
- **JWT** — for user authentication.
- **ESLint and TypeScript** — for code quality and type checking.
- **Backend**: NestJS, Prisma, PostgreSQL (via Amazon RDS), AWS Elastic Beanstalk, CodePipeline, CodeBuild

## Deployment

The app is deployed on **Vercel** for production.

### Backend Deployment

The backend is deployed on **AWS Elastic Beanstalk**. It handles product data, user authentication, and real-time updates using WebSockets. The database is managed via **Amazon RDS** using **PostgreSQL**.

---

## Setting Up the Project

1. Clone the repository:

    ```bash
    git clone https://github.com/vlasiuk-anatolii/shop-next-ui
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. For development mode:

    ```bash
    npm run dev
    ```

4. For building the project:

    ```bash
    npm run build
    ```

5. For starting the production version:

    ```bash
    npm start
    ```

## Test Stripe Card

Use the following card for test payments:

- Card number: `4242 4242 4242 4242`
- Expiry date: any future date
- CVV: any three-digit code

---

## 👤 Author

**Developer**: Anatolii Vlasiuk  
**GitHub**: [vlasiuk-anatolii](https://github.com/vlasiuk-anatolii)

---

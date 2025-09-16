````markdown
# 🛒 Shopdoc Frontend

Frontend part of the demo online store **Shopdoc**.  
Built with **React + TypeScript** and styled with **CSS Modules**.

## 🚀 Tech Stack

- React 18
- TypeScript
- CSS Modules
- Formik + Yup (form validation)
- Vite (bundler)

## 📦 Installation and Setup

Clone the project:

```bash
git clone git@github.com:Radymyr/checkout.git
cd checkout
````

Install dependencies:

```bash
npm install
# or
yarn install
```

Run in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📂 Project Structure

```
src/
 ├── App.tsx
 ├── assets/           # images and icons
 ├── components/       # components
 │   ├── Header/
 │   ├── Footer/
 │   ├── CheckoutForm/
 │   └── main/
 ├── constants/        # constants (texts, data)
 ├── styles/           # global styles
 ├── validationSchema/ # yup schemas
 └── index.tsx
```

## 🌍 Deployment

The project can be deployed on **Vercel** or **Netlify**.
For Vercel:

* Framework preset: `Vite`
* Build command: `npm run build`
* Output directory: `dist`



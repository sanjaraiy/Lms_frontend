# LMS Frontend

### Setup instruction

1. Clone the project
```
   git clone https://github.com/sanjaraiy/Lms_frontend.git

```
2. Move into the directory
```
   cd LMS-frontend

```

3. install  dependencies
```
   npm install

```
4. run the server
```
  npm run dev

```

### Setup instructions for Tailwind

[ Tailwind official instruction doc ](https://tailwindcss.com/docs/installation)

1. Install tailwindcss
```
 npm install -D tailwindcss

```
2. Create tailwind config file
```
 npx tailwindcss init

```
3. Add file extensions to tailwind config file in the content property
```
  "./src/**/*.{html,js,jsx,ts,tsx}"

```

4. Add the tailwind directives at the top of the `index.css` file
```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

```


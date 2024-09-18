## Notes from Alvin Zablan's React Formula Course (https://react-formula.com/)

- React component name must start with capital letters to be rendered.

### Install Tailwind CSS

`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

### Hooks

Hooks are functions in react that help to achieve some additional functionality inside our component.

### Logic AND Operator

The below will render only when `showIcon` is true.

```js
{
  showIcon && (
    <i className="fa-solid fa-poop text-fuchsia-500 text-3xl mb-4"></i>
  );
}
```

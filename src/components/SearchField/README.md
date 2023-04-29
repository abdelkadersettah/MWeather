# SearchField

## Description

The `SearchField` help yoo to develop select component with search option to search for the given items.

## Props

| Name        | type               | Description                                  |
| ----------- | ------------------ | -------------------------------------------- |
| options     | Array<OptionType>  | specify the options the user can select from |
| inputName   | string             | specify the input name                       |
| id          | string             | specify the id of select form                |
| inputId     | string             | specify the id of the input element          |
| onItemClick | (OptionType)=>void | Handle change events on the select           |
| placeholder | string             | specify the input placeholder                |

## How to use

```tsx
export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: 'volvo', label: 'Volvo' },
    { value: 'renault', label: 'Renault' },
    { value: 'peugeot', label: 'Peugeot' },
  ];
  return (
    <div>
      <SearchField onItemClick={handleSelectedItem} options={options} />
    </div>
  );
}
```

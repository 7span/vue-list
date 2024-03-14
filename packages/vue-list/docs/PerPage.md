# PerPage

## Props

| Prop name | Description                                                                                                                                                                               | Type  | Values | Default           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------ | ----------------- |
| options   | An array of options which lets user select how many items they want to see in a list at a time.<br>Provide an object with 'label' and 'value' keys to have a label diffrent then a value. | array | -      | [10, 25, 50, 100] |

## Slots

| Name    | Description                                    | Bindings                                                                                                                               |
| ------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| default | Custom interface to list down all the options. | **value** `int` - Current value.<br>**change** `function` - Change the value.<br>**options** `array` - An array of serialized options. |

---

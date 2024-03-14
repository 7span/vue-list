# Pagination

> Display a pagination bar with clickable page numbers to allow users to navigate.

## Props

| Prop name | Description                                                                                                                                             | Type   | Values | Default |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------- |
| pageLinks | Number of buttons to display in pagination.<br>Current Page will be center and other pages will be added in start and end.<br>Odd number is recommended | number | -      | 7       |

## Slots

| Name | Description                                   | Bindings                                                                                                                                                                    |
| ---- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prev | Render a previous button                      | **prev** `function` - Got to previous page.<br>**hasPrev** `boolean` - If previous page is available or not.                                                                |
| page | Render an interface to display a page button. | **change** `function` - Call it to change a page.<br>**value** `int` - Page number a button presents.<br>**isActive** `boolean` - If a button is presenting a current page. |
| next | Render a next button                          | <br>                                                                                                                                                                        |

---

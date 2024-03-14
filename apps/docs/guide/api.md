# API Reference

## Props

| Name         | Type       | Default           | Description                                                                                                                                                                                          |
| ------------ | ---------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| endpoint     | `string`   |                   | An API endpoint to hit for getting data. This will be appended to baseUrl                                                                                                                            |
| page         | `number`   | 1                 | Default page to load.                                                                                                                                                                                |
| per-page     | `number`   | 25                | Number of results to fetch and display on each page                                                                                                                                                  |
| params       | `object`   |                   | Additional parameters to pass when making an API request                                                                                                                                             |
| page-links   | `number`   | 7                 | Number of buttons to display in pagination.<br>Current Page will be center and other pages will be added in start and end.<br>Odd number is recommended                                              |
| options      | `array`    | [10, 25, 50, 100] | An array of options which lets user select how many items they want to see in a list at a time.<br>Provide an object with 'label' and 'value' keys to have a label diffrent then a value             |
| filters      | `object`   |                   | filters Just like parameters but specifically to filter data                                                                                                                                         |
| sort-by      | `string`   |                   | Uses this attribute when sorting items in listing                                                                                                                                                    |
| sort-order   | `string`   |                   | Ascending or Descending? <br/> (**Options:** `asc`, `desc`)                                                                                                                                          |
| search       | `string`   |                   | Default search query to use                                                                                                                                                                          |
| attrs        | `array`    |                   | List of attributes to display in a list                                                                                                                                                              |
| attrsAdaptor | `function` |                   | An adaptor defines which attributes to be passed to layout<br>This is helpful when you don't know which attributes are sent from API<br>Also useful when you need to show all the columns except few |
| debounceTime | `number`   | 1000              | Wait till this time to send an API request to avoid multiple requests when user is typing                                                                                                            |

## Slots

## Methods

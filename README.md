<h1 class="page-title">EasySettings</h1>
## Introduction
### What is it?
EasySettings is a library whose purpose is to help creating creative project with removing the part of creating ui to change some settings on the go.

### Setup
To use this library you have to simply include two files from this repo:
 * `EasySettings.js` found in [`/build/js/`](https://github.com/bibixx/EasySettings/tree/master/build/js)
 * `EasySettings.css` found in [`/build/css/`](https://github.com/bibixx/EasySettings/tree/master/build/css)

### Usage
Firstly start with creating panel and assigning it to variable. (See more here: [module-Panel.html#module:Panel](https://bibixx.github.io/EasySettings/docs/module-Panel.html#module:Panel))

```
const panel = new EasySettings();
```

Then you can create section...
```
panel.createSection();
```
...and start Section.adding components (See more here: [module:Section](https://bibixx.github.io/EasySettings/docs/module-Section.html))
```
const section = panel.createSection()
section.Section.addHeader( null, { value: "Dropdown" } );
```

Thanks to the fact that `createSection` as well as all of components return section object you can chain calls.

```
panel.createSection()
  .Section.addHeader( null, { value: "Dropdown" } )
  .Section.addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] });
```

## [Components](https://bibixx.github.io/EasySettings/docs/module-Section.html)
### Basics
Every component is based on the same structure meaning:
```
Section.Section.addComponentName( id, options, callback );
```

`id` – identifier of component used for getting an setting value of component. If you don't need use it simply set it to `null`.

`options` – JS object that specifies multiple options specific to the component.

`callback` – function that is triggered on every change. Current value of component will be passed as first attribute.

List of all components:

[`Section.addButton( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Button.html)

[`Section.addCheckbox( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Checkbox.html)

[`Section.addColorInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#ColorInput.html)

[`Section.addDateInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#DateInput.html)

[`Section.addDateTimeInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#DateTimeInput.html)

[`Section.addDropdown( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Dropdown.html)

[`Section.addHeader( id, options );`](https://bibixx.github.io/EasySettings/docs/module-Section#Header.html)

[`Section.addHTML( id, options );`](https://bibixx.github.io/EasySettings/docs/module-Section#HTML.html)

[`Section.addNumberInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#NumberInput.html)

[`Section.addParagraph( id, options );`](https://bibixx.github.io/EasySettings/docs/module-Section#Paragraph.html)

[`Section.addPasswordInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#PasswordInput.html)

[`Section.addProgress( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Progress.html)

[`Section.addRadio( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Radio.html)

[`Section.addSlider( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Slider.html)

[`Section.addTextarea( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#Textarea.html)

[`Section.addTextInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#TextInput.html)

[`Section.addTimeInput( id, options, callback );`](https://bibixx.github.io/EasySettings/docs/module-Section#TimeInput.html)

For more info about components see [/docs/module-Section.html](https://bibixx.github.io/EasySettings/docs/module-Section.html)

### Getting and setting values
To get value of component you can use [module:Panel#getValue](https://bibixx.github.io/EasySettings/docs/module-Panel#getValue)

`Section.getValue( id );`

To set value of component you can use [module:Panel#setValue](https://bibixx.github.io/EasySettings/docs/module-Panel#setValue)

`Section.setValue( id, value );`

You can also get values as JSON using [module:Panel#getValuesAsJSON](https://bibixx.github.io/EasySettings/docs/module-Panel#getValuesAsJSON)

`Section.getValuesAsJSON( id );`

And set them using JSON with [module:Panel#setValuesFromJSON](https://bibixx.github.io/EasySettings/docs/module-Panel#setValuesFromJSON)

`Section.setValuesFromJSON( id, value );`

Where `id` is id of component specified at creation of component and `value` is value to be set.

### Miscellaneous
To toggle determination on progress bar use [module:Panel#toggleIndeterminate](https://bibixx.github.io/EasySettings/docs/module-Panel#toggleIndeterminate)
```
const panel = new EasySettings();
panel.Section.addSection()
  .Section.addProgress( "progress", { value: 0.33, indeterminate: true } );
panel.toggleIndeterminate( "progress" ); // progress bar now is not indeterminate
```

If you want to smoothly animate through values you can use [module:Panel#animateValue](https://bibixx.github.io/EasySettings/docs/module-Panel#animateValue)
```
const panel = new EasySettings();
panel.createSection()
  .Section.addSlider( "slider", { value: 25, min: 0, max: 1000 }, ( v ) => {
    panel.setValue( "input-number-slider", v );
  } )
  .Section.addButton( null, null, () => {
    panel.animateValue( "slider", 500, 500 );
  } );
// after clicking the button slider will animate till it gets to the value of 500
```

## Demo
You can see demo of all components here:
[https://bibixx.github.io/EasySettings/demo/](https://bibixx.github.io/EasySettings/demo/)

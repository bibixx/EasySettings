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
...and start adding components (See more here: [module-Section.html](https://bibixx.github.io/EasySettings/docs/module-Section.html))
```
const section = panel.createSection()
section.addHeader( null, { value: "Dropdown" } );
```

Thanks to the fact that `createSection` as well as all of components return section object you can chain calls.

```
panel.createSection()
  .addHeader( null, { value: "Dropdown" } )
  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] });
```

## [Components](https://bibixx.github.io/EasySettings/docs/module-Section.html)
### Basics
Every component is based on the same structure meaning:
```
Section.addComponentName( id, options, callback );
```

`id` – identifier of component used for getting an setting value of component. If you don't need use it simply set it to `null`.

`options` – JS object that specifies multiple options specific to the component.

`callback` – function that is triggered on every change. Current value of component will be passed as first attribute.

List of all components is here: [/docs/module-Section.html](https://bibixx.github.io/EasySettings/docs/module-Section.html)

### Getting and setting values
To get value of component you can use:
```
Section.getValue( id );
```

To set value of component you can use:
```
Section.getValue( id, value );
```

Where `id` is id of component specified at creation of component and `value` is value to be set.

## Demo
You can see demo of all components here:
[https://bibixx.github.io/EasySettings/demo/](https://bibixx.github.io/EasySettings/demo/)

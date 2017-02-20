&nbsp;
# EasySettings
## Introduction
### Setup
To use this library you have to simply include two files from this repo:
 * `EasySettings.js` found in `/build/js/`
 * `EasySettings.css` found in `/build/css/`

### Usage
Firstly start with creating panel and assigning it to variable. (See more here: [module-Panel.html#module:Panel](module-Panel.html#module:Panel))

```
const panel = new EasySettings();
```

Then you can create section...
```
panel.createSection();
```
...and start adding components (See more here: [module-Section.html](module-Section.html))
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

## [Components](module-Section.html)
### Basics
Every component is based on the same structure meaning:
```
Section.addComponentName( id, options, callback );
```

`id` – identifier of component used for getting an setting value of component. If you don't need use it simply set it to `null`.

`options` – JS object that specifies multiple options specific to the component.

`callback` – function that is triggered on every change. Current value of component will be passed as first attribute.

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

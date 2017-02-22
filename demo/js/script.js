/* eslint-disable no-var, vars-on-top, comma-dangle */
function showVal( title, panel, id ) {
  var val;

  if ( panel === null ) {
    val = id;
  } else {
    val = panel.getValue( id );
  }

  var clr1 = "color: #008a00";
  var clr2 = "color: #000";
  var clr3 = "color: #00f";

  console.log( `%c${title}%c: %c${val}`, clr1, clr2, clr3 );
}

var panel1 = new EasySettings();

panel1.createSection()
  .addHeader( null, { value: "Dropdown" } )
  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"], value: 0 }, ( v ) => {
    showVal( "Dropdown", null, v );
  } );

let from1 = 0;
panel1.createSection()
  .addHeader( null, { value: "Slider" } )
  .addSlider(
    "slider",
    { value: 0.5, min: 0, max: 1, step: 0.01 },
    ( v ) => {
      if ( from1 < 2 ) {
        from1++;
        panel1.setValue( "input-slider", v );
      } else {
        from1 = 0;
      }
    } )
  .addNumberInput(
    "input-slider",
    // { value: 25, min: 0, max: 1000 },
    { value: 0.5, min: 0, max: 1, step: 0.01 },
    ( v ) => {
      if ( from1 < 2 ) {
        from1++;
        panel1.setValue( "slider", v );
      } else {
        from1 = 0;
      }
    } )

  .addButton( null, { value: "Go to 0" }, () => {
    panel1.animateValue( "input-slider", 0, 500 );
  } )

  .addButton( null, { value: "Go to 1" }, () => {
    panel1.animateValue( "input-slider", 1, 500 );
  } );

let from2 = 0;
panel1.createSection()
  .addHeader( null, { value: "Slider" } )
  .addSlider(
    "input-number-slider",
    { value: 0, step: 0.5, min: 0, max: 1 },
    ( v ) => {
      if ( from2 < 2 ) {
        from2++;
        panel1.setValue( "slider-input", v );
      } else {
        from2 = 0;
      }
    } )
  .addNumberInput(
    "slider-input",
    { value: 0, step: 0.5, min: 0, max: 1 },
    ( v ) => {
      if ( from2 < 2 ) {
        from2++;
        panel1.setValue( "input-number-slider", v );
      } else {
        from2 = 0;
      }
    } );

panel1.createSection()
  .addHeader( null, { value: "Toggle indeterminate" } )
  .addButton(
    "button",
    { value: "Toggle" },
    ( v ) => {
      showVal( "Button", null, v );
      panel1.toggleIndeterminate( "progress" );
    }
  )
  .addSlider( "slider-input-progress", 0, ( v ) => {
    panel1.setValue( "progress", v / 100 );
  }, { step: 1, min: 0, max: 100 } );

panel1.createSection()
  .addHeader( null, { value: "Progress" } )
  .addProgress( "progress", { value: 0.33, indeterminate: true } );

panel1.createSection()
  .addHeader( null, { value: "Checkbox" } )
  .addCheckbox( "checkbox1", { label: "Value 1", checked: false }, ( v ) => {
    showVal( "Checkbox #1", null, v );
  } )
  .addCheckbox( "checkbox2", { label: "Value 2", checked: true }, ( v ) => {
    showVal( "Checkbox #2", null, v );
  } );

panel1.createSection()
  .addHeader( null, { value: "Radio" } )
  .addRadio( "radio", { values: ["Value 1", "Value 2"], checkedIndex: 0 }, ( v ) => {
    showVal( "Radio", null, v );
  } );

panel1.createSection()
  .addHeader( null, { value: "Textarea" } )
  .addTextarea( "textarea", { placeholder: "Textarea", value: "" }, ( v ) => {
    showVal( "Textarea", null, v );
  } );

panel1.createSection()
  .addHeader( null, { value: "HTML" } )
  .addHTML( "html", { value: `
    <strong>small test</strong>
  ` } );

panel1.createSection()
  .addHeader( null, { value: "Paragrpah" } )
  .addParagraph( null, { value: "Test paragraph" } );

var panel2 = new EasySettings( 216, 8, "Inputs" );
panel2.createSection()
  .addHeader( null, { value: "Input text" } )
  .addTextInput( "input-text", { value: "", placeholder: "Test text" }, ( v ) => {
    showVal( "Input text", null, v );
  } );

panel2.createSection()
  .addHeader( null, { value: "Input color" } )
  .addColorInput( "input-color", { value: "#39FF21" }, ( v ) => {
    showVal( "Input color", null, v );
  } );

panel2.createSection()
  .addHeader( null, { value: "Input password" } )
  .addPasswordInput( "input-password", { value: "Szatan123" }, ( v ) => {
    showVal( "Input password", null, v );
  } );

panel2.createSection()
  .addHeader( null, { value: "Input number" } )
  .addNumberInput(
    "input-number",
    { value: Math.round( Math.random() * 500 ) + 500, min: 500, max: 1000 },
    ( v ) => {
      showVal( "Input number", null, v );
    } );

function to2dig( a ) { return ( `00${a}` ).slice( -2 ); }
var now = new Date(); var date = `${now.getFullYear()}-${to2dig( now.getMonth() + 1 )}-${to2dig( now.getDate() )}`; var time = `${to2dig( now.getHours() )}:${to2dig( now.getMinutes() )}:${to2dig( now.getSeconds() )}`;

panel2.createSection()
  .addHeader( null, { value: "Input date" } )
  .addDateInput( "input-date", { value: date }, ( v ) => {
    showVal( "Input date", null, v );
  } );

panel2.createSection()
  .addHeader( null, { value: "Input time" } )
  .addTimeInput( "input-time", { value: time }, ( v ) => {
    showVal( "Input time", null, v );
  } );

panel2.createSection()
  .addHeader( null, { value: "Input datetime" } )
  .addDateTimeInput( "input-datetime", { value: `${date}T${time}` }, ( v ) => {
    showVal( "Input datetime", null, v );
  } );

console.groupCollapsed();
console.log( panel1.getValuesAsJSON() );
console.log( panel2.getValuesAsJSON() );
console.groupEnd();

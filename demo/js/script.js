/* eslint-disable no-var, vars-on-top */
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
  .addHeader( null, "Dropdown" )
  .addDropdown( "dropdown", ["Dropdown option #1", "Dropdown option #2"], ( v ) => {
    showVal( "Dropdown", null, v );
  } );

panel1.createSection()
  .addHeader( null, "Slider" )
  .addSlider( "slider", 25, ( v ) => {
    showVal( "Slider", null, v );
  }, { min: 0, max: 1000 } );

panel1.createSection()
  .addNumberInput( "input-number-slider", 0, ( v ) => {
    panel1.setValue( "slider-input", v );
  }, { step: 0.5, min: 0, max: 1 } )
  .addSlider( "slider-input", 0, ( v ) => {
    panel1.setValue( "input-number-slider", v );
  }, { step: 0.5, min: 0, max: 1 } );

panel1.createSection()
  .addHeader( null, "Toggle indeterminate" )
  .addButton( "button", "Toggle", ( v ) => {
    showVal( "Button", null, v );
    panel1.toggleIndeterminate( "progress" );
  } );

panel1.createSection()
  .addHeader( null, "Progress" )
  .addProgress( "progress", 0.33, { indeterminate: true } );

panel1.createSection()
  .addHeader( null, "Checkbox" )
  .addCheckbox( "checkbox1", "Value 1", false, ( v ) => {
    showVal( "Checkbox #1", null, v );
  } )
  .addCheckbox( "checkbox2", "Value 2", true, ( v ) => {
    showVal( "Checkbox #2", null, v );
  } );

panel1.createSection()
  .addHeader( null, "Radio" )
  .addRadio( "radio", ["Value 1", "Value 2"], 0, ( v ) => {
    showVal( "Radio", null, v );
  } );

panel1.createSection()
  .addHeader( null, "Textarea" )
  .addTextarea( "textarea", "", ( v ) => {
    showVal( "Textarea", null, v );
  }, { placeholder: "Textarea" } );

panel1.createSection()
  .addHeader( null, "HTML" )
  .addHTML( "html", `
    <strong>small test</strong>
  ` );

panel1.createSection()
  .addHeader( null, "Paragrpah" )
  .addParagraph( null, "Test paragraph" );

var panel2 = new EasySettings( 216, 8, "Inputs" );
panel2.createSection()
  .addHeader( null, "Input text" )
  .addTextInput( "input-text", "", ( v ) => {
    showVal( "Input text", null, v );
  }, { placeholder: "Test text" } );

panel2.createSection()
  .addHeader( null, "Input color" )
  .addColorInput( "input-color", "#39FF21", ( v ) => {
    showVal( "Input color", null, v );
  } );

panel2.createSection()
  .addHeader( null, "Input password" )
  .addPasswordInput( "input-password", "Szatan123", ( v ) => {
    showVal( "Input password", null, v );
  } );

panel2.createSection()
  .addHeader( null, "Input number" )
  .addNumberInput( "input-number", ( Math.round( Math.random() * 500 ) + 500 ), ( v ) => {
    showVal( "Input number", null, v );
  }, { min: 500, max: 1000 } );

function to2dig( a ) { return ( `00${a}` ).slice( -2 ); }
var now = new Date(); var date = `${now.getFullYear()}-${to2dig( now.getMonth() + 1 )}-${to2dig( now.getDate() )}`; var time = `${to2dig( now.getHours() )}:${to2dig( now.getMinutes() )}:${to2dig( now.getSeconds() )}`;

panel2.createSection()
  .addHeader( null, "Input date" )
  .addDateInput( "input-date", date, ( v ) => {
    showVal( "Input date", null, v );
  } );

panel2.createSection()
  .addHeader( null, "Input time" )
  .addTimeInput( "input-time", time, ( v ) => {
    showVal( "Input time", null, v );
  } );

panel2.createSection()
  .addHeader( null, "Input datetime" )
  .addDateTimeInput( "input-datetime", `${date}T${time}`, ( v ) => {
    showVal( "Input datetime", null, v );
  } );

console.groupCollapsed();
showVal( "Dropdown", panel1, "dropdown" );
showVal( "Slider", panel1, "slider" );
showVal( "Button", panel1, "button" );
showVal( "Checkbox #1", panel1, "checkbox1" );
showVal( "Checkbox #2", panel1, "checkbox2" );
showVal( "Radio", panel1, "radio" );
showVal( "Textarea", panel1, "textarea" );
showVal( "Progress", panel1, "progress" );

showVal( "Input text", panel2, "input-text" );
showVal( "Input password", panel2, "input-password" );
showVal( "Input number", panel2, "input-number" );
showVal( "Input date", panel2, "input-date" );
showVal( "Input time", panel2, "input-time" );
showVal( "Input datetime", panel2, "input-datetime" );
console.groupEnd();

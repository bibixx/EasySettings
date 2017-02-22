/* eslint-disable no-var, vars-on-top, comma-dangle */
const panel = new EasySettings();
panel.createSection()
  .addButton( null, null, () => {
    panel.animateValue( "slider", 500, 500 );
  } )
  .addDropdown( "dropdown", { options: ["Dropdown option #1", "Dropdown option #2"] } )
  .addSlider( "slider", { value: 25, min: 0, max: 1000 }, ( v ) => {
    panel.setValue( "input-number-slider", v );
  } );
panel.createSection()
  .addNumberInput( "input-number-slider", { value: 25, min: 0, max: 1000 }, ( v ) => {
    panel.setValue( "slider", v );
  } );

console.log( panel.exportPanelToJSON() );

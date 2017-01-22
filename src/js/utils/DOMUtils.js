export default class DOMUtils {
  static createElement( type, parent, options, attributes ) {
    const $el = document.createElement( type );

    if ( options ) {
      for ( const [key, value] of Object.entries( options ) ) {
        $el[key] = value;
      }
    }

    if ( attributes ) {
      for ( const [key, value] of Object.entries( attributes ) ) {
        $el.setAttribute( key, value );
      }
    }

    if ( parent ) {
      parent.appendChild( $el );
    }

    return $el;
  }

  static dispatchEvent( element, event ) {
    if ( "createEvent" in document ) {
      const evt = document.createEvent( "HTMLEvents" );
      evt.initEvent( event, false, true );
      element.dispatchEvent( evt );
    } else {
      element.fireEvent( "onchange" );
    }
  }
}


// By default Async invocation
let get = function (){
    
    $.get( "https://jsonplaceholder.typicode.com/posts/1" )
     .success(( data ) => console.log( "POST #1 => [" + data + "]"))
     .error(( jqXHR, textStatus, errorThrown ) => console.log('The server is not responding'));

    console.log( "Loading ... #1" );

    $.get( "https://jsonplaceholder.typicode.com/posts/2" )
     .success(( data ) => console.log( "POST #2 => [" + data + "]"))
     .error(( jqXHR, textStatus, errorThrown ) => console.log('The server is not responding'));

    console.log( "Loading ... #2" );

    $.get( "https://jsonplaceholder.typicode.com/posts/3" )
     .success(( data ) => console.log( "POST #3 => [" + data + "]"))
     .error(( jqXHR, textStatus, errorThrown ) => console.log('The server is not responding'));

    console.log( "Loading ... #3" );

    $.get( "https://jsonplaceholder.typicode.com/posts/4" )
     .success(( data ) => console.log( "POST #4 => [" + data + "]"))
     .error(( jqXHR, textStatus, errorThrown ) => console.log('The server is not responding'));

    console.log( "Loading ... #4" );

    $.get( "https://jsonplaceholder.typicode.com/posts/5" )
     .success(( data ) => console.log( "POST #5 => [" + data + "]"))
     .error(( jqXHR, textStatus, errorThrown ) => console.log('The server is not responding'));

    console.log( "Loading ... #5" );

    $.get( "https://jsonplaceholder.typicode.com/posts/6" )
     .success(( data ) => console.log( "POST #6 => [" + data + "]"))
     .error(( jqXHR, textStatus, errorThrown ) => console.log('The server is not responding'));

    console.log( "Loading ... #6" );

    let num = 7;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );

    num = 8;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );

    num = 9;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );

    num = 10;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );

    num = 11;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );

    num = 12;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );

    num = 13;

    (function ( num ) {
            $.get( `https://jsonplaceholder.typicode.com/posts/${num}` )
             .success(( data ) => console.log( `POST #${num} => [${data}]` ))
             .error(( jqXHR, textStatus, errorThrown ) => console.log( `The server is not responding` ));
        
            console.log( `Loading ... #${num}` );
        })( num );
}

get();

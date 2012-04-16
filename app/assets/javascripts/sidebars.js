$(function() {
		$( "#price-filter" ).slider({
			range: "min",
			value: 50,
			min: 1,
			max: 100,
			step: 10,
			slide: function( event, ui ) {
				$( "#amount" ).html( "$" + ui.value );
				window.paint();
			}
		});
		$( "#amount" ).html( "$" + $( "#price-filter" ).slider( "value" ) );
		
		$("input[name='age']").change(radioValueChanged);
		
		function radioValueChanged(event)
    {
			window.paint();
    }
});
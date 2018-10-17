/**
 * @author Orlando Leite
 *
 * util functions
 */

Object.defineProperty(String.prototype, 'cleanSpecialChars',
{
	enumerable: false,
	value: function ()
	{
		return this
			.replace(/[ÀÁÂÃÄÅ]/g, "A")
			.replace(/[àáâãäå]/g, "a")
			.replace(/[ÈÉÊË]/g, "E")
			.replace(/[^a-z0-9]/gi, '');
	}
});

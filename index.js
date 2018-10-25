/**
 * @author Orlando Leite
 *
 * util functions
 */
if(!String.prototype.cleanSpecialChars)
{
    Object.defineProperty(String.prototype, 'cleanSpecialChars',
    {
        enumerable: false,
        value: function ()
        {
            return this.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g, '_');
        }
    });
}

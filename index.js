import { loadCSS } from 'fg-loadcss/src/loadCSS';
import onloadCSS from 'fg-loadcss/src/onloadCSS';

const cache = {};

/**
 * @param  {String} src
 *
 * @return {Promise}
 */
export default ( src ) => {
	if ( !cache[src] ) {
		cache[src] = new Promise(( resolve, reject ) => {
			const stylesheet = loadCSS(src);
			stylesheet.onerror = () => reject(); // eslint-disable-line unicorn/prefer-add-event-listener
			onloadCSS(stylesheet, () => resolve());
		});
	}
	return cache[src];
};

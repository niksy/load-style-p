import assert from 'assert';
import fn from '../index';

const styleCheck = () => {
	return new Promise(( resolve ) => {
		setTimeout(() => {
			resolve(window.getComputedStyle(document.body));
		}, 1000);
	});
};

before(function () {
	window.fixture.load('/test/fixtures/index.html');
});

after(function () {
	window.fixture.cleanup();
});

afterEach(function () {
	document.body.style.fontStyle = 'normal';
});

it('should load style file', async function () {

	const src = Object.keys(window.__karma__.files).filter(( file ) => /jackie/.test(file)).pop();

	await fn(src);

	const style = await styleCheck();

	assert.equal(style.fontStyle, 'italic');

});

it('should handle failed style file load', async function () {

	try {
		await fn('buster.css');
	} catch ( err ) {
		const style = await styleCheck();
		assert.equal(style.fontStyle, 'normal');
	}

});

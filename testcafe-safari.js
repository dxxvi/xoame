import { ClientFunction, Selector } from 'testcafe';

const fs = require('fs');

const getContent = ClientFunction(() => {
  let result = 'NOTHING';
  document.querySelectorAll('div#sbo-rt-content > div.annotator-wrapper').forEach(d => {
    result = d.outerHTML;
  });
  return result;
});

fixture `Getting Started`
    .page `https://learning.oreilly.com/home`;

test('1st test', async t => {
  await t
      .typeText('#id_email', 'safariannexas')
      .typeText('#id_password1', 'Abcd1234')
      .click('#login.button-primary');

  await t
      .typeText('div.src-AutocompleteInput-container input.src-AutocompleteInput-input', 'core java II 11 edition')
      .click('div.src-SearchBar-searchBar button.src-Button-button');

  await t.click('article.orm-Grid-root h4[class^="title"] a[href*="/library/view/core-java-volume/9780135167175"]');

  await t.click('ol.detail-toc li a[href*="/library/view/core-java-volume/9780135167175/toc.xhtml"]');

  for (let i = 1; i < 2; ) {
  	const content = await getContent();
  	try {
	  fs.appendFileSync('/dev/shm/index.html', content);
	} catch (err) {
	  console.log('Error: ', err);
	}

	const nextElement = 'a.next.nav-link';
    const hasNextPage = await Selector(nextElement).exists;
    if (hasNextPage) await t.click('a.next.nav-link');
    else i = 5;
  }
})
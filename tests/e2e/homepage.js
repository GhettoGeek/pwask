import { Selector } from 'testcafe'

fixture('HomePage')
  .page('https://pwask.netlify.com/')

test('I can see the Header', async (t) => {
  const Header = Selector('#header')

  await t
    .expect(Header.exists).ok()
})

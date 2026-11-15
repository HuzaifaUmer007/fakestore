import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Photo credits · A.O. Book Marketing', robots: { index: false, follow: false } };

const credits = [
  { title: 'Person writing in notebook while using laptop at a modern workspace', artist: 'Shixart1985', licence: 'CC BY 2.0', licenceUrl: 'https://creativecommons.org/licenses/by/2.0',
    page: 'https://commons.wikimedia.org/wiki/File:Person_writing_in_notebook_while_using_laptop_at_a_modern_workspace.jpg', used: 'Process step 1 (Discovery)' },
  { title: 'Bookshelves in Faculty of Arts Library, Chulalongkorn University', artist: 'Geonuch', licence: 'CC BY-SA 4.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/4.0',
    page: 'https://commons.wikimedia.org/wiki/File:Bookshelves_in_Faculty_of_Arts_Library,_Chulalongkorn_University.jpg', used: 'Process step 2 (Strategy)' },
  { title: 'Florin sign and ij digraph on Dutch typewriter', artist: 'Paul B', licence: 'CC0', licenceUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    page: 'https://commons.wikimedia.org/wiki/File:20220410_Florin_sign_and_ij_digraph_on_Dutch_typewriter.jpg', used: 'Process step 3 (Execution)' },
  { title: 'Old Library Bookshelves, Macquarie University', artist: 'Mw12310', licence: 'CC BY-SA 3.0', licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0',
    page: 'https://commons.wikimedia.org/wiki/File:Old_Library_Bookshelves,_Macquarie_University.JPG', used: 'Process step 4 (Growth)' },
];

export default function Credits() {
  return (
    <main className="credits">
      <div className="wrap">
        <a href="/" className="btn btn-outline-light">← Back to the site</a>
        <h1 className="h2" style={{ marginTop: 40 }}>Photo <em>credits</em></h1>
        <p>The logo, founder portrait, portfolio samples and Starter Kit cover belong to A.O. Book Marketing &amp; Digital Services. The photos below are stand-ins from Wikimedia Commons, cropped and resized.</p>
        <ul>
          {credits.map((c) => (
            <li key={c.page}>
              <b>{c.title}</b>
              <span>by {c.artist} · <a href={c.licenceUrl}>{c.licence}</a> · <a href={c.page}>source page</a> · cropped and resized</span>
              <small>Used for: {c.used}</small>
            </li>
          ))}
        </ul>
      </div>
      <style>{`html.loading .loader{display:none}.credits{background:var(--ink);color:#f7ead8;min-height:100vh;padding:60px 0}.credits ul{list-style:none;padding:0;display:grid;gap:14px;margin-top:30px}.credits li{background:rgba(255,255,255,.05);border:1px solid rgba(242,182,50,.25);border-radius:20px;padding:18px 22px;display:grid;gap:4px}.credits a{color:var(--gold)}.credits small{opacity:.7}`}</style>
    </main>
  );
}

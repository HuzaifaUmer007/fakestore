// Every fact on this page comes from the business's own live site (awoniyioluwatobi.vercel.app),
// read on 15 Nov 2026. Nothing here is invented. See README.md for the source of each item.

export const WA_NUMBER = '+234 816 459 7604';
const WA = 'https://wa.me/2348164597604?text=';
export const wa = (msg: string) => WA + encodeURIComponent(msg);
export const WA_HELLO = wa("Hi Awoniyi, I'd like to know more about your book marketing services.");
export const UPWORK = 'https://www.upwork.com/freelancers/~017a15720de77ed15a?viewMode=1';
export const SELAR = 'https://selar.com/z674s67r02';
export const SOCIAL = {
  facebook: 'https://www.facebook.com/share/152pQtiyJzS/',
  instagram: 'https://www.instagram.com/awoniyioluwatobi559',
  linkedin: 'https://www.linkedin.com/in/awoniyi-oluwatobi-682579309',
};

export const ticker = [
  'Amazon KDP optimization', 'ARC outreach', 'Goodreads buzz', 'Cinematic trailers', 'Cover design',
  'Developmental editing', 'KDP formatting', 'Ghostwriting', '8-week launches',
];

export const portfolio = [
  { img: 'w-pivot', tag: '#1 Bestseller', name: 'The Pivot', by: 'Kim Gallo M.S., CCC-SLP',
    line: 'Ranked #1 in Counseling Children, Kindle Store. KDP optimization, category strategy and launch campaign.', type: 'kdp' },
  { img: 'w-skinny-pretty-outgoing-rich', tag: 'Amazon KDP', name: 'Skinny Pretty Outgoing & Rich', by: 'Andrea Tsen',
    line: 'Full Kindle & paperback setup, category placement and cross-device cover presentation.', type: 'kdp' },
  { img: 'w-hidden-path', tag: 'Kindle Unlimited', name: 'The Hidden Path of the Tribes of Britain', by: 'Richard Simonian',
    line: 'Keyword strategy, KU enrollment and one author brand across two titles.', type: 'kdp' },
  { img: 'w-brutus-legacy', tag: 'Backlist', name: "Brutus Legacy: Founding Britain's Future", by: 'Richard Simonian',
    line: 'Backlist expansion: consistent branding, category audit and KU enrollment.', type: 'kdp' },
  { img: 'w-the-you-that-is-true', tag: 'Editing', name: 'The You That Is True', by: 'Cher',
    line: 'Manuscript editing, interior layout and KDP publishing setup by E.L. James.', type: 'write' },
  { img: 'w-saas-pricing-ebook', tag: 'Ghostwritten', name: 'SaaS Pricing Strategy eBook', by: 'for ClickLearned',
    line: 'Ten chapters in an SEO eBook series covering off-page, technical SEO and keyword research.', type: 'write' },
  { img: 'w-manuscript-edit', tag: 'Ghostwritten', name: 'Personal Development Manuscript', by: 'for an indie author',
    line: 'A complete self-help book: chapter development, voice matching and KDP-ready files.', type: 'write' },
  { img: 'w-case-study', tag: 'Content', name: 'Ruvna Case Study', by: 'for Ruvna, K-12 security software',
    line: 'Interview transcripts turned into a case study on the value to schools and families.', type: 'write' },
];

export const services = [
  { n: '01', t: 'Book Launch Strategy', d: 'A complete 8-week campaign: pre-launch buzz, launch-week execution and post-launch momentum.', lead: 'Awoniyi' },
  { n: '02', t: 'ARC & Review Outreach', d: 'Verified ARC readers, bloggers and Goodreads communities for credible social proof before release day.', lead: 'Elena' },
  { n: '03', t: 'Amazon KDP Optimization', d: 'Keyword research, category audit, backend metadata, A+ content and listing copy that ranks and converts.', lead: 'Awoniyi' },
  { n: '04', t: 'Cinematic Trailers & Covers', d: 'Scroll-stopping short-form trailers and covers that say your genre in under 5 seconds.', lead: 'David' },
  { n: '05', t: 'Editorial & Formatting', d: 'Developmental and line editing, plus print & digital formatting to KDP and IngramSpark standards.', lead: 'E.L. James' },
  { n: '06', t: 'Ghostwriting & Content', d: 'Ghostwritten manuscripts, SEO eBook series and case studies that build authority and sell.', lead: 'The team' },
];

export const team = [
  { i: 'AO', name: 'Awoniyi Oluwatobi', role: 'Founder · Chief Book Marketer & Publishing Strategist', tags: ['Amazon KDP', 'Launch Strategy', 'Ghostwriting'], photo: true },
  { i: 'ER', name: 'Elena Racheal', role: 'Beta Reader & ARC Coordinator', tags: ['Beta Reading', 'ARC Management', 'Book Clubs'] },
  { i: 'DB', name: 'David Bell', role: 'Cinematic Trailer & Cover Designer', tags: ['Cover Design', 'Video Trailers', 'TikTok'] },
  { i: 'EJ', name: 'E.L. James', role: 'Senior Book Editor & Formatting Specialist', tags: ['Dev Editing', 'Line Editing', 'Print Layout'] },
];

export const steps = [
  { n: '01', t: 'Discovery', d: 'We talk through your book, genre, goals and current marketing, then assign the right team members.', img: 'step-notebook0', bg: 'var(--rose)' },
  { n: '02', t: 'Strategy', d: 'Awoniyi leads keyword research, competitive analysis, audience mapping and a custom launch roadmap.', img: 'step-library1', bg: 'var(--butter)' },
  { n: '03', t: 'Execution', d: 'Elena runs ARC outreach, David creates visuals, E.L. polishes the manuscript, and Awoniyi runs the campaign.', img: 'step-typewriter3', bg: 'var(--sage)' },
  { n: '04', t: 'Growth', d: 'We track results, follow up on reviews, adjust strategy and hand you a post-launch growth plan.', img: 'step-library0', bg: 'var(--lilac)' },
];

export const packages = [
  { tier: 'Starter', name: 'Book Launch Essentials', price: 75, blurb: 'A solid Amazon foundation before launch day.', days: '3-day delivery',
    items: ['Keyword research', 'Category audit & selection', 'Listing description review', 'Launch day checklist'] },
  { tier: 'Most popular', name: 'Full Launch Campaign', price: 150, blurb: 'A complete launch plan with ARC outreach and a review strategy.', days: '5-day delivery', hot: true,
    items: ['Everything in Book Launch Essentials', '8-week launch plan', 'ARC reader outreach', 'Social media calendar', 'Review follow-up strategy'] },
  { tier: 'Premium team', name: 'Full Team Package', price: 250, blurb: 'Done-for-you marketing with all four specialists.', days: '7-day delivery',
    items: ['Everything in Full Launch Campaign', 'Cover consultation (David)', 'Editorial feedback (E.L.)', 'Full ARC coordination (Elena)', 'Email marketing setup', 'BookBub & promo submissions'] },
];

export const kit = {
  contents: ['Amazon Discoverability Starter Kit PDF workbook', '30 AI prompts for indie authors', 'Amazon listing quick-audit sheet',
    '14-day author discoverability tracker', 'Book positioning cheat sheet', 'Start Here guide & instructions'],
};

export const reviews = [
  { q: "Awoniyi's launch strategy got my book to #1 in its Amazon category. I had zero visibility before working with this team.", who: 'Kim G.', src: 'Author, The Pivot' },
  { q: 'Elena found me 45 ARC readers in under a week, all genuine genre fans.', who: 'Cynthia W.', src: 'Fantasy author' },
  { q: "David's book trailer got 12,000 views on TikTok in its first week.", who: 'James L.', src: 'Sci-fi author' },
  { q: 'She found structural issues I’d completely missed, and the line editing made my prose genuinely sing.', who: 'Patricia N.', src: 'Literary fiction author' },
  { q: 'He nailed my voice, my frameworks, and delivered KDP-ready files on time.', who: 'D. Chambers', src: 'CEO, Dunbar Consulting' },
  { q: 'The SEO eBook series the team produced for us was exceptional quality. Our audience loved them.', who: 'Team ClickLearned', src: 'Digital marketing agency' },
];

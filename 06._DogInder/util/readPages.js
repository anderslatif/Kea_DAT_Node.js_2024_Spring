import { readPage, renderPage } from "./templatingEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homepagePage = renderPage(homepage);

const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = renderPage(matches);

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = renderPage(contact);


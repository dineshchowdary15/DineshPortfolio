# Dinesh's portfolio — start here

A complete four-page portfolio in plain **HTML, CSS, and JavaScript**. Open it in Visual Studio Code and edit the files directly. No React setup, npm installation, paid service, or build command is needed.

## Step 1 — Open the project in Visual Studio Code

1. If you downloaded `dinesh-portfolio.zip`, extract it first.
2. Open **Visual Studio Code**.
3. Choose **File → Open Folder…** and select the **dinesh-portfolio** folder.
4. You should see these files in the Explorer on the left:

```text
dinesh-portfolio/
├── index.html                 Home page: introduction, portrait, highlights
├── experience.html            Work history, education, and skills
├── projects.html              ResolveAI project and architecture
├── connect.html               Email, LinkedIn, GitHub, phone, and resume
├── styles.css                 Colors, typography, layouts, mobile styles
├── script.js                  Mobile menu, copy email, and small enhancements
├── assets/
│   ├── profile.svg            Initials placeholder; replace with your photo
│   ├── favicon.svg            Small DG icon in the browser tab
│   └── dinesh-guduru-resume.pdf
├── .vscode/
│   └── settings.json          Helpful editor settings
└── README.md                  This guide
```

**HTML** contains the text and structure. **CSS** controls the appearance. **JavaScript** adds the mobile menu and the Copy email button.

## Step 2 — See the website

The easiest option needs no terminal:

1. Open the same `dinesh-portfolio` folder in Finder on Mac or File Explorer on Windows.
2. Double-click **index.html** to open the home page in your browser.
3. Use the navigation to visit Experience, Projects, and Connect.
4. Click **Dinesh Chowdary.** in the navigation to return Home.

Keep VS Code and your browser beside each other. After each edit, save the file with **⌘S** on Mac or **Ctrl+S** on Windows, then refresh the browser.

For a local HTTP preview, if Python 3 is already installed:

1. In VS Code, choose **Terminal → New Terminal**.
2. Confirm that the terminal is inside `dinesh-portfolio`.
3. On Mac, run:

   ```sh
   python3 -m http.server 5500 --bind 127.0.0.1
   ```

   On Windows, run:

   ```sh
   py -m http.server 5500 --bind 127.0.0.1
   ```

4. Open **http://127.0.0.1:5500** in your browser.
5. Keep the terminal running while previewing. Press **Ctrl+C** to stop it.

If Python is not installed, the double-click option above is sufficient. If port 5500 is in use, use 5501 in both the command and the browser address.

## Step 3 — Add your photo

The resume did not include a photo. The home page currently uses a designed **DG initials placeholder**, not a photograph of you.

1. Choose a clear portrait with your face near the center. A vertical or square photo around 800 pixels wide works well.
2. Copy it into the **assets** folder and name it **profile.jpg**. Use an actual JPEG image; simply renaming a PNG extension does not convert the file. If your file is PNG, use `profile.png` in the next step instead.
3. Open **index.html** in VS Code.
4. Search for `data-portrait`. Replace the existing image element with:

   ```html
   <img
     class="portrait-image"
     data-portrait
     src="assets/profile.jpg"
     width="800"
     height="864"
     alt="Portrait of Dinesh Chowdary Guduru"
     fetchpriority="high"
   >
   ```

5. Save and refresh. Your photo will appear in the existing portrait frame.

To adjust the crop, search for `.portrait-image` in **styles.css**. Change `object-position: center 35%;` to `center 20%` to show more of the top of the photo, or to `center 50%` for a centered crop. Leave `profile.svg` in place as a fallback if the photo cannot load.

## Step 4 — Personalize the home page

Open **index.html** and find these sections:

- `HOME: introduction and portrait` — edit your headline and summary here.
- `Career highlights` — update the four work metrics here.
- `HOME: featured project` — edit the featured ResolveAI summary here.
- `HOME: work experience preview` — update the short job summaries here.

For example, this code controls the main headline:

```html
<h1 id="home-title">
  Thoughtful code.
  <span>Reliable systems.</span>
</h1>
```

This is your navigation Home link:

```html
<a
  class="brand"
  href="index.html"
  aria-label="Dinesh Chowdary Guduru — Home"
>
  <span class="brand-mark" aria-hidden="true">DG</span>
  <span>Dinesh Chowdary<span class="brand-dot">.</span></span>
</a>
```

The shorter name is shown in the navigation to keep it readable on mobile. Your full name appears in the introduction, portrait caption, footer, page metadata, and accessible Home link label. You can show the full name in the navigation by changing its text in all four HTML files.

The home page's link additionally has `aria-current="page"`. Each other page marks its own navigation link as current. Keep that pattern when adding pages.

## Step 5 — Edit the other pages

| What you want to change | File to edit |
| --- | --- |
| Job descriptions, dates, metrics, education | `experience.html` |
| ResolveAI description, architecture, engineering details | `projects.html` |
| Email, phone, LinkedIn, GitHub | `connect.html` |
| Navigation or footer links | All four HTML files |
| Resume PDF | Replace `assets/dinesh-guduru-resume.pdf` with your latest PDF |

Content was adapted from the resume you provided. Before sharing, review employment dates, project status, metrics, contact information, and the included PDF for accuracy. The supplied resume is included unchanged; it still has its original content.

Only **ResolveAI** was listed as a project in your resume, so no extra projects or results have been invented. The project graphic is an architecture illustration, not a screenshot of a running product. The GitHub buttons lead to your profile because no verified repository or live demo URL was provided. When you have those URLs, add links such as:

```html
<!-- Replace YOUR-REAL-REPOSITORY-URL before adding this link. -->
<a
  class="button button-secondary"
  href="YOUR-REAL-REPOSITORY-URL"
  target="_blank"
  rel="noopener noreferrer"
>
  View source code
</a>
```

To add another project, duplicate the `<article class="project-feature">…</article>` block on the home page and customize its title, description, tags, and destination link. Add the corresponding project content to **projects.html** using a unique ID, such as `id="my-second-project"`, and point the card to `projects.html#my-second-project`.

## Step 6 — Change the look

Open **styles.css**. The variables at the top control the main colors:

```css
:root {
  --paper: #f8f9fc;       /* Page background */
  --white: #ffffff;      /* Cards */
  --ink: #182738;        /* Main text */
  --muted: #5d6877;      /* Secondary text */
  --blue: #2158d5;       /* Accent and primary buttons */
  --blue-dark: #1642a6;  /* Primary button hover */
  --blue-light: #edf2fd; /* Soft accent surfaces */
}
```

Change the existing values; you do not need to add a second `:root` block. The site uses fonts already available on the visitor's device, so there are no external font requests or font installation steps.

The CSS is organized into numbered sections: foundations, navigation, home, shared sections, inner pages, projects, contact, and mobile layouts. Keep the responsive rules near the bottom of the file.

## Step 7 — Understand the working features

- **Name → Home:** every page links back to `index.html` through your name.
- **Mobile menu:** appears on narrow screens; supports opening, closing, Escape, and clicking outside.
- **Resume:** downloads the actual PDF included in `assets`.
- **Email me:** opens the visitor's configured email app. It does not send an email automatically or store messages.
- **Copy email:** copies the address if the browser permits it. If clipboard access is blocked, it selects the address for manual copying and shows an honest message.
- **LinkedIn and GitHub:** open your profile URLs from the supplied resume in a new tab.
- **Project details:** expand and collapse using native HTML `<details>` elements.
- **Keyboard access:** includes a Skip to content link, focus indicators, and labeled navigation.
- **Reduced motion:** respects the visitor's reduced-motion setting.

This is a static site. There is no contact-form backend, tracking, database, or account system to configure.

## Step 8 — Review before sharing

1. Add your actual portrait.
2. Read all four pages and check the included resume.
3. Click your name from each page and confirm it returns Home.
4. Try the links, resume download, project details, and Copy email.
5. Make the browser narrow to check the mobile menu and layouts.
6. Use the Tab key to check that links and buttons are reachable.

The files are ready for a static web host when you choose to publish. Upload the contents of this folder together, preserving the **assets** folder and keeping **index.html** at the website root. This delivery is local source code; it has not been published to a public website.

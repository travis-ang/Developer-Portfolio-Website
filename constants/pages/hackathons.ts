import { PageData } from "./types";

export const HACKATHONS: PageData[] = [
  {
    slug: "systemearth-hack-and-hire-2026",
    title: "SystemEarth Hack & Hire 2026: EUDR Checks for Rubber Plots",
    cardTitle: "EUDR Rubber Plot Checks",
    cardKicker: "SystemEarth Hack & Hire 2026",
    award: "1st Place",
    awardDetail: "Joint first of 4 shortlisted, from 13 teams",
    date: "16 October 2026",
    collaborators: ["Joe Ong Teng Kiat", "Cheng Jing Jie"],
    techs: ["Python", "Neon PostgreSQL", "PostGIS", "PyQt5", "Leaflet", "Rasterio", "Shapely", "NumPy"],
    cardTechs: ["Python", "PostGIS", "PyQt5"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/travis-ang/HackNHire-System-Earth",
        icon: "github",
      },
      {
        label: "Certificate of Merit",
        href: "/hackathons/systemearth-hack-and-hire-2026/certificate.pdf",
        icon: "download",
        download: true,
      },
    ],
    overview:
      "Under the EU Deforestation Regulation, a rubber plot can only supply the EU if its land was not forest at the end of 2020, or that forest has not been cleared since. Checking one plot normally means opening about 20 satellite layers. We packed those layers into one 32-bit number per pixel, stored it in Neon, and checked any number of plots in a single query, with exactly the answer the original layers give.",
    images: [
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/app.png",
        alt: "The desktop app: farm plots drawn over the Jambi map with their verdicts, beside a timing comparison of stencils and outlines",
      },
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/group.jpg",
        alt: "Participants, mentors and judges at Hack & Hire 2026",
      },
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/system-overview.png",
        alt: "From about 20 satellite layers to a plot verdict: compaction, storage in Neon, then one batched query per batch of plots",
      },
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/mentoring.jpg",
        alt: "A SystemEarth mentor talking a team through their approach",
      },
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/decision-rule.png",
        alt: "The EUDR decision rule each pixel goes through, from forest in 2020 to the final verdict",
      },
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/banner.jpg",
        alt: "Participants with the Hack & Hire banner",
      },
      {
        src: "/hackathons/systemearth-hack-and-hire-2026/neon-tradeoff.png",
        alt: "What evidence pages, stencils and outlines each cost in storage, data returned, server work and time for 1,000 plots",
      },
    ],
    // The app shows the thing working; at card size the diagrams are just text.
    cardImage: "/hackathons/systemearth-hack-and-hire-2026/app.png",
    impacts: [
      "Won 1st place: SystemEarth shortlisted 4 of the 13 teams and ranked ours joint first.",
      "Every one of 1,000 test plots got the same 35 outputs as the original layers, including the verdict, reason, hectares and clearing years, and all 36 million pixels of the decision map matched.",
      "Stored the Jambi map in 6.7 MB of Neon, against 245.9 MB of raw satellite layers.",
      "Checked 1,000 plots over Neon in 3.5 seconds, in a single query.",
      "Agreed with the organiser on all 5 of their field-verified plots.",
    ],
    whatIDid: [
      "Built the storage in Neon three competing ways - compressed evidence pages, a 5-colour stencil map and PostGIS outlines - so the trade-off could be measured instead of argued.",
      "Wrote the check that finds every 256 x 256 page under a batch of plots, fetches them all in one query and runs Joe's rule on them, so the answers cannot drift from the original layers.",
      "Built the ingest window that compresses a folder of layers and uploads it in one all-or-nothing transaction, each map in its own schema.",
      "Built the PyQt5 desktop app: draw or load farms on a Leaflet map, check them, and benchmark the approaches side by side in a Compare tab.",
    ],
    reflection:
      "The result I trust least is the one that sounds best. 100% fidelity only proves nothing was lost in the packing, not that the rule is right, and our test plots were made up; agreeing on the organiser's 5 field-verified plots is encouraging, but five is a small sample. Measuring the three storage approaches side by side taught me more than picking one would have: the smallest store was not the fastest check.",
  },
  {
    slug: "brainhack-code-exp-2026",
    title: "BrainHack CODE_EXP 2026: Fall In",
    cardTitle: "Fall In",
    cardKicker: "BrainHack CODE_EXP 2026",
    award: "Finalist",
    awardDetail: "Top 28 of 160 teams",
    date: "June 2026",
    collaborators: ["Iizen Sng", "Brayden Scott", "Jun Sheng Lim"],
    techs: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Claude Sonnet",
      "Google Calendar API",
      "Python",
      "python-telegram-bot",
    ],
    cardTechs: ["Next.js", "Supabase", "Claude Sonnet"],
    links: [
      {
        label: "Fall In App",
        href: "https://github.com/zensng21/Fall-In",
        icon: "github",
      },
      {
        label: "Telegram Server",
        href: "https://github.com/travis-ang/Fall-In-Telegram-Server",
        icon: "github",
      },
    ],
    overview:
      "Fall In takes the admin out of running a unit. Commanders set up groups, build events with timelines and packing lists, and everyone gets told what they need on Telegram instead of in a mass text half the company scrolls past. We reached the finalist stage at BrainHack CODE_EXP 2026. I built the notification pipeline and the AI assistant that does the setting up for you.",
    images: [
      {
        src: "/hackathons/brainhack-code-exp-2026/infographic.png",
        alt: "infographic",
      },
      {
        src: "/hackathons/brainhack-code-exp-2026/logo.png",
        alt: "logo",
      },
      {
        src: "/hackathons/brainhack-code-exp-2026/showcase.jpg",
        alt: "showcase",
      },
      {
        src: "/hackathons/brainhack-code-exp-2026/final-showcase.jpg",
        alt: "final-showcase",
      },
      {
        src: "/hackathons/brainhack-code-exp-2026/podium.jpg",
        alt: "podium",
      },
    ],
    // The infographic fronts the card rather than the team photo.
    cardImage: "/hackathons/brainhack-code-exp-2026/infographic.png",
    impacts: [
      "Reached the finals of BrainHack CODE_EXP 2026 as one of the top 28 teams out of 160.",
      "Put unit admin in one place: groups, events, timelines, packing lists and announcements, with roles deciding who can change what.",
      "Sent notifications only to the people they concern, covering new and updated events, group and event additions, announcements, and reminders a day and a week ahead.",
      "Let a commander set up a whole event by describing it to the assistant instead of working through forms.",
      "Delivered it all to Telegram, so nobody had to install another app to stay in the loop.",
    ],
    whatIDid: [
      "Built the notification system end to end, from the Postgres table through Supabase realtime to a Python Telegram bot that forwards each message labelled by type.",
      "Built the account linking flow, where the app issues a short-lived token, the bot posts it back to a protected route, and the chat gets tied to that profile.",
      "Built the AI assistant on Claude Sonnet with a seventeen tool loop, so it can create groups, add members, build events, edit packing lists and timelines, and change roles from a conversation.",
      "Set up the permission model, including group admin rights and role badges, and fixed the row level security rules that were letting the wrong people through.",
      "Added a single-instance lock on the bot, because two copies both subscribe to the same table and every notification arrives twice.",
    ],
    reflection:
      "The bug I remember is the duplicate notifications. Two copies of the bot were running, both subscribed to the same table, so everything arrived twice and it looked like Telegram's fault rather than mine. A file lock fixed it in five lines. The bigger lesson was that row level security is where a rushed schema shows: getting the database permissions right took longer than the features sitting on top of them.",
  },
  {
    slug: "naisc-2026-singtel-churn",
    title: "NAISC 2026: Singtel Customer Churn Prediction",
    cardTitle: "Singtel Churn Prediction",
    cardKicker: "NAISC 2026",
    date: "2026",
    collaborators: [
      "Shaun Pan",
      "Iizen Sng",
      "Brennen Goy",
      "Joe Ong Teng Kiat",
    ],
    techs: [
      "Python",
      "LightGBM",
      "Scikit-learn",
      "SciPy",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
    ],
    cardTechs: ["Python", "LightGBM", "Streamlit"],
    links: [
      {
        label: "Report",
        href: "/hackathons/naisc-2026-singtel-churn/report.pdf",
        icon: "presentation",
        download: true,
      },
    ],
    overview:
      "Our team built a churn prediction pipeline for Singtel that also watches for drift, the gap between the data a model trained on and the data it later sees. Most models fail at this quietly. Ours measures it and corrects for it before training even starts.",
    images: [
      {
        src: "/hackathons/naisc-2026-singtel-churn/drift-detection-summary.png",
        alt: "drift-detection-summary",
      },
      {
        src: "/hackathons/naisc-2026-singtel-churn/psi-per-feature.png",
        alt: "psi-per-feature",
      },
      {
        src: "/hackathons/naisc-2026-singtel-churn/psi-severity-table.png",
        alt: "psi-severity-table",
      },
      {
        src: "/hackathons/naisc-2026-singtel-churn/psi-by-drift-type.png",
        alt: "psi-by-drift-type",
      },
      {
        src: "/hackathons/naisc-2026-singtel-churn/feature-importance-cbdt.png",
        alt: "feature-importance-cbdt",
      },
      {
        src: "/hackathons/naisc-2026-singtel-churn/model-performance-metrics.png",
        alt: "model-performance-metrics",
      },
    ],
    // Last image is a 208px metrics table, far too small to stretch to a card.
    // The severity table is the only shot near 16:10, so it survives the crop.
    cardImage: "/hackathons/naisc-2026-singtel-churn/psi-severity-table.png",
    impacts: [
      "Tested every feature for drift with KS, PSI, Wasserstein, Chi-square, CBDT, MMD and Fisher z-tests, with Benjamini-Hochberg correction across hundreds of tests.",
      "Reweighted the training samples using seven combined strategies to correct for covariate and concept drift.",
      "Ran up to 20 rounds of pseudo-labeling so the LightGBM model kept adapting to the test distribution.",
      "Built a Streamlit dashboard covering PSI breakdowns, CBDT scores, monthly drift timelines and feature importance.",
    ],
    whatIDid: [
      "Engineered the features: revenue per tenure, refund rates, CLV relatives, charge deviations, service counts, and sine and cosine month encodings for seasonality.",
      "Wrote the drift detection from scratch, univariate and multivariate, across seven statistical tests.",
      "Built the sample reweighting system that blends seven drift signals, log-compressed and normalised to a mean of 1.0.",
      "Trained the LightGBM classifier for AU-PRC on the drift-corrected weights, with confidence-thresholded pseudo-labeling.",
      "Built the Streamlit and Plotly dashboard covering every stage of the pipeline.",
    ],
    reflection:
      "This was the hardest thing I've built. The idea that a model quietly rots between training and deployment, and that you can measure and fix that, changed how I think about shipping ML. Writing seven statistical tests by hand was rough, but watching AU-PRC climb each pseudo-labeling round made up for it.",
  },
  {
    slug: "nus-maritime-hackathon-2026",
    title: "NUS Maritime Hackathon 2026",
    cardTitle: "Maritime Fleet Optimisation",
    cardKicker: "NUS Maritime Hackathon 2026",
    date: "7 February 2026",
    collaborators: ["Low Dong Xuan", "Tayzar Toe Wai", "Shadid Z. Rahman"],
    techs: ["SQL", "Databricks", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/steaksandshrooms/Maritime-Fleet-Optimisation",
        icon: "github",
      },
      {
        label: "Presentation Slides",
        href: "/hackathons/nus-maritime-hackathon-2026/showcase.ppt",
        icon: "presentation",
        download: true,
      },
    ],
    overview:
      "We built a maritime dashboard in Databricks covering global shipping patterns, port activity and fleet performance across thousands of vessel records.",
    images: [
      { src: "/hackathons/nus-maritime-hackathon-2026/map.png", alt: "map" },
      { src: "/hackathons/nus-maritime-hackathon-2026/cost.png", alt: "cost" },
      {
        src: "/hackathons/nus-maritime-hackathon-2026/cost-efficiency.png",
        alt: "cost-efficiency",
      },
      {
        src: "/hackathons/nus-maritime-hackathon-2026/distribution-main-engine.png",
        alt: "main-engine",
      },
      {
        src: "/hackathons/nus-maritime-hackathon-2026/distribution-safety.png",
        alt: "safety",
      },
    ],
    // The route map reads far better at card size than a bar chart does.
    cardImage: "/hackathons/nus-maritime-hackathon-2026/map.png",
    impacts: [
      "Delivered an interactive Databricks dashboard covering DWT distribution, cost efficiency, engine types and safety scores.",
      "Surfaced fleet optimisation insights the team could actually act on.",
      "Turned thousands of raw vessel records into patterns you can read at a glance.",
    ],
    whatIDid: [
      "Wrote over 200 lines of SQL to clean, transform and query the maritime datasets.",
      "Checked data quality before anything reached a chart.",
      "Built the interactive charts and maps.",
      "Used MLIP heuristics to balance competing variables in the analysis.",
      "Coordinated task allocation across a team of four.",
    ],
    reflection:
      "I learned a lot here, mostly about my own gaps. My SQL could have been tighter and I could have split the work better. The real lesson was domain knowledge: knowing roughly what a number should look like is what catches a bad query before it reaches a chart.",
  },
  {
    slug: "maritime-one-case-summit-2026",
    title: "Maritime ONE Case Summit 2026: BunkerNex",
    cardTitle: "BunkerNex",
    cardKicker: "Maritime ONE Case Summit 2026",
    date: "August 2026",
    collaborators: [
      "Lutfil Hadi Abu Bakar Sedik",
      "Low Dong Xuan",
      "Asher Chong",
    ],
    techs: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "MapLibre GL",
      "Recharts",
      "Claude Haiku",
      "jsPDF",
      "PapaParse",
    ],
    cardTechs: ["Next.js", "MapLibre GL", "Claude Haiku"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/travis-ang/BunkerNex",
        icon: "github",
      },
      {
        label: "Live site",
        href: "https://bunker-nex.vercel.app/",
        icon: "globe",
      },
      {
        label: "Report",
        href: "/hackathons/maritime-one-case-summit-2026/bunkernex-report.pdf",
        icon: "presentation",
        download: true,
      },
    ],
    overview:
      "We took on Pacific International Lines' bunkering case and built BunkerNex, a map of PIL's container services with a simulated 62-vessel fleet, fuel prices and a bunkering optimiser layered on top. You can scrub through three months of voyages, watch tanks run down, and get back the three cheapest ways to fuel the rest of the route.",
    images: [
      {
        src: "/hackathons/maritime-one-case-summit-2026/map.png",
        alt: "map",
      },
      {
        src: "/hackathons/maritime-one-case-summit-2026/route-optimisation.png",
        alt: "route-optimisation",
      },
      {
        src: "/hackathons/maritime-one-case-summit-2026/supplier-analysis.png",
        alt: "supplier-analysis",
      },
    ],
    // Last image is a dense chart panel; the fleet map is the readable cover.
    cardImage: "/hackathons/maritime-one-case-summit-2026/map.png",
    impacts: [
      "Pulled a fuel buying decision out of spreadsheets and broker emails into three screens: a fleet map, a supplier desk and a route optimiser.",
      "Ranked the three best bunkering combinations over the next five port calls, with a cost comparison and a plain explanation of why the winner wins.",
      "Built compliance in from the start. Residual and compliance tanks are tracked separately, and a grade that's banned at a port never gets nominated there.",
      "Said plainly what was simulated. The footers state that supplier quotes are invented and that the optimiser is decision support, not a solver.",
    ],
    whatIDid: [
      "Built the map on MapLibre GL, with port, vessel and service panels, and one time scrubber that moves vessel positions, fuel levels and the bunker log together.",
      "Wrote the route optimiser: a greedy search for the cheapest reachable call over the next five ports, returning three ranked plans with tank timelines.",
      "Built the price forecast from three models (trend, seasonal and mean reversion) plus an ensemble, charted with Recharts.",
      "Built the chief engineer's bunkering form, seven validated sections, exporting to PDF or handing the nomination straight to the optimiser.",
      "Wired up a single Claude Haiku call to explain why the winning plan is cheapest, run over numbers that were already final so the model never does the maths.",
      "Wrote the Autopilot pitch as a design doc rather than a feature: a Claude orchestrator over internal MCP servers plus Gmail, Drive, Calendar, Slack and search, with a human approving in Slack and the planner still owning every number.",
    ],
    reflection:
      "The rule I'm most glad we set early was to keep the model out of the arithmetic. Every number comes from the planner and Claude only explains it. It's a dull rule, and it's the reason the thing holds up when someone asks how a price was worked out. The other lesson was scope. We shipped three working screens and left the agentic layer as a written pitch, which was the right call and still felt like leaving something behind.",
  },
];

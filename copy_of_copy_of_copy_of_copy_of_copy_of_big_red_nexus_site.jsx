import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

/* ------------------------------------------------------------------
  DATA: Executive Board & Placeholder Analysts
-------------------------------------------------------------------*/
const eboard = [
  {
    name: "Rachel Eisenhart",
    role: "Executive Director",
    linkedin: "https://www.linkedin.com/in/r-eisenhart",
    bio:
      "Rachel is a junior studying Industrial Labor Relations. This summer she is working at the Hotel Trades Council. Outside class she is involved in Big Red Ambassadors, manages the football team, and sits on the Hillel executive board.",
  },
  {
    name: "Noah Wishengrad",
    role: "Vice President of Operations",
    linkedin: "https://www.linkedin.com/in/noahwishengrad",
    bio:
      "Noah is a sophomore majoring in Information Science with a Dyson Business minor for Engineers. He is an alternate captain for Cornell Club Hockey and conducts copyright‑law research. Last summer he interned at Brightstar Capital Partners, a middle‑market private‑equity firm.",
  },
  {
    name: "Dina Shlufman",
    role: "Vice President of Marketing",
    linkedin: "https://www.linkedin.com/in/dina-schulman",
    bio:
      "Dina Shlufman ’27 is a junior in the College of Arts & Sciences studying Information Science and English. Outside of class, she is a member of Cornell Tech Consulting, Cornell Assistive Technologies (Project Team), and a social sorority. She is also a student writer for Cornell Bowers. This summer she is working as a Business Analyst for Bank of Montreal (BMO) Financial Group.",
  },
  {
    name: "Pari Shah",
    role: "Vice President of Sales",
    linkedin: "https://www.linkedin.com/in/shah-pari-amit",
    bio:
      "Pari is a sophomore in the Dyson School studying Applied Economics and Management, with plans to concentrate in Finance. She is involved in Cornell Financial Analysts and the South Asian Business Association and is a member of a social sorority. This past summer she interned at Balyasny Asset Management as a Growth Equity Intern. Reach her at pas349@cornell.edu.",
  },
  {
    name: "Mitch Goldstein",
    role: "Vice President of Finance",
    linkedin: "https://www.linkedin.com/in/mitch-goldstein-",
    bio:
      "Mitch Goldstein is a junior from Greenwich, Connecticut, pursuing a double major in Economics and Government within Cornell’s College of Arts and Sciences and a Business minor through the Dyson School. On campus, he is actively involved in Greek life, serves as Director of Selection for the College of Arts & Sciences Ambassadors, and sits on the Arts and Sciences Academic Integrity Board. This summer Mitch will be working at Tilray Brands as a Strategy & M&A intern. In his free time he enjoys skiing, golfing, sailing, and hiking. He can be reached at mg2445@cornell.edu.",
  },
  {
    name: "Sami Steinberg",
    role: "Vice President of Recruitment",
    linkedin: "https://www.linkedin.com/in/samuel-steinberg",
    bio:
      "Sami is a junior studying Applied Economics & Management with a minor in Global & Public Health Sciences. He is the Director of Consulting for TAMID at Cornell and spent last summer at Hartree Partners in commodity trading.",
  },
];

// Placeholder analysts – replace with real members once selected
const analysts = Array.from({ length: 20 }).map((_, i) => ({
  name: `Future Analyst ${i + 1}`,
}));

/* ------------------------------------------------------------------
  SHARED UI COMPONENTS
-------------------------------------------------------------------*/
const Section = ({ id, children }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-20">
    {children}
  </section>
);

const NavBar = () => (
  <nav className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <Link to="/" className="text-red-700 font-bold text-lg">
        Big&nbsp;Red&nbsp;Nexus
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/analysts" className="hover:text-red-700">
          Analysts
        </Link>
        <a href="#apply" className="hover:text-red-700 hidden md:inline">
          Apply
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gray-100 text-center text-sm py-6 mt-20">
    © {new Date().getFullYear()} Big&nbsp;Red&nbsp;Nexus · Cornell University
  </footer>
);

/* ------------------------------------------------------------------
  HOME‑PAGE SECTIONS
-------------------------------------------------------------------*/
const Hero = () => (
  <div className="bg-red-700 text-white py-32 px-4 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Big Red Nexus</h1>
    <p className="text-lg md:text-2xl max-w-3xl mx-auto">
      Cornell’s student‑run consultancy delivering strategy with Big Red rigor.
    </p>
    <div className="mt-8 flex justify-center gap-4 flex-wrap">
      <a
        href="#apply"
        className="bg-white text-red-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg shadow"
      >
        Apply to Be an Analyst
      </a>
      <a
        href="#services"
        className="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg"
      >
        Request a Project
      </a>
    </div>
  </div>
);

const About = () => (
  <Section id="about">
    <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
    <p className="text-gray-700 text-center max-w-3xl mx-auto">
      We empower Cornell students to solve real‑world business challenges for
      startups, nonprofits, and small enterprises—blending academic insight
      with hands‑on consulting to create lasting impact in the Finger Lakes and
      beyond.
    </p>
  </Section>
);

const Services = () => (
  <Section id="services">
    <h2 className="text-3xl font-semibold mb-12 text-center">Services</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Market Research",
          icon: "📊",
          desc: "Data‑driven insights into customer segments, competitors, and trends.",
        },
        {
          title: "Growth Strategy",
          icon: "🚀",
          desc: "Roadmaps that size opportunities and align resources for expansion.",
        },
        {
          title: "Operational Excellence",
          icon: "⚙️",
          desc: "Process mapping and KPI dashboards to boost efficiency and quality.",
        },
      ].map(({ title, icon, desc }) => (
        <div
          key={title}
          className="bg-white rounded-2xl p-6 text-center shadow hover:shadow-lg transition"
        >
          <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </Section>
);

const Team = () => (
  <Section id="team">
    <h2 className="text-3xl font-semibold mb-12 text-center">Meet the&nbsp;E‑Board</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {eboard.map(({ name, role, bio, linkedin }) => (
        <div
          key={name}
          className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
        >
          <h3 className="text-xl font-medium mb-1">{name}</h3>
          <p className="text-red-700 font-semibold mb-3 text-sm uppercase tracking-wide">
            {role}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{bio}</p>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center border border-red-700 text-red-700 py-2 rounded-lg hover:bg-red-700 hover:text-white transition"
          >
            View LinkedIn
          </a>
        </div>
      ))}
    </div>
  </Section>
);

const Apply = () => (
  <Section id="apply">
    <h2 className="text-3xl font-semibold mb-6 text-center">Analyst Application</h2>
    <p className="text-gray-700 text-center max-w-xl mx-auto mb-8">
      Our analyst program accepts ~20 Cornell students each semester. Submit
      your résumé and tell us why you want to join Big Red Nexus.
    </p>
    <form
      action="https://formspree.io/f/yourEndpoint"
      method="POST"
      encType="multipart/form-data"
      className="bg-gray-50 p-8 rounded-2xl shadow max-w-2xl mx-auto"
    >
      {/* PERSONAL INFO */}
      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="border p-3 rounded-lg w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Cornell Email"
          required
          className="border p-3 rounded-lg w-full"
        />
        <input
          type="text"
          name="year"
          placeholder="Graduation Year"
          required
          className="border p-3 rounded-lg w-full"
        />
        <input
          type="text"
          name="major"
          placeholder="Major(s) / Minor(s)"
          required
          className="border p-3 rounded-lg w-full"
        />
      </div>

      {/* FILE UPLOADS */}
      <div className="mb-4">
        <label className="text-sm font-medium block mb-2">Résumé (PDF)</label>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          required
          className="border p-3 rounded-lg w-full"
        />
      </div>

      {/* MOTIVATION */}
      <div className="mb-6">
        <label className="text-sm font-medium block mb-2">Why Big Red Nexus?</label>
        <textarea
          name="why"
          rows={4}
          placeholder="Tell us in 150 words or fewer"
          required
          className="border p-3 rounded-lg w-full"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-red-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-800 w-full"
      >
        Submit Application
      </button>
    </form>
  </Section>
);

/* ------------------------------------------------------------------
  ANALYSTS PAGE
-------------------------------------------------------------------*/
const AnalystsPage = () => (
  <Section id="analysts-page">
    <h2 className="text-3xl font-semibold mb-12 text-center">Incoming Analyst Class</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {analysts.map(({ name }) => (
        <div
          key={name}
          className="bg-white p-6 rounded-2xl text-center shadow hover:shadow-lg transition"
        >
          <div className="text-6xl mb-4">👤</div>
          <h3 className="font-medium text-lg">{name}</h3>
        </div>
      ))}
    </div>
  </Section>
);

/* ------------------------------------------------------------------
  HOME WRAPPER
-------------------------------------------------------------------*/
const Home = () => (
  <main>
    <Hero />
    <About />
    <Services />
    <Team />
    <Apply />
    <Footer />
  </main>
);

/* ------------------------------------------------------------------
  ROOT APP WITH ROUTER
-------------------------------------------------------------------*/
const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analysts" element={<AnalystsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default App;

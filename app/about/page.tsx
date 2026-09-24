import SectionHeading from "@/components/SectionHeading";

const skillGroups = [
  { category: "Programming", items: ["C", "C++", "Python", "Java"] },
  { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "Laravel", "PHP"] },
  { category: "Mobile Development", items: ["Android", "Kotlin", "Firebase"] },
  { category: "Data & Big Data", items: ["Big Data Analysis", "Hadoop", "Apache Pig", "Data Processing"] },
  { category: "AI & Computer Vision", items: ["OpenCV", "MediaPipe", "NumPy", "Computer Vision"] },
  { category: "Databases", items: ["MySQL", "Firebase Firestore"] },
  { category: "Tools & Technologies", items: ["Git", "GitHub", "VS Code", "Android Studio", "XAMPP"] },
  { category: "Soft Skills", items: ["Problem Solving", "Teamwork & Collaboration", "Communication", "Presentation", "Public Speaking", "Quick Learning"] },
  {
    category: "Languages",
    items: [
      "Bengali — Native",
      "English — Reading",
      "English — Writing",
      "English — Speaking",
      "English — Listening",
    ],
  },
];

const languageLevels = {
  "English — Reading": 85,
  "English — Writing": 80,
  "English — Speaking": 75,
  "English — Listening": 88,
};

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-serif text-3xl">About me</h1>

      <div className="mt-10 grid gap-12 sm:grid-cols-2">
        <div>
          <SectionHeading title="Professional" />
          <ul className="space-y-2 text-sm text-muted">
            <li>CSE student at Premier University Chittagong</li>
            <li>Aspiring software developer with interests in web, mobile, and data</li>
            <li>Focused on big data analysis, machine learning, and practical software development</li>
            <li>Building projects that turn ideas into useful, real-world solutions</li>
            <li>Exploring software engineering, cloud computing, and emerging technologies</li>
            <li>Learning through hands-on projects, experimentation, and continuous improvement</li>
            <li>Interested in creating products that combine technology, creativity, and practical problem-solving</li>
          </ul>

          <div className="mt-8">
            <SectionHeading title="Education" />
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <div>
                  <span className="font-semibold text-ink">BSc in Computer Science & Engineering <br /> </span>Premier University Chittagong (PUC)
                </div>
                <div className="text-xs text-muted">Expected Graduation: Running</div>
              </li>
              <li>
                <div>
                  <span className="font-semibold text-ink">Higher Secondary Certificate (HSC) <br /></span>Bandarban Govt College, Bandarban
                </div>
                <div className="text-xs text-muted">Passing Year: 2021</div>
              </li>
              <li>
                <div>
                  <span className="font-semibold text-ink">Secondary School Certificate (SSC) <br /></span>Khutakhali High School, Cox&apos;s Bazar
                </div>
                <div className="text-xs text-muted">Passing Year: 2019</div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <SectionHeading title="Personal" />
          <div className="space-y-4 text-sm text-muted">
            <p>
              <span className="font-semibold text-ink">Who I am —</span> I&apos;m Mohammad Ashfak, a CSE student at Premier University Chittagong, interested in software development, big data analysis, machine learning, and emerging technologies.
            </p>
            <p>
              <span className="font-semibold text-ink">What I do —</span> I work across web development, mobile applications, programming, and data. I enjoy turning an idea into something people can actually interact with, whether that means a website, an application, a small tool, or a data-driven project.
            </p>
            <p>
              <span className="font-semibold text-ink">What I enjoy —</span> I enjoy building small tools that solve a real, specific problem. Sometimes the idea is simple, sometimes it grows into something much bigger, but I like the process of taking something from “what if?” to something that actually works.
            </p>
            <p>
              <span className="font-semibold text-ink">What I&apos;m curious about —</span> I&apos;m curious about how systems work behind the screen, how software scales, how products are designed, how data becomes useful information, and how a simple idea can eventually become something people depend on.
            </p>
            <p>
              <span className="font-semibold text-ink">What I&apos;m learning —</span> My academic journey has introduced me to software engineering, machine learning, big data, cloud computing, computer vision, databases, and different areas of modern computing. I&apos;m especially interested in understanding how these technologies connect and how they can be used to create practical products.
            </p>
            <p>
              <span className="font-semibold text-ink">How I work —</span> I like learning by building. Instead of only studying how something works, I prefer to create something with it, break it, fix it, improve it, and understand what happened along the way.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <SectionHeading title="Skills" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups
            .filter((g) => g.category !== "Soft Skills" && g.category !== "Languages")
            .map((g) => {
              const accentClasses = {
                Programming: "border-signal/20 bg-signal/5 text-signal",
                "Web Development": "border-signalDeep/20 bg-signalDeep/10 text-signalDeep",
                "Mobile Development": "border-signalDeep/20 bg-signalDeep/10 text-signalDeep",
                "Data & Big Data": "border-signal/20 bg-signal/5 text-signal",
                "AI & Computer Vision": "border-signalDeep/20 bg-signalDeep/10 text-signalDeep",
                Databases: "border-signalDeep/20 bg-signalDeep/10 text-signalDeep",
                "Tools & Technologies": "border-signal/20 bg-signal/5 text-signal",
              }[g.category] ?? "border-line bg-white/40 text-ink";

              return (
                <div key={g.category} className={`rounded-2xl border p-4 ${accentClasses}`}>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    <p className="text-xs font-bold uppercase tracking-[0.12em]">
                      {g.category}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-signal/20 bg-signal/10 px-2.5 py-1 text-xs font-medium text-signal shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="mt-10 grid gap-6">
          <div className="w-full max-w-[22rem] rounded-2xl border border-signal/20 bg-signal/5 p-4 text-signal">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              <p className="text-xs font-bold uppercase tracking-[0.12em]">Soft Skills</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {skillGroups
                .find((g) => g.category === "Soft Skills")
                ?.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-signal/20 bg-signal/10 px-2.5 py-1 text-center text-xs font-medium text-signal shadow-sm"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>

          <div className="w-full max-w-[22rem] rounded-2xl border border-signal/20 bg-signal/5 p-2.5 text-signal">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-signal">Languages</p>
            </div>
            <div className="mt-2 space-y-2">
              {skillGroups
                .find((g) => g.category === "Languages")
                ?.items.map((item) => {
                  const level = languageLevels[item as keyof typeof languageLevels];

                  return (
                    <div key={item} className="space-y-0.5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-[10px] font-medium text-signal">{item}</span>
                        {level ? <span className="text-[9px] font-semibold text-signal">{level}%</span> : null}
                      </div>
                      {level ? (
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/70">
                          <div
                            className="h-full rounded-full bg-signal"
                            style={{ width: `${level}%` }}
                          />
                        </div>
                      ) : null}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

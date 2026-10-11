const features = [
  { title: "Fast Setup", text: "สร้างเว็บง่ายๆ และ deploy ได้ไวสำหรับฝึก AWS จริง" },
  { title: "Cloud Ready", text: "ออกแบบให้พร้อมใช้กับ EC2, S3, ECS หรือ Amplify" },
  { title: "Learning Focus", text: "เหมาะสำหรับฝึก CI/CD, DNS, SSL, และ monitoring" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="badge">AWS Practice Project</div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Deploy Demo</p>
            <h1>Simple website for learning AWS deployment</h1>
            <p className="subtitle">
              เว็บหน้าเดียวที่ง่ายต่อการฝึก deploy, ทดสอบ CI/CD และเรียนรู้การตั้งค่า
              infrastructure บน AWS
            </p>

            <div className="cta-row">
              <a href="#features" className="primary-btn">
                ดูฟีเจอร์
              </a>
              <a href="#about" className="secondary-btn">
                เรียนรู้เพิ่ม
              </a>
            </div>
          </div>

          <div className="status-panel" aria-label="project summary">
            <div className="mini-card">
              <span className="label">Stack</span>
              <strong>Next.js + AWS</strong>
            </div>
            <div className="mini-card">
              <span className="label">Purpose</span>
              <strong>Practice Deploy</strong>
            </div>
            <div className="mini-card highlight">
              <span className="label">Status</span>
              <strong>Ready to ship</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon">✦</div>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section id="about" className="about-section">
        <div>
          <p className="eyebrow">Why this app?</p>
          <h2>Perfect for AWS learning practice</h2>
        </div>
        <p>
          แอปนี้ออกแบบมาเพื่อให้คุณสามารถปรับแต่ง UI, เชื่อมต่อกับ backend, และฝึก
          deploy ไปยังบริการ AWS ได้แบบง่ายและเร็ว โดยไม่ต้องกังวลเรื่องความซับซ้อน
          มากเกินไป
        </p>
      </section>
    </main>
  );
}

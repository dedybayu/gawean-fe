export default function Landing() {
  return (
    <main>
      {/* HERO */}
      <section className="hero min-h-[90vh] bg-base-100 relative overflow-hidden">
        {/* Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />

        <div className="hero-content text-center relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-base-content leading-tight">
              Ngatur Penggawean,<br className="hidden md:block" />
              Ora Ribet
            </h2>

            <p className="text-lg text-base-content/70 mb-8">
              Gawean iso mbantu tim ngatur tugas, ngawasi progres,
              lan kolaborasi luwih rapi ing siji platform.
            </p>

            <div className="flex justify-center gap-4">
              <button className="btn btn-primary btn-lg">
                Mulai Gratis
              </button>
              <button className="btn btn-outline btn-lg">
                Pelajari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-base-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Manajemen Tugas"
              desc="Atur tugas kanthi status jelas, deadline rapi, lan tanggung jawab sing cetho."
            />
            <Feature
              title="Kolaborasi Tim"
              desc="Tugasi anggota tim lan rembugan langsung ing task tanpa ribet."
            />
            <Feature
              title="Pantau Progres"
              desc="Delengen progres proyek kanthi real-time lan transparan."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-all">
      <div className="card-body">
        <h3 className="card-title text-base-content">
          {title}
        </h3>
        <p className="text-base-content/70 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

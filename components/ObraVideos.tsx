"use client";

type ObraVideosProps = {
  videos: string[];
  title: string;
};

export default function ObraVideos({ videos, title }: ObraVideosProps) {
  if (videos.length === 0) return null;

  return (
    <section className="obra-videos" aria-labelledby="videos-title">
      <div className="obra-videos-heading">
        <p className="section-number">Registro audiovisual</p>
        <h2 id="videos-title">La obra en ejecución.</h2>
        <p>Videos reales del proceso de trabajo realizado por ZS GROUP SRL.</p>
      </div>

      <div className="obra-videos-grid">
        {videos.map((video, index) => (
          <article className="obra-video-card" key={video}>
            <video
              controls
              preload="metadata"
              playsInline
              aria-label={`${title} - video ${index + 1}`}
            >
              <source src={video} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
            <div>
              <span>Video {String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

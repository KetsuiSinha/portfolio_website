'use client';

type ProjectMediaProps = {
  type?: 'image' | 'video';
  src?: string;
  alt?: string;
};

const ProjectMedia = ({ type, src, alt = 'Project media' }: ProjectMediaProps) => {
  if (!src || !type) {
    return (
      <div
        className="cursor-hover-target"
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid var(--border)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--text-secondary)',
          fontSize: '13px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        Project Screenshot / Demo Here
      </div>
    );
  }

  if (type === 'video') {
    return (
      <video
        className="cursor-hover-target project-media-video"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'contain', border: '1px solid var(--border)', background: 'var(--card)' }}
      />
    )
  }

  return (
    <img
      className="cursor-hover-target project-media-img"
      src={src}
      alt={alt}
      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', border: '1px solid var(--border)', display: 'block', margin: '0 auto', background: 'var(--card)' }}
    />
  )
};

export default ProjectMedia;

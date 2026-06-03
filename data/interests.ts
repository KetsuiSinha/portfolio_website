export type Interest = {
  title: string;
  description: string;
  milestones: string[];
  image: string;
  imageAlt: string;
};

export const interests: Interest[] = [
  {
    title: 'HomeLabbing',
    description: 'Building self-hosted infrastructure and experimenting with systems.',
    milestones: [
      'Understanding Arduino fundamentals and hardware workflows.',
      'Learning Raspberry Pi setups for practical home experiments.',
      'Making and maintaining personal servers for self-hosted tools.',
      'Building Docker images for portable and repeatable environments.',
      'Managing Proxmox containers for isolated infrastructure projects.',
      'Automating backups, monitoring and observability via Prometheus/Grafana.',
      'Secure remote access and VPN configurations for safe external access.',
    ],
    image: '/hobbies/Homelab.png',
    imageAlt: 'Home lab milestone placeholder image',
  },
  {
    title: 'Reading',
    description: 'Technology, psychology, business, and systems thinking through focused long-form reading.',
    milestones: [
      'System design books that shaped my architecture thinking.',
      'Technical knowledge notes to retain and apply what I learn.',
      'Novels that improve perspective, creativity, and storytelling sense.',
      'Maintaining a Zettelkasten-style note system to connect ideas.',
      'Curating concise reading lists and summaries for long-term review.',
      'Consuming long-form interviews and podcasts to complement reading.',
    ],
    image: '/hobbies/Reading.png',
    imageAlt: 'Reading milestone placeholder image',
  },
  {
    title: 'Gaming',
    description: 'Strategy, competitive, and immersive experiences with a strong preference for challenging worlds.',
    milestones: [
      'Soulsborne games for challenge, patience, and pattern mastery.',
      'RPGs for narrative depth, progression systems, and world immersion.',
      'Build optimization and progression planning across long-form campaigns.',
      'Co-op and multiplayer sessions that improve decision speed and adaptability.',
      'Studying balance and meta to inform tactical play and theorycrafting.',
      'Speedrunning and optimization challenges to push mechanical limits.',
    ],
    image: '/hobbies/Gaming.png',
    imageAlt: 'Gaming milestone placeholder image',
  },
  {
    title: 'Anime',
    description: 'Stories, world-building, and visual creativity across a broad range of genres.',
    milestones: [
      '500+ anime watched, from classics to modern seasonal releases.',
      'Strong interest in character arcs, long-form storytelling, and pacing.',
      'Exploring direction styles, soundtrack design, and visual composition.',
      'Following seasonal releases while revisiting foundational classics.',
      'Writing short analysis pieces to unpack favorite scenes and themes.',
      'Collecting artbooks and studying key animation frames and techniques.',
    ],
    image: '/hobbies/Anime.png',
    imageAlt: 'Anime milestone placeholder image',
  },
];

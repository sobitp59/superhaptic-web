'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Superhaptic transformed our mobile web experience. Users love the tactile feedback - it feels native!',
      author: 'Sarah Chen',
      role: 'Lead Developer @ TechCo',
      avatar: 'S',
    },
    {
      quote: 'The API is so simple yet powerful. Added haptics to our entire app in under an hour. Game changer!',
      author: 'Marcus Johnson',
      role: 'Frontend Engineer @ StartupXYZ',
      avatar: 'M',
    },
    {
      quote: 'Finally, a haptic library that just works. Zero config, TypeScript support, and it\'s tiny. Perfect!',
      author: 'Aisha Patel',
      role: 'Full Stack Developer',
      avatar: 'A',
    },
  ];

  return (
    <section className="section testimonials">
      <h2 className="section-title fade-in">What Developers Say</h2>
      <p className="section-description fade-in">Join thousands of developers building better experiences</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card fade-in">
            <p className="testimonial-quote">&quot;{testimonial.quote}&quot;</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

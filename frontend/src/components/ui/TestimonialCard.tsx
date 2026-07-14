interface Testimonial {
  id: string;
  author: string;
  role?: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400">&#9733;</span>
        ))}
      </div>
      <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-800">{testimonial.author}</p>
        {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
      </div>
    </div>
  );
}

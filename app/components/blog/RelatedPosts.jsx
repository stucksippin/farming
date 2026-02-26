export default function RelatedPosts({ posts, currentPost }) {
    const relatedPosts = posts
        .filter(p => p.slug !== currentPost.slug && p.category === currentPost.category)
        .slice(0, 3);

    if (relatedPosts.length === 0) return null;

    return (
        <div className="mt-12 pt-12 border-t border-[#F7C35F]/20">
            <h2 className="text-2xl font-bold text-[#F7C35F] mb-8">Похожие статьи</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relPost) => (
                    <a
                        key={relPost.slug}
                        href={`/blog/${relPost.slug}`}
                        className="group p-6 bg-[#334C35]/90 border border-[#F7C35F]/20 rounded-xl hover:border-[#F7C35F]/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        <span className="inline-block px-3 py-1 bg-[#F7C35F]/10 text-[#F7C35F] text-xs font-semibold rounded-full mb-3 group-hover:bg-[#F7C35F]/20 transition-colors">
                            {relPost.category}
                        </span>
                        <h3 className="text-lg font-bold text-[#F7C35F] mb-2 group-hover:text-[#e5b44f] transition-colors">
                            {relPost.title}
                        </h3>
                        <p className="text-[#EADCC1]/70 text-sm mb-4 line-clamp-2">
                            {relPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#EADCC1]/60">
                            <time dateTime={relPost.date}>{relPost.date}</time>
                            <span>{relPost.readTime}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
export default function Footer() {
    return (
        <footer className="w-full border-t border-border px-16 py-8 text-sm text-muted-foreground">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
                <span>© {new Date().getFullYear()} Devang Ray</span>
                <span>Built with Next.js</span>
            </div>
        </footer>
    );
}
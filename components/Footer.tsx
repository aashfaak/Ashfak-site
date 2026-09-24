export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl justify-center px-6 py-5 text-center text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Ashfak. All rights reserved.</p>
      </div>
    </footer>
  );
}

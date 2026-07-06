export default function Footer() {
  return (
    <footer className="mainContainer py-8 flex justify-between">
      <h1 className="font-serif text-[32px] tracking-[0.06em]">Trovely</h1>
      <nav className="flex justify-evenly items-center gap-10">
        <a href="http://">Shop</a>
        <a href="http://">About</a>
        <a href="http://">Contact</a>
      </nav>
      <div className="flex justify-between items-center gap-4">
        <a href="http://">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="http://">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-instagram"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <span className="font-serif text-(--stone1)">© 2026</span>
      </div>
    </footer>
  );
}

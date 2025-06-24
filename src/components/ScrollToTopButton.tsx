interface ScrollToTopButtonProps {
  showScrollTop: boolean;
}

export default function ScrollToTopButton({ showScrollTop }: ScrollToTopButtonProps) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="scroll-top-btn"
      className={`
          fixed bottom-12 md:bottom-32 right-6 md:right-32 z-50 bg-primary rounded-full flex justify-center items-center p-1 transition-all duration-500 ease-in-out transform ${
            showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          } cursor-pointer
        `}
    >
      <i className="bx bx-arrow-up-stroke text-4xl text-background dark:text-dark-background"></i>
    </button>
  );
}

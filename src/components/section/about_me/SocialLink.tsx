type SocialLinkProps = {
  href: string;
  label: string;
  iconClass: string;
};

export default function SocialLink({ href, label, iconClass }: SocialLinkProps) {
  return (
    <a href={href} target="_blank" aria-label={label} className="text-3xl text-primary transition-all duration-200 hover:drop-shadow-[0_0_8px_#33ce78]">
      <i className={iconClass}></i>
    </a>
  );
}

const NavItem = ({ path, title, icon, sidebarOpen, onClick, isActive }) => {
  const active = isActive(path);
  const IconComponent = icon;

  return (
    <button
      onClick={() => onClick(path)}
      className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 cursor-pointer ${
        active
          ? "gradient-primary text-primary-foreground shadow-glow"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      }`}
      title={!sidebarOpen ? title : undefined}
    >
      <IconComponent className="h-5 w-5 shrink-0" />
      {sidebarOpen && <span>{title}</span>}
    </button>
  );
};

export default NavItem;
import { Bell, ChevronDown, LogOut, User, Menu, Search } from "lucide-react";

const Topbar = ({ setMobileOpen, profileOpen, setProfileOpen, handleNav }) => {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-border bg-card/80 backdrop-blur-xl px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMobileOpen(true)}
          className="text-muted-foreground lg:hidden cursor-pointer"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive" />
          </span>
        </button>

        <div className="mx-2 hidden h-8 w-px bg-border md:block cursor-pointer" />
        <div className="relative cursor-pointer">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-3 rounded-xl p-1.5 hover:bg-secondary transition-all cursor-pointer"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-primary shadow-sm">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-foreground leading-tight">
                Admin
              </p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>

            <ChevronDown
              className={`hidden h-4 w-4 text-muted-foreground transition-transform md:block ${
                profileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {profileOpen && (
            <>
              <div
                className="fixed inset-0 z-[9999999]"
                onClick={() => setProfileOpen(false)}
              />
              <div className="absolute right-0 top-14 z-50 w-56 animate-fade-in rounded-xl border border-border bg-card p-2 shadow-xl">
                <div className="mb-2 rounded-lg bg-secondary/50 p-3">
                  <p className="text-sm font-semibold text-foreground">
                    Admin User
                  </p>
                  <p className="text-xs text-muted-foreground">
                    admin@agrigrow.com
                  </p>
                </div>

                <button
                  onClick={() => {
                    handleNav("/dashboard/settings");
                    setProfileOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                >
                  <User className="h-4 w-4 text-muted-foreground" />
                  Profile Settings
                </button>

                <div className="my-1 h-px bg-border" />

                <button
                  onClick={() => {
                    handleNav("/");
                    setProfileOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-destructive hover:bg-destructive/5 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

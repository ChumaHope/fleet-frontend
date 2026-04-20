"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Plus,
  Search,
  Settings,
  User,
  X,
  Truck,
  ClipboardList,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

type Role = "ADMIN" | "FLEET_MANAGER" | "DRIVER";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [loggedIn, setLoggedIn] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [quickOpen, setQuickOpen] = useState(false);

  const role: Role = "FLEET_MANAGER";

  const user = {
    name: "Hope Chuma",
    roleLabel:
      role === "ADMIN"
        ? "Administrator"
        : role === "FLEET_MANAGER"
        ? "Fleet Manager"
        : "Driver",
  };

  const navItems = useMemo(
    () => [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Vehicles", href: "/vehicles" },
      { label: "Drivers", href: "/drivers" },
      { label: "Trips", href: "/trips" },
      { label: "Reports", href: "/reports" },
      { label: "Maintenance", href: "/maintenance" },
    ],
    []
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setLoggedIn(false);
    router.push("/login");
  };

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-8">
          {/* Mobile Menu */}
          <button
            className="rounded-lg p-2 text-slate-600 transition hover:bg-blue-600 hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* LOGO */}
          <Link href="/dashboard" className="flex items-center">
            <Image
              src="/logo.png"
              alt=""
              width={160}
              height={50}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* SEARCH */}
        {loggedIn && (
          <div className="hidden w-full max-w-md px-6 xl:block">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search vehicles, drivers, trips..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </div>
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <button className="relative rounded-lg p-2 text-slate-600 transition hover:bg-blue-600 hover:text-white">
            <Bell size={19} />
            <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-green-500" />
          </button>

          {/* Quick Actions */}
          <div className="relative">
            <button
              onClick={() => setQuickOpen(!quickOpen)}
              className="rounded-lg bg-green-600 p-2 text-white transition hover:bg-blue-600"
            >
              <Plus size={18} />
            </button>

            {quickOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                <QuickItem icon={<Truck size={16} />} label="Add Vehicle" />
                <QuickItem icon={<Users size={16} />} label="Add Driver" />
                <QuickItem
                  icon={<ClipboardList size={16} />}
                  label="Assign Trip"
                />
                <QuickItem
                  icon={<BarChart3 size={16} />}
                  label="Create Report"
                />
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-blue-600 hover:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-900 text-sm font-semibold text-white">
                HC
              </div>

              <div className="hidden text-left md:block">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs opacity-80">{user.roleLabel}</p>
              </div>

              <ChevronDown size={16} />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                <MenuItem icon={<User size={16} />} label="My Profile" />
                <MenuItem icon={<Settings size={16} />} label="Settings" />
                <MenuItem
                  icon={<ShieldCheck size={16} />}
                  label="Company Settings"
                />

                <div className="my-2 border-t border-slate-100" />

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  isActive(item.href)
                    ? "bg-blue-600 text-white"
                    : "text-slate-700 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-blue-600 hover:text-white">
      {icon}
      {label}
    </button>
  );
}

function QuickItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-blue-600 hover:text-white">
      {icon}
      {label}
    </button>
  );
}
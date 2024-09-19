import OnViewAnimation from "./ui/OnViewAnimation";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import NavProfileDropdown from "./navbar-profile-dropdown";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import HoverLinks from "./ui/HoverLinks";
import { ModeToggle } from "./ui/ModeToggle";
import Logo from "./logo";

export const NavItems = [
  {
    id: "0",
    title: "Sign up",
    icon: "",
    href: "/api/auth/register",
  },
  {
    id: "1",
    title: "Login",
    icon: "",
    href: "/api/auth/login",
  },
];

const NavBar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <OnViewAnimation
      startFrom="top"
      id="home"
      className=" sticky z-[100] h-14 inset-x-0 top-0 w-full border-b bg-background/75 backdrop-blur-lg transition-all"
    >
      <MaxWidthWrapper>
        {/* Menu Items */}
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className=" py-3 flex font-semibold">
            <Logo className="h-8" text />
          </Link>

          <div className="flex gap-3 items-center">
            {user ? (
              <>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                      className: "hidden sm:flex items-center gap-1",
                    })}
                  >
                    <span>Dashboard ✨</span>
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
                <NavProfileDropdown isAdmin={isAdmin} user={user} />
              </>
            ) : (
              <>
                <HoverLinks links={NavItems} />
                <div className="h-8 w-px bg-border hidden sm:block" />
                <Link
                  href="/configure/upload"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Create <ArrowRight className="ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
            <ModeToggle />
          </div>
        </div>
      </MaxWidthWrapper>
    </OnViewAnimation>
  );
};

export default NavBar;

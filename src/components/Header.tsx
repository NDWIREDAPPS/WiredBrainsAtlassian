import * as React from "react"
import { Link, useLocation } from "@tanstack/react-router"
import { Menu } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { atlassianSolutions, marketplaceApps, mainNavItems, footerNavItems } from "@/lib/data"


export default function Header() {
    const location = useLocation()
    const isOnSolutionsPage = location.pathname.startsWith('/solutions/')
    const isOnMarketplacePage = location.pathname.startsWith('/marketplace-apps/')

    return (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
            <header className="w-full max-w-7xl border bg-background/95 backdrop-blur-sm rounded-xl px-4 md:px-6 shadow-sm">
                <div className="flex h-16 items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <Link to="/" className="flex items-center gap-3 shrink-0">
                            <img
                                src="/achlys_logo.svg"
                                alt="Achlys Logo"
                                className="w-15"
                            />
                            <span className="text-xl font-semibold tracking-tight text-slate-700">
                                Achlys Solutions
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <NavigationMenu className="hidden xl:flex">
                            <NavigationMenuList>
                                {mainNavItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-md")}>
                                            <Link
                                                to={item.href}
                                                activeProps={{
                                                    className: "text-purple-600 font-semibold"
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn(
                                        "bg-transparent text-md",
                                        isOnSolutionsPage && "text-purple-600 font-semibold"
                                    )}>
                                        Atlassian Solutions
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {atlassianSolutions.map((item) => (
                                                <ListItem key={item.title} title={item.title} to={item.href}>
                                                    {item.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className={cn(
                                        "bg-transparent text-md",
                                        isOnMarketplacePage && "text-purple-600 font-semibold"
                                    )}>
                                        Marketplace Apps
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {marketplaceApps.map((item) => (
                                                <ListItem key={item.title} title={item.title} to={item.href}>
                                                    {item.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {footerNavItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent text-md")}>
                                            <Link
                                                to={item.href}
                                                activeProps={{
                                                    className: "text-purple-600 font-semibold"
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex h-9 items-center justify-center rounded-lg bg-purple-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
                        >
                            Book Consultation
                        </Link>

                        {/* Mobile Navigation Trigger */}
                        <div className="xl:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <button className="p-2 -mr-2 hover:bg-accent rounded-md transition-colors" aria-label="Open menu">
                                        <Menu className="w-6 h-6" />
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col p-8 bg-background/98 backdrop-blur-xl">
                                    <nav className="flex flex-col w-full gap-2 items-center">
                                        {mainNavItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                to={item.href}
                                                className="w-full py-4 text-center text-xl font-semibold rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all active:scale-95"
                                                activeProps={{
                                                    className: "bg-purple-100 text-purple-600"
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}

                                        <Accordion type="single" collapsible className="w-full">
                                            <AccordionItem value="solutions" className="border-none">
                                                <AccordionTrigger className="text-xl font-semibold hover:no-underline py-4 flex justify-center gap-2 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all `data-[state=open]:text-purple-600">
                                                    Atlassian Solutions
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col gap-1 pb-2">
                                                    {atlassianSolutions.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            to={item.href}
                                                            className="w-full py-3 text-center text-base font-medium text-muted-foreground rounded-lg hover:bg-purple-50/50 hover:text-purple-600 transition-all"
                                                            activeProps={{
                                                                className: "bg-purple-100 text-purple-600 font-semibold"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>

                                            <AccordionItem value="apps" className="border-none mt-1">
                                                <AccordionTrigger className="text-xl font-semibold hover:no-underline py-4 flex justify-center gap-2 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all `data-[state=open]:text-purple-600">
                                                    Marketplace Apps
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col gap-1 pb-2">
                                                    {marketplaceApps.map((item) => (
                                                        <Link
                                                            key={item.title}
                                                            to={item.href}
                                                            className="w-full py-3 text-center text-base font-medium text-muted-foreground rounded-lg hover:bg-purple-50/50 hover:text-purple-600 transition-all"
                                                            activeProps={{
                                                                className: "bg-purple-100 text-purple-600 font-semibold"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>

                                        {footerNavItems.map((item) => (
                                            <Link
                                                key={item.title}
                                                to={item.href}
                                                className="w-full py-4 text-center text-xl font-semibold rounded-xl hover:bg-purple-50 hover:text-purple-600 transition-all active:scale-95"
                                                activeProps={{
                                                    className: "bg-purple-100 text-purple-600"
                                                }}
                                            >
                                                {item.title}
                                            </Link>
                                        ))}

                                        {/* Mobile CTA */}
                                        <div className="mt-8 w-full md:hidden px-2">
                                            <Link
                                                to="/contact"
                                                className="flex w-full h-14 items-center justify-center rounded-2xl bg-purple-600 text-lg font-semibold text-white transition-all hover:bg-purple-700"
                                            >
                                                Book Consultation
                                            </Link>
                                        </div>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={to as any}
                    ref={ref as any}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
                        className
                    )}
                    activeProps={{
                        className: "[&>div]:text-purple-600"
                    }}
                    {...props}
                >
                    <div className="text-sm font-semibold leading-none group-hover:text-purple-600 transition-colors">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

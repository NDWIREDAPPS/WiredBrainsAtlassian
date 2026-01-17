import * as React from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'
import {
  atlassianSolutions,
  marketplaceApps,
  mainNavItems,
  footerNavItems,
} from '@/lib/data'

export default function Header() {
  const location = useLocation()
  const isOnSolutionsPage = location.pathname.startsWith('/solutions/')
  const isOnMarketplacePage = location.pathname.startsWith('/marketplace-apps/')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const mobileMenuRef = React.useRef<HTMLDivElement>(null)

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Close menu when navigating
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <header className="w-full max-w-7xl border bg-card/95 backdrop-blur-sm rounded-xl px-4 md:px-6 shadow-sm relative">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/achlys_logo.png"
                alt="Wired Brains Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="flex-1 flex justify-center">
            {/* Desktop Navigation */}
            <NavigationMenu className="hidden xl:flex">
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent text-md',
                      )}
                    >
                      <Link
                        to={item.href}
                        activeProps={{
                          className: 'text-primary font-semibold',
                        }}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'bg-transparent text-md',
                      isOnSolutionsPage && 'text-primary font-semibold',
                    )}
                  >
                    Atlassian Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {atlassianSolutions.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          to={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      'bg-transparent text-md',
                      isOnMarketplacePage && 'text-primary font-semibold',
                    )}
                  >
                    Marketplace Apps
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {marketplaceApps.map((item) => (
                        <ListItem
                          key={item.title}
                          title={item.title}
                          to={item.href}
                        >
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {footerNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent text-md',
                      )}
                    >
                      <Link
                        to={item.href}
                        activeProps={{
                          className: 'text-primary font-semibold',
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

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <Link
              to="/about-us"
              hash="contact-section"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-background transition-colors hover:bg-primary/90"
            >
              Book Consultation
            </Link>

            {/* Mobile Navigation Trigger */}
            <div className="xl:hidden relative" ref={mobileMenuRef}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 hover:bg-accent rounded-md transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Glassmorphic Dropdown */}
              {isMobileMenuOpen && (
                <div className="absolute top-full right-0 mt-3 w-[300px] sm:w-[450px] max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-xl  shadow-2xl border border-[#f14a15]/20 animate-in fade-in slide-in-from-top-2 duration-200">
                  <nav className="flex flex-col gap-2 p-6">
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={handleLinkClick}
                        className="w-full py-4 text-center text-xl font-semibold rounded-xl hover:bg-[#f14a15]/10 hover:text-primary transition-all active:scale-95"
                        activeProps={{
                          className: 'bg-[#f14a15]/15 text-primary',
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="solutions" className="border-none">
                        <AccordionTrigger className="text-xl font-semibold hover:no-underline py-4 flex justify-center gap-2 rounded-xl hover:bg-[#f14a15]/10 hover:text-primary transition-all data-[state=open]:text-primary">
                          Atlassian Solutions
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 pb-2">
                          {atlassianSolutions.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={handleLinkClick}
                              className="w-full py-3 text-center text-base font-medium text-muted-foreground rounded-lg hover:bg-[#f14a15]/10 hover:text-primary transition-all"
                              activeProps={{
                                className:
                                  'bg-[#f14a15]/15 text-primary font-semibold',
                              }}
                            >
                              {item.title}
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="apps" className="border-none mt-1">
                        <AccordionTrigger className="text-xl font-semibold hover:no-underline py-4 flex justify-center gap-2 rounded-xl hover:bg-[#f14a15]/10 hover:text-primary transition-all data-[state=open]:text-primary">
                          Marketplace Apps
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-1 pb-2">
                          {marketplaceApps.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              onClick={handleLinkClick}
                              className="w-full py-3 text-center text-base font-medium text-muted-foreground rounded-lg hover:bg-[#f14a15]/10 hover:text-primary transition-all"
                              activeProps={{
                                className:
                                  'bg-[#f14a15]/15 text-primary font-semibold',
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
                        onClick={handleLinkClick}
                        className="w-full py-4 text-center text-xl font-semibold rounded-xl hover:bg-[#f14a15]/10 hover:text-primary transition-all active:scale-95"
                        activeProps={{
                          className: 'bg-[#f14a15]/15 text-primary',
                        }}
                      >
                        {item.title}
                      </Link>
                    ))}

                    {/* Mobile CTA */}
                    <div className="mt-4 w-full">
                      <Link
                        to="/about-us"
                        hash="contact-section"
                        onClick={handleLinkClick}
                        className="flex w-full h-14 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-background transition-all hover:bg-primary/90"
                      >
                        Book Consultation
                      </Link>
                    </div>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { to: string }
>(({ className, title, children, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to as any}
          ref={ref as any}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group',
            className,
          )}
          activeProps={{
            className: '[&>div]:text-primary',
          }}
          {...props}
        >
          <div className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

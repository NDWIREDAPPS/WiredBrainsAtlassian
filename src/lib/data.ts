import {
    Server,
    Cloud,
    GraduationCap,
    HeadphonesIcon,
    Lightbulb,
    Cpu,
    Clock,
    CheckSquare,
    FileText,
    Timer
} from "lucide-react"

export const atlassianSolutions = [
    {
        title: "IT Service Management",
        href: "/solutions/itsm",
        description: "Streamline your IT services and support with Jira Service Management.",
        icon: Server
    },
    {
        title: "Cloud Migration",
        href: "/solutions/cloud-migration",
        description: "Seamlessly transition your infrastructure to the Atlassian Cloud.",
        icon: Cloud
    },
    {
        title: "Training",
        href: "/solutions/training",
        description: "Expert-led training sessions for your teams on Atlassian tools.",
        icon: GraduationCap
    },
    {
        title: "Support & Managed Services",
        href: "/solutions/support",
        description: "Focus on your business while we handle your Atlassian ecosystem.",
        icon: HeadphonesIcon
    },
    {
        title: "Advisory & Licensing",
        href: "/solutions/advisory",
        description: "Strategic advice and cost-effective license management.",
        icon: Lightbulb
    },
    {
        title: "Integration & Performance",
        href: "/solutions/integration",
        description: "Optimize and connect your tools for peak organizational performance.",
        icon: Cpu
    },

    {
        title: "Rovo",
        href: "/solutions/rovo",
        description: "AI-powered search that helps teams find knowledge and insights across Atlassian tools.",
        icon: Cpu,
    },
    {
        title: "Jira Align",
        href: "/solutions/jira-align",
        description: "Connect strategy with execution to scale agile planning across the organization.",
        icon: Server,
    },
]

export const marketplaceApps = [
    {
        title: "Time Sheet",
        href: "/marketplace-apps/time-sheet",
        description: "Accurate time tracking and reporting for Jira projects.",
        icon: Clock
    },
    {
        title: "Checklist App",
        href: "/marketplace-apps/checklist",
        description: "Manage tasks and quality control with integrated checklists.",
        icon: CheckSquare
    },
    {
        title: "Issue Template",
        href: "/marketplace-apps/issue-template",
        description: "Standardize your workflow with reusable issue templates.",
        icon: FileText
    },
    {
        title: "Timer App",
        href: "/marketplace-apps/timer",
        description: "Real-time timers to boost productivity and focus.",
        icon: Timer
    },
]

export const mainNavItems = [
    { title: "Home", href: "/" },
]

export const footerNavItems = [
    { title: "About Us", href: "/about" },
    { title: "Blogs", href: "/blogs" },
]

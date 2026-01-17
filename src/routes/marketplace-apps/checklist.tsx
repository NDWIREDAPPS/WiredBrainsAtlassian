import { createFileRoute } from '@tanstack/react-router'
import {
  ExternalLink,
  BookOpen,
  ListChecks,
  Settings,
  Palette,
  CheckCircle2,
  FileSpreadsheet,
  Workflow,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageZoom } from '@/components/ui/image-zoom'

// External links used in this page
const MARKETPLACE_URL =
  'https://marketplace.atlassian.com/apps/1238405/checklists-for-jira-by-achlys?hosting=cloud&tab=overview'
const DOCS_URL =
  'https://achlys-apps.atlassian.net/wiki/spaces/CFJBA/pages/22904833/User+Guide'

export const Route = createFileRoute('/marketplace-apps/checklist')({
  head: () => ({
    meta: [
      { title: 'Checklists for Jira | Wired Brains' },
      {
        name: 'description',
        content:
          'Streamline Jira tasks with smart checklists, custom statuses, automation and workflow integration. Built on Atlassian Forge for compliance and accountability.',
      },
      {
        property: 'og:title',
        content: 'Checklists for Jira | Wired Brains',
      },
      {
        property: 'og:description',
        content:
          'Streamline Jira tasks with smart checklists, custom statuses and workflow automation built on Forge.',
      },
      {
        property: 'og:url',
        content:
          'https://achlyssolutions.netlify.app/marketplace-apps/checklist',
      },
    ],
  }),
  component: ChecklistPage,
})

function ChecklistPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-10 text-center space-y-8 max-w-5xl">
          <img
            src="/checklist.png"
            alt="Checklist App"
            className="w-20 h-20 mx-auto"
          />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f14a15]/10 border border-[#f14a15]/20">
            <ListChecks className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Checklist App built on Forge
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Streamline Jira tasks with To-Do Lists, automation, compliance and
            accountability
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Track tasks with smart checklists in Jira. Create multiple
            checklists with customizable statuses, colors and descriptions
            directly in Jira issues to streamline task management and boost team
            productivity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 rounded-2xl text-lg group"
              asChild
            >
              <a href={MARKETPLACE_URL} target="_blank" rel="noreferrer">
                View on Marketplace
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 h-14 rounded-2xl text-lg border-border hover:bg-[#f14a15]/10 group"
              asChild
            >
              <a href={DOCS_URL} target="_blank" rel="noreferrer">
                <BookOpen className="mr-2 w-5 h-5" />
                Read Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Container */}
      <div className="container mx-auto px-4 md:px-10 space-y-24 md:space-y-32">
        {/* Feature 1: Smart Checklists */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f14a15]/10 flex items-center justify-center">
              <ListChecks className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
              Track tasks with smart checklists in Jira
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create multiple checklists with customizable statuses, colors and
              descriptions directly in Jira issues to streamline task management
              and boost team productivity.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Create and manage checklists per issue</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Track status with visual cues and lozenges</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Import/Export checklists via CSV</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-border overflow-hidden shadow-xl bg-card p-2">
              <ImageZoom
                src="/checklists-app/checklists-1.jpg"
                alt="Smart Checklists in Jira"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Project Access Control (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f14a15]/10 flex items-center justify-center">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
              Control checklist access per Jira project
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Easily manage where Checklist for Jira is enabled. Turn the plugin
              on or off for individual projects with intuitive toggles and bulk
              action controls from a clean admin interface.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Enable or disable per project</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Bulk action controls for admins</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Clean, intuitive admin interface</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-border overflow-hidden shadow-xl bg-card p-2">
              <ImageZoom
                src="/checklists-app/checklists-2.jpg"
                alt="Project Access Control"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 3: Custom Statuses */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f14a15]/10 flex items-center justify-center">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
              Define custom checklist statuses with colors
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Add, reorder and manage checklist statuses with custom names,
              colors and checked states. Choose between "status only", "checkbox
              only" or both per project for maximum flexibility and clarity.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Custom status names and colors</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Flexible display modes per project</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Reorder and manage statuses easily</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-border overflow-hidden shadow-xl bg-card p-2">
              <ImageZoom
                src="/checklists-app/checlists-3.jpg"
                alt="Custom Checklist Statuses"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>
      </div>

      {/* More Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-10 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-primary rounded-full" />
            More Details
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Designed for product teams, developers, QA and project managers
              who want seamless task breakdowns inside Jira issues.
            </p>

            {/* Key Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f14a15]/10 flex items-center justify-center shrink-0">
                  <ListChecks className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Create and Manage Checklists
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Add multiple checklists per issue, rename them and manage
                    todo items efficiently.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f14a15]/10 flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Track Status with Visual Cues
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Status lozenges help track progress at a glance with
                    project-specific customization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f14a15]/10 flex items-center justify-center shrink-0">
                  <FileSpreadsheet className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Import/Export Checklists
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Use CSV to reuse templates or generate reports easily.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f14a15]/10 flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Customize Per Project
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Statuses, display modes and plugin availability can all be
                    set project-wise.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 md:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-[#f14a15]/10 flex items-center justify-center shrink-0">
                  <Workflow className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Workflow Integration
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automate checklist completion via post-function when issues
                    move to done/resolved statuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-10 h-14 rounded-2xl text-lg group"
            asChild
          >
            <a href={MARKETPLACE_URL} target="_blank" rel="noreferrer">
              View App on Marketplace
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

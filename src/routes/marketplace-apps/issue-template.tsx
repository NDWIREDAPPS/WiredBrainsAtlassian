import { createFileRoute } from '@tanstack/react-router'
import {
  ExternalLink,
  BookOpen,
  FileText,
  Settings,
  CheckCircle2,
  Users,
  FolderOpen,
  Search,
  Zap,
  LifeBuoy,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageZoom } from '@/components/ui/image-zoom'

// TODO: Replace with actual links when available
const MARKETPLACE_URL = '#' // TODO: Add Atlassian Marketplace URL
const DOCS_URL = '#' // TODO: Add Documentation URL

export const Route = createFileRoute('/marketplace-apps/issue-template')({
  head: () => ({
    meta: [
      { title: 'Issue Template App for Jira | Achlys Solutions' },
      {
        name: 'description',
        content:
          'Standardize Jira issue creation with reusable templates. Pre-fill fields, auto-populate values and ensure consistency across teams and projects.',
      },
      {
        property: 'og:title',
        content: 'Issue Template App for Jira | Achlys Solutions',
      },
      {
        property: 'og:description',
        content:
          'Standardize Jira issue creation with reusable templates and field auto-population.',
      },
      {
        property: 'og:url',
        content:
          'https://achlyssolutions.netlify.app/marketplace-apps/issue-template',
      },
    ],
  }),
  component: IssueTemplatePage,
})

function IssueTemplatePage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-10 text-center space-y-8 max-w-5xl">
          <img
            src="/issue-template.png"
            alt="Issue Template App"
            className="w-20 h-20 mx-auto"
          />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100">
            <FileText className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-700">
              Create Issues Faster. Ensure Consistency.
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Standardize Jira Issue Creation with Reusable Templates
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Pre-defined templates for consistent, fast and accurate issue
            creation across teams and projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 rounded-2xl text-lg group"
              asChild
            >
              <a href={MARKETPLACE_URL} target="_blank" rel="noreferrer">
                Get It on Marketplace
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 h-14 rounded-2xl text-lg border-slate-200 hover:bg-slate-50 group"
              asChild
            >
              <a href={DOCS_URL} target="_blank" rel="noreferrer">
                <BookOpen className="mr-2 w-5 h-5" />
                View Documentation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Container */}
      <div className="container mx-auto px-4 md:px-10 space-y-24 md:space-y-32">
        {/* Feature 1: Reusable Templates */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Reusable Templates for Every Need
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Create a library of templates that teams can select when creating
              new issues. Templates can include summary text, default field
              values and pre-assigned settings to accelerate issue creation and
              maintain standards.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Summary and description text</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Default values for labels, components and custom fields
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Pre-assigned assignees or reporting defaults</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              {/* TODO: Replace with actual screenshot */}
              <ImageZoom
                src="/issue-template-app/reusable-templates.jpg"
                alt="Reusable Templates"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Project & Role Customization (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Customize Templates by Project & Role
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Templates can be scoped by project, team, or user group - ensuring
              only relevant templates are shown. This prevents template overload
              and improves usability for end users.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Restrict template usage by user or role</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Multi-project support for templates</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Template categories for easy selection</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              {/* TODO: Replace with actual screenshot */}
              <ImageZoom
                src="/issue-template-app/project-role-customization.jpg"
                alt="Project & Role Customization"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 3: Auto-Populate Fields */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Pre-Fill & Auto-Populate Fields
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Templates auto-populate critical fields in the issue creation
              form, reducing repetitive typing and ensuring key details are
              included every time. Organize templates into categories and add
              search filters for quick access.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  Auto-fill summary, description, labels and components
                </span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Template categories and search filters</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Reduce errors and missing fields</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              {/* TODO: Replace with actual screenshot */}
              <ImageZoom
                src="/issue-template-app/auto-populate-fields.jpg"
                alt="Auto-Populate Fields"
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <span className="w-1.5 h-8 bg-indigo-600 rounded-full" />
            More Details
          </h2>
          <div className="space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              The <strong className="text-slate-900">Issue Template App</strong>{' '}
              by Achlys Solutions helps teams standardize issue creation in Jira
              through reusable templates that pre-populate field values and
              reduce manual effort. Built for Atlassian Cloud, it integrates
              directly into your Jira issue creation experience without
              disrupting existing workflows.
            </p>

            {/* Key Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Easy Template Management
                  </h3>
                  <p className="text-sm text-slate-600">
                    Create, edit, delete, clone and version templates with
                    export/import capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Built for Teams
                  </h3>
                  <p className="text-sm text-slate-600">
                    Ideal for product, support and engineering teams ensuring
                    consistent issue formats.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <FolderOpen className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Template Categories
                  </h3>
                  <p className="text-sm text-slate-600">
                    Group templates for easy selection, even in environments
                    with many templates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Quick Search & Filters
                  </h3>
                  <p className="text-sm text-slate-600">
                    Find the right template quickly with search and filtering
                    capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Jira Cloud Native
                  </h3>
                  <p className="text-sm text-slate-600">
                    Works with Jira Cloud projects, boards, filters and
                    permissions natively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <LifeBuoy className="w-5 h-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Support & Resources
                  </h3>
                  <p className="text-sm text-slate-600">
                    Access detailed user guides, tutorials and expert support
                    from Achlys Solutions.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed italic border-l-4 border-indigo-200 pl-4">
              Reduce repeated effort, eliminate missing fields and make Jira
              issue creation consistent and efficient across teams.
            </p>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-10 h-14 rounded-2xl text-lg group"
            asChild
          >
            <a href={MARKETPLACE_URL} target="_blank" rel="noreferrer">
              Get It on Marketplace
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

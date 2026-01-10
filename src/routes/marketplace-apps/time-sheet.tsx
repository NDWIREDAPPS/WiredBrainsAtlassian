import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink, BookOpen, Clock, Calendar, GanttChartSquare, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageZoom } from '@/components/ui/image-zoom'

// External links used in this page
const MARKETPLACE_URL = "https://marketplace.atlassian.com/apps/797864630/timesheets-by-achlys-time-tracking-for-jira?tab=pricing"
const DOCS_URL = "https://achlys-apps.atlassian.net/wiki/external/ODk3NDRmMDE3NWFlNGFkZWFiOGEyNDI5MTcxZjg5ODI"

export const Route = createFileRoute('/marketplace-apps/time-sheet')({
  component: TimeSheetPage,
})

function TimeSheetPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-10 text-center space-y-8 max-w-5xl">
          <img src="/timesheets.png" alt="Timesheets App" className="w-20 h-20 mx-auto" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Advanced Time Tracking for Jira</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Track time with timers, calendar and timesheets
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From Jira issues to project-level reports in one app. Secure, cloud-native, and built on Atlassian Forge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 rounded-2xl text-lg group" asChild>
              <a href={MARKETPLACE_URL} target="_blank" rel="noreferrer">
                View on Marketplace
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8 h-14 rounded-2xl text-lg border-slate-200 hover:bg-slate-50 group" asChild>
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

        {/* Feature 1: Visual Reports */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <GanttChartSquare className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Turn Jira worklogs into visual insights
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Get instant visibility into time spent across projects, users, and issue types. Powerful dashboards, charts, and tables help teams analyze effort, track progress, and make data-driven decisions directly inside Jira.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Real-time project dashboards</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Custom charts and matrix tables</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Filter by user, issue type, or project</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              <ImageZoom
                src="/timehsheet-app/visual-reports-time-analytics.jpg"
                alt="Visual Reports & Time Analytics"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Calendar View (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Calendar View for Planning & Logging
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              View and manage worklogs in a clean calendar layout. Log time, review effort, and track daily totals per user with timezone support, filters, and quick actions for faster planning.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Drag-and-drop worklog management</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Daily and weekly total summaries</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Full timezone support for global teams</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              <ImageZoom
                src="/timehsheet-app/calender-view-for-planning-logging.jpg"
                alt="Calendar View"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 3: Timeline View */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Timeline View for Projects and Users
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Analyze time spent across projects, issues, and users in a powerful timeline view. Break down effort by day, week, or month, apply filters, and instantly spot workload distribution and trends.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Spot workload distribution instantly</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Group by users or projects</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Identify bottleneck trends over time</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              <ImageZoom
                src="/timehsheet-app/timeline-view-for-projects-and-users.jpg"
                alt="Timeline View"
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
            <span className="w-1.5 h-8 bg-purple-600 rounded-full" />
            More Details
          </h2>
          <div className="space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              Introducing <strong className="text-slate-900">Timesheets by Achlys</strong>, a full time-tracking and reporting solution for Jira. It includes an issue timer panel, a global timer board, a calendar view with drag-and-drop worklogs, a classic grid-style timesheet view, and a timeline view for project and team analysis.
            </p>
            <p className="text-lg leading-relaxed">
              Project dashboards provide charts and metrics per project, while the reports section offers matrix tables and grouped bar charts with saved filters. Users can log, edit, delete and move worklogs from multiple views, and export timesheets to CSV and Excel.
            </p>
            <p className="text-lg leading-relaxed italic border-l-4 border-purple-200 pl-4">
              This version targets Jira teams that need accurate time tracking, visibility into worklogs, and simple reporting without leaving Jira.
            </p>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-10 h-14 rounded-2xl text-lg group" asChild>
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



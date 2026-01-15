import { createFileRoute } from '@tanstack/react-router'
import {
  ExternalLink,
  BookOpen,
  Timer,
  Settings,
  CheckCircle2,
  Clock,
  Users,
  Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ImageZoom } from '@/components/ui/image-zoom'

// External links used in this page
const MARKETPLACE_URL =
  'https://marketplace.atlassian.com/apps/1233876/timer?hosting=cloud&tab=overview'
const DOCS_URL =
  'https://achlys.atlassian.net/wiki/spaces/General/pages/7274512/Documentation'

export const Route = createFileRoute('/marketplace-apps/timer')({
  head: () => ({
    meta: [
      { title: 'Timer App for Jira | Achlys Solutions' },
      {
        name: 'description',
        content:
          'Track time effortlessly with a simple timer in Jira. Start, pause and log worklogs directly from any issue with the Timer app by Achlys Solutions.',
      },
      {
        property: 'og:title',
        content: 'Timer App for Jira | Achlys Solutions',
      },
      {
        property: 'og:description',
        content:
          'Track time effortlessly with a simple timer in Jira. Start, pause and log worklogs directly from any issue.',
      },
      {
        property: 'og:url',
        content: 'https://achlyssolutions.netlify.app/marketplace-apps/timer',
      },
    ],
  }),
  component: TimerAppPage,
})

function TimerAppPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-10 text-center space-y-8 max-w-5xl">
          <img src="/timer.png" alt="Timer App" className="w-20 h-20 mx-auto" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
            <Timer className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Simple Time Tracking for Jira
            </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            Track time effortlessly with a simple timer in Jira
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Time App helps organizations manage and plan resources by providing
            essential features that minimize cost, improve transparency and
            build trust across your team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 rounded-2xl text-lg group"
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
              className="px-8 h-14 rounded-2xl text-lg border-slate-200 hover:bg-slate-50 group"
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
        {/* Feature 1: Issue Timer Panel */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              One-click timer on every Jira issue
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Start, pause and log time directly from any Jira issue with a
              simple timer panel. Track elapsed time in real-time and log
              worklogs with a single click when you're done.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Start, pause, resume and reset timer</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Real-time elapsed time display</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Log worklogs instantly to Jira</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              <ImageZoom
                src="/timer/timer-2.jpg"
                alt="Timer Panel on Jira Issue"
                className="rounded-2xl"
                zoomLevel={2.5}
                lensSize={220}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Admin Configuration (Reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              Configure timer access per project
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Admins can easily enable or disable the Work Log Timer for
              individual projects from a clean configuration page. Control
              exactly where time tracking is available across your Jira
              instance.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Enable or disable per project</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Search and filter projects easily</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Simple, intuitive admin interface</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white p-2">
              <ImageZoom
                src="/timer/timer-1.jpg"
                alt="Project Configuration Admin Page"
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
            <span className="w-1.5 h-8 bg-blue-600 rounded-full" />
            More Details
          </h2>
          <div className="space-y-6 text-slate-600">
            <p className="text-lg leading-relaxed">
              <strong className="text-slate-900">Time App</strong> helps
              organizations manage and plan resources by providing essential set
              of features that help you minimize cost for your organization.
              Time App helps provide more transparency, better accountability,
              project management and helps build trust and better communication
              across different levels of organization.
            </p>

            {/* Key Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Timer className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Timer to track time
                  </h3>
                  <p className="text-sm text-slate-600">
                    Track time spent per issue with a simple, intuitive timer
                    panel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center shrink-0">
                  <Settings className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Admin Configuration
                  </h3>
                  <p className="text-sm text-slate-600">
                    Configure features per project from a clean admin page.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Better Accountability
                  </h3>
                  <p className="text-sm text-slate-600">
                    Improve transparency and communication across teams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Build Trust</h3>
                  <p className="text-sm text-slate-600">
                    Create better communication across different levels of
                    organization.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed italic border-l-4 border-blue-200 pl-4">
              If you're looking for a way to improve your team's productivity
              and make better use of your time, consider giving Time App a try.
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
              View App on Marketplace
              <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

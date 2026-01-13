import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Mail, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitContactLead } from '@/server/contact'

export function ContactSection() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError(null)
        setIsLoading(true)

        try {
            const res = await submitContactLead({ data: { name, email } })
            setSuccess(res.message)
            setIsSubmitted(true)
            setName('')
            setEmail('')
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact-section" className="container mx-auto px-4 md:px-10">
            <div className="rounded-3xl bg-purple-50 border border-purple-100 p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Left Side - Contact Info */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 mb-6">
                            <Mail className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-purple-700">Stay Connected</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Drop your details and we'll reach out to discuss how we can help transform your business.
                        </p>
                    </div>

                    {/* Right Side - Email Input */}
                    <div className="flex-1 w-full max-w-md">
                        {isSubmitted ? (
                            <div className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                                <span className="text-lg font-medium text-emerald-700">{success}</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {error && (
                                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-200">
                                        <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                                        <span className="text-sm font-medium text-red-700">{error}</span>
                                    </div>
                                )}
                                <div className="relative">
                                    <Input
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        disabled={isLoading}
                                        className="h-14 pl-5 pr-4 text-base bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus-visible:border-purple-500 focus-visible:ring-purple-500/30 disabled:opacity-50"
                                    />
                                </div>
                                <div className="relative">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        disabled={isLoading}
                                        className="h-14 pl-5 pr-4 text-base bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus-visible:border-purple-500 focus-visible:ring-purple-500/30 disabled:opacity-50"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                    className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-lg font-medium group disabled:opacity-70"
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Connect
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

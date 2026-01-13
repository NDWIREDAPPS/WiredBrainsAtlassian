/**
 * Simple in-memory rate limiter for server functions
 * Note: State resets on cold starts (serverless), but still protects against rapid-fire attacks
 */

interface RateLimitEntry {
    count: number
    resetTime: number
}

// In-memory store (per instance)
const rateLimitStore = new Map<string, RateLimitEntry>()

// Cleanup old entries periodically
const CLEANUP_INTERVAL = 60 * 1000 // 1 minute
let lastCleanup = Date.now()

function cleanupExpiredEntries() {
    const now = Date.now()
    if (now - lastCleanup < CLEANUP_INTERVAL) return

    for (const [key, entry] of rateLimitStore.entries()) {
        if (now > entry.resetTime) {
            rateLimitStore.delete(key)
        }
    }
    lastCleanup = now
}

export interface RateLimitConfig {
    /** Maximum requests allowed in the window */
    maxRequests: number
    /** Time window in seconds */
    windowSeconds: number
}

export interface RateLimitResult {
    allowed: boolean
    remaining: number
    resetInSeconds: number
}

/**
 * Check if a request is allowed based on identifier (usually IP)
 */
export function checkRateLimit(
    identifier: string,
    config: RateLimitConfig
): RateLimitResult {
    cleanupExpiredEntries()

    const now = Date.now()
    const windowMs = config.windowSeconds * 1000
    const key = `ratelimit:${identifier}`

    let entry = rateLimitStore.get(key)

    // If no entry or window expired, create new entry
    if (!entry || now > entry.resetTime) {
        entry = {
            count: 1,
            resetTime: now + windowMs,
        }
        rateLimitStore.set(key, entry)
        return {
            allowed: true,
            remaining: config.maxRequests - 1,
            resetInSeconds: config.windowSeconds,
        }
    }

    // Increment count
    entry.count++

    // Check if over limit
    if (entry.count > config.maxRequests) {
        return {
            allowed: false,
            remaining: 0,
            resetInSeconds: Math.ceil((entry.resetTime - now) / 1000),
        }
    }

    return {
        allowed: true,
        remaining: config.maxRequests - entry.count,
        resetInSeconds: Math.ceil((entry.resetTime - now) / 1000),
    }
}

// Default config for contact form: 5 submissions per 5 minutes
export const CONTACT_FORM_RATE_LIMIT: RateLimitConfig = {
    maxRequests: 5,
    windowSeconds: 300, // 5 minutes
}

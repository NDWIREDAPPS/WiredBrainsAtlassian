import { drizzle as drizzleSqlite } from 'drizzle-orm/better-sqlite3'
import { drizzle as drizzleLibsql } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import Database from 'better-sqlite3'

import * as schema from './schema'

// Determine if we should use local SQLite or Turso
const useLocalDb = process.env.USE_LOCAL_DB === 'true'

function createDatabase() {
    if (useLocalDb) {
        // Local development: use better-sqlite3 with local file
        const sqlite = new Database(process.env.DATABASE_URL || './dev.db')
        return drizzleSqlite(sqlite, { schema })
    } else {
        // Production: use Turso (libsql)
        const client = createClient({
            url: process.env.TURSO_DATABASE_URL!,
            authToken: process.env.TURSO_AUTH_TOKEN,
        })
        return drizzleLibsql(client, { schema })
    }
}

export const db = createDatabase()

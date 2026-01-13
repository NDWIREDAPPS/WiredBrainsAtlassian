import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: ['.env.local', '.env'] })

// Determine if using local SQLite or Turso
const useLocalDb = process.env.USE_LOCAL_DB === 'true'

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: useLocalDb ? 'sqlite' : 'turso',
  dbCredentials: useLocalDb
    ? {
      url: process.env.DATABASE_URL || './dev.db',
    }
    : {
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN,
    },
})

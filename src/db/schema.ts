import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// Contact leads table for storing contact form submissions
export const contactLeads = sqliteTable('contact_leads', {
  id: integer({ mode: 'number' }).primaryKey({
    autoIncrement: true,
  }),
  name: text().notNull(),
  email: text().notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  createdBy: text('created_by').default('website_form'),
  isDeleted: integer('is_deleted', { mode: 'boolean' }).notNull().default(false),
})


import { User as SupabaseUser } from '@supabase/supabase-js';

// Re-export the Supabase User type
export type User = SupabaseUser;

// If you need to extend the User type with additional fields, you can do it like this:
// export interface ExtendedUser extends User {
//   // Add your custom fields here
//   // Example:
//   // customField?: string;
// } 
import { createClient } from '@supabase/supabase-js';

// Variables de entorno
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

// Validar que las variables estén configuradas
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Faltan las variables de entorno para Supabase.');
}

// Crear cliente de Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

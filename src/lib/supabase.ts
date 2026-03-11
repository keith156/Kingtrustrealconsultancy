import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyqsswxadbsssgijxcfi.supabase.co';
const supabaseKey = 'sb_publishable_VS5yBHtTAq2OeUrLb-54Tg_7akikCeO';

export const supabase = createClient(supabaseUrl, supabaseKey);

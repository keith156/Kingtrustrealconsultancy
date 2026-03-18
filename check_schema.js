import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyqsswxadbsssgijxcfi.supabase.co';
const supabaseKey = 'sb_publishable_VS5yBHtTAq2OeUrLb-54Tg_7akikCeO';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  const { data, error } = await supabase.from('vehicles').select('*').limit(1);
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  if (data && data.length > 0) {
    console.log(JSON.stringify(data[0], null, 2));
  } else {
    console.log('No data found in vehicles table.');
  }
}

checkSchema();

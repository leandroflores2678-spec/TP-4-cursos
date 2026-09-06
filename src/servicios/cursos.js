import { supabase } from '../supabaseclient';

export async function obtenerCursos() {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .order('nombre');
  if (error) throw error;
  return data;
}

export async function obtenerCursoPorId(id) {
  const { data, error } = await supabase
    .from('cursos')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
}

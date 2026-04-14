import { NextResponse } from 'next/server';

const SHEET_ID = '1l2nuu7OIJ22yH6_9LI0YN_CcXYr9BvI5R3nuAggkXVY';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

function parseCsv(raw: string): string[][] {
  return raw
    .trim()
    .split('\n')
    .map(row =>
      row.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(cell =>
        cell.replace(/^"|"$/g, '').trim()
      )
    );
}

export async function GET() {
  try {
    const res = await fetch(SHEET_URL, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error('fetch failed');

    const text = await res.text();
    const rows = parseCsv(text);

    if (rows.length < 2) {
      return NextResponse.json({ platos: [], fecha: '', nota: '' });
    }

    const fecha = rows[1]?.[4] ?? '';
    const nota  = rows[1]?.[3] ?? '';

    const platos = rows.slice(1).map(r => ({
      tipo:   r[0] ?? '',
      nombre: r[1] ?? '',
      precio: r[2] ?? '',
    })).filter(p => p.nombre);

    return NextResponse.json({ platos, fecha, nota });
  } catch {
    return NextResponse.json({ platos: [], fecha: '', nota: '' }, { status: 500 });
  }
}

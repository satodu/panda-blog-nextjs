import { PageProps } from '@/data/@types/PageInterface';

export default function Page({ params }: PageProps) {
  return (
    <>
      <h1>{params.slug}</h1>
      <br />
      <p>Mussum Ipsum, cacilds vidis litro abertis.  Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Leite de capivaris, leite de mula manquis sem cabeça.</p>
    </>
  );
}

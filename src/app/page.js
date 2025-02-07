import Link from "next/link";
export default function Home() {
 return (
 <div>
 <Link href="/repartidores" className="block">REPATIDORES</Link>
 <Link href="/peddios" className="block">PEDIDOS</Link>
 <Link href="/pizzas" className="block">PIZZAS</Link>
 </div>
 );
}
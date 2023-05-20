import { component$ } from '@builder.io/qwik';
import './navbar.scss';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {


  return (
    <nav class={'navbar'}>
      <Link href='/'>Home</Link>
      <Link href='/about/'>Over</Link>
    </nav>
  );
});

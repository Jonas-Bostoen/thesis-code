import { component$ } from '@builder.io/qwik';

export const GoogleMap = component$((props: { name: String }) => {
  const map = new Map()
    .set("Sint-Michiels", <iframe src='https://maps.google.com/maps?q=51.05311004768356,3.719727740000235&hl=es;z=14&amp;output=embed' />)
    .set("Sint-Pietersplein", <iframe src='https://maps.google.com/maps?q=51.04202834988112,3.7259818626205483&hl=es;z=14&amp;output=embed' />)
    .set("Ramen", <iframe src='https://maps.google.com/maps?q=51.05532,3.71653&hl=es;z=14&amp;output=embed' />)
    .set("Tolhuis", <iframe src='https://maps.google.com/maps?q=51.0637023559265,3.724968367281895&hl=es;z=14&amp;output=embed' />)
    .set("Ledeberg", <iframe src='https://maps.google.com/maps?q=51.03634169048174,3.738571094371151&hl=es;z=14&amp;output=embed' />)
    .set("B-Park Gent Sint-Pieters", <iframe src='https://maps.google.com/maps?q=51.0369,3.70502&hl=es;z=14&amp;output=embed' />)
    .set("B-Park Dampoort", <iframe src='https://maps.google.com/maps?q=51.0561,3.73956&hl=es;z=14&amp;output=embed' />)
    .set("Savaanstraat", <iframe src='https://maps.google.com/maps?q=51.04877362543108,3.7234627726667133&hl=es;z=14&amp;output=embed' />)
    .set("Reep", <iframe src='https://maps.google.com/maps?q=51.05215838523151,3.7298928896398924&hl=es;z=14&amp;output=embed' />)
    .set("Vrijdagmarkt", <iframe src='https://maps.google.com/maps?q=51.05713405953412,3.726071777876147&hl=es;z=14&amp;output=embed' />)
    .set("Getouw", <iframe src='https://maps.google.com/maps?q=51.072569883800206,3.7148313576713052&hl=es;z=14&amp;output=embed' />)
    .set("Dok noord", <iframe src='https://maps.google.com/maps?q=51.065684935819604,3.7328389913720565&hl=es;z=14&amp;output=embed' />)

  return (
    <div class='map'>
      {map.get(props.name)}
    </div>
  );
});
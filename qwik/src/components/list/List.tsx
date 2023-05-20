import { component$, $ } from '@builder.io/qwik';
import './list.scss'

export const List = component$((props: { data: any, setActive: CallableFunction }) => {

  // eslint-disable-next-line qwik/valid-lexical-scope
  const setDetail = $((index: Number) => props.setActive(index));

  return (
    <aside>
      <ul class={'list'}>
        {Object.values(props.data).map((data: any, index: Number) => {

          return (
            // eslint-disable-next-line qwik/valid-lexical-scope
            <li onClick$={() => setDetail(index)} key={data.recordid}>
              <div>{data.fields.name}</div>
              <div>{data.fields.availablecapacity} /  {data.fields.totalcapacity} vrij</div>
            </li>
          );
        })}
      </ul>
    </aside>
  )
});
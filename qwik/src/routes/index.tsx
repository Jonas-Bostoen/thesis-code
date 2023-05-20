import { Resource, component$, useResource$, useSignal, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { About } from '~/components/about/About';
import { Detail } from '~/components/detail/Detail';
import { List } from '~/components/list/List';
import Navbar from '~/components/navbar/Navbar';

export default component$(() => {

  const active = useSignal<number>(0);

  const fetchData = useResource$<[]>(({ track, cleanup }) => {
    const controller = new AbortController();
    track(() => controller);
    cleanup(() => controller.abort());
    return getData(controller);
  })

  const setActive = $((index: number) => {
    active.value = index;
  });

  return (
    <>
      <Navbar />

      <main>
        <About />

        <Resource
          value={fetchData}
          onPending={() => <div>Loading...</div>}
          onRejected={(error) => <div>{error.toString()}</div>}
          onResolved={(data: []) => {
            return <>
              <List
                data={data}
                setActive={setActive}
              />
              <Detail
                data={data[active.value]}
                nextParking={$(() => {
                  if (active.value < data.length - 1) {
                    active.value++;
                  } else {
                    active.value = 0;
                  }
                })}
                previousParking={$(() => {
                  if (active.value > 0) {
                    active.value--;
                  } else {
                    active.value = data.length - 1;
                  }
                })}
              />
            </>;
          }
          }
        />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};

export async function getData(controller?: AbortController): Promise<[]> {
  const res = await fetch('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time', {
    signal: controller?.signal,
  });
  const json = await res.json();
  return json.records;
}
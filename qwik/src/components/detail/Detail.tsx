import type { QRL } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
// import { GoogleMap } from '../googleMap/GoogleMap';
import { ModalBox } from '../modalBox/ModalBox';
import './detail.scss';

export const Detail = component$((props: { data: any; nextParking: QRL<() => void>; previousParking: QRL<() => void> }) => {
	const modalState = useSignal<boolean>(false);

	return (
		<section class='detail'>
			{props.data && (
				<>
					<header>
						<h1>{props.data.fields.name}</h1>
						<div class='buttons'>
							<button onClick$={props.previousParking}>
								<i class='fas fa-arrow-alt-circle-left'></i>
							</button>
							<button onClick$={props.nextParking}>
								<i class='fas fa-arrow-alt-circle-right'></i>
							</button>
							<button onClick$={() => (modalState.value = true)}>
								<i class='fas fa-info-circle'></i>
							</button>
						</div>
						<div class='details'>
							<span>laatst geupdate: {new Date(props.data.fields.lastupdate).toLocaleTimeString()}</span>
							<button>
								<i class='fas fa-arrows-rotate' />
							</button>
						</div>
					</header>

					{/* <GoogleMap name={props.data.fields.name} /> */}

					<ModalBox title={props.data.fields.name} modalState={modalState} data={props.data} nextParking={props.nextParking} previousParking={props.previousParking} />
				</>
			)}
			{!props.data && <span>Geen data beschikbaar</span>}
		</section>
	);
});

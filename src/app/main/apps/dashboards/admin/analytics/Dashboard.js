import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from './store/actions';
import reducer from './store/reducers';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


const Map = ReactMapboxGl({
	accessToken:
	  'pk.eyJ1IjoidXR0YW0yNzc3IiwiYSI6ImNrNGpqbTU0azF2eXYzbW5hd2J5czlnNXgifQ.Clhn_QSVh9I-NCLqtXwyew'
  });

const zoom = [8]

function Dashboard() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(Actions.getWidgets());
	}, [dispatch]);

	return (
		<div className="w-full">
			<Map
			  	zoom={zoom}
				style={`mapbox://styles/mapbox/streets-v8`}
				containerStyle={{
					height: '100vh',
					width: '100vw'
				}}
				center={[140.40, 35.41]}
				>
				<Marker
					coordinates={[140, 35]}
					anchor="bottom"
					onClick={() => {
						console.log("redirect to specific project")
					  }}>
						<FaMapMarkerAlt size={40} />
				</Marker>
				<Marker
					coordinates={[142, 36]}
					anchor="bottom"
					onClick={() => {
						console.log("redirect to specific project")
					  }}>
						<FaMapMarkerAlt size={40} />
				</Marker>
			</Map>
	</div>
	);
}

export default withReducer('dashboard', reducer)(Dashboard);
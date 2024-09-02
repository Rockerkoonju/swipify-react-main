/** @format */

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Card.css';

// import TinderCard from 'react-tinder-card'
// import trackSearch from '../../api/trackSearch';

function Card({ tracks }) {
	return (
		<>
			{tracks.map((track) => (
				<div key={track.trackId}>
					<h2>{track.name}</h2>
					<p>Artists: {track.artists}</p>
					<p>Popularity: {track.popularity}</p>
					{/* <a href={track.previewUrl}>Preview</a> */}
					<audio controls>
						<source src={track.previewUrl} type='audio/ogg' />
						<source src={track.previewUrl} type='audio/mpeg' />
					</audio>
				</div>
			))}
		</>
	);
}

export default Card;

/** @format */


import axios from 'axios';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { useState, useEffect } from 'react';
export default function useTrackSearch() {
	const [data, setData] = useState([]);

	const queryName = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	const randomQuery = Math.floor(Math.random() * queryName.length);
	const trackIndex = Math.floor(Math.random() * 1000);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('https://api.spotify.com/v1/search', {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_ACCESS}`,
					},
					params: {
						q: `${queryName[randomQuery]}`,
						offset: trackIndex,
						type: 'track',
						limit: 1,
					},
				});

				const resp = response.data.tracks.items;
				const trackResponse = resp.map((track) => ({
					name: track.name,
					artists: track.artists.map((artist) => artist.name).join(', '),
					trackId: track.id,
					explicit: track.explicit,
					popularity: track.popularity,
					previewUrl: track.preview_url,
					// imagesUrl: track.album.images.map(image => image.url),
				}));
				console.log(trackResponse);

				setData(trackResponse);
			} catch (error) {
				console.error('Error fetching tracks:', error.message);
				return [];
			}
		}

		fetchData();
	}, []);
    
	return { data };
}